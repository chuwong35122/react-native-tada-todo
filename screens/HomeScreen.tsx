import React, { useRef } from "react";
import { Fab, Text, Button, View, IconButton } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationScreenTypes } from "./navigation.types";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { clearStorage } from "../utils/todo";
import { SafeAreaView } from "react-native-safe-area-context";
import PriorityTodoList from "../components/Todos/PriorityTodoList";
import Animated, { ZoomInLeft, ZoomInRight } from "react-native-reanimated";

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();

  const scrollViewRef = useRef(null);

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
          <Text fontSize="2xl" style={{ fontFamily: "Roboto_500Medium" }}>
            My To-Do List
          </Text>
          <Animated.View>
            <IconButton
              variant="outline"
              _icon={{
                as: AntDesign,
                name: "setting",
                size: "lg",
                color: "white",
              }}
              p="1"
              rounded="full"
              bgColor="black"
              borderColor="black"
              _pressed={{
                backgroundColor: "gray.700",
              }}
              onPress={() => navigation.navigate("Setting")}
            />
          </Animated.View>
        </View>
        <Animated.View
          entering={ZoomInLeft.delay(300).springify().stiffness(60)}
        >
          <PriorityTodoList
            priority="@high"
            title="HIGHEST PRIORITY"
            simultaneousHandlers={scrollViewRef}
          />
        </Animated.View>
        <Animated.View
          entering={ZoomInRight.delay(550).springify().stiffness(60)}
        >
          <PriorityTodoList
            priority="@med"
            title="MEDIUM PRIORITY"
            simultaneousHandlers={scrollViewRef}
          />
        </Animated.View>
        <Animated.View
          entering={ZoomInLeft.delay(750).springify().stiffness(60)}
        >
          <PriorityTodoList
            priority="@low"
            title="LOWEST PRIORITY"
            simultaneousHandlers={scrollViewRef}
          />
        </Animated.View>
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

      <Button onPress={clearStorage} position="absolute" bottom="0">
        Clear
      </Button>
    </SafeAreaView>
  );
};

export default HomeScreen;
