/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
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
