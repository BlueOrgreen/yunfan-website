import AOS from 'aos';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import Layout from '@/common/components/layouts';
import '@/common/styles/globals.css';
import 'aos/dist/aos.css';

import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const ProgressBar = dynamic(
  () => import('src/common/components/elements/ProgressBar'),
  { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='dark'>
        <Layout>
          <ProgressBar />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
