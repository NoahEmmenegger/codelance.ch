import { useTranslation } from 'next-i18next';
import { useEffect, useRef, useState } from 'react';

export default function Testimonials() {
    const { t } = useTranslation('testimonials');
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartPosition, setDragStartPosition] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [testimonialsCount, setTestimonialsCount] = useState(0);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const childrenLength = ref.current?.children.length || 0;

        const windowSize = ref.current?.clientWidth || 0;

        setTestimonialsCount(windowSize < 1024 ? childrenLength : Math.round(childrenLength / 3));
    }, [ref.current?.clientWidth]);

    ref.current?.addEventListener('scroll', () => {
        if (!ref.current) return;
        setCurrentSlide(Math.round((ref.current.scrollLeft / ref.current.scrollWidth) * testimonialsCount));
    });

    return (
        <div className="flex flex-col items-center justify-center bg-secondary pb-10 lg:pb-20">
            <h2 className="mt-10 mb-3 text-4xl lg:text-6xl">{t('title')}</h2>
            <h3 className="lg:text-3xl">{t('subtitle')}</h3>
            <div
                className="flex flex-row 2xl:mx-44 overflow-x-scroll w-full lg:w-4/5 snap-x scroll-smooth snap-mandatory scrollbar-hide"
                ref={ref}
                onMouseDown={(e) => {
                    e.preventDefault();
                    setDragStartPosition(e.clientX);
                    setIsDragging(true);
                }}
                onMouseUp={(e) => {
                    e.preventDefault();
                    setIsDragging(false);
                }}
                onMouseMove={(e) => {
                    if (isDragging) {
                        e.preventDefault();
                        // if move left
                        if (e.clientX < dragStartPosition) {
                            ref.current?.scrollTo({
                                left: ref.current.scrollLeft + 500,
                                behavior: 'smooth',
                            });
                        }
                        // if move right
                        else {
                            ref.current?.scrollTo({
                                left: ref.current.scrollLeft - 500,
                                behavior: 'smooth',
                            });
                        }
                    }
                }}
            >
                <Testimonial name="Unknown" position={t('1_position')}>
                    {t('1_quote', { ns: 'testimonials' })}
                </Testimonial>
                <Testimonial name="Unknown" position={t('1_position')}>
                    {t('1_quote', { ns: 'testimonials' })}
                </Testimonial>
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
            <div>
                {/* dots */}
                <div className="flex flex-row justify-center mt-10">
                    {[...Array(testimonialsCount)].map((_, i) => {
                        return (
                            <div
                                key={i}
                                className={`cursor-pointer w-3 h-3 rounded-full mx-1 ${
                                    i === currentSlide ? 'bg-primary' : 'bg-quaternary'
                                }`}
                                onClick={() => {
                                    ref.current?.scrollTo({
                                        left: (ref.current.scrollWidth / testimonialsCount) * i,
                                        behavior: 'smooth',
                                    });
                                }}
                            />
                        );
                    })}
                </div>
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
        <div className="w-full p-10 lg:w-1/3 flex-shrink-0 snap-start cursor-grab">
            <div className="lg:w-full h-full bg-quinary p-10 rounded-2xl">
                <b className="text-xl">{name}</b>
                <p className="text-xl">{position}</p>
                <br />
                <p className="text-xl">&quot;{children}&quot;</p>
            </div>
        </div>
    );
};
