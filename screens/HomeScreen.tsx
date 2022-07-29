import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button, VStack } from "native-base";
import { safeAreaViewStyles } from "./../utils/styles/view";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationScreenTypes } from "./navigation.types";

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();

  return (
    <SafeAreaView style={safeAreaViewStyles.styles}>
      <VStack space={4}>
        <Text>Home</Text>
        <Button
          onPress={() => navigation.push("CreateTodo")}
          rounded="full"
          colorScheme="success"
        >
          Create a new Todo
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default HomeScreen;
