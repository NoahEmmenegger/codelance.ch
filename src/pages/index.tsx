import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Codelance GmbH</title>
                <meta name="description" content="Codelance GmbH" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-red-400">
                <h1 className="text-red-700">Welcome to Codelance GmbH!</h1>
                <div>
                    <small>coming soon...</small>
                </div>
            </main>
        </div>
    );
};

export default Home;
