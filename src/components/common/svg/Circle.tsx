import { SVGProps } from 'react';

const CircleSVG = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 520 520"
        fill="none"
        {...props}
    >
        <circle cx={260} cy={260} r={251} fill="#E3E5F1" stroke="#CBCEDE" strokeWidth={18} />
        <path
            fill="url(#a)"
            fillRule="evenodd"
            d="M515 209C491.298 89.826 386.139 0 260 0 133.861 0 28.702 89.826 5 209v102c23.702 119.174 128.861 209 255 209 126.139 0 231.298-89.826 255-209V209Z"
            clipRule="evenodd"
        />
        <defs>
            <pattern id="a" width={1} height={1} patternContentUnits="objectBoundingBox">
                <use xlinkHref="#b" transform="matrix(-.00037 0 0 .00036 1.007 -.044)" />
            </pattern>
        </defs>
    </svg>
);

export default CircleSVG;
