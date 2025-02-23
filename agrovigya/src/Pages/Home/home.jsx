import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import styles from "./home.module.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";
import WhyChooseUs from "../../components/WhyUs/WhyUs";
import ServicesSection from "../../components/Services/ServicesSection";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <LanguageSwitcher /> {/* Add Language Switcher */}

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t("home.title")}</h1>
          <p className={styles.heroSubtitle}>{t("home.subtitle")}</p>
          <a href="/crop-suggestion" className={styles.ctaButton}>
            {t("home.getCropSuggestions")}
          </a>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection /> {/* Replaced inline code with the new component */}

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>{t("home.joinNow")}</h2>
        <a href="/register" className={styles.ctaButton}>{t("home.joinNow")}</a>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
