import { View, HStack, VStack, Text } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { TodoColorName } from "../../interfaces/todo.interface";
import ColorPallette from "./ColorPalette";

const TodoColorPicker = () => {
  const { selectedTodoColor } = useContext(TodoContext);
  const [selectedColor, setSelectedColor] = useState<TodoColorName>("Blue");

  useEffect(() => {
    if (selectedTodoColor !== "All") {
      setSelectedColor(selectedTodoColor);
    }
  }, [selectedTodoColor]);

  return (
    <View>
      <Text color="gray.600" fontSize="lg">
        Select a color for your To-Do
      </Text>
      <VStack space="2" my="4">
        <HStack justifyContent="space-evenly">
          <ColorPallette
            color="Blue"
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <ColorPallette
            color="Cyan"
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <ColorPallette
            color="Green"
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <ColorPallette
            color="Amber"
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <ColorPallette
            color="Orange"
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </HStack>
        <HStack justifyContent="space-evenly">
          <ColorPallette
            color="Rose"
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <ColorPallette
            color="Violet"
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <ColorPallette
            color="Indigo"
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <ColorPallette
            color="Gray"
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <ColorPallette
            color="Black"
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </HStack>
      </VStack>
    </View>
  );
};

export default TodoColorPicker;
