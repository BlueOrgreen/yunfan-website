import { author } from '@/contents/siteMetadata';
import SectionHeading from '@/common/components/elements/SectionHeading';
import Card from '@/common/components/elements/Card';
import { BiRocket as RocketIcon } from 'react-icons/bi';
import Link from 'next/link';
import Button from '@/common/components/elements/Button';

const Services = () => {
  return (
    <section className='space-y-5'>
      <div className='space-y-3'>
        <SectionHeading title='千里之行始于足下' />
        <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300'>
          {author.description}
        </p>
      </div>
      <Card className='p-8 bg-neutral-100 border dark:border-none rounded-xl space-y-4'>
        <div className='flex gap-2 items-center'>
          <RocketIcon size={24} />
          <h3 className='text-xl font-medium'> 欢迎同我交流的伙伴! 👏</h3>
        </div>
        <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300 pl-2'>
          {author.workTogether}
        </p>
        <Link href='/contact' className='inline-block'>
          <Button data-umami-event='Click Contact Button'>与我联系</Button>
        </Link>
      </Card>
    </section>
  );
};

export default Services;
