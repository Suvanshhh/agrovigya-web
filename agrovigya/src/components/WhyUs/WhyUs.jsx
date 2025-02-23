import React from "react";
import styles from "./WhyChooseUs.module.css";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.whyChooseUs}>
      <h2 className={styles.sectionTitle}>{t("home.whyChooseUs")}</h2>
      <div className={styles.whyGrid}>
        <div className={styles.whyCard}>
          <h3>🚜 {t("whyChooseUs.smartFarming")}</h3>
          <p>{t("whyChooseUs.smartFarmingDesc")}</p>
        </div>
        <div className={styles.whyCard}>
          <h3>💰 {t("whyChooseUs.financialAssistance")}</h3>
          <p>{t("whyChooseUs.financialAssistanceDesc")}</p>
        </div>
        <div className={styles.whyCard}>
          <h3>🌱 {t("whyChooseUs.sustainableAgriculture")}</h3>
          <p>{t("whyChooseUs.sustainableAgricultureDesc")}</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
