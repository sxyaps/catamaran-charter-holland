import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';


// Initialize i18n with HTTP backend
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development',
    saveMissing: true,
    missingKeyHandler: (lng, ns, key) => console.warn(`Missing translation for key: ${key} [${lng}:${ns}]`),
    ns: ['translation'],
    defaultNS: 'translation',
    backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
    fallbackLng: {
      nl: ['nl', 'en'],
      de: ['de', 'en'],
      en: ['en']
    },
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
  });

export default i18n;
