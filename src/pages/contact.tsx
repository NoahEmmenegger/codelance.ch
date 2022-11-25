import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import Button from '../components/common/Button';
import TextInput from '../components/common/TextInput';

export default function Contact() {
    const [contactForm, setContactForm] = useState({
        lastName: '',
        email: '',
        message: '',
    });
    return (
        <div className="p-10">
            <div>
                <h1>Contact</h1>
                <p>If you want to contact us you can fill out the following form:</p>
            </div>
            <div>
                <form className="flex flex-col">
                    <TextInput
                        validations={['REQUIRED']}
                        id="lastName"
                        label="Last Name"
                        value={contactForm}
                        onChange={setContactForm}
                    />
                    <TextInput
                        validations={['REQUIRED', 'EMAIL']}
                        id="email"
                        label="Email"
                        value={contactForm}
                        onChange={setContactForm}
                    />
                    <TextInput
                        validations={['REQUIRED']}
                        id="message"
                        label="Message"
                        value={contactForm}
                        onChange={setContactForm}
                    />
                    <Button className="m-auto" text="Send" />
                </form>
            </div>
        </div>
    );
}

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'contact'])),
    },
});
