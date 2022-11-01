import { useTranslation } from 'next-i18next';

export default function Testimonials() {
    const { t } = useTranslation('testimonials');

    return (
        <div className="flex flex-col items-center justify-center bg-secondary">
            <div className="flex flex-row items-center justify-center lg:mx-44">
                <Testimonial name="Max Mustermann" position="CEO at Company">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam
                </Testimonial>
                <Testimonial name="Unknown" position={t('1_position')}>
                    {t('1_quote', { ns: 'testimonials' })}
                </Testimonial>
                <Testimonial name="Max Mustermann" position="CEO at Company">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam
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
            <div className="lg:w-full bg-accent p-10 rounded-2xl">
                <b>{name}</b>
                <p>{position}</p>
                <br />
                <p>&quot;...{children}...&quot;</p>
            </div>
        </div>
    );
};
