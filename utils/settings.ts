import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getClearingDaysGap() {
  const res = await AsyncStorage.getItem("@clearing");
  return res ? parseInt(res) : 3; // default = 3
}

export async function setClearingDaysGap(days: number) {
  await AsyncStorage.setItem("@clearing", days.toString());
}

export async function getName() {
  const res = await AsyncStorage.getItem("@name");
  return res ? res : "Someone Amazing";
}

export async function setName(name: string) {
  await AsyncStorage.setItem("@name", name);
}
