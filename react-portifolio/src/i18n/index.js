import i18n  from 'i18next'
import { Translation, initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng:"en",
  {
    interpolation:{
      escapeValue:false
    },
    resources:{
      en:{
        Translation:{
        welcome:"Welcome to the best webapp in the world",
      },},
      pt:{
        Translation:{
        welcome:"Welcome to the best webapp in the world",
      },},
    },
  },
});
