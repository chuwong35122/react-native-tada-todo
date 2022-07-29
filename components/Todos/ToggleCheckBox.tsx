import { Text, View } from "native-base";
import { Feather } from "@expo/vector-icons";
import React from "react";

type ToggleCheckBoxProps = {
  checked: boolean;
};

const ToggleCheckBox = ({ checked }: ToggleCheckBoxProps) => {
  return (
    <View mr="4">
      {checked ? (
        <View
          width="6"
          height="6"
          background="lightBlue.200"
          rounded="md"
          justifyContent="center"
          alignItems="center"
          borderColor="blue.300"
          borderWidth={2}
        >
          <Feather name="check" size={20} color="black" />
        </View>
      ) : (
        <View
          width="6"
          height="6"
          background="lightBlue.200"
          rounded="md"
          borderColor="blue.300"
          borderWidth={2}
        />
      )}
    </View>
  );
};

export default ToggleCheckBox;
