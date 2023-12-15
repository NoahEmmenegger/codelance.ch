import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                primary: '#48317B',
                secondary: '#ACA0C7',
                tertiary: '#BEB5D2',
                quaternary: '#6e63ad',
                quinary: '#E0DDE9',
                accent: '#F6F6F6',
            },
            rotate: {
                30: '30deg',
            },
        },
    },
    plugins: [],
};
export default config;
