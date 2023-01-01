import { useTranslation } from 'next-i18next';

export default function Testimonials() {
    const { t } = useTranslation('testimonials');

    return (
        <div className="flex flex-col items-center justify-center bg-secondary pb-10 lg:pb-20">
            <h2 className="mt-10 mb-3 text-4xl lg:text-6xl">{t('title')}</h2>
            <h3 className="lg:text-3xl">{t('subtitle')}</h3>
            <div className="flex flex-row 2xl:mx-44">
                <Testimonial name="Unknown" position={t('1_position')}>
                    {t('1_quote', { ns: 'testimonials' })}
                </Testimonial>
                <Testimonial name="Unknown" position={t('1_position')}>
                    {t('1_quote', { ns: 'testimonials' })}
                </Testimonial>
                <Testimonial name="Unknown" position={t('1_position')}>
                    {t('1_quote', { ns: 'testimonials' })}
                </Testimonial>
            </div>
        </div>
    );
}

type TestimonialProps = {
    children?: React.ReactNode;
    name?: string;
    position?: string;
};

const Testimonial = ({ children, name, position }: TestimonialProps) => {
    return (
        <div className="w-screen p-10 lg:w-full">
            <div className="lg:w-full h-full bg-accent p-10 rounded-2xl">
                <b>{name}</b>
                <p>{position}</p>
                <br />
                <p>&quot;{children}&quot;</p>
            </div>
        </div>
    );
};
