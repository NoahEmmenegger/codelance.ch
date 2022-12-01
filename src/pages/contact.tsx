import axios from 'axios';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import Button from '../components/common/Button';
import HappySVG from '../components/common/svg/Happy';
import TextInput from '../components/common/TextInput';

export default function Contact() {
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState<boolean[]>([false, false, false]);

    return (
        <div className="p-10">
            <div>
                <h1 className="text-4xl font-bold text-center">Contact</h1>
                <p className="text-center">If you want to contact us you can fill out the following form:</p>
            </div>
            <div className="flex lg:w-8/12 lg:m-auto">
                <HappySVG className="hidden lg:block p-36" />
                <div className="flex flex-col lg:w-1/2 lg:m-10 p-5 lg:rounded-xl">
                    <h2 className="text-lg m-auto">Contact us</h2>
                    <TextInput
                        placeholder="Jason Warner"
                        validations={['REQUIRED']}
                        id="name"
                        label="Name"
                        value={contactForm}
                        onChange={setContactForm}
                        onError={(error) => {
                            const newErrors = [...errors];
                            newErrors[0] = error;
                            setErrors(newErrors);
                        }}
                    />
                    <TextInput
                        placeholder="jason@gmail.com"
                        validations={['REQUIRED', 'EMAIL']}
                        id="email"
                        label="Email"
                        value={contactForm}
                        onChange={setContactForm}
                        onError={(error) => {
                            const newErrors = [...errors];
                            newErrors[1] = error;
                            setErrors(newErrors);
                        }}
                    />
                    <TextInput
                        placeholder="Write your message here..."
                        validations={['REQUIRED']}
                        id="message"
                        label="Message"
                        type="text"
                        value={contactForm}
                        onChange={setContactForm}
                        onError={(error) => {
                            const newErrors = [...errors];
                            newErrors[2] = error;
                            setErrors(newErrors);
                        }}
                    />
                    <Button
                        disabled={errors.filter((error: boolean) => error === false).length > 0}
                        onClick={() => axios.post('/api/contact', contactForm)}
                        className="m-auto my-5"
                        text="Send Message"
                    />
                    <small className="text-xs  m-auto">Response time: 48 hours</small>
                </div>
            </div>
        </div>
    );
}

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'contact'])),
    },
});
