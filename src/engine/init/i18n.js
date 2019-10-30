import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Languages
import ru from '../../static/i18n/ru.json';
import en from '../../static/i18n/en.json';

i18n
  .use(initReactI18next)
  .init({
    ru,
    en,
    lng: 'ru',
    fallbackLng: 'ru',
    debug: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
