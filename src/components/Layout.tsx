import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`overflow-hidden`}>
            <Head>
                <title>Codelance GmbH</title>
                <meta property="og:title" content="Codelance GmbH" />
                <meta name="description" content="Codelance GmbH" />
                <meta property="og:description" content="Codelance GmbH" />
                <meta name="keywords" content="codelance baar, baar, zug, codelance, website, noah Emmenegger" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="author" content="Noah Emmenegger" />
                <meta name="theme-color" content="#2C3359" />
                <meta property="og:image" content="https://www.codelance.ch/images/HomeImage.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="Codelance GmbH" />
                <meta property="twitter:description" content="Codelance GmbH" />
                <meta property="twitter:image" content="https://www.codelance.ch/images/HomeImage.jpg" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
