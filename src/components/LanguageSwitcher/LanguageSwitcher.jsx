import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { code: "mr", label: "मराठी", flag: "🇮🇳" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

  return (
    <div className={styles.dropdown} ref={ref}>
      <button
        className={styles.dropdownToggle}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={styles.flag}>{current.flag}</span>
        <span className={styles.label}>{current.label}</span>
        <span className={styles.caret}>&#9662;</span>
      </button>
      {open && (
        <ul className={styles.dropdownMenu} role="listbox">
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                className={`${styles.dropdownItem} ${i18n.language === lang.code ? styles.active : ""}`}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  setOpen(false);
                }}
                role="option"
                aria-selected={i18n.language === lang.code}
              >
                <span className={styles.flag}>{lang.flag}</span>
                <span className={styles.label}>{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
