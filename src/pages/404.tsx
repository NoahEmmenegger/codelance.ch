import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/common/Button';

export default function FourOhFour() {
    const { t } = useTranslation('common');
    return (
        <div className="my-10">
            <div className="h-96 relative">
                <Image src="/images/page_not_found.svg" alt="404" layout="fill" />
            </div>
            <h1 className="text-4xl font-bold text-center pt-10">{t('page_not_found')}</h1>
            <Link href="/">
                <a>
                    <Button text={t('go_home')} className="m-auto ml-auto mr-auto mt-10"></Button>
                </a>
            </Link>
        </div>
    );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'home', 'testimonials'])),
        },
    };
};
