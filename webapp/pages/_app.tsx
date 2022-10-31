import '../styles/globals.css';

import { Layout } from '../packages/components/organisms/layout';
import { ForecastContextProvider } from '../packages/context/ForecastContext';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ForecastContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ForecastContextProvider>
  );
}
