import { motion } from 'framer-motion';

type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
    text: string;
    onClick?: () => void;
};

export default function Button({ children, className, text, onClick = () => {} }: ButtonProps) {
    return (
        <motion.div
            onClick={onClick}
            className={
                'bg-primary text-white rounded-full w-min px-5 py-1 text-2xl cursor-pointer uppercase whitespace-nowrap select-none ' +
                className
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
            <p className="select-none">{text}</p>
            <div className="relative">{children}</div>
        </motion.div>
    );
}
