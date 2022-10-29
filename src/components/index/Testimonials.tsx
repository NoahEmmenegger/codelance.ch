export default function Testimonials() {
    return (
        <div className="flex flex-col items-center justify-center bg-secondary">
            <div className="flex flex-row items-center justify-center lg:mx-44">
                <Testimonial name="Max Mustermann" position="CEO at Company">
                    &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam&quot;
                </Testimonial>
                <Testimonial name="Unknown" position="CEO at Company">
                    &quot;...The tight schedule was always adhered to and adjustments on the part of the customer were
                    very responded very flexibly...&quot;
                    {/* &quot;...Den straffen Zeitplan wurde stets eingehalten und auf
                    Anpassungen seitens Kunde wurde sehr flexibel reagiert...&quot; */}
                </Testimonial>
                <Testimonial name="Max Mustermann" position="CEO at Company">
                    &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam&quot;
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
                <p>{children}</p>
            </div>
        </div>
    );
};
