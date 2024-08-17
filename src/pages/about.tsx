import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { getEntry } from '@/common/libs/mdx';
import { CareerProps } from '@/common/types/careers';
import { EducationProps } from '@/common/types/education';
import { siteMetadata } from '@/contents/siteMetadata';
import About from '@/modules/about';
const PAGE_TITLE = '关于';
const PAGE_DESCRIPTION = '关于我的一份自述 或许不重要但也聊胜于无';

interface About {
  content: string;
  frontMatter: {
    resume: string;
    education: EducationProps[];
    career: CareerProps[];
  };
}

const AboutPage: NextPage<{ about: About }> = ({ about }) => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - ${siteMetadata.author}`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <About about={about} />
      </Container>
    </>
  );
};

export default AboutPage;

export const getStaticProps: GetStaticProps = async () => {
  const about = await getEntry('', 'about');
  console.log('about===>', about);

  return {
    props: {
      about: about,
    },
  };
};
