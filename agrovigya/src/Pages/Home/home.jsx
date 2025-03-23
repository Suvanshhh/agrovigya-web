import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import styles from "./home.module.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";
import WhyChooseUs from "../../components/WhyUs/WhyUs";
import ServicesSection from "../../components/Services/ServicesSection";
import HeroSlider from "../../components/Hero/Hero";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      {/*LanguageSwitcher*/}
      {/* Hero Section */}
      <HeroSlider />
      {/* Services Section */}
      <ServicesSection /> {/* Replaced inline code with the new component */}
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>{t("home.contact")}</h2>
        <a href="/register" className={styles.ctaButton}>
          {t("home.contact")}
        </a>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
