import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

export default function Team() {
    return (
        <div className="m-10">
            <h1 className="text-4xl font-bold text-center">Team</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center mt-10">
                <TeamMember
                    name="Noah Emmenegger"
                    role="CEO"
                    image="/images/team/avatar.svg"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc."
                />
                <TeamMember
                    name="Jan Walker"
                    role="CEO"
                    image="/images/team/avatar.svg"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc."
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
