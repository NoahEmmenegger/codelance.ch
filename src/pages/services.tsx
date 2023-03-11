import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';

export default function Services() {
    const { t } = useTranslation('services');
    return (
        <>
            <Head>
                <title>{t('services_meta_title')}</title>
                <meta property="og:title" content={t('services_meta_title')} />
                <meta name="description" content={t('services_meta_description')} />
                <meta property="og:description" content={t('services_meta_description')} />
                <meta name="keywords" content={t('services_meta_keywords')} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="m-10">
                <h1 className="text-4xl font-bold text-center">{t('title')}</h1>
                <div className="flex flex-col lg:flex-row justify-center mt-10 lg:flex-wrap">
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
        </>
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
                <Image src={image} alt={name} sizes="100vw" fill />
            </div>
            <h1 className="text-2xl font-bold m-auto mt-5">{name}</h1>
            <p className="text-lg mt-5 text-center flex-grow">{description}</p>
        </div>
    );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'services'])),
    },
});
