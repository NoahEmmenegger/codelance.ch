import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import WordsAnimation from '../components/animations/WordsAnimation';
import Button from '../components/common/Button';
import Quote from '../components/common/Quote';
import ArrowSVG from '../components/common/svg/Arrow';
import BlubSVG from '../components/common/svg/Blub';
import CircleSVG from '../components/common/svg/Circle';
import Wave1 from '../components/common/svg/Wave1';
import Wave2 from '../components/common/svg/Wave2';

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
                    <div className="w-1/3  p-28">
                        <WordsAnimation text="Turn your" replay={true} />
                        <WordsAnimation text="IT idea into" replay={true} delay={0.4} />
                        <WordsAnimation text="reality." replay={true} delay={1.4} />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.4, duration: 0.5 }}
                        >
                            <Quote classname="py-10">
                                We develop and design your individual website / app according and finding the best
                                solution for you and your company. We consider your preferences and discuss them with
                                each other. If you are interested, we can arranged a meeting to discuss your dream
                                project.
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
                        <div className="absolute h-auto w-full -z-10 -bottom-64">
                            <BlubSVG />
                        </div>{' '}
                    </div>
                </div>
                <div>
                    <Wave1 />
                    <div className="bg-secondary px-44 pb-36">
                        <div className="flex px-28">
                            <Testimonial />
                            <Testimonial />
                            <Testimonial />
                        </div>
                    </div>
                    <Wave2 />
                </div>
                <div>
                    <div className="flex p-20">
                        <p className="w-1/2">
                            <CircleSVG />
                        </p>
                        <div className="w-1/2 m-auto">
                            <h2>Noah Emmenegger</h2>
                            <Quote>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit veniam Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit veniam Lorem ipsum dolor sit amet
                            </Quote>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

const Testimonial = () => {
    return (
        <div className="w-1/3 bg-accent p-10 mx-10 rounded-2xl">
            <b>Max Mustermann</b>
            <p>CEO at Company</p>
            <br />
            <p>
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam&quot;
            </p>
        </div>
    );
};

export default Home;
