import { getDictionary } from '@/get-dictionary';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Locale } from '../../../../i18-config';
import Button from './common/Button';
import ArrowLittleSVG from './common/svg/ArrowLittle';
import HamburgerSVG from './common/svg/Hamburger';

export default async function Header({ lang }: { lang: string }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    });

    useEffect(() => {
        if (isMenuOpen) {
            setIsMenuOpen(!isMenuOpen);
        }
    }, [router.asPath]);

    const translations = await getDictionary(lang as Locale);

    const MobileHeaderLink = ({ href, name }: { href: string; name: string }) => {
        return (
            <Link
                href={href}
                className="p-5 font-bold text-2xl flex lg:font-normal lg:p-0 lg:ml-10 lg:text-xl select-none"
                onClick={() => (href === router.asPath ? setIsMenuOpen(false) : undefined)}
            >
                {name}
                <ArrowLittleSVG className="my-auto ml-2 -rotate-90 lg:hidden" />
            </Link>
        );
    };

    return (
        <header>
            <div className="absolute w-1/2 max-w-[383px] max-h-[125] -z-10">
                <svg className="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 383 125">
                    <path
                        className="fill-tertiary"
                        d="M-80.065 47.945c-54.766-105.71 28.167-132.167 84.5-137 90.5-14.167 260.547.595 339 64 93.249 75.363 0 128.708-67.5 142-93.251 18.363-318.25 3.863-356-69Z"
                    />
                </svg>
            </div>
            <div className="flex justify-between items-center p-5 pl-8 lg:p-10">
                <Link href="/" className="w-1/3 select-none">
                    <Image
                        priority
                        src="/images/logo.svg"
                        className="select-none pointer-events-none"
                        height={44}
                        width={240}
                        alt="Logo of Codelance GmbH"
                    />
                </Link>
                <div className="hidden lg:flex w-1/3 justify-center">
                    <HeaderLink href="/" name={translations.common.nav_1} />
                    <HeaderLink href="/services" name={translations.common.nav_2} />
                    <HeaderLink href="/team" name={translations.common.nav_3} />
                </div>
                <div className="hidden lg:flex w-1/3 m-auto ml-auto justify-end">
                    <Link href="/contact">
                        <Button text={translations.common.contact_us} />
                    </Link>
                </div>
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-10 z-30 lg:hidden">
                    <HamburgerSVG isOpen={isMenuOpen} />
                </div>
                {isMenuOpen && (
                    <div className="absolute top-0 left-0 w-full h-full bg-tertiary overflow-hidden z-20 lg:hidden">
                        <div className="h-full p-10 pt-20 flex flex-col lg:justify-center lg:items-center">
                            <MobileHeaderLink href="/" name="Home" />
                            <MobileHeaderLink href="/services" name="Services" />
                            <MobileHeaderLink href="/team" name="Team" />
                            <MobileHeaderLink href="/contact" name="Contact us" />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

function HeaderLink({ href, name }: { href: string; name: string }) {
    return (
        <Link href={href} legacyBehavior>
            <motion.a
                href={href}
                className="p-5 font-bold text-2xl flex lg:font-normal lg:p-0 lg:ml-10 lg:text-xl select-none"
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 50 }}
            >
                {name}

                <ArrowLittleSVG className="my-auto ml-2 -rotate-90 lg:hidden" />
            </motion.a>
        </Link>
    );
}
