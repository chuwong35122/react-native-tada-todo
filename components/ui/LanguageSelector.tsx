import { Select, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { availableLanguages } from "../../i18n/i18n";
import { LanguageTypes } from "../../i18n/i18n";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState<LanguageTypes>(
    i18n.language as LanguageTypes
  );
  useEffect(() => {
    i18n.changeLanguage(language);

    console.log(i18n.language);
  }, [language]);

  return (
    <Select
      selectedValue={language}
      minWidth="200"
      accessibilityLabel="Select language"
      fontSize="lg"
      _selectedItem={{
        bg: "violet.100",
        endIcon: <AntDesign name="check" size={24} color="#6d28d9" />,
      }}
      mt={1}
      onValueChange={(val) => setLanguage(val as LanguageTypes)}
    >
      {availableLanguages.map((lang, key) => (
        <Select.Item label={lang.name} value={lang.symbol} key={key} />
      ))}
    </Select>
  );
};

export default LanguageSelector;
