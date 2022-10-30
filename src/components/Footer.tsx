import Image from 'next/image';
import Link from 'next/link';
import FooterWave from './common/svg/FooterWave';

export default function Footer() {
    return (
        <footer>
            <FooterWave />
            <div className="bg-secondary p-10">
                <div className="select-none">
                    <Image
                        className="select-none pointer-events-none"
                        src="/logo.svg"
                        height={44}
                        width={240}
                        alt="Logo of Codelance GmbH"
                    />
                </div>
                <div className="flex flex-col lg:flex-row">
                    <TextBlock>
                        <b>Codelance GmbH</b>
                        <p>Kirchgasse 3</p>
                        <p>6340 Baar</p>
                        <p>Switzerland</p>
                        <p>info@codelance.ch</p>
                    </TextBlock>
                    <TextBlock>
                        <p>
                            We are a motivated Swiss Developer team which would be happy to help you realize your dream
                            IT project. Never think that a project would be impossible. We are happy to connect with you
                            and discuss your project idea.
                        </p>
                    </TextBlock>
                </div>
                <div className="flex flex-col lg:flex-row justify-between mt-16">
                    <p>🇨🇭 Deutsch</p>
                    <div className="m-auto lg:mr-0">
                        <FooterLink href="/" name="Home" />
                        <FooterLink href="/services" name="Services" />
                        <FooterLink href="/team" name="Team" />
                        <FooterLink href="/impressum" name="Impressum" />
                        <FooterLink href="/datenschutz" name="Datenschutz" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

const FooterLink = ({ href, name }: { href: string; name: string }) => (
    <Link href={href}>
        <a className="text-primary font-semibold text-xs ml-2 lg:text-xl lg:ml-5">{name}</a>
    </Link>
);

const TextBlock = ({ children }: { children: React.ReactNode }) => (
    <div className="mr-10 py-5 lg:w-1/2">{children}</div>
);
