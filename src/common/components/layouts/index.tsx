import { ReactNode } from 'react';
import { useTheme } from 'next-themes';
import useHasMounted from '@/common/hooks/useHasMounted';
import { useWindowSize } from 'usehooks-ts';
import { useRouter } from 'next/router';
import { featureSwich } from '@/contents/siteMetadata';
import HeaderTop from './header/HeaderTop';
import HeaderSidebar from './header/HeaderSidebar';
import TopBar from '../elements/TopBar';
import clsx from 'clsx';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { resolvedTheme } = useTheme();
  const hasMounted = useHasMounted();
  const { width } = useWindowSize();
  const isMobile = width < 480;
  const router = useRouter();
  const pageName = router.pathname.split('/')[1];
  const isDarkTheme =
    hasMounted && (resolvedTheme === 'dark' || resolvedTheme === 'system');

  const isFullPageHeader = pageName === 'playground' || pageName === 'blog';

  return (
    <>
      {featureSwich.topBanner && <TopBar />}
      <div
        className={clsx(
          'max-w-6xl mx-auto lg:px-8',
          isDarkTheme ? 'dark:text-darkText' : ''
        )}
      >
        {isFullPageHeader ? (
          <div className='flex flex-col xl:pb-8'>
            <HeaderTop />
            <main className='transition-all duration-300'>{children}</main>
          </div>
        ) : (
          <div className='flex flex-col lg:flex-row lg:gap-5 lg:py-4 xl:pb-8'>
            <HeaderSidebar />
            <main className='lg:w-4/5 max-w-[854px] transition-all duration-300'>
              {children}
            </main>
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;
