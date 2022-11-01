import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
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
import Testimonials from '../components/index/Testimonials';

const Home: NextPage = () => {
    const { t } = useTranslation('common');

    return (
        <>
            <Head>
                <title>Codelance GmbH</title>
                <meta
                    name="description"
                    content="Codelance GmbH is a software development company based in Baar, Switzerland. We develop web applications and mobile apps for startups and enterprises. We are experts in React, React Native, Node.js, and Next.js. We also provide consulting services for startups and enterprises. If you are looking for a software development company, you are in the right place."
                />
                <meta
                    name="keywords"
                    content="software development, web development, mobile development, react, react native, node.js, next.js, consulting"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="flex flex-col lg:flex-row">
                    <div className="pt-10 h-1/2 lg:p-28 lg:w-2/3 2xl:w-1/3 ">
                        <WordsAnimation text={t('slogan_1')} replay={true} delay={1} />
                        <WordsAnimation text={t('slogan_2')} replay={true} delay={1.4} />
                        <WordsAnimation text={t('slogan_3')} replay={true} delay={2.4} />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3.4, duration: 0.5 }}
                        >
                            <Quote classname="py-10 hidden lg:flex">
                                Whether it&apos;s a website, a customer app or you even have a specific idea for an
                                online product, we&apos;ll be happy to advise you. Simply make an appointment with us.
                                We will find the best solution for you.
                                {/* Sei es ein Webauftritt, eine Kunden-App oder haben Sie gar eine konkrete Idee für ein
                                Online-Produkt, sind wir da, um Sie zu unterstützen. Vereinbaren Sie gerne einen Termin
                                mit uns. Wir finden garantiert die beste Lösung für Sie. */}
                            </Quote>
                            <div className="pt-10 px-10 text-center lg:hidden">
                                Whether it&apos;s a website, a customer app or you even have a specific idea for an
                                online product, we&apos;ll be happy to advise you. Simply make an appointment with us.
                                We will find the best solution for you.
                            </div>
                            <Button className="m-auto ml-auto mr-auto mt-5 mb-20 lg:m-0" text="learn more">
                                <div className="absolute h-auto w-52 -right-64 -top-14 cursor-default">
                                    <ArrowSVG delay={9} />
                                </div>
                                <div className="absolute h-auto w-52 scale-x-[-1] -rotate-30 -left-52 top-10 cursor-default">
                                    <ArrowSVG delay={6} />
                                </div>
                            </Button>
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
                            <Quote classname="hidden lg:flex lg:pt-5">
                                Realize your IT projects with us and benefit from our many years of experience and
                                know-how. We support you in the implementation of your IT projects and accompany you
                                from planning to realization. We are your partner for the implementation of your IT
                                projects. You have an idea? We make it real.
                                {/* Realisieren Sie Ihre IT-Projekte mit uns und profitieren Sie von unserer langjährigen
                                Erfahrung und unserem Know-how. Wir unterstützen Sie bei der Umsetzung Ihrer IT-Projekte
                                und begleiten Sie von der Planung bis zur Realisierung. Wir sind Ihr Partner für die
                                Umsetzung Ihrer IT-Projekte. Sie haben eine Idee? Wir machen sie real. */}
                            </Quote>
                            <div className="pt-10 px-10 text-center lg:hidden">
                                I look forward to getting to know you in a personal meeting!
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default Home;
