import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html className="bg-accent">
            <Head>
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="author" content="Noah Emmenegger" />
                <meta name="theme-color" content="#2C3359" />
                <meta property="og:image" content="https://www.codelance.ch/images/Codelance_logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="Codelance GmbH" />
                <meta property="twitter:image" content="https://www.codelance.ch/images/Codelance_logo.png" />
                <meta name="robots" content="all" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
