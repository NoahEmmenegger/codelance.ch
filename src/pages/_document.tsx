import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html className="bg-accent">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
                <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
