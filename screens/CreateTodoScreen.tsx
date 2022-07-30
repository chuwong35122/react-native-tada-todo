import React, { useState } from "react";
import { View, Text, Input, Button, VStack } from "native-base";

import { safeAreaViewStyles } from "../styles/view";
import TodoColorPicker from "../components/Todos/TodoColorPicker";

const CreateTodoScreen = () => {
  return (
    <View style={safeAreaViewStyles.styles}>
      <TodoColorPicker />
      <VStack space={4} mt="20">
        <Input size="lg" placeholder="Todo Title" />
        <Button size="lg" bgColor="blue.500">
          CREATE!
        </Button>
      </VStack>
    </View>
  );
};

export default CreateTodoScreen;
