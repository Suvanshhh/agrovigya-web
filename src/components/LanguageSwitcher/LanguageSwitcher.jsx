import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => i18n.changeLanguage("en")}>🇬🇧 English</button>
            <button className={styles.button} onClick={() => i18n.changeLanguage("hi")}>🇮🇳 हिन्दी</button>
            <button className={styles.button} onClick={() => i18n.changeLanguage("mr")}>🇮🇳 मराठी</button>
        </div>
    );
};

export default LanguageSwitcher;
