import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Contact() {
    return (
        <div className="p-10">
            <div>
                <h1>Contact</h1>
                <p>If you want to contact us you can fill out the following form:</p>
            </div>
            <div>
                <form className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" />
                    <button type="submit">Send</button>
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
