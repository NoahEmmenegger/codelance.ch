type ButtonProps = {
    children?: React.ReactNode;
    text: string;
    onClick?: () => void;
};

export default function Button({ children, text, onClick = () => {} }: ButtonProps) {
    return (
        <div
            onClick={onClick}
            className="bg-primary text-white rounded-full w-min px-5 py-1 text-2xl cursor-pointer uppercase whitespace-nowrap"
        >
            {text}
            <div className="relative">{children}</div>
        </div>
    );
}
