import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import WordsAnimation from '../components/animations/WordsAnimation';
import Button from '../components/common/Button';
import Quote from '../components/common/Quote';
import ArrowSVG from '../components/common/svg/Arrow';

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
                    <div className="w-1/3  p-20">
                        <WordsAnimation text="Turn your" replay={true} />
                        <WordsAnimation text="IT idea into" replay={true} delay={0.4} />
                        <WordsAnimation text="reality." replay={true} delay={1.4} />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.4, duration: 0.5 }}
                        >
                            <Quote classname="py-10">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </Quote>
                            <Button text="learn more">
                                <div className="absolute h-auto w-52 -right-64 -top-14">
                                    <ArrowSVG delay={5} />
                                </div>
                                <div className="absolute h-auto w-52 scale-x-[-1] -rotate-30 -left-52 top-10">
                                    <ArrowSVG delay={8} />
                                </div>
                            </Button>
                        </motion.div>
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
