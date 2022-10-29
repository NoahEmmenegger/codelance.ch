import Image from 'next/image';
import { useState } from 'react';
import Button from './common/Button';
import CloseSVG from './common/svg/Close';
import HamburgerSVG from './common/svg/Hamburger';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header>
            <div className="absolute w-1/2 max-w-[383px] max-h-[125]">
                <svg className="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 383 125">
                    <path
                        fill="#E3E5F1"
                        d="M-80.065 47.945c-54.766-105.71 28.167-132.167 84.5-137 90.5-14.167 260.547.595 339 64 93.249 75.363 0 128.708-67.5 142-93.251 18.363-318.25 3.863-356-69Z"
                    />
                </svg>
            </div>
            <div className="flex justify-between items-center p-5 pl-8 lg:p-10">
                <div className="w-1/3">
                    <Image priority src="/logo.svg" className="" height={44} width={240} alt="Logo of Codelance GmbH" />
                </div>
                <div className="hidden lg:flex w-1/3 justify-center">
                    <HeaderLink href="/" name="Home" />
                    <HeaderLink href="/services" name="Services" />
                    <HeaderLink href="/team" name="Team" />
                </div>
                <div className="hidden lg:flex w-1/3 m-auto ml-auto justify-end">
                    <Button text="contact us" />
                </div>
                <div onClick={() => setIsMenuOpen(true)} className="w-10 cursor-pointer lg:hidden">
                    <HamburgerSVG />
                </div>
                {isMenuOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-tertiary z-50 lg:hidden">
                        <div className="flex justify-end p-5">
                            <div onClick={() => setIsMenuOpen(false)} className="w-10 cursor-pointer">
                                <CloseSVG />
                            </div>
                        </div>
                        <div className="h-full flex flex-col lg:justify-center lg:items-center">
                            <HeaderLink href="/" name="Home" />
                            <HeaderLink href="/services" name="Services" />
                            <HeaderLink href="/team" name="Team" />
                            <HeaderLink href="/" name="contact us" />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

function HeaderLink({ href, name }: { href: string; name: string }) {
    return (
        <a href={href} className="p-10 text-5xl uppercase lg:normal-case lg:p-0 lg:ml-10 lg:text-xl">
            {name}
        </a>
    );
}
