import { View } from "native-base";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PriorityTodoKey } from "../../interfaces/todo.interface";

type CheckBoxProps = {
  isChecked: boolean;
  priority: PriorityTodoKey;
};

const CheckBox = ({ isChecked, priority }: CheckBoxProps) => {
  return (
    <View
      width="6"
      height="6"
      rounded="md"
      alignItems="center"
      justifyContent="center"
      borderWidth={2}
      mr={3}
      borderColor="black"
    >
      {isChecked ? (
        <MaterialCommunityIcons name="check-bold" size={20} color="#7c3aed" />
      ) : (
        <></>
      )}
    </View>
  );
};

export default CheckBox;
