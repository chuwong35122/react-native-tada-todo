import React from "react";
import { Fab, Text, Button, ScrollView } from "native-base";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationScreenTypes } from "./navigation.types";
import { AntDesign } from "@expo/vector-icons";
import HomeColorPicker from "../components/Todos/HomeColorPicker";
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
        <HomeColorPicker />
        <PriorityTodoList
          priority="@high"
          title="Highest Priority"
          bottomLineColor="rose.500"
        />
        <PriorityTodoList
          priority="@med"
          title="Medium Priority"
          bottomLineColor="blue.500"
        />
        <PriorityTodoList
          priority="@low"
          title="Lowest Priority"
          bottomLineColor="emerald.500"
        />
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
