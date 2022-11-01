import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

export default function Services() {
    const { t } = useTranslation('services');
    return (
        <div className="m-10">
            <h1 className="text-4xl font-bold text-center">Our Services</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center mt-10 lg:flex-wrap">
                <Service
                    name={t('service_1_name')}
                    image="/images/services/building_Websites.svg"
                    description={t('service_1_description')}
                />
                <Service
                    name={t('service_2_name')}
                    image="/images/services/mobile_apps.svg"
                    description={t('service_2_description')}
                />
                <Service
                    name={t('service_3_name')}
                    image="/images/services/web_design.svg"
                    description={t('service_3_description')}
                />
                <Service
                    name={t('service_4_name')}
                    image="/images/services/seo.svg"
                    description={t('service_4_description')}
                />
                <Service
                    name={t('service_5_name')}
                    image="/images/services/digital_marketing.svg"
                    description={t('service_5_description')}
                />
                <Service
                    name={t('service_6_name')}
                    image="/images/services/web_hosting.svg"
                    description={t('service_6_description')}
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
        ...(await serverSideTranslations(locale, ['common', 'services'])),
    },
});
