import i18n from 'i18next';
import { initReactI18next } from 'react-18next';

import enLanguage from './locales/en/en.json';
import frLanguage from './locales/fr/fr.json';

// the translation 
// (tip move them in a JSON files and import them all,
// or even better, manage them separated from your code)

const resources = {
    en: {
        translation: enLanguage
    },
    fr: {
        translation: frLanguage
    },
};

i18n 
    .use(initReactI18next)  // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: 'fr', // use fr if detected lng is not avaible
        lng: 'fr', // language to use, more informmation here: https://...

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });