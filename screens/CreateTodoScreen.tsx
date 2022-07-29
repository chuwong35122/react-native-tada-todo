import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Input, Button, VStack } from "native-base";

import { safeAreaViewStyles } from "./../utils/styles/view";

const CreateTodoScreen = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  return (
    <SafeAreaView style={safeAreaViewStyles.styles}>
      <VStack space={4}>
        <Input size="md" placeholder="Todo Title" />
        <Button colorScheme="success">Create!</Button>
      </VStack>
    </SafeAreaView>
  );
};

export default CreateTodoScreen;
