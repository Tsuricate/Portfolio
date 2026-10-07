import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// FR
import commonFr from './locales/fr/common.json';
import homeFr from './locales/fr/home.json';
import aboutFr from './locales/fr/about.json';
import projectsFr from './locales/fr/projects.json';

// EN
import commonEn from './locales/en/common.json';
import homeEn from './locales/en/home.json';
import aboutEn from './locales/en/about.json';
import projectsEn from './locales/en/projects.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        common: commonFr,
        home: homeFr,
        about: aboutFr,
        projects: projectsFr,
      },
      en: {
        common: commonEn,
        home: homeEn,
        about: aboutEn,
        projects: projectsEn,
      },
    },
    fallbackLng: 'fr',
    defaultNS: 'common',
    ns: ['common', 'home'],
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['navigator', 'htmlTag'],
      caches: [],
    },
  });

export default i18n;
