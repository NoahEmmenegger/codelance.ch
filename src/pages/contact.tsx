import axios from 'axios';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import Button from '../components/common/Button';
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
                <h1>Contact</h1>
                <p>If you want to contact us you can fill out the following form:</p>
            </div>
            <div>
                <div className="flex flex-col">
                    <TextInput
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
                        validations={['REQUIRED']}
                        id="message"
                        label="Message"
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
                        className="m-auto"
                        text="Send"
                    />
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
