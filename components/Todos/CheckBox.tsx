import { Pressable } from "native-base";
import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";
import { TodoColor } from "../../interfaces/todo.interface";
import { colors, checkedColors } from "../../constants/colors";
import { TodoContext } from "./../../contexts/TodoContext";
import { setTodoStatus } from "../../utils/todo";

type CheckBoxProps = {
  isChecked: boolean;
  color: TodoColor;
  id: string;
};

const CheckBox = ({ isChecked, color, id }: CheckBoxProps) => {
  const { setIsTodoUpdate } = useContext(TodoContext);
  async function handlePress() {
    await setTodoStatus(id);
    setIsTodoUpdate((prev) => !prev);
  }

  return (
    <Pressable
      width="7"
      height="7"
      rounded="full"
      bgColor="gray.100"
      alignItems="center"
      justifyContent="center"
      borderColor={isChecked ? checkedColors[color] : colors[color]}
      borderWidth={4}
      mr={4}
      onPress={handlePress}
    >
      {isChecked ? <Feather name="check" size={20} color="#4b5563" /> : <></>}
    </Pressable>
  );
};

export default CheckBox;
