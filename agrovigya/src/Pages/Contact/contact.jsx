import React from "react";
import { Globe2, Mail } from "lucide-react"; // Removed unused Phone import
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import styles from "./contact.module.css";
import SocialIcons from "../../Components/Socials/socials";

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    };

    try {
      const response = await fetch(
        "https://devessence-backend-production.up.railway.app/send-email",
        {
          method: "POST",
          mode: "cors", // ✅ Explicitly enable CORS
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (data.success) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.message.includes("Failed to fetch")) {
        alert("Server is down or unreachable. Please try again later.");
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <Globe2 className={styles.heroIcon} />
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.subtitle}>We'd love to hear from you!</p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className={styles.contactSection}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>

        {/* Map Section */}
        <section className={styles.mapSection}>
          <h2>Find Us Here</h2>
          <iframe
            src="https://maps.google.com/maps?q=Kalinga+Institute+of+Industrial+Technology&output=embed"
            className={styles.mapEmbed}
            allowFullScreen=""
            loading="lazy"
            title="Google Map showing location of Kalinga Institute of Industrial Technology"
          ></iframe>
        </section>

        {/* Address Section */}
        <section className={styles.addressSection}>
          <div className={styles.addressContainer}>
            <h2 className={styles.addressTitle}>Our Address</h2>
            <p className={styles.addressText}>
              Kalinga Institute Of Industrial Technology, Patia, Bhubaneswar,
              Odisha, India <br />
              Pincode - 751024
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Start Your Project?</h2>
            <p className={styles.ctaText}>
              Get in touch with us to begin your digital transformation journey!
            </p>
            <button className={styles.ctaButton}>
              Get in Touch
              <Mail className={styles.buttonIcon} />
            </button>
          </div>
        </section>
      </div>
      <SocialIcons />
      <Footer />
    </div>
  );
}

export default Contact;
