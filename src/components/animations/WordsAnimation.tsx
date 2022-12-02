import { HTMLMotionProps, motion, Variants } from 'framer-motion';
import { FC } from 'react';

interface Props extends HTMLMotionProps<'div'> {
    text: string;
    delay?: number;
    replay: boolean;
    duration?: number;
}

const WordsAnimation: FC<Props> = ({ text, delay = 0, duration = 0.1, replay, ...props }: Props) => {
    const words = text.split(' ');

    const container: Variants = {
        hidden: {
            opacity: 0,
        },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: { staggerChildren: duration, delayChildren: i * delay },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 200,
            },
        },
    };

    return (
        <motion.h1
            className="text-center lg:text-left whitespace-nowrap"
            style={{}}
            variants={container}
            initial="hidden"
            animate={replay ? 'visible' : 'hidden'}
            {...props}
        >
            {words.map((word, index) => (
                <motion.span key={index} variants={child}>
                    {word + '\u00A0'}
                </motion.span>
            ))}
        </motion.h1>
    );
};

export default WordsAnimation;
