import { View } from "native-base";
import React from "react";
import { Feather } from "@expo/vector-icons";

type CheckBoxProps = {
  isChecked: boolean;
};

const CheckBox = ({ isChecked }: CheckBoxProps) => {
  return (
    <View mr="4">
      {isChecked ? (
        <View
          width="7"
          height="7"
          rounded="full"
          bgColor="gray.100"
          alignItems="center"
          justifyContent="center"
        >
          <Feather name="check" size={22} color="black" />
        </View>
      ) : (
        <View width="7" height="7" rounded="full" bgColor="gray.100" />
      )}
    </View>
  );
};

export default CheckBox;
