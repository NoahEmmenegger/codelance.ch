import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import nextI18NextConfig from '../../next-i18next.config';
import Layout from '../components/Layout';
import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
