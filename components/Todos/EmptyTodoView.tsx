import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";
import { View, Text } from "native-base";
import Animated, { ZoomIn } from "react-native-reanimated";
import { useTranslation } from "react-i18next";

export default function EmptyTodoView() {
  const { t } = useTranslation();

  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  return (
    <Animated.View entering={ZoomIn}>
      <LottieView
        autoPlay
        loop
        ref={animation}
        style={{
          width: "100%",
          flex: 1,
          backgroundColor: "#fff",
        }}
        source={require("../../assets/lottie/cat.json")}
      />
      <View alignItems="center" justifyContent="center" px="4">
        <Text fontSize="2xl" fontFamily="Roboto_400Regular">
          {t("home.emptyTodo")}
        </Text>
        <Text fontSize="lg" fontFamily="Roboto_300Light" textAlign="center">
          {t("home.createTodoDesc")}
        </Text>
      </View>
    </Animated.View>
  );
}
