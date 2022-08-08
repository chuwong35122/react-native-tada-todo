import { Select } from "native-base";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { availableLanguages } from "../../i18n/i18n";
import { LanguageTypes } from "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import { setAppLanguage } from "../../utils/settings";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState<LanguageTypes>(
    i18n.language as LanguageTypes
  );
  useEffect(() => {
    async function fn() {
      i18n.changeLanguage(language);
      await setAppLanguage(language);
    }

    fn();
  }, [language]);

  return (
    <Select
      selectedValue={language}
      minWidth="200"
      accessibilityLabel="Select language"
      fontSize="lg"
      _selectedItem={{
        bg: "violet.100",
        endIcon: <MaterialIcons name="check" size={20} color="#7c3aed" />,
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
