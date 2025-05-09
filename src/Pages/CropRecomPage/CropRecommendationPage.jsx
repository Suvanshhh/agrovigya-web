import React from "react";
import CropRecommendation from "../../components/CropRecommendation/CropRecommendation";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import styles from "./CropRecommendationPage.module.css";
import { useTranslation } from "react-i18next";

const CropRecommendationPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>{t("crop.title")}</h1>
        <p className={styles.pageSubtitle}>
          {t("crop.subtitle")}
        </p>
        <div className={styles.contentContainer}>
          <div className={styles.formSection}>
            <CropRecommendation />
          </div>
          <div className={styles.imageSection}>
            <img 
              src="https://i.postimg.cc/9MgBBgNs/log-in-signup.png" 
              alt={t("crop.imageAlt")}
              className={styles.sideImage}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CropRecommendationPage;
