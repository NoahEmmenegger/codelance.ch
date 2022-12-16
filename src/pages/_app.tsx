import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { hotjar } from 'react-hotjar';
import nextI18NextConfig from '../../next-i18next.config';
import Layout from '../components/Layout';

import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        hotjar.initialize(3292241, 6);
    }, []);

    return (
        <Layout>
            <Component {...pageProps} />
            <Toaster position="bottom-center" reverseOrder={false} />
        </Layout>
    );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
