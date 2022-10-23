import type { NextPage } from 'next';
import Head from 'next/head';
import Button from '../components/common/Button';
import Quote from '../components/common/Quote';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Codelance GmbH</title>
                <meta name="description" content="Codelance GmbH" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="flex">
                    <div className="w-1/2">
                        <h1>Freelancer</h1>
                        <Quote classname="py-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam
                        </Quote>
                        <Button text="learn more" />
                    </div>
                    <div>bild</div>
                </div>
            </main>
        </div>
    );
};

export default Home;
