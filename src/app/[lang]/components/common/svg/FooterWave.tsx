import { SVGProps } from 'react';

const FooterWave = (props: SVGProps<SVGSVGElement>) => (
    <div className="w-full right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1458 120" fill="none" {...props}>
            <path
                className="fill-tertiary"
                fillRule="evenodd"
                d="M0 24.65c144.26 18.537 437.118 47.548 776.788 11.868C1026.47 10.29 1231.37-3.937 1458 .954V128H0V24.65Z"
                clipRule="evenodd"
            />
        </svg>
    </div>
);

export default FooterWave;
