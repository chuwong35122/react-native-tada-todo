import React from "react";
import { Fab, Text, Button, ScrollView } from "native-base";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationScreenTypes } from "./navigation.types";
import { AntDesign } from "@expo/vector-icons";
import { clearStorage } from "../utils/todo";
import { SafeAreaView } from "react-native-safe-area-context";
import PriorityTodoList from "../components/Todos/PriorityTodoList";

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Text fontSize="20" ml="2" style={{ fontFamily: "Roboto_500Medium" }}>
          My Tada To-Do
        </Text>
        <PriorityTodoList priority="@high" title="HIGHEST PRIORITY" />
        <PriorityTodoList priority="@med" title="MEDIUM PRIORITY" />
        <PriorityTodoList priority="@low" title="LOWEST PRIORITY" />
      </ScrollView>
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
    </SafeAreaView>
  );
};

export default HomeScreen;
