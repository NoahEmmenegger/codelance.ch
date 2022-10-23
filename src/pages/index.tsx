import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/common/Button';
import Quote from '../components/common/Quote';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Codelance GmbH</title>
                <meta name="description" content="Codelance GmbH" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="flex">
                    <div className="w-1/3 h-[50vh] p-20">
                        <h1>Freelancer</h1>
                        <Quote classname="py-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam
                        </Quote>
                        <Button text="learn more" />
                    </div>
                    <div className="w-2/3 h-auto relative">
                        <Image src="/images/HomeImage.svg" layout="fill" alt="Freelancer coding a website" />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
