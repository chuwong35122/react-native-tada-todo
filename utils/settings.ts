import AsyncStorage from "@react-native-async-storage/async-storage";

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
