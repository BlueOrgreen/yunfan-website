import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import { siteMetadata } from '@/common/contents/siteMetadata';
import { getCollection } from '@/common/libs/mdx';
import { BlogItemProps } from '@/common/types/blog';
import BlogListNew from '@/modules/blog';

const PAGE_TITLE = '博客';

type ContentPageProps = {
  initialDisplayPosts: BlogItemProps[];
  posts: BlogItemProps[];
  pagination: {
    count: number;
    currentPage: number;
    totalPages: number;
  };
};

const BlogPage: NextPage<ContentPageProps> = (props) => {
  const { posts, initialDisplayPosts, pagination } = props;
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - ${siteMetadata.author}`} />
      <Container className='xl:!-mt-5' data-aos='fade-up'>
        <BlogListNew
          posts={posts}
          initialDisplayPosts={initialDisplayPosts}
          pagination={pagination}
        />
      </Container>
    </>
  );
};

export default BlogPage;

export async function getStaticProps() {
  const posts = await getCollection('blog');
  const pageNumber = 1;
  const pageSize = siteMetadata.postPageSize || 10;

  const initialDisplayPosts = posts.slice(
    pageSize * (pageNumber - 1),
    pageSize * pageNumber
  );
  const pagination = {
    count: posts.length,
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / pageSize),
  };

  return {
    props: {
      posts,
      initialDisplayPosts: posts,
      pagination,
    },
  };
}
