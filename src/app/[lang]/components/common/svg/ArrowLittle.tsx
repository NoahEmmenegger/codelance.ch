import { SVGProps } from 'react';

const ArrowLittleSVG = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 96 96" width={20} xmlns="http://www.w3.org/2000/svg" {...props}>
        <title />
        <path
            className="fill-primary"
            d="M81.846 25.388a6.024 6.024 0 0 0-8.45.767L48 56.625l-25.396-30.47a5.999 5.999 0 1 0-9.211 7.689l30.001 36.001a5.997 5.997 0 0 0 9.212 0l30.001-36.002a6.008 6.008 0 0 0-.761-8.455Z"
        />
    </svg>
);

export default ArrowLittleSVG;
