import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import WordsAnimation from '../components/animations/WordsAnimation';
import Button from '../components/common/Button';
import Quote from '../components/common/Quote';
import ArrowSVG from '../components/common/svg/Arrow';
import BlubSVG from '../components/common/svg/Blub';
import CircleSVG from '../components/common/svg/Circle';
import Wave1 from '../components/common/svg/Wave1';
import Wave2 from '../components/common/svg/Wave2';
import Testimonials from '../components/index/Testimonials';

const Home: NextPage = () => {
    const { t } = useTranslation('home');

    return (
        <>
            <Head>
                <title>Codelance GmbH</title>
                <meta name="description" content={t('metaDescription')} />
                <meta name="keywords" content={t('metaKeywords')} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="flex flex-col lg:flex-row">
                    <div className="pt-5 lg:pt-10 h-1/2 lg:p-28 lg:w-2/3 2xl:w-1/3 ">
                        <WordsAnimation text={t('slogan_1')} replay={true} delay={0.5} />
                        <WordsAnimation text={t('slogan_2')} replay={true} delay={0.9} />
                        <WordsAnimation text={t('slogan_3')} replay={true} delay={2} />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3, duration: 0.5 }}
                        >
                            <Quote classname="py-10 hidden lg:flex">{t('quote')}</Quote>
                            <div className="pt-5 lg:pt-10 px-10 text-center lg:hidden">{t('quote')}</div>
                            <Link href="/services">
                                <Button className="m-auto ml-auto mr-auto mt-5 mb-20 lg:m-0" text={t('learn_more')}>
                                    <div className="absolute h-auto w-52 -right-64 -top-14 cursor-default">
                                        <ArrowSVG delay={8} />
                                    </div>
                                    <div className="absolute h-auto w-52 scale-x-[-1] -rotate-30 -left-52 top-10 cursor-default">
                                        <ArrowSVG delay={5} />
                                    </div>
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                    <div className="h-40 ml-auto w-2/3 lg:h-auto relative">
                        <Image
                            className="select-none pointer-events-none"
                            priority
                            src="/images/HomeImage.svg"
                            layout="fill"
                            alt="Freelancer coding a website"
                        />
                        <div className="absolute h-80 w-80 lg:h-auto lg:w-full -z-10 -bottom-64">
                            <BlubSVG />
                        </div>
                    </div>
                </div>
                <div>
                    <Wave1 />
                    <Testimonials />
                    <Wave2 />
                </div>
                <div>
                    <div className="flex flex-col lg:flex-row p-5 lg:p-20">
                        <p className="lg:w-1/5">
                            <CircleSVG />
                        </p>
                        <div className="pt-10 lg:p-0 lg:w-1/2 m-auto">
                            <h2 className="text-center lg:text-left">Noah Emmenegger</h2>
                            <Quote classname="hidden mb-5 lg:flex lg:pt-5">{t('noah_quote')}</Quote>
                            <div className="pt-10 px-10 text-center lg:hidden">
                                I look forward to getting to know you in a personal meeting!
                            </div>
                            <Link href="/team">
                                <Button
                                    className="m-auto ml-auto mr-auto mt-5 mb-20 lg:m-0 text-lg"
                                    text={t('learn_more_about_us')}
                                ></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'home', 'testimonials'])),
    },
});

export default Home;
