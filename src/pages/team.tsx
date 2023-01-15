import axios from 'axios';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/common/Button';

export default function Team({ teamMembers }: { teamMembers: any[] }) {
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
                <div className="flex flex-col lg:flex-row justify-center mt-10">
                    {teamMembers.map((member) => (
                        <TeamMember
                            key={member.id}
                            name={member.Name}
                            role={member.Position}
                            image={`http://localhost:1337${member.Image.data[0].attributes.url}`}
                            description={t('person_1_description')}
                            link="https://ch.linkedin.com/in/noah-emmenegger-757bba235"
                        />
                    ))}
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
        <div className="mt-10 flex flex-col items-center lg:items-start lg:mr-10 lg:w-1/3">
            <div className="h-80 w-80 relative m-auto select-none">
                <Image priority className="rounded-full" src={image} alt={name} layout="fill" />
            </div>
            <h1 className="text-2xl font-bold m-auto mt-5">{name}</h1>
            <h2 className="text-xl font-bold m-auto mt-2">{role}</h2>
            <p className="text-lg mt-5 text-center mb-auto flex-grow">{description}</p>
            <Link href={link}>
                <a className="w-full justify-center flex mt-5">
                    <Button className="m-auto" text={t('team_more')} hasArrow={true} />
                </a>
            </Link>
        </div>
    );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => {
    console.log(locale);
    const res = await axios(`http://localhost:1337/api/team?populate[TeamMember][populate][0]=Image&locale=${locale}`);
    console.log(res.data);

    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'team'])),
            teamMembers: res.data.data.attributes.TeamMember,
        },
    };
};
