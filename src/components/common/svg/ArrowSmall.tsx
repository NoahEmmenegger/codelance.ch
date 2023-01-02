import { SVGProps } from 'react';

const ArrowSmall = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={14} fill="none" {...props}>
        <g clipPath="url(#a)">
            <path
                fill="#fff"
                d="M18 7c0-.024 0-.047-.002-.07l-.002-.033-.003-.036-.005-.04-.003-.028a.775.775 0 0 0-.013-.067l-.01-.044-.005-.023-.011-.042-.007-.025-.013-.039-.01-.027c-.003-.012-.008-.023-.013-.035l-.012-.03a.988.988 0 0 0-.013-.03l-.016-.035a60.023 60.023 0 0 1-.044-.083l-.022-.039a.315.315 0 0 0-.013-.02l-.025-.037-.014-.02a1.183 1.183 0 0 0-.026-.036l-.017-.021-.026-.033-.023-.027-.022-.025a1.407 1.407 0 0 0-.05-.05L11.896.411a1.447 1.447 0 0 0-2.023 0 1.39 1.39 0 0 0 0 1.99l3.245 3.192H1.43C.64 5.593 0 6.223 0 7s.64 1.406 1.43 1.406h11.687l-3.245 3.192a1.391 1.391 0 0 0 0 1.99 1.448 1.448 0 0 0 2.023 0l5.686-5.593.049-.05.022-.025.023-.028c.01-.01.018-.021.026-.032l.017-.021.026-.037.014-.019.006-.008.02-.03a.531.531 0 0 0 .012-.02l.022-.038c.004-.007.009-.014.012-.022a.139.139 0 0 1 .007-.01l.013-.026.013-.026c.006-.01.01-.022.015-.034l.014-.03a.326.326 0 0 0 .004-.009l.008-.021.013-.035.003-.008.007-.019.013-.04a.438.438 0 0 0 .006-.024l.012-.042.002-.006a1.032 1.032 0 0 0 .013-.061l.005-.023.007-.044.004-.027.005-.041v-.004l.002-.032L18 7.07V7Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h18v14H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default ArrowSmall;