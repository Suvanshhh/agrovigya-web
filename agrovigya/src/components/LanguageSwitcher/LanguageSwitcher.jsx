import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <button onClick={() => i18n.changeLanguage("en")}>🇬🇧 English</button>
      <button onClick={() => i18n.changeLanguage("hi")}>🇮🇳 हिन्दी</button>
    </div>
  );
};

export default LanguageSwitcher;
