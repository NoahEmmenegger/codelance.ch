import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/common/Button';

export default function Team() {
    const { t } = useTranslation('team');

    return (
        <>
            <Head>
                <title>{t('team_meta_title')}</title>
                <meta property="og:title" content={t('team_meta_title')} />
                <meta name="description" content={t('team_meta_description')} />
                <meta property="og:description" content={t('team_meta_description')} />
                <meta name="keywords" content={t('team_meta_keywords')} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="m-10">
                <h1 className="text-4xl font-bold text-center">{t('team_title')}</h1>
                <div className="flex flex-col flex-wrap lg:flex-row justify-center mt-10">
                    <TeamMember
                        name="Noah Emmenegger"
                        role={t('person_1_function')}
                        image="/images/team/noah_emmenegger.jpg"
                        description={t('person_1_description')}
                        link="https://ch.linkedin.com/in/noah-emmenegger-757bba235"
                    />
                    <TeamMember
                        name="Jan Walker"
                        role={t('person_2_function')}
                        image="/images/team/jan_walker.jpg"
                        description={t('person_2_description')}
                        link="https://ch.linkedin.com/in/jan-walker-jw"
                    />
                    <TeamMember
                        name="Julian Emmenegger"
                        role={t('person_3_function')}
                        image="/images/team/julian_emmenegger.jpg"
                        description={t('person_3_description')}
                        link="https://ch.linkedin.com/in/julian-emmenegger-479b05225"
                    />
                    <TeamMember
                        name="Giorgio Franco"
                        role={t('person_4_function')}
                        image="/images/team/giorgio_franco.jpg"
                        description={t('person_4_description')}
                        link="https://linktr.ee/giorgiofranco"
                    />
                </div>
            </div>
        </>
    );
}

type TeamMemberProps = {
    name: string;
    role: string;
    image: string;
    description: string;
    link: string;
};

const TeamMember = ({ name, role, image, description, link }: TeamMemberProps) => {
    const { t } = useTranslation('team');

    return (
        <div className="mt-10 flex flex-col items-center lg:items-start lg:w-1/2 xl:w-1/4">
            <div className="h-80 w-80 relative m-auto select-none">
                <Image priority className="rounded-full" src={image} alt={name} sizes="100vw" fill />
            </div>
            <h1 className="text-2xl font-bold m-auto mt-5">{name}</h1>
            <h2 className="text-xl font-bold m-auto mt-2">{role}</h2>
            <p className="text-lg mt-5 text-center mb-auto flex-grow px-4 stroke-current">{description}</p>
            <Link href={link} className="w-full justify-center flex mt-5">
                <Button className="m-auto" text={t('team_more')} hasArrow={true} />
            </Link>
        </div>
    );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'team'])),
    },
});
