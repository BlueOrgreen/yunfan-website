import Breakline from '@/common/components/elements/Breakline';
import Introduction from './Introduction';
import Services from './Services';
import { BlogItemProps } from '@/common/types/blog';
import BlogPreview from './BlogPreview';

const Home = ({ blogList }: { blogList: BlogItemProps[] }) => {
  return (
    <>
      <Introduction />
      <Breakline className='mt-8 mb-7' />
      <BlogPreview blogList={blogList} />
      <Breakline className='my-8' />
      <Services />
    </>
  );
};

export default Home;
