
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: { loadPath: '/mixer/assets/i18n/{{lng}}/{{ns}}.json' },
        fallbackLng: 'en',
        debug: process.env.NODE_ENV === 'development',

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        supportedLngs: [
            'en',
        ],
        ns: 'core',
        defaultNS: 'core',
    });