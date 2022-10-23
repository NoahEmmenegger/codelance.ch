import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Head>
                <title>Codelance GmbH</title>
                <meta name="description" content="Codelance GmbH" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="p-10">{children}</main>
            <Footer />
        </div>
    );
}
