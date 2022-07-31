import React from "react";
import { Fab, View, Text, Button } from "native-base";
import { safeAreaViewStyles } from "../styles/view";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationScreenTypes } from "./navigation.types";
import TodoList from "../components/Todos/TodoList";
import { AntDesign } from "@expo/vector-icons";
import HomeColorPicker from "../components/Todos/HomeColorPicker";
import { clearStorage } from "../utils/todo";

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();

  return (
    <View height="100%">
      <View style={safeAreaViewStyles.styles}>
        <Text fontSize="20" fontWeight="bold" mb="2">
          My Todos
        </Text>
        <HomeColorPicker />
        <TodoList />
      </View>
      <Fab
        backgroundColor="blue.500"
        size="lg"
        icon={<AntDesign name="plus" size={24} color="white" />}
        renderInPortal={false}
        onPress={() => navigation.push("CreateTodo")}
        position="absolute"
      />

      <Button onPress={clearStorage} position="absolute" bottom="0">
        Clear
      </Button>
    </View>
  );
};

export default HomeScreen;
