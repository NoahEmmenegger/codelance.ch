import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import FooterWave from './common/svg/FooterWave';

export default function Footer() {
    const { t } = useTranslation('common');
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
                        <p>{t('footerText')}</p>
                    </TextBlock>
                </div>
                <div className="flex flex-col lg:flex-row justify-between mt-16">
                    <p>🇨🇭 Deutsch</p>
                    <small className="text-xs my-auto ml-5">
                        ©
                        {new Date().toLocaleDateString('en-us', {
                            year: 'numeric',
                        })}
                        {` `}
                        Codelance GmbH. All rights reserved.
                    </small>
                    <div className="m-auto lg:mr-0">
                        <FooterLink href="/" name={t('nav_1')} />
                        <FooterLink href="/services" name={t('nav_2')} />
                        <FooterLink href="/team" name={t('nav_3')} />
                        <FooterLink href="/impressum" name={t('nav_4')} />
                        <FooterLink href="/datenschutz" name={t('nav_5')} />
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
