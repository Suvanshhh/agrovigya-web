import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1598279284742-14aacc701163?auto=format&fit=crop&w=2000&q=80",
    title: "home.title",
    subtitle: "home.subtitle",
  },
  {
    image: "https://images.unsplash.com/photo-1602001151707-8c121bbf397f?auto=format&fit=crop&w=2000&q=80",
    title: "home.whyChooseUs",
    subtitle: "whyChooseUs.smartFarmingDesc",
  },
  {
    image: "https://images.unsplash.com/photo-1601233740083-236ff7301c3d?auto=format&fit=crop&w=2000&q=80",
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
