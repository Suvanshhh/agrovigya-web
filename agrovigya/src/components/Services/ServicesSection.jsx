import React from "react";
import styles from "./servicesSection.module.css";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>{t("home.ourServices")}</h2>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>{t("services.governmentSchemes")}</h3>
          <p>{t("services.governmentSchemesDesc")}</p>
        </div>
        <div className={styles.serviceCard}>
          <h3>{t("services.cropSuggestion")}</h3>
          <p>{t("services.cropSuggestionDesc")}</p>
        </div>
        <div className={styles.serviceCard}>
          <h3>{t("services.marketplace")}</h3>
          <p>{t("services.marketplaceDesc")}</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
