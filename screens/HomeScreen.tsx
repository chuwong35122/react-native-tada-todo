import React from "react";
import { Button, VStack, View } from "native-base";
import { safeAreaViewStyles } from "./../utils/styles/view";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationScreenTypes } from "./navigation.types";
import TodoTypeList from "../components/TodoTypes/TodoTypeList";
import TodoList from "../components/Todos/TodoList";

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();

  return (
    <View>
      <TodoTypeList />
      <View style={safeAreaViewStyles.styles}>
        <VStack space={4}>
          <TodoList />
          <Button
            onPress={() => navigation.push("CreateTodo")}
            rounded="full"
            colorScheme="success"
          >
            Create a new Todo
          </Button>
        </VStack>
      </View>
    </View>
  );
};

export default HomeScreen;
