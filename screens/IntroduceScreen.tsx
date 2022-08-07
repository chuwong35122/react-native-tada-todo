import { Button, Text, View } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { useWindowDimensions } from "react-native";
import { setIsFirstTime } from "../utils/settings";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigationScreenTypes } from "./navigation.types";
import { useNavigation } from "@react-navigation/native";
import LanguageSelector from "../components/ui/LanguageSelector";
import { useTranslation } from "react-i18next";

const IntroduceScreen = () => {
  const { width, height } = useWindowDimensions();
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();

  const { t } = useTranslation();

  async function handlePress() {
    await setIsFirstTime();
    navigation.replace("Home");
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View width={width} height={height} px="6" justifyContent="space-between">
        <View>
          <Text fontSize="2xl" fontFamily="Roboto_400Regular">
            {t("introduce.welcome")}
          </Text>
          <Text fontSize="4xl" fontFamily="Roboto_500Medium" color="violet.600">
            TADA TO-DO
          </Text>
          <Text fontSize="lg" fontFamily="Roboto_400Regular">
            {t("introduce.desc")}
          </Text>
          <View w="full" alignItems="center">
            <LottieView
              autoPlay
              loop
              style={{
                width: "100%",
                height: 360,
              }}
              source={require("../assets/lottie/welcome.json")}
            />
          </View>
        </View>
        <View>
          <Text>{t("introduce.selectLang")}</Text>
          <LanguageSelector />
        </View>
        <Button backgroundColor="black" size="lg" onPress={handlePress} mb="20">
          {t("introduce.btn")}
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default IntroduceScreen;
