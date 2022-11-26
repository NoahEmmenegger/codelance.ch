import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Triangle from './svg/Triangle';

export default function LanguageSwitcher() {
    const router = useRouter();

    const { locales, locale: activeLocale } = router;

    const [isOpen, setIsOpen] = useState(false);

    const otherLocales = locales?.filter((locale) => locale !== activeLocale && locale !== 'default');

    return (
        <div className="relative">
            <div className="cursor-pointer flex" onClick={() => setIsOpen(!isOpen)}>
                {convertLanguageToEmoji(activeLocale)}
                <div className="m-auto ml-2 lg:ml-10">
                    <Triangle />
                </div>
            </div>
            {isOpen && (
                <div className="absolute max-h-80 w-full bg-white bottom-full right-0 border rounded-md text-black">
                    {otherLocales &&
                        otherLocales.map((locale) => {
                            const { pathname, query, asPath } = router;

                            return (
                                <Link key={locale} href={{ pathname, query }} as={asPath} locale={locale}>
                                    <a>
                                        <div
                                            className="cursor-pointer hover:bg-primaryDark p-5 "
                                            onClick={() => {
                                                setIsOpen(false);
                                            }}
                                        >
                                            {convertLanguageToEmoji(locale)}
                                        </div>
                                    </a>
                                </Link>
                            );
                        })}
                </div>
            )}
        </div>
    );
}

export function convertLanguageToEmoji(language: string | undefined) {
    switch (language) {
        case 'de':
            return '🇨🇭 Deutsch';
        case 'en':
            return '🇬🇧 English';
        default:
            return '🇬🇧 English';
    }
}
