import { View, HStack, VStack } from "native-base";
import React, { Dispatch, SetStateAction } from "react";
import { TodoColorName } from "../../interfaces/todo.interface";
import ColorPallette from "./ColorPalette";

type TodoColorPickerProps = {
  selectedColor: TodoColorName;
  setSelectedColor: Dispatch<SetStateAction<TodoColorName>>;
};

const TodoColorPicker = ({
  selectedColor,
  setSelectedColor,
}: TodoColorPickerProps) => {
  // Parse selected color from home screen to create todo screen

  return (
    <View>
      <VStack space="2" my="4">
        <HStack justifyContent="space-evenly">
          <ColorPallette
            color="Blue"
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
          {/* </HStack> */}
          {/* <HStack justifyContent="space-evenly"> */}
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
