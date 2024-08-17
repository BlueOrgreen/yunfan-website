import Link from 'next/link';
import { BsTencentQq as QqIcon, BsWechat as WechatIcon } from 'react-icons/bs';

const BookACall = ({ calMeetingUrl }: { calMeetingUrl: string }) => {
  return (
    <div className='space-y-5 pb-2'>
      <h3 className='text-lg font-medium'>通过社交媒体与我联系</h3>
      <Link
        href={calMeetingUrl}
        target='_blank'
        data-aos-duration='1000'
        // className='flex gap-2 hover:gap-3
        // transition-all duration-300 items-center t
        // ext-neutral-600 dark:text-neutral-400
        // hover:text-neutral-700 hover:dark:text-neutral-300
        //  mt-6 border border-neutral-400 hover:border-neutral-500
        // w-fit px-4 py-2.5 rounded-lg dark:border-neutral-600
        // hover:dark:border-neutral-300 dark:bg-neutral-900'

        className='flex flex-col space-y-5   rounded-2xl py-5 px-6 cursor-pointer hover:scale-[101%] hover:shadow-sm transition-all duration-300 border border-gray-300 dark:border-neutral-500 '
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
          <div className='p-3 border dark:border-neutral-700 rounded-full'>
            <WechatIcon size={22} className='!text-green-600  ' />
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
            <QqIcon
              size={22}
              className='dark:text-sky-400 border-neutral-400'
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookACall;
