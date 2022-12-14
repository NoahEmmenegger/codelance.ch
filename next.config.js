/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['en-US', 'de'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'en-US',
    },
    async redirects() {
        return [
            {
                source: '/_404',
                destination: '/notFound',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
