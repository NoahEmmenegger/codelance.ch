import axios from 'axios';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Button from '../components/common/Button';
import HappySVG from '../components/common/svg/Happy';
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
                    <h1 className="text-4xl font-bold text-center">Contact</h1>
                    <p className="text-center">If you want to contact us you can fill out the following form:</p>
                </div>
                <div className="flex lg:w-10/12  2xl:w-8/12 lg:m-auto">
                    <HappySVG className="hidden lg:block m-auto lg:p-0 2xl:p-36 w-full h-full" />
                    <div className="flex flex-col lg:w-2/3 lg:m-10 lg:rounded-xl">
                        <h2 className="text-lg m-auto">contact form</h2>
                        <TextInput
                            placeholder="Jason Warner"
                            validations={['REQUIRED']}
                            id="name"
                            label="Name"
                            value={contactForm}
                            onChange={setContactForm}
                            onError={setHasNameError}
                        />
                        <TextInput
                            placeholder="jason@gmail.com"
                            validations={['REQUIRED', 'EMAIL']}
                            id="email"
                            label="Email"
                            value={contactForm}
                            onChange={setContactForm}
                            onError={setHasEmailError}
                        />
                        <TextArea
                            placeholder="Write your message here..."
                            validations={['REQUIRED']}
                            id="message"
                            label="Message"
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
                                        loading: 'Sending...',
                                        success: 'Message sent!',
                                        error: 'Error sending message',
                                    },
                                    {
                                        duration: 3000,
                                    }
                                );
                            }}
                            className="m-auto my-5"
                            text="Send Message"
                        />
                        <small className="text-xs  m-auto">Response time: 48 hours</small>
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
