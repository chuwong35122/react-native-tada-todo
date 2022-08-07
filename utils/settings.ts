import AsyncStorage from "@react-native-async-storage/async-storage";
import { LanguageTypes } from "../i18n/i18n";

export async function getIsFirstTime() {
  const res = await AsyncStorage.getItem("@first");
  return res ? false : true;
}

export async function setIsFirstTime() {
  await AsyncStorage.setItem("@first", "false");
}

export async function clearStorage() {
  await AsyncStorage.multiRemove(["@first", "@med", "@high"]);
}

export async function getLanguage() {
  return await AsyncStorage.getItem("@language");
}

export async function setLanguage(lang: LanguageTypes) {
  await AsyncStorage.setItem("@language", lang);
}
