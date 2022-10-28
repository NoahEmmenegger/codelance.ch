import { motion } from 'framer-motion';

const ArrowSVG = ({ delay = 0 }) => (
    <svg id="Ebene_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1579.84 695.37">
        <defs>
            <style>
                {'.cls-1{fill:none;stroke:#787e96;stroke-linecap:round;stroke-miterlimit:10;stroke-width:60px}'}
            </style>
        </defs>
        <g id="Layer_2">
            <motion.path
                className="cls-1"
                d="M1549.84 30s-213.57 336.54-684.4 453.03-645.57 24.27-771.78-92.22"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: delay }}
            />
            <motion.path
                className="cls-1"
                d="M518.11 264.11 42.77 406.09c-11.16 3.33-17.35 18.29-8.71 26.1 59.6 53.93 119.22 112.18 158.84 233.17"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: delay + 1 }}
            />
        </g>
    </svg>
);

export default ArrowSVG;
