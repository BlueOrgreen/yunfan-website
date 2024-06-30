import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import Container from '@/common/components/elements/Container';
import { getCollection } from '@/common/libs/mdx';
import PageHeading from '@/common/components/elements/PageHeading';
import { ProjectItemProps } from '@/common/types/projects';
import { siteMetadata } from '@/contents/siteMetadata';
import Projects from '@/modules/projects';

interface ProjectsPageProps {
  projects: ProjectItemProps[];
}

const pageTitle = '项目';
const pageDescription =
  '这几个我都是我以独立开发者所做的项目, 有开源也有私人的';

const ProjectsPage: NextPage<ProjectsPageProps> = ({ projects }) => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMore = () => setVisibleProjects((prev) => prev + 2);
  const hasMore = visibleProjects < projects.length;

  return (
    <>
      <NextSeo title={`${pageTitle} - ${siteMetadata.author}`} />
      <Container data-aos='fade-up'>
        <PageHeading title={pageTitle} description={pageDescription} />
        <Projects
          projects={projects.slice(0, visibleProjects)}
          loadMore={loadMore}
          hasMore={hasMore}
        />
      </Container>
    </>
  );
};

export default ProjectsPage;

export async function getStaticProps() {
  const collection = getCollection('project');
  const list = collection
    .filter((item) => item.frontMatter.is_show)
    .map((item) => item.frontMatter);

  return {
    props: {
      projects: list,
    },
    revalidate: 1,
  };
}
