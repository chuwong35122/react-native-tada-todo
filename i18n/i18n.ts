import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import th from "./th.json";

const { languageDetectorPlugin } = require("../utils/languageDetectorPlugin");

export type LanguageTypes = "en" | "th";
export const availableLanguages = [
  {
    name: "English",
    symbol: "en",
  },
  {
    name: "ไทย",
    symbol: "th",
  },
];

const resources = {
  en: { translation: en },
  th: { translation: th },
};

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
