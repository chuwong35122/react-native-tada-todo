import { View, HStack, VStack, Text } from "native-base";
import React, { useState } from "react";
import ColorPallette from "./ColorPalette";

const TodoColorPicker = () => {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <View>
      <Text color="gray.600" fontSize="xl">
        Select a todo color
      </Text>
      <VStack space="2" my="4">
        <HStack justifyContent="space-evenly">
          <ColorPallette
            color="blue"
            id={1}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
          <ColorPallette
            color="cyan"
            id={2}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
          <ColorPallette
            color="green"
            id={3}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
          <ColorPallette
            color="amber"
            id={4}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
          <ColorPallette
            color="orange"
            id={5}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </HStack>
        <HStack justifyContent="space-evenly">
          <ColorPallette
            color="rose"
            id={6}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
          <ColorPallette
            color="violet"
            id={7}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
          <ColorPallette
            color="indigo"
            id={8}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
          <ColorPallette
            color="gray"
            id={9}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
          <ColorPallette
            color="black"
            id={10}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </HStack>
      </VStack>
    </View>
  );
};

export default TodoColorPicker;
