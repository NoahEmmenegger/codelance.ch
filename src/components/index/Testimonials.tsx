import { useTranslation } from 'next-i18next';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

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

        setTestimonialsCount(windowSize < 1536 ? childrenLength : Math.round(childrenLength / 3));
    }, [ref.current?.clientWidth]);

    ref.current?.addEventListener('scroll', () => {
        if (!ref.current) return;
        setCurrentSlide(Math.round((ref.current.scrollLeft / ref.current.scrollWidth) * testimonialsCount));
    });

    return (
      <div className="flex flex-col items-center justify-center bg-secondary pb-10 lg:pb-20">
        <h2 className="mt-10 mb-3 text-4xl lg:text-6xl">{t("title")}</h2>
        <h3 className="lg:text-3xl">{t("subtitle")}</h3>
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
                  behavior: "smooth",
                });
              }
              // if move right
              else {
                ref.current?.scrollTo({
                  left: ref.current.scrollLeft - 500,
                  behavior: "smooth",
                });
              }
            }
          }}
        >
          <Testimonial name="Peter Gisler" position={t("1_position")} image={true}>
            {t("1_quote", { ns: "testimonials" })}
          </Testimonial>
          <Testimonial name="Dario Faragulo" position={t("2_position")} image={true}>
            {t("2_quote", { ns: "testimonials" })}
          </Testimonial>
          <Testimonial name="Anonym" position={t("3_position")} image={false}>
            {t("3_quote", { ns: "testimonials" })}
          </Testimonial>
        </div>
        <div>
          {/* dots */}
          <div className="flex flex-row justify-center mt-10 visible 2xl:invisible">
            {[...Array(testimonialsCount)].map((_, i) => {
              return (
                <div
                  key={i}
                  className={`cursor-pointer w-3 h-3 rounded-full mx-1 ${
                    i === currentSlide ? "bg-primary" : "bg-quaternary"
                  }`}
                  onClick={() => {
                    ref.current?.scrollTo({
                      left: (ref.current.scrollWidth / testimonialsCount) * i,
                      behavior: "smooth",
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
    image: boolean;
};

const Testimonial = ({ children, name, position, image }: TestimonialProps) => {
    return (
        <div className="w-full p-10 2xl:w-1/3 flex-shrink-0 snap-start cursor-grab">
          <div className="2xl:w-full h-full bg-quinary p-10 rounded-2xl">
            <div className="flex flex-row justify-between">
              <div className="w-auto md:w-2/3">
                <b className="text-xl">{name}</b>
                <p className="text-xl break-words">{position}</p> 
            </div>
            {image ? (
              <Image
                priority
                className="rounded-full h-24 w-24 md:h-auto md:w-auto"
                alt="Contact us"
                src={"/images/testimonials/" + name?.replace(' ', '_').toLocaleLowerCase() + ".jpeg"}
                placeholder="blur"
                blurDataURL='/images/user.svg'
                width={80}
                height={80}
              />
            ) : (
              <Image
                priority
                className="rounded-full p-2"
                alt="Contact us"
                src="/images/user.svg"
                width={80}
                height={80}
              />
            )}
            </div>
            <br />
            <p className="text-xl">&quot;{children}&quot;</p>
          </div>
        </div>
    );
};
