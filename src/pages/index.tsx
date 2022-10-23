import type { NextPage } from 'next';
import Head from 'next/head';
import Button from '../components/common/Button';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Codelance GmbH</title>
                <meta name="description" content="Codelance GmbH" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Welcome to Codelance GmbH!</h1>
            </main>
            <Button />
        </div>
    );
};

export default Home;
