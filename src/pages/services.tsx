import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

export default function services() {
    return (
        <div className="m-10">
            <h1 className="text-4xl font-bold text-center">Our Services</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center mt-10 lg:flex-wrap">
                <Service
                    name="Building Websites"
                    image="/images/services/building_Websites.svg"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc."
                />
                <Service
                    name="App Development"
                    image="/images/services/mobile_apps.svg"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc."
                />
                <Service
                    name="Web Design"
                    image="/images/services/web_design.svg"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc."
                />
                <Service
                    name="SEO"
                    image="/images/services/seo.svg"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc."
                />
                <Service
                    name="Digital Marketing"
                    image="/images/services/digital_marketing.svg"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc."
                />
                <Service
                    name="Web Hosting"
                    image="/images/services/web_hosting.svg"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc."
                />
            </div>
        </div>
    );
}

type ServiceProps = {
    name: string;
    image: string;
    description: string;
};

const Service = ({ name, image, description }: ServiceProps) => {
    return (
        <div className="flex flex-col items-center lg:items-start lg:p-10 lg:w-1/3">
            <div className="h-80 w-80 relative m-auto">
                <Image src={image} alt={name} layout="fill" />
            </div>
            <h1 className="text-2xl font-bold m-auto mt-5">{name}</h1>
            <p className="text-lg mt-5 text-center">{description}</p>
        </div>
    );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'home', 'testimonials'])),
    },
});
