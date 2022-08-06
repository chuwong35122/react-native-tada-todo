import React, { useContext, useRef } from "react";
import { Fab, Text, View } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationScreenTypes } from "./navigation.types";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import PriorityTodoList from "../components/Todos/PriorityTodoList";
import Animated, { ZoomIn } from "react-native-reanimated";
import { TodoContext } from "./../contexts/TodoContext";
import EmptyTodoView from "../components/Todos/EmptyTodoView";
import { TouchableOpacity } from "react-native";

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();

  const scrollViewRef = useRef(null);
  const { todoList } = useContext(TodoContext);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 14 }}>
      <ScrollView ref={scrollViewRef}>
        <View
          w="full"
          flexDir="row"
          justifyContent="space-between"
          alignItems="center"
          px="4"
          mb="4"
        >
          <Text fontSize="3xl" fontFamily="Roboto_500Medium" color="black">
            My To-Do List
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
            <AntDesign name="setting" size={26} color="black" />
          </TouchableOpacity>
        </View>
        {todoList.length === 0 ? (
          <EmptyTodoView />
        ) : (
          <View>
            <Animated.View entering={ZoomIn.springify().stiffness(60)}>
              <PriorityTodoList simultaneousHandlers={scrollViewRef} />
            </Animated.View>
          </View>
        )}
      </ScrollView>
      <Fab
        backgroundColor="white"
        size="lg"
        icon={<AntDesign name="plus" size={24} color="black" />}
        renderInPortal={false}
        onPress={() => navigation.push("CreateTodo")}
        position="absolute"
        style={{ elevation: 3 }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
