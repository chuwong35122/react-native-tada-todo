import React, { useState, useContext, useEffect } from "react";
import { View, Input, Button, VStack, Text, Select } from "native-base";
import { v4 as uuidv4 } from "uuid";
import { safeAreaViewStyles } from "../styles/view";
import TodoColorPicker from "../components/Todos/TodoColorPicker";
import {
  PriorityTodoKey,
  TodoColorName,
  TodoItemType,
} from "../interfaces/todo.interface";
import "react-native-get-random-values";
import { StackNavigationScreenTypes } from "./navigation.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { addTodo } from "../utils/todo";
import { todoPlaceholder } from "../constants/placeholder";
import { TodoContext } from "../contexts/TodoContext";
import { Feather } from "@expo/vector-icons";

const CreateTodoScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();

  const [input, setInput] = useState("");
  const [titlePlaceholder, setTitlePlaceholder] = useState("");
  const [priority, setPriority] = useState<PriorityTodoKey>("@high");
  const [selectedColor, setSelectedColor] = useState<TodoColorName>("Blue");
  const { setIsTodoUpdate } = useContext(TodoContext);

  // random funny placeholder
  useEffect(() => {
    const rndIndex = Math.floor(Math.random() * todoPlaceholder.length);
    setTitlePlaceholder(todoPlaceholder[rndIndex]);
  }, []);

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
      priority,
      todo: input,
      date: new Date(),
      status: false,
      color: selectedColor,
    };

    await addTodo(newTodo, priority);
    setIsTodoUpdate((prev) => !prev);
    navigation.goBack();
  }
  return (
    <View style={safeAreaViewStyles.styles}>
      <VStack space={4}>
        <View>
          <Text>To-Do title</Text>
          <Input
            size="lg"
            placeholder={titlePlaceholder}
            value={input}
            onChangeText={(val) => handleChangeInput(val)}
          />
        </View>
        <View>
          <Text>Set priority</Text>
          <Select
            selectedValue={priority}
            accessibilityLabel="Choose To-Do priority"
            placeholder="Priority"
            _selectedItem={{
              bg: "blue.100",
              borderRadius: "lg",
              endIcon: <Feather name="check" size={24} color="black" />,
            }}
            mt={1}
            onValueChange={(value) => setPriority(value as PriorityTodoKey)}
          >
            <Select.Item label="Highest" value="@high" />
            <Select.Item label="Medium" value="@med" />
            <Select.Item label="Lowest" value="@low" />
          </Select>
        </View>
        <View>
          <Text>Add a color</Text>
          <TodoColorPicker
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </View>
        <Button size="lg" bgColor="blue.500" onPress={handleSubmit}>
          CREATE!
        </Button>
      </VStack>
    </View>
  );
};

export default CreateTodoScreen;
