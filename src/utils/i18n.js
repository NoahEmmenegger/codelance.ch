import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import locales from '../lang/en.json';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: locales,
        fallbackLng: 'en',

        // prevent 404 resources not found
        supportedLngs: ['de', 'en'],
        // Do not set to prevent 404 resources not found
        // nonExplicitSupportedLngs: true,
    });
export default i18n;
