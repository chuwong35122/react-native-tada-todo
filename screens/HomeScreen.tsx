import React from "react";
import { Fab, VStack, View } from "native-base";
import { safeAreaViewStyles } from "./../utils/styles/view";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationScreenTypes } from "./navigation.types";
import TodoTypeList from "../components/TodoTypes/TodoTypeList";
import TodoList from "../components/Todos/TodoList";
import { AntDesign } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();

  // const { width, height } = useWindowDimensions();

  return (
    <View height="100%">
      <TodoTypeList />
      <View style={safeAreaViewStyles.styles}>
        <VStack space={4}>
          <TodoList />
          {/* <Button
            rounded="full"
            colorScheme="success"
            >
            Create a new Todo
          </Button> */}
        </VStack>
      </View>
      <Fab
        backgroundColor="blue.500"
        size="lg"
        icon={<AntDesign name="plus" size={24} color="white" />}
        renderInPortal={false}
        onPress={() => navigation.push("CreateTodo")}
        position="absolute"
      />
    </View>
  );
};

export default HomeScreen;
