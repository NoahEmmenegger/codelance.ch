import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`overflow-hidden`}>
            <Head>
                <title>Codelance GmbH</title>
                <meta name="description" content="Codelance GmbH" />
                <meta name="keywords" content="codelance baar, baar, zug, codelance, website, noah emmenegger" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="author" content="Noah Emmenegger" />
                <meta name="theme-color" content="#2C3359" />
                <meta property="og:image" content="/logo.svg" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
