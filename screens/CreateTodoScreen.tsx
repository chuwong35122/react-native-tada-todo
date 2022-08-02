import React, { useState, useContext, useEffect } from "react";
import { View, Input, Button, VStack, Text, Select } from "native-base";
import { v4 as uuidv4 } from "uuid";
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
import { SafeAreaView } from "react-native-safe-area-context";

const CreateTodoScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();

  const [input, setInput] = useState("");
  const [titlePlaceholder, setTitlePlaceholder] = useState("");
  const [priority, setPriority] = useState<PriorityTodoKey>("@high");
  const [selectedColor, setSelectedColor] = useState<TodoColorName>("Blue");
  const { setHighTodoList, setMedTodoList, setLowTodoList } =
    useContext(TodoContext);

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

    const todoList = await addTodo(newTodo, priority);
    if (priority === "@high") {
      setHighTodoList(todoList);
    } else if (priority === "@med") {
      setMedTodoList(todoList);
    } else if (priority === "@low") {
      setLowTodoList(todoList);
    }
    navigation.goBack();
  }
  return (
    <SafeAreaView
      style={{ backgroundColor: "#fff", paddingTop: 20, paddingHorizontal: 4 }}
    >
      <VStack space={4} mx="2">
        <View>
          <Text fontSize="2xl" fontFamily="Roboto_500Medium" lineHeight="xs">
            Create a To-Do
          </Text>
          <Text fontFamily="Roboto_300Light">
            You can create a To-Do item here!
          </Text>
        </View>

        <View>
          <Text fontFamily="Roboto_400Regular">Set a title</Text>
          <Input
            size="lg"
            placeholder={titlePlaceholder}
            value={input}
            autoFocus
            onChangeText={(val) => handleChangeInput(val)}
            placeholderTextColor="gray.500"
            _focus={{
              borderColor: "#000",
              borderWidth: 2,
              backgroundColor: "coolGray.200",
            }}
          />
        </View>
        <View>
          <Text fontFamily="Roboto_400Regular">Set priority</Text>
          <Select
            selectedValue={priority}
            accessibilityLabel="Choose To-Do priority"
            placeholder="Priority"
            _selectedItem={{
              bg: "gray.200",
              borderRadius: "lg",
              endIcon: <Feather name="check" size={24} color="black" />,
            }}
            fontFamily="Roboto_400Regular"
            fontSize="lg"
            onValueChange={(value) => setPriority(value as PriorityTodoKey)}
          >
            <Select.Item label="Highest" value="@high" />
            <Select.Item label="Medium" value="@med" />
            <Select.Item label="Lowest" value="@low" />
          </Select>
        </View>
        <View>
          <Text fontFamily="Roboto_400Regular">Add a color</Text>
          <TodoColorPicker
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </View>
        <Button
          size="lg"
          bgColor="black"
          color="white"
          mt="10"
          onPress={handleSubmit}
        >
          CREATE!
        </Button>
        <Button
          size="lg"
          variant="outline"
          _text={{
            color: "black",
          }}
          _pressed={{
            backgroundColor: "gray.200",
            borderColor: "gray.300",
          }}
          _focus={{
            backgroundColor: "gray.200",
          }}
          onPress={() => navigation.goBack()}
        >
          BACK
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default CreateTodoScreen;
