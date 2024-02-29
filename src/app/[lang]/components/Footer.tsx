import Image from 'next/image';
import Link from 'next/link';
import useTranslation from '../hooks/useTranslations';
import LanguageSwitcher from './common/LanguageSwitcher';
import FooterWave from './common/svg/FooterWave';

export default function Footer() {
    const { t } = useTranslation('common');
    return (
        <footer>
            <FooterWave />
            <div className="bg-tertiary p-10">
                <div className="select-none">
                    <Image
                        className="select-none pointer-events-none"
                        src="/images/logo.svg"
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

                <div className="lg:hidden">
                    <LanguageSwitcher />
                </div>

                <div className="flex flex-col justify-between mt-10 lg:flex-row-reverse">
                    <div className="flex flex-wrap">
                        <FooterLink href="/" name={t('nav_1')} />
                        <FooterLink href="/services" name={t('nav_2')} />
                        <FooterLink href="/team" name={t('nav_3')} />
                        <FooterLink href="/terms-of-service" name={t('nav_4')} />
                        <FooterLink href="/privacy-policy" name={t('nav_5')} />
                    </div>
                    <div className="hidden my-auto lg:flex">
                        <LanguageSwitcher />
                        <div className="ml-5">
                            <CopyRight />
                        </div>
                    </div>
                    <div className="mt-10 justify-center flex lg:hidden ">
                        <CopyRight />
                    </div>
                </div>
            </div>
        </footer>
    );
}

const FooterLink = ({ href, name }: { href: string; name: string }) => (
    <Link href={href} className="text-primary mx-auto my-1 font-semibold lg:text-xl lg:ml-5">
        {name}
    </Link>
);

const TextBlock = ({ children }: { children: React.ReactNode }) => (
    <div className="mr-10 py-5 lg:w-1/2">{children}</div>
);

const CopyRight = () => (
    <small className="text-xs my-auto m-auto">
        ©
        {new Date().toLocaleDateString('en-us', {
            year: 'numeric',
        })}
        {` `}
        Codelance GmbH. All rights reserved.
    </small>
);
