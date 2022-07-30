import { Pressable, useToast, Box, Text } from "native-base";
import React, { Dispatch, SetStateAction } from "react";

type ColorPalletteProps = {
  color: string;
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
  function getColor() {
    if (color === "black") {
      return "black";
    } else {
      return `${color}.600`;
    }
  }

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
            <Text color={getColor()} fontSize="lg">{`Selected ${color}`}</Text>
          </Box>
        );
      },
    });
  }

  return (
    <Pressable
      width="10"
      height="10"
      bgColor={selectedId === id ? "white" : getColor()}
      borderColor={getColor()}
      borderWidth="6"
      rounded="full"
      onPress={handlePress}
    />
  );
};

export default ColorPallette;
