import React, { useState, useContext } from "react";
import { View, Input, Button, VStack } from "native-base";
import { v4 as uuidv4 } from "uuid";
import { safeAreaViewStyles } from "../styles/view";
import TodoColorPicker from "../components/Todos/TodoColorPicker";
import { TodoColor, TodoItemType } from "../interfaces/todo.interface";
import "react-native-get-random-values";
import { StackNavigationScreenTypes } from "./navigation.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { addTodo } from "../utils/todo";
import { TodoContext } from "../contexts/TodoContext";

const CreateTodoScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();

  const [input, setInput] = useState("");
  const [selectedColor, setSelectedColor] = useState<TodoColor>("blue");
  const { setTodoLength } = useContext(TodoContext);

  function handleChangeInput(val: string) {
    setInput(val);
  }

  async function handleSubmit() {
    if (!input) {
      return;
    }

    const id = uuidv4();
    const newTodo: TodoItemType = {
      id,
      todo: input,
      date: new Date(),
      status: false,
      color: selectedColor,
    };

    await addTodo(newTodo);
    setTodoLength((prev) => prev + 1);
    navigation.goBack();
  }
  return (
    <View style={safeAreaViewStyles.styles}>
      <TodoColorPicker
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <VStack space={4} mt="20">
        <Input
          size="lg"
          placeholder="Todo Title"
          value={input}
          onChangeText={(val) => handleChangeInput(val)}
        />
        <Button size="lg" bgColor="blue.500" onPress={handleSubmit}>
          CREATE!
        </Button>
      </VStack>
    </View>
  );
};

export default CreateTodoScreen;
