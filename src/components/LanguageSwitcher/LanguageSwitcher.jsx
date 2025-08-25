import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

const LANGUAGES = [
  { code: "en", label: (<><svg width="52" height="40" viewBox="0 0 52 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle', marginRight: '4px'}}>
    <path fillRule="evenodd" clipRule="evenodd" d="M31.6925 10.5705H45.721C47.1368 10.5762 48.4929 11.1414 49.4936 12.1429C50.4943 13.1444 51.0584 14.501 51.063 15.9167V27.2115C51.0584 28.6272 50.4943 29.9838 49.4936 30.9853C48.4929 31.9868 47.1368 32.552 45.721 32.5577H45.2878L45.0019 36.8426C44.9942 37.0497 44.9301 37.2507 44.8163 37.424C44.7025 37.5972 44.5435 37.736 44.3565 37.8253C44.1694 37.9146 43.9615 37.9509 43.7553 37.9304C43.549 37.9099 43.3524 37.8334 43.1865 37.709L36.3499 32.5621H27.6546C26.2777 32.5568 24.9555 32.0222 23.9619 31.0689C22.9682 30.1156 22.3793 28.8167 22.317 27.4411H17.0358L9.09868 33.7102C8.79462 33.9454 8.42866 34.087 8.04546 34.1177C7.66227 34.1485 7.27842 34.067 6.94076 33.8832C6.6031 33.6995 6.32624 33.4214 6.14397 33.0829C5.9617 32.7444 5.8819 32.3602 5.91431 31.9772L6.26091 27.4064C4.72496 27.2827 3.28374 26.6143 2.19706 25.5218L2.07575 25.3918C0.933098 24.1964 0.291314 22.609 0.282104 20.9554V8.88946C0.282104 7.1659 0.966787 5.51293 2.18553 4.29419C3.40427 3.07544 5.05724 2.39076 6.78081 2.39076H25.1895C26.0404 2.39053 26.8831 2.55843 27.6689 2.88483C28.4548 3.21123 29.1685 3.68968 29.7689 4.29272L29.8902 4.41836C31.0315 5.62091 31.6701 7.2142 31.6752 8.87214V10.5531L31.6925 10.5705ZM39.9589 23.7845H36.4929L35.8517 25.9507H32.728C33.7678 23.1909 34.9722 19.8853 36.0163 17.1125C36.3932 16.116 36.8221 14.461 38.1825 14.461C39.5429 14.461 40.0715 15.9774 40.4658 17.0258L43.8061 25.9984H40.6174L39.9589 23.7715V23.7845ZM39.4346 21.6616L38.2259 17.8577L37.0128 21.6616H39.4346ZM6.78081 4.38803H25.1895C26.3819 4.39259 27.5242 4.86832 28.3674 5.71151C29.2106 6.55471 29.6863 7.69701 29.6909 8.88946V20.9554C29.6932 22.1519 29.2204 23.3005 28.3763 24.1486C27.5323 24.9967 26.386 25.475 25.1895 25.4785H16.3512L7.87692 32.1375L8.37949 25.4785H6.78081C6.18707 25.4791 5.59907 25.3624 5.05053 25.1352C4.50199 24.908 4.00371 24.5747 3.58428 24.1545C3.16485 23.7342 2.83252 23.2353 2.60636 22.6863C2.3802 22.1374 2.26466 21.5491 2.26638 20.9554V8.88946C2.26982 7.69442 2.74696 6.54949 3.59321 5.70568C4.43946 4.86187 5.58575 4.38803 6.78081 4.38803Z" fill="#FFF8F0"/>
    <path d="M23.8665 10.1207H21.7375V22.2426H19.2441V15.4336H16.3862V16.5653C16.3862 17.8951 16.0474 18.9308 15.3697 19.6725C14.7048 20.4141 13.7458 20.7849 12.4927 20.7849C11.3035 20.7849 10.3445 20.4461 9.61564 19.7684C8.89958 19.0907 8.54155 18.1956 8.54155 17.0831C8.54155 15.9067 8.91876 15.0053 9.67318 14.3787C10.4404 13.7394 11.425 13.4197 12.6269 13.4197H14.0846V10.1207H7.31402V8.04927H23.8665V10.1207ZM19.2441 10.1207H16.3862V13.4197H19.2441V10.1207ZM14.0846 15.4336H12.7036C12.141 15.4336 11.6871 15.5807 11.3419 15.8748C11.0094 16.1561 10.8432 16.5525 10.8432 17.064C10.8432 17.5626 10.9902 17.959 11.2843 18.2531C11.5912 18.5472 11.9812 18.6943 12.4543 18.6943C12.9658 18.6943 13.3622 18.5153 13.6435 18.1572C13.9376 17.7992 14.0846 17.3133 14.0846 16.6995V15.4336Z" fill="#FFF8F0"/>
  </svg> English</>) },
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
