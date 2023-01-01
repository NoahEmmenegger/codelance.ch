import axios from 'axios';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Button from '../components/common/Button';
import TextArea from '../components/common/TextArea';
import TextInput from '../components/common/TextInput';

export default function Contact() {
    const { t } = useTranslation('contact');

    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [hasNameError, setHasNameError] = useState(true);
    const [hasEmailError, setHasEmailError] = useState(true);
    const [hasMessageError, setHasMessageError] = useState(true);

    return (
        <>
            <Head>
                <title>{t('contact_meta_title')}</title>
                <meta property="og:title" content={t('contact_meta_title')} />
                <meta name="description" content={t('contact_meta_description')} />
                <meta property="og:description" content={t('contact_meta_description')} />
                <meta name="keywords" content={t('contact_meta_keywords')} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="p-10">
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-center">{t('contact_title')}</h1>
                    <p className="text-center">{t('contact_subtitle')}</p>
                </div>
                <div className="flex lg:w-10/12  2xl:w-8/12 lg:m-auto">
                    <div className="hidden lg:block m-auto lg:p-0 w-full h-full">
                        <Image
                            className="rounded-[36px]"
                            alt="Contact us"
                            src="/images/contact_us.jpg"
                            width={6000}
                            height={4000}
                        />
                    </div>
                    <div className="flex flex-col lg:w-2/3 lg:m-10 lg:rounded-xl">
                        <h2 className="text-lg m-auto">{t('contact_form_title')}</h2>
                        <TextInput
                            placeholder={t('contact_name_placeholder')}
                            validations={['REQUIRED']}
                            id="name"
                            label={t('contact_name')}
                            value={contactForm}
                            onChange={setContactForm}
                            onError={setHasNameError}
                        />
                        <TextInput
                            placeholder={t('contact_email_placeholder')}
                            validations={['REQUIRED', 'EMAIL']}
                            id="email"
                            label={t('contact_email')}
                            value={contactForm}
                            onChange={setContactForm}
                            onError={setHasEmailError}
                        />
                        <TextArea
                            placeholder={t('contact_message_placeholder')}
                            validations={['REQUIRED']}
                            id="message"
                            label={t('contact_message')}
                            type="text"
                            value={contactForm}
                            onChange={setContactForm}
                            onError={setHasMessageError}
                        />
                        <Button
                            disabled={!hasNameError || !hasEmailError || !hasMessageError}
                            onClick={() => {
                                toast.promise(
                                    axios.post('/api/contact', contactForm).then(() => {
                                        setContactForm({
                                            name: '',
                                            email: '',
                                            message: '',
                                        });
                                        setHasNameError(true);
                                        setHasEmailError(true);
                                        setHasMessageError(true);
                                    }),
                                    {
                                        loading: t('contact_toast_loading'),
                                        success: t('contact_toast_success'),
                                        error: t('contact_toast_error'),
                                    },
                                    {
                                        duration: 3000,
                                    }
                                );
                            }}
                            className="m-auto my-5"
                            text={t('contact_send')}
                        />
                        <small className="text-xs  m-auto">{t('contact_response_time')}</small>
                    </div>
                </div>
            </div>
        </>
    );
}

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'contact'])),
    },
});
