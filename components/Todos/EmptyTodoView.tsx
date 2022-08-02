import React, { useRef, useEffect } from "react";
import { Button, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { View, Text } from "native-base";

export default function EmptyTodoView() {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  return (
    <View>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: "100%",
          flex: 1,
          backgroundColor: "#f7f7f7",
        }}
        source={require("../../assets/lottie/cat.json")}
      />
      <View alignItems="center" justifyContent="center" px="4">
        <Text fontSize="2xl" fontFamily="Roboto_400Regular">
          Oh wait... It is empty
        </Text>
        <Text fontSize="lg" fontFamily="Roboto_300Light" textAlign="center">
          Create your first To-Do item by pressing the + button!
        </Text>
      </View>
    </View>
  );
}
