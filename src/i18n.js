import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files directly
import enTranslation from './locales/en/translation.json';
import nlTranslation from './locales/nl/translation.json';
import deTranslation from './locales/de/translation.json';

const resources = {
  en: {
    translation: enTranslation
  },
  nl: {
    translation: nlTranslation
  },
  de: {
    translation: deTranslation
  }
};

// Initialize i18n with direct resource loading
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development',
    resources,
    lng: 'nl', // default language
    fallbackLng: {
      nl: ['nl', 'en'],
      de: ['de', 'en'],
      en: ['en']
    },
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: { 
      escapeValue: false 
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
  });

export default i18n;
