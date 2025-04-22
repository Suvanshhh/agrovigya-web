import React from "react";
import CropRecommendation from "../../components/CropRecommendation/CropRecommendation";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import styles from "./CropRecommendationPage.module.css";

const CropRecommendationPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      {/* <div className={styles.heroSection}>
         <div className={styles.heroOverlay}></div> 
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Crop Recommendation System</h1>
          <p className={styles.heroSubtitle}>
            Get the best crop suggestions based on soil and weather conditions.
          </p>
        </div>
      </div> */}
      <div className={styles.contentContainer}>
        <CropRecommendation />
      </div>
      <Footer />
    </div>
  );
};

export default CropRecommendationPage;
