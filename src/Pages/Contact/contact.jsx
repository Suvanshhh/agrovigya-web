import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import styles from "./contact.module.css";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className={styles.pageBg}>
      <Navbar />

      <div className={styles.contactWrapper}>
        <div className={styles.contactCard}>
          <h2 className={styles.contactTitle}>Contact us</h2>
          <form className={styles.contactForm}>
            <input
              type="text"
              className={styles.input}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              className={styles.input}
              placeholder="Your Email"
              required
            />
            <textarea
              className={styles.textarea}
              placeholder="Your Message"
              required
            />
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
          <div className={styles.infoRow}>
            <div className={styles.infoCol}>
              <Mail className={styles.infoIcon} />
              <h3>Email</h3>
              <p>info@agrovigya.com</p>
            </div>
            <div className={styles.infoCol}>
              <Phone className={styles.infoIcon} />
              <h3>Phone</h3>
              <p>+91 8129619914</p>
            </div>
            <div className={styles.infoCol}>
              <MapPin className={styles.infoIcon} />
              <h3>Location</h3>
              <p>XYZ, Maharashtra, India</p>
            </div>
          </div>
        </div>
      </div>

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
