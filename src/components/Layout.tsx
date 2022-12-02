import Head from 'next/head';
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className={`overflow-hidden ${isMenuOpen && 'max-h-screen'}`}>
            <Head>
                <title>Codelance GmbH</title>
                <meta name="description" content="Codelance GmbH" />
                <meta name="keywords" content="codelance baar, baar, zug, codelance, website, noah emmenegger" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="author" content="Noah Emmenegger" />
                <meta name="theme-color" content="#2C3359" />
                <meta property="og:image" content="/logo.svg" />
            </Head>
            <Header onMenuChange={setIsMenuOpen} />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
