import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Input, Button, VStack } from "native-base";

import { safeAreaViewStyles } from "./../utils/styles/view";
import TodoTypeCreateList from "../components/TodoTypes/TodoTypeCreateList";
import { TodoTypeTitle } from "../interfaces/todo.interface";

const CreateTodoScreen = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState<TodoTypeTitle>("Personal");
  return (
    <View style={safeAreaViewStyles.styles}>
      <TodoTypeCreateList />
      <VStack space={4}>
        <Input size="md" placeholder="Todo Title" />
        <Button colorScheme="success">Create!</Button>
      </VStack>
    </View>
  );
};

export default CreateTodoScreen;
