import React, { useState } from "react";
import LabourEstimation from "../../components/LabourEstimation/LabourEstimation";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import styles from "./LabourEstimationPage.module.css";
import { useTranslation } from "react-i18next";
import LabourGuidePopup from "../../components/LabourGuidePopup/LabourGuidePopup";
import confusedCharacter from "../CropRecomPage/confused-character.gif"; // Adjust the path as necessary

const LabourEstimationPage = () => {
  const { t } = useTranslation();
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>{t("labour.title")}</h1>
        <p className={styles.pageSubtitle}>{t("labour.subtitle")}</p>
        <button
          className={styles.helpButton}
          onClick={() => setShowGuide(true)}
          aria-label="How to estimate your labour cost?"
        >
          <img
            src={confusedCharacter}
            alt="Confused character"
            className={styles.animatedIcon}
          />
          {t("labour.helpButton")}
        </button>
        <LabourGuidePopup show={showGuide} onClose={() => setShowGuide(false)} />
        <div className={styles.contentContainer}>
          <div className={styles.formSection}>
            <LabourEstimation />
          </div>
          <div className={styles.imageSection}>
            <img
              src="https://i.postimg.cc/9MgBBgNs/log-in-signup.png"
              alt={t("labour.imageAlt")}
              className={styles.sideImage}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LabourEstimationPage;
