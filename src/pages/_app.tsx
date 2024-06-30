import '@/styles/globals.css';
import AOS from 'aos';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
