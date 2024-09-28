import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationRU from '../locales/ru.json';
import translationKZ from '../locales/kz.json';

// Поддерживаемые языки
const resources = {
    ru: {
        translation: translationRU
    },
    kz: {
        translation: translationKZ
    }
};

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ru', // язык по умолчанию
        interpolation: {
            escapeValue: false // реактивные значения в строки
        },
        compatibilityJSON: 'v3' // Добавьте эту строку
});

export default i18next;
