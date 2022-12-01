import { motion } from 'framer-motion';

type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
    text: string;
    disabled?: boolean;
    onClick?: () => void;
};

export default function Button({ children, className, text, disabled = false, onClick = () => {} }: ButtonProps) {
    return (
        <motion.div
            onClick={() => {
                if (!disabled) {
                    onClick();
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
            <p className="select-none">{text}</p>
            <div className="relative">{children}</div>
        </motion.div>
    );
}
