import Image from 'next/image';
import Button from './common/Button';

export default function Header() {
    return (
        <header>
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
        <a href={href} className="ml-10">
            {name}
        </a>
    );
}
