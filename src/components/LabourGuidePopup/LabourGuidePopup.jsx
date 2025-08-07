import React from "react";
import { useTranslation, Trans } from "react-i18next";
import styles from "./LabourGuidePopup.module.css";

const LabourGuidePopup = ({ show, onClose }) => {
  const { t } = useTranslation();

  if (!show) return null;

  const steps = t("labourGuide.steps", { returnObjects: true });
  const tips = t("labourGuide.tips", { returnObjects: true });

  return (
    <div className={styles.overlay} tabIndex={-1} aria-modal="true" role="dialog">
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={onClose} aria-label={t("labourGuide.close")}>
          &times;
        </button>
        <h2>{t("labourGuide.title")}</h2>
        <ol>
          {steps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
        <ul>
          {tips.map((tip, idx) =>
            // For tips that contain a link, use <Trans>
            tip.includes("<1>") ? (
              <li key={idx}>
                <Trans i18nKey={`labourGuide.tips.${idx}`}>
                  {/* The link is inserted via the translation file */}
                  For more help, see: <a href="https://www.farmstandapp.com/3171/farm-labor-cost-estimator/" target="_blank" rel="noopener noreferrer">Farmstand: Labour Cost Guide</a>
                </Trans>
              </li>
            ) : (
              <li key={idx}>{tip}</li>
            )
          )}
        </ul>
        <p>
          <strong>{t("labourGuide.tipLabel")}</strong> {t("labourGuide.tipText")}
        </p>
      </div>
    </div>
  );
};

export default LabourGuidePopup;
