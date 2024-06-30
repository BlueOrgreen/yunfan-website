import Image from 'next/image';
import { GetStaticProps, NextPage } from 'next';
import { getCollection } from '@/common/libs/mdx';
import Container from '@/common/components/elements/Container';
import { siteMetadata } from '@/contents/siteMetadata';
import { BlogItemProps } from '@/common/types/blog';
import Home from '@/modules/home';
import { NextSeo } from 'next-seo';

const HomePage: NextPage<{ blogList: BlogItemProps[] }> = ({ blogList }) => {
  return (
    <>
      <NextSeo title={`${siteMetadata.author} - Personal Website`} />
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
