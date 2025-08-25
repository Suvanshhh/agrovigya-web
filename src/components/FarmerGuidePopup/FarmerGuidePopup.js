import React from "react";
import { useTranslation, Trans } from "react-i18next";
import styles from "./FarmerGuidePopup.module.css";

const FarmerGuidePopup = ({ show, onClose }) => {
  const { t } = useTranslation();

  if (!show) return null;

  const steps = t("farmerGuide.steps", { returnObjects: true });
  const guides = t("farmerGuide.guides", { returnObjects: true });
  const ranges = t("farmerGuide.ranges", { returnObjects: true });

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={onClose} aria-label={t("farmerGuide.close")}>
          ×
        </button>
        <h2>{t("farmerGuide.title")}</h2>
        <ol>
          <li>{steps[0]}</li>
          <li>{steps[1]}</li>
          <li>
            {steps[2]}
            <ul>
              <li>{ranges.nitrogen}</li>
              <li>{ranges.phosphorus}</li>
              <li>{ranges.potassium}</li>
              <li>{ranges.ph}</li>
            </ul>
          </li>
          <li>{steps[3]}</li>
          <li>{steps[4]}</li>
        </ol>
        <p>
          <strong>{t("farmerGuide.guidesLabel")}</strong>
          <ul>
            {guides.map((guide, idx) => (
              <li key={idx}>
                <a href={guide.url} target="_blank" rel="noopener noreferrer">
                  {guide.label}
                </a>
              </li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
};

export default FarmerGuidePopup;
