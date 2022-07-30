import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Input, Button, VStack } from "native-base";

import { safeAreaViewStyles } from "./../utils/styles/view";
import { TodoTypeTitle } from "../interfaces/todo.interface";
import TodoColorPicker from "../components/Todos/TodoColorPicker";

const CreateTodoScreen = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState<TodoTypeTitle>("Personal");
  return (
    <View style={safeAreaViewStyles.styles}>
      <TodoColorPicker />
      <VStack space={4} mt="20">
        <Input size="md" placeholder="Todo Title" />
        <Button colorScheme="success">Create!</Button>
      </VStack>
    </View>
  );
};

export default CreateTodoScreen;
