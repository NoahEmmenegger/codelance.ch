// pages/_document.js

import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html className="bg-accent">
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
