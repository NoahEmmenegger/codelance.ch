import { Metadata } from 'next';
import { i18n } from './../../../i18-config';

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Root({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
    return (
        <html className="bg-accent" lang={params.lang}>
            <body>{children}</body>
        </html>
    );
}

export const metadata: Metadata = {
    title: 'Codelance GmbH',
    description: 'Codelance GmbH',
    authors: [{ name: 'Noah Emmenegger' }],
    metadataBase: new URL('https://www.codelance.ch'),
    openGraph: {
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Codelance GmbH',
        images: [
            {
                url: 'Codelance_logo.png',
            },
        ],
    },
    robots: 'all',
};
