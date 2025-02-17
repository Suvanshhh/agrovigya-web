import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import styles from "./home.module.css";
import { Leaf, Tractor, ShoppingCart, Users, Sprout } from "lucide-react";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Empowering Farmers with Technology</h1>
          <p className={styles.heroSubtitle}>
            Join AgroVigya in revolutionizing agriculture through smart solutions and
            sustainable practices.
          </p>
          <a href="/crop-suggestion" className={styles.ctaButton}>
            Get Crop Suggestions
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <Tractor size={40} className={styles.icon} />
            <h3>Government Schemes</h3>
            <p>Get access to the latest farming subsidies and financial aid programs.</p>
          </div>
          <div className={styles.serviceCard}>
            <Leaf size={40} className={styles.icon} />
            <h3>Crop Suggestion</h3>
            <p>AI-based recommendations for the best crops based on soil & weather conditions.</p>
          </div>
          <div className={styles.serviceCard}>
            <ShoppingCart size={40} className={styles.icon} />
            <h3>Agricultural Marketplace</h3>
            <p>Buy & sell farm produce directly to customers & businesses.</p>
          </div>
          <div className={styles.serviceCard}>
            <Users size={40} className={styles.icon} />
            <h3>Find Jobs</h3>
            <p>Explore agricultural employment opportunities tailored for farmers.</p>
          </div>
          <div className={styles.serviceCard}>
            <Sprout size={40} className={styles.icon} />
            <h3>Skill Development</h3>
            <p>Upskill with training programs on modern farming techniques.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseUs}>
        <h2 className={styles.sectionTitle}>Why Choose AgroVigya?</h2>
        <div className={styles.whyGrid}>
          <div className={styles.whyCard}>
            <h3>🚜 Smart Farming</h3>
            <p>Leverage AI-powered tools to optimize yield and boost productivity.</p>
          </div>
          <div className={styles.whyCard}>
            <h3>💰 Financial Assistance</h3>
            <p>Get real-time updates on the latest government subsidies and schemes.</p>
          </div>
          <div className={styles.whyCard}>
            <h3>🌱 Sustainable Agriculture</h3>
            <p>Learn best practices for eco-friendly farming and organic methods.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Start Your Agricultural Journey with AgroVigya</h2>
        <a href="/register" className={styles.ctaButton}>Join Now</a>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
