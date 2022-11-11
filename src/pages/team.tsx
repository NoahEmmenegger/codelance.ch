import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

export default function Team() {
    const { t } = useTranslation('team');

    return (
        <div className="m-10">
            <h1 className="text-4xl font-bold text-center">Team</h1>
            <div className="flex flex-col lg:flex-row justify-center mt-10">
                <TeamMember
                    name="Noah Emmenegger"
                    role={t('person_1_function')}
                    image="/images/team/avatar.svg"
                    description={t('person_1_description')}
                />
                <TeamMember
                    name="Jan Walker"
                    role={t('person_2_function')}
                    image="/images/team/avatar.svg"
                    description={t('person_2_description')}
                />
            </div>
        </div>
    );
}

type TeamMemberProps = {
    name: string;
    role: string;
    image: string;
    description: string;
};

const TeamMember = ({ name, role, image, description }: TeamMemberProps) => {
    return (
        <div className="mt-10 flex flex-col items-center lg:items-start mb-auto lg:mr-10 lg:w-1/3">
            <div className="h-80 w-80 relative m-auto">
                <Image src={image} alt={name} layout="fill" />
            </div>
            <h1 className="text-2xl font-bold m-auto mt-5">{name}</h1>
            <h2 className="text-xl font-bold m-auto mt-2">{role}</h2>
            <p className="text-lg mt-5 text-center">{description}</p>
        </div>
    );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'team'])),
    },
});
