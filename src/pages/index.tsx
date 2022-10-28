import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import WordsAnimation from '../components/animations/WordsAnimation';
import Button from '../components/common/Button';
import Quote from '../components/common/Quote';
import ArrowSVG from '../components/common/svg/Arrow';
import BlubSVG from '../components/common/svg/Blub';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Codelance GmbH</title>
                <meta name="description" content="Codelance GmbH" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="flex flex-col lg:flex-row">
                    <div className="p-10 h-1/2 lg:p-28 lg:w-1/3 ">
                        <WordsAnimation text="Turn your" replay={true} />
                        <WordsAnimation text="IT idea into" replay={true} delay={0.4} />
                        <WordsAnimation text="reality." replay={true} delay={1.4} />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.4, duration: 0.5 }}
                        >
                            <Quote classname="py-10 hidden lg:flex">
                                Whether it&apos;s a website, a customer app or you even have a specific idea for an
                                online product, we&apos;ll be happy to advise you. Simply make an appointment with us.
                                We will find the best solution for you.
                                {/* Sei es ein Webauftritt, eine Kunden-App oder haben Sie gar eine konkrete Idee für ein
                                Online-Produkt, sind wir da, um Sie zu unterstützen. Vereinbaren Sie gerne einen Termin
                                mit uns. Wir finden garantiert die beste Lösung für Sie. */}
                            </Quote>
                            <div className="pt-10 text-center lg:hidden">
                                Whether it&apos;s a website, a customer app or you even have a specific idea for an
                                online product, we&apos;ll be happy to advise you. Simply make an appointment with us.
                                We will find the best solution for you.
                            </div>
                            <Button className="m-auto mt-5 mb-20 lg:m-0" text="learn more">
                                <div className="absolute h-auto w-52 -right-64 -top-14">
                                    <ArrowSVG delay={5} />
                                </div>
                                <div className="absolute h-auto w-52 scale-x-[-1] -rotate-30 -left-52 top-10">
                                    <ArrowSVG delay={8} />
                                </div>
                            </Button>
                        </motion.div>
                    </div>
                    <div className="h-40 ml-auto w-2/3 lg:h-auto relative">
                        <Image src="/images/HomeImage.svg" layout="fill" alt="Freelancer coding a website" />
                        <div className="absolute h-80 w-80 lg:h-auto lg:w-full -z-10 -bottom-64">
                            <BlubSVG />
                        </div>{' '}
                    </div>
                </div>
                {/* <div>
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
                </div> */}
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
