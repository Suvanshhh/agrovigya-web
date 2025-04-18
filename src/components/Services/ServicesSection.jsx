import React from "react";
import styles from "./servicesSection.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>{t("home.ourServices")}</h2>
      <div className={styles.servicesGrid}>
        {/* Existing Crop Recommendation Service */}
        <div className={styles.serviceCard} onClick={() => navigate("/cropsuggestions")}>
          <div className={styles.icon}>
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22V2M12 6L14 4M12 10L16 6M12 14L18 8M12 18L20 10M12 6L10 4M12 10L8 6M12 14L6 8M12 18L4 10" 
              stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3>{t("services.cropSuggestion")}</h3>
          <p>{t("services.cropSuggestionDesc")}</p>
        </div>

        {/* New Labour Estimation Service */}
        <div className={styles.serviceCard} onClick={() => navigate("/labour-estimation")}>
          <div className={styles.icon}>
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14V12M12 12L14 10M12 12L10 10M8 12H6M18 12H16M12 6V4M12 4L10 6M12 4L14 6M3 12H2V20H22V12H21M3 12V18H21V12M3 12L5 10M21 12L19 10" 
              stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3>{t("services.labourEstimation")}</h3>
          <p>{t("services.labourEstimationDesc")}</p>
        </div>

        {/* Government Schemes (Existing) */}
        <div className={styles.serviceCard} onClick={() => navigate("/governmentschemes")}>
          <div className={styles.icon}>
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10H20M6 10V18M18 10V18M3 18H21M2 22H22M12 2L3 7V10H21V7L12 2Z" 
              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>{t("services.governmentSchemes")}</h3>
          <p>{t("services.governmentSchemesDesc")}</p>
        </div>

        {/* Marketplace (Existing) */}
        <div className={styles.serviceCard} onClick={() => navigate("/marketplace")}>
          <div className={styles.icon}>
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M6 12V18M18 12V18M2 18H22M2 22H22M12 2L3 7V10H21V7L12 2Z" 
              stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3>{t("services.marketplace")}</h3>
          <p>{t("services.marketplaceDesc")}</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
