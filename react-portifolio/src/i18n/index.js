import i18n  from 'i18next'
import {  initReactI18next } from 'react-i18next'
import enJson from "./translations/en.json"
import ptBRJson from "./translation/ptBR.json";
import App from '../app';

i18n.use(initReactI18next).init({
  fallbackLng:"en",
  interpolation:
    {
      escapeValue:false
    },
    resources: {
      en:enJson,
      ptBr:ptBRJson,
    },
});

export default App;


const { t,i18n }= useTranslation();
const changeLanguage=(lng) =>{
  i18n.changeLanguage(lng);
}
