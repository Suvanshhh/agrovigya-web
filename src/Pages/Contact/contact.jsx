import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import styles from "./contact.module.css";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>We'd love to hear from you!</p>
        </div>
      </section>


      {/* Contact Form Section */}
      <section className={styles.formSection}>
        <h2 className={styles.sectionTitle}>Send Us a Message</h2>
        <div className={styles.formWrapper}>
          <form className={styles.contactForm}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </div>
      </section>


      {/* Contact Information Section */}
      <section className={styles.contactInfoSection}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <Mail className={styles.icon} />
            <h3>Email</h3>
            <p>info@example.com</p>
          </div>
          <div className={styles.infoCard}>
            <Phone className={styles.icon} />
            <h3>Phone</h3>
            <p>+123 456 7890</p>
          </div>
          <div className={styles.infoCard}>
            <MapPin className={styles.icon} />
            <h3>Location</h3>
            <p>123 Main Street, City, Country</p>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className={styles.mapSection}>
        <iframe
          title="Location Map"
          className={styles.mapEmbed}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509137!2d144.9537363155045!3d-37.81720944202164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5770e7f0a3a5a1b!2sFlinders+Street+Station!5e0!3m2!1sen!2sau!4v1510915014435"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
