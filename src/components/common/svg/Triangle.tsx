type TriangleProps = {
    isUp?: boolean;
    className?: string;
};

const Triangle = ({ isUp = false, className = '' }: TriangleProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={8}
        fill="none"
        className={(isUp ? 'rotate-180' : 'rotate-0') + ' ' + className}
    >
        <path
            className="fill-primary"
            d="M5.194 7.205a1 1 0 0 0 1.469 0l4.643-5.026c.592-.64.137-1.679-.735-1.679H1.285C.413.5-.04 1.538.551 2.179l4.643 5.026Z"
        />
    </svg>
);

export default Triangle;
