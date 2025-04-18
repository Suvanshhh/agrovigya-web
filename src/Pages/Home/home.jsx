import React from "react";
import { Link } from "react-router-dom"; // Added import for Link

import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import styles from "./home.module.css";
import { useTranslation } from "react-i18next";
import BlogSection from "../../components/Blog/blog";

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
  
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Home;
