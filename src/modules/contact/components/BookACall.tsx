import Link from 'next/link';
import { BsWechat as WechatIcon, BsTencentQq as QqIcon } from 'react-icons/bs';

const BookACall = ({ calMeetingUrl }: { calMeetingUrl: string }) => {
  return (
    <div className='space-y-5 pb-2'>
      <h3 className='text-lg font-medium'>通过社交媒体与我联系</h3>
      <Link
        href={calMeetingUrl}
        target='_blank'
        data-aos-duration='1000'
        className='flex flex-col space-y-5 bg-gradient-to-tr bg-white dark:from-teal-950 dark:to-teal-800 dark:text-white rounded-2xl py-5 px-6 cursor-pointer hover:scale-[101%] hover:shadow-sm transition-all duration-300 border dark:border-teal-500'
      >
        <div className='flex gap-5 items-start justify-between'>
          <div className='space-y-1'>
            <div className='flex items-center gap-2 text-base md:text-lg font-medium'>
              <span>微信号</span>
            </div>
            <p className='dark:text-neutral-300 text-sm md:text-base'>
              CYF8683
            </p>
          </div>
          <div className='p-3 !text-green-600 border  dark:border-neutral-700 rounded-full'>
            <WechatIcon size={22} />
          </div>
        </div>
        <div className='flex gap-5 items-start justify-between'>
          <div className='space-y-1'>
            <div className='flex items-center gap-2 text-base md:text-lg font-medium'>
              <span>QQ号</span>
            </div>
            <p className='dark:text-neutral-300 text-sm md:text-base'>
              1936341390
            </p>
          </div>
          <div className='p-3 pl-4 !text-neutral-600 border  dark:border-neutral-700 rounded-full'>
            <QqIcon size={22} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookACall;
