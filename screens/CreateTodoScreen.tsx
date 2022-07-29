import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "native-base";
import { safeAreaViewStyles } from "./../utils/styles/view";

const CreateTodoScreen = () => {
  return (
    <SafeAreaView style={safeAreaViewStyles.styles}>
      <Text>CreateTodoScreen</Text>
    </SafeAreaView>
  );
};

export default CreateTodoScreen;
