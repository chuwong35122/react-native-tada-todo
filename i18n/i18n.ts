import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import th from "./th.json";
import it from "./it.json";

const { languageDetectorPlugin } = require("../utils/languageDetectorPlugin");

export type LanguageTypes = "en" | "th" | "it";
export const availableLanguages = [
  {
    name: "English",
    symbol: "en",
  },
  {
    name: "ไทย",
    symbol: "th",
  },
  {
    name: "Italiano",
    symbol: "it",
  },
];

const resources = {
  en: { translation: en },
  th: { translation: th },
  it: { translation: it },
};

i18n

  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    resources,
    fallbackLng: "en",
    compatibilityJSON: "v3",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
