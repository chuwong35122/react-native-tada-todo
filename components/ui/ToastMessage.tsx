import { Text, Box } from "native-base";
import { ColorType } from "native-base/lib/typescript/components/types";
import React from "react";
import { useTranslation } from "react-i18next";

type ToastMessageProps = {
  val: string;
  bg: ColorType;
};

const ToastMessage = ({ val, bg }: ToastMessageProps) => {
  const { t } = useTranslation();
  return (
    <Box bg={bg} p="2" rounded="md" mt="4">
      <Text color="white" fontSize="lg">
        {t(val)}
      </Text>
    </Box>
  );
};

export default ToastMessage;
