import Localization from "expo-localization";
import { LanguageTypes } from "../i18n/i18n";
import { getLanguage, setLanguage } from "./settings";

const languageDetectorPlugin = {
  type: "languageDetector",
  async: true,
  init: () => {},
  detect: async function (callback: (lang: string) => void) {
    //get stored language from Async storage
    const language = await getLanguage();

    if (language) {
      //if language was stored before, use this language in the app
      return callback(language);
    } else {
      //if language was not stored yet, use device's locale
      return callback(Localization.locale);
    }
  },
  cacheUserLanguage: async function (language: LanguageTypes) {
    //save a user's language choice in Async storage
    await setLanguage(language);
  },
};

module.exports = { languageDetectorPlugin };
