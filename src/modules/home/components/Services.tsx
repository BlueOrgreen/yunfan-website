import Link from 'next/link';
import { BiRocket as RocketIcon } from 'react-icons/bi';

import Card from '@/common/components/elements/Card';
import SectionHeading from '@/common/components/elements/SectionHeading';
import { author } from '@/contents/siteMetadata';

const Services = () => {
  return (
    <section className='space-y-5'>
      <div className='space-y-3'>
        <SectionHeading title='千里之行始于足下' />
        <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300'>
          {author.description}
        </p>
      </div>
      <Card className='p-8  border dark:border-none rounded-xl space-y-4'>
        <div className='flex gap-2 items-center'>
          <RocketIcon size={24} />
          <h3 className='text-xl font-medium'> 欢迎同我交流的伙伴! 👏</h3>
        </div>
        <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300 pl-2'>
          {author.workTogether}
        </p>
        <Link
          href='/contact'
          data-umami-event='Click Contact Button'
          className='flex gap-2 hover:gap-3 transition-all duration-300 items-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-700 hover:dark:text-neutral-300 mt-6 border border-neutral-400 hover:border-neutral-500 w-fit px-4 py-2.5 rounded-lg dark:border-neutral-600 hover:dark:border-neutral-300 '
        >
          <span>与我 联系</span>
        </Link>
      </Card>
    </section>
  );
};

export default Services;
