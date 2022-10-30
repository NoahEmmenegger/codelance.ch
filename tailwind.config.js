/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                primary: '#2C3359',
                secondary: '#CBCEDE',
                tertiary: '#E3E5F1',
                quaternary: '#6e63ad',
                accent: '#F6F6F6',
            },
            rotate: {
                30: '30deg',
            },
        },
    },
    plugins: [],
};
