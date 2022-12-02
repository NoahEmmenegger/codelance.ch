import { motion, useAnimation } from 'framer-motion';
import { SVGProps, useState } from 'react';

const variants = {
    hamburger: {
        d: 'M30 30h268.58M30 135.17h268.58M30 240.34h268.58',
    },
    close: {
        d: 'm30 30 189.92 189.92M219.92 30 30 219.92',
    },
};

const HamburgerSVG = (props: SVGProps<SVGSVGElement>) => {
    const [isOpen, setIsOpen] = useState(false);

    const controls = useAnimation();

    return (
        <svg
            onClick={() => {
                controls.start(isOpen ? 'hamburger' : 'close');
                setIsOpen(!isOpen);
            }}
            id="Ebene_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 328.58 270.34"
            {...props}
        >
            <defs>
                <style>
                    {'.cls-1{fill:none;stroke:#eb4034;stroke-linecap:round;stroke-miterlimit:10;stroke-width:60px}'}
                </style>
            </defs>
            <g id="Layer_2">
                <motion.path
                    style={{ stroke: '#2C3359' }}
                    className="cls-1"
                    d={variants.hamburger.d}
                    animate={controls}
                    variants={variants}
                    transition={{
                        ease: 'linear',
                        duration: 0.1,
                    }}
                />
            </g>
        </svg>
    );
};

export default HamburgerSVG;
