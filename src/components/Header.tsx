import Image from 'next/image';
import Button from './common/Button';

export default function Header() {
    return (
        <header>
            <div className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" width="383" height="125" fill="none" viewBox="0 0 383 125">
                    <path
                        fill="#E3E5F1"
                        d="M-80.065 47.945c-54.766-105.71 28.167-132.167 84.5-137 90.5-14.167 260.547.595 339 64 93.249 75.363 0 128.708-67.5 142-93.251 18.363-318.25 3.863-356-69Z"
                    />
                </svg>
            </div>
            <div className="flex justify-between items-center p-10">
                <div className="w-1/3">
                    <Image src="/logo.svg" height={44} width={240} alt="Logo of Codelance GmbH" />
                </div>
                <div className="flex w-1/3 justify-center">
                    <HeaderLink href="/" name="Home" />
                    <HeaderLink href="/services" name="Services" />
                    <HeaderLink href="/team" name="Team" />
                </div>
                <div className="w-1/3 m-auto flex ml-auto justify-end">
                    <Button text="contact us" />
                </div>
            </div>
        </header>
    );
}

function HeaderLink({ href, name }: { href: string; name: string }) {
    return (
        <a href={href} className="ml-10 text-xl">
            {name}
        </a>
    );
}
