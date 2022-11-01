import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

export default function Team() {
    return (
        <div className="m-10">
            <h1 className="text-4xl font-bold text-center">Team</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center mt-10">
                <TeamMember
                    name="Noah Emmenegger"
                    role="Developer"
                    image="/images/team/avatar.svg"
                    description="Noah Emmenegger loves to code and is a full stack developer. He is currently studying at GIBZ in Zug and in the following year he will start his Bachelor in computer science. In his free time he likes to go to the gym and work on his side projects. He created this company because he wants to help other companies to implement their dream IT projects."
                />
                <TeamMember
                    name="Jan Walker"
                    role="Developer"
                    image="/images/team/avatar.svg"
                    description="Jan Walker previously attended a four year long apprenticeship specializing in Software Development. 
                    Durring this time he worked as a full stack developer in multiple departments in one of the biggest pharmaceutical and diagnostics company in the world.
                    "
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
        <div className="flex  flex-col items-center lg:items-start lg:mr-10 lg:w-1/3">
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
        ...(await serverSideTranslations(locale, ['common', 'home', 'testimonials'])),
    },
});
