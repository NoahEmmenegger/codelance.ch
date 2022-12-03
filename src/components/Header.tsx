import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from './common/Button';
import ArrowLittleSVG from './common/svg/ArrowLittle';
import HamburgerSVG from './common/svg/Hamburger';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    });

    const { t } = useTranslation('common');

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
                <Link href="/">
                    <a className="w-1/3 select-none">
                        <Image
                            priority
                            src="/logo.svg"
                            className="select-none pointer-events-none"
                            height={44}
                            width={240}
                            alt="Logo of Codelance GmbH"
                        />
                    </a>
                </Link>

                <div className="hidden lg:flex w-1/3 justify-center">
                    <HeaderLink href="/" name={t('nav_1')} />
                    <HeaderLink href="/services" name={t('nav_2')} />
                    <HeaderLink href="/team" name={t('nav_3')} />
                </div>
                <div className="hidden lg:flex w-1/3 m-auto ml-auto justify-end">
                    <Link href="/contact">
                        <a>
                            <Button text={t('contact_us')} />
                        </a>
                    </Link>
                </div>
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-10 z-20 lg:hidden">
                    <HamburgerSVG isOpen={isMenuOpen} />
                </div>
                {isMenuOpen && (
                    <div className="absolute top-0 left-0 w-full h-full bg-tertiary overflow-hidden z-10 lg:hidden">
                        <div className="h-full p-10 pt-20 flex flex-col lg:justify-center lg:items-center">
                            <HeaderLink href="/" name="Home" onClick={() => setIsMenuOpen(false)} />
                            <HeaderLink href="/services" name="Services" onClick={() => setIsMenuOpen(false)} />
                            <HeaderLink href="/team" name="Team" onClick={() => setIsMenuOpen(false)} />
                            <HeaderLink href="/contact" name="Contact us" onClick={() => setIsMenuOpen(false)} />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

function HeaderLink({ href, name, onClick }: { href: string; name: string; onClick?: () => void }) {
    return (
        <Link href={href}>
            <motion.a
                className="p-5 font-bold text-2xl flex lg:font-normal lg:p-0 lg:ml-10 lg:text-xl select-none"
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 50 }}
                onClick={onClick}
            >
                {name}

                <ArrowLittleSVG className="my-auto ml-2 -rotate-90 lg:hidden" />
            </motion.a>
        </Link>
    );
}
