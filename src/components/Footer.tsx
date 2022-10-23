import Image from 'next/image';
import Link from 'next/link';
import FooterWave from './common/svg/FooterWave';

export default function Footer() {
    return (
        <div>
            <FooterWave />
            <div className="bg-secondary p-10">
                <Image src="/logo.svg" height={44} width={240} alt="Logo of Codelance GmbH" />
                <div className="flex">
                    <TextBlock>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam
                    </TextBlock>
                    <TextBlock>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam
                    </TextBlock>
                </div>
                <div className="flex justify-between mt-16">
                    <p>Deutsch</p>
                    <div>
                        <FooterLink href="/" name="Home" />
                        <FooterLink href="/services" name="Services" />
                        <FooterLink href="/team" name="Team" />
                        <FooterLink href="/impressum" name="Impressum" />
                        <FooterLink href="/datenschutz" name="Datenschutz" />
                    </div>
                </div>
            </div>
        </div>
    );
}

const FooterLink = ({ href, name }: { href: string; name: string }) => (
    <Link href={href}>
        <a className="text-primary font-semibold text-xl ml-5">{name}</a>
    </Link>
);

const TextBlock = ({ children }: { children: React.ReactNode }) => (
    <div className="max-w-xl mr-10">
        <p>{children}</p>
    </div>
);
