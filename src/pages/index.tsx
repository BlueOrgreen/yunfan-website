import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import { getCollection } from '@/common/libs/mdx';
import { BlogItemProps } from '@/common/types/blog';
import { siteMetadata } from '@/contents/siteMetadata';
import Home from '@/modules/home';

const HomePage: NextPage<{ blogList: BlogItemProps[] }> = ({ blogList }) => {
  return (
    <>
      <NextSeo title={`${siteMetadata.author} - 个人网站`} />
      <Container data-aos='fade-up'>
        <Home blogList={blogList} />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogList = await getCollection('blog');

  return {
    props: {
      blogList,
    },
  };
};

export default HomePage;
