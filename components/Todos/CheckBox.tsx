import { View } from "native-base";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { TodoColorName } from "../../interfaces/todo.interface";
import { colors, checkedColors } from "../../constants/colors";

type CheckBoxProps = {
  isChecked: boolean;
  color: TodoColorName;
};

const CheckBox = ({ isChecked, color }: CheckBoxProps) => {
  return (
    <View
      width="7"
      height="7"
      rounded="full"
      bgColor="gray.100"
      alignItems="center"
      justifyContent="center"
      // borderColor={isChecked ? checkedColors[color] : colors[color]}
      borderColor="black"
      borderWidth={2}
      mr={4}
    >
      {isChecked ? <Feather name="check" size={20} color="#4b5563" /> : <></>}
    </View>
  );
};

export default CheckBox;
