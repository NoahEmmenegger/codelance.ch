import { SVGProps } from 'react';

const Wave1 = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 111" fill="none" {...props}>
        <path
            className="fill-secondary"
            fillRule="evenodd"
            d="M1440 0c-130.12 40.047-368.41 94.284-674.476 56.213C474.498 20.013 251.84 9.447 0 52.037V111h1440V0Z"
            clipRule="evenodd"
        />
    </svg>
);

export default Wave1;
