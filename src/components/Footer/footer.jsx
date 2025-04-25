import React from "react";
import { useTranslation } from "react-i18next";
import {
  Linkedin,
  Instagram,
  X,
} from "lucide-react";
import styles from "./footer.module.css";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Logo & Company Info */}
        <div className={styles.companySection}>
          <img
            src="https://i.postimg.cc/sDHmr0Hp/logo-1-03.png"
            alt="Agrovigya Logo"
            className={styles.footerLogo}
          />
          <p className={styles.companyDesc}>
            Empowering farmers with technology-driven solutions for a sustainable future.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon}><Linkedin size={18} /></a>
            <a href="#" className={styles.socialIcon}><X size={18} /></a>
            <a href="#" className={styles.socialIcon}><Instagram size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.linksSection}>
          <div className={styles.linksTitle}>Quick Links</div>
          <ul className={styles.linksList}>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Government Schemes</a></li>
            <li><a href="#">Crop Suggestion</a></li>
            <li><a href="#">Find Jobs</a></li>
            <li><a href="#">Skill Development</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className={styles.linksSection}>
          <div className={styles.linksTitle}>Our Services</div>
          <ul className={styles.linksList}>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Government Schemes</a></li>
            <li><a href="#">Skill Development</a></li>
            <li><a href="#">Find Jobs</a></li>
            <li><a href="#">Crop Suggestion</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.linksSection}>
          <div className={styles.linksTitle}>Contact Us</div>
          <ul className={styles.contactList}>
            <li><a href="mailto:info@agrovigya.com">info@agrovigya.com</a></li>
            <li><a href="tel:+916392919914">+91 6392919914</a></li>
            <li>XYZ, Maharashtra, India</li>
          </ul>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.bottomBar}>
        <span className={styles.copyright}>
          © {currentYear} Agrovigya. All copyrights reserved
        </span>
        <a href="#" className={styles.privacyLink}>Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
