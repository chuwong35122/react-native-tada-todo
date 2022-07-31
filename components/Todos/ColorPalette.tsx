import { Pressable, useToast, Box, Text } from "native-base";
import React, { Dispatch, SetStateAction } from "react";
import { TodoColorName } from "../../interfaces/todo.interface";
import { colors } from "../../constants/colors";

type ColorPalletteProps = {
  color: TodoColorName;
  selectedColor: TodoColorName;
  setSelectedColor: Dispatch<SetStateAction<TodoColorName>>;
};

const ColorPallette = ({
  color,
  selectedColor,
  setSelectedColor,
}: ColorPalletteProps) => {
  const toast = useToast();
  function handlePress() {
    if (selectedColor === color.toLowerCase()) {
      return;
    }

    setSelectedColor(color);
    toast.show({
      duration: 1500,
      render: () => {
        return (
          <Box bg="white" px="4" py="2" rounded="md">
            <Text
              color={colors[color]}
              fontSize="lg"
            >{`Selected ${color}`}</Text>
          </Box>
        );
      },
    });
  }

  return (
    <Pressable
      width="10"
      height="10"
      bgColor={selectedColor === color ? "white" : colors[color]}
      borderColor={colors[color]}
      borderWidth="6"
      rounded="full"
      onPress={handlePress}
    />
  );
};

export default ColorPallette;
