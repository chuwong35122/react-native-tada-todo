import { FlatList, Pressable, Text, View } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import { TodoColor, TodoColorName } from "../../interfaces/todo.interface";
import { colors } from "../../constants/colors";
import { TodoContext } from "../../contexts/TodoContext";

type HomeColorPicker = {
  color: TodoColor;
  name: TodoColorName;
};

const HomeColorPicker = () => {
  const [data, setData] = useState<HomeColorPicker[]>([]);
  const { selectedTodoColor, setSelectedTodoColor } = useContext(TodoContext);

  function handlePressColor(name: TodoColorName) {
    setSelectedTodoColor(name);
  }

  useEffect(() => {
    const keys = Object.keys(colors) as TodoColor[];
    const _data = keys.map((key) => {
      const name = key;
      name.charAt(0).toUpperCase();

      return {
        name: name as TodoColorName,
        color: colors[key],
      } as HomeColorPicker;
    });

    _data.splice(0, 0, { color: "black", name: "All" });
    setData(_data);
  }, []);
  return (
    <View flexDir="row" alignItems="center" my="2">
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <>
            {item.name === "All" ? (
              <Pressable
                width="12"
                height="12"
                alignItems="center"
                justifyContent="center"
                mx="2"
                rounded="full"
                borderColor={item.color}
                backgroundColor="white"
                borderWidth={item.name === selectedTodoColor ? 6 : 0}
                onPress={() => handlePressColor(item.name)}
              >
                <Text fontSize="md">All</Text>
              </Pressable>
            ) : (
              <Pressable
                width="12"
                height="12"
                bgColor={item.color}
                mr={2}
                rounded="full"
                backgroundColor={
                  item.name === selectedTodoColor ? "white" : item.color
                }
                borderColor={item.color}
                borderWidth={item.name === selectedTodoColor ? 6 : 0}
                onPress={() => handlePressColor(item.name)}
              />
            )}
          </>
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeColorPicker;
