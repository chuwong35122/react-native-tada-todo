import { Pressable, useToast, Box, Text } from "native-base";
import React, { Dispatch, SetStateAction } from "react";
import { TodoColor } from "../../interfaces/todo.interface";
import { colors } from "../../constants/colors";

type ColorPalletteProps = {
  color: TodoColor;
  id: number;
  selectedId: number;
  setSelectedId: Dispatch<SetStateAction<number>>;
};

const ColorPallette = ({
  color,
  id,
  selectedId,
  setSelectedId,
}: ColorPalletteProps) => {
  const toast = useToast();
  function handlePress() {
    if (id === selectedId) {
      return;
    }

    setSelectedId(id);
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
      bgColor={selectedId === id ? "white" : colors[color]}
      borderColor={colors[color]}
      borderWidth="6"
      rounded="full"
      onPress={handlePress}
    />
  );
};

export default ColorPallette;
