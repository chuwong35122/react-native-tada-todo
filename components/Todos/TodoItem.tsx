import { Text, View, HStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import moment from "moment";

type TodoItemType = {
  todo: string;
  date: Date;
};

const TodoItem = ({ todo, date }: TodoItemType) => {
  const mm = moment(date);
  return (
    <HStack
      backgroundColor="#fff"
      my="1"
      py="2"
      px="4"
      borderRadius="md"
      justifyContent="space-between"
      alignItems="center"
    >
      <View>
        <Text fontSize="18" fontWeight="semibold">
          {todo}
        </Text>
        <Text color="gray.400">{mm.format("LLL")}</Text>
      </View>
      <TouchableOpacity>
        <MaterialIcons name="more-vert" size={26} color="black" />
      </TouchableOpacity>
    </HStack>
  );
};

export default TodoItem;
