import React from "react";
import styles from "./WhyChooseUs.module.css";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.topRow}>
        <div className={styles.imageCard}>
          <img
            src="https://i.postimg.cc/FHm86dx1/picc.jpg"
            alt="Smart Farming"
            className={styles.cardImage}
          />
          <div className={styles.imageOverlay}>
            <div className={styles.overlayTitle}>{t("whyChooseUs.smartFarming")}</div>
            <div className={styles.overlayDesc}>{t("whyChooseUs.smartFarmingDesc")}</div>
          </div>
        </div>
        <div className={styles.topText}>
          <h2>{t("whyChooseUs.whyagrovigya")}</h2>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.infoCard}>
          <div className={styles.infoTitle}>{t("whyChooseUs.financialAssistance")}</div>
          <div className={styles.infoDesc}>{t("whyChooseUs.financialAssistanceDesc")}</div>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.infoTitle}>{t("whyChooseUs.sustainableAgriculture")}</div>
          <div className={styles.infoDesc}>{t("whyChooseUs.sustainableAgricultureDesc")}</div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
