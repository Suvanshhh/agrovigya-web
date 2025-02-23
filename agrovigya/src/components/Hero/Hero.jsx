import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";

const slides = [
  {
    image: "https://plus.unsplash.com/premium_photo-1682092816831-69c7c3ff59a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "home.title",
    subtitle: "home.subtitle",
  },
  {
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "home.whyChooseUs",
    subtitle: "whyChooseUs.smartFarmingDesc",
  },
  {
    image: "https://images.unsplash.com/photo-1602867741746-6df80f40b3f6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "services.marketplace",
    subtitle: "services.marketplaceDesc",
  },
];

const HeroSlider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className={styles.heroSection} style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{t(slides[currentSlide].title)}</h1>
        <p className={styles.heroSubtitle}>{t(slides[currentSlide].subtitle)}</p>
        <a href="/crop-suggestion" className={styles.ctaButton}>
          {t("home.getCropSuggestions")}
        </a>
      </div>
      
      {/* Navigation Buttons */}
      <button className={styles.prevButton} onClick={prevSlide}>❮</button>
      <button className={styles.nextButton} onClick={nextSlide}>❯</button>
    </section>
  );
};

export default HeroSlider;
