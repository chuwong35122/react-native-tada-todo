import { View, HStack, VStack, Text } from "native-base";
import React, { Dispatch, SetStateAction, useState } from "react";
import { TodoColor } from "../../interfaces/todo.interface";
import ColorPallette from "./ColorPalette";

type TodoColorPickerProps = {
  selectedColor: TodoColor;
  setSelectedColor: Dispatch<SetStateAction<TodoColor>>;
};

const TodoColorPicker = ({
  selectedColor,
  setSelectedColor,
}: TodoColorPickerProps) => {
  return (
    <View>
      <Text color="gray.600" fontSize="xl">
        Select a todo color
      </Text>
      <VStack space="2" my="4">
        <HStack justifyContent="space-evenly">
          <ColorPallette
            color="blue"
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <ColorPallette
            color="cyan"
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <ColorPallette
            color="green"
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <ColorPallette
            color="amber"
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <ColorPallette
            color="orange"
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </HStack>
        <HStack justifyContent="space-evenly">
          <ColorPallette
            color="rose"
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <ColorPallette
            color="violet"
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <ColorPallette
            color="indigo"
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <ColorPallette
            color="gray"
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <ColorPallette
            color="black"
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </HStack>
      </VStack>
    </View>
  );
};

export default TodoColorPicker;
