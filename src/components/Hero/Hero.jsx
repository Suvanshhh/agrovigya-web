import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";

const slides = [
  {
    image:
      "https://i.postimg.cc/nFYN65zn/pexels-shvetsa-5230961.jpg",
    title: "home.title",
    subtitle: "home.subtitle",
    buttonText: "home.getStarted",
    buttonLink: "/crop-recommendation",
  },
  {
    image:
      "https://i.postimg.cc/4dS6DsH8/photo-1602867741746-6df80f40b3f6-jpeg.jpg",
    title: "home.whyChooseUs",
    subtitle: "whyChooseUs.smartFarmingDesc",
    buttonText: "whyChooseUs.learnMore",
    buttonLink: "/about",
  },
  {
    image:
      "https://i.postimg.cc/NjmdR92Q/rice-7176354-1920.jpg",
    title: "services.marketplace",
    subtitle: "services.marketplaceDesc",
    buttonText: "services.exploreMarketplace",
    buttonLink: "/marketplace",
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
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
    >
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{t(slides[currentSlide].title)}</h1>
        <p className={styles.heroSubtitle}>
          {t(slides[currentSlide].subtitle)}
        </p>
        <a href={slides[currentSlide].buttonLink} className={styles.ctaButton}>
          {t(slides[currentSlide].buttonText)}
        </a>
      </div>

      {/* Navigation Buttons */}
      <button className={styles.prevButton} onClick={prevSlide}>
        ❮
      </button>
      <button className={styles.nextButton} onClick={nextSlide}>
        ❯
      </button>
    </section>
  );
};

export default HeroSlider;
