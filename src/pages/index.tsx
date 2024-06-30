import Image from 'next/image';
import { GetStaticProps } from 'next';

export default function Home(props: any) {
  console.log('Home Props===>', props);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className='bg-red-400'>Home</div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // const blogList = await getCollection('blog');
  const blogList = [
    { title: '标题1', body: '文章内容一' },
    { title: '标题2', body: '文章内容二' },
  ];

  return {
    props: {
      blogList,
    },
  };
};
