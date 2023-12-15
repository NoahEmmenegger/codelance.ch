import { motion } from 'framer-motion';
import ArrowSmall from './svg/ArrowSmall';

type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
    text: string;
    disabled?: boolean;
    hasArrow?: boolean;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export default function Button({
    children,
    className,
    text,
    disabled = false,
    hasArrow = false,
    onClick,
}: ButtonProps) {
    return (
        <motion.div
            onClick={(e) => {
                if (onClick && !disabled) {
                    onClick(e);
                }
            }}
            className={
                `bg-primary text-white rounded-full w-min px-5 py-1 text-2xl cursor-pointer uppercase whitespace-nowrap select-none ${
                    disabled && ' opacity-20 cursor-not-allowed'
                } ` + className
            }
            {...(disabled ? {} : { whileHover: { scale: 1.05 } })}
            {...(disabled ? {} : { whileTap: { scale: 0.9 } })}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
            <div className="select-none flex px-3">
                <p>{text}</p>
                {hasArrow && (
                    <div className="m-auto ml-3">
                        <ArrowSmall />
                    </div>
                )}
            </div>
            <div className="relative">{children}</div>
        </motion.div>
    );
}
