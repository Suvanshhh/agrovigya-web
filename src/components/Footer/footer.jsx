import React from "react";
import { useTranslation } from "react-i18next";
import { Linkedin, Instagram, X } from "lucide-react";
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
            src="https://i.postimg.cc/0QwcFG1R/agrovigya-logos-04.png"
            alt="Agrovigya Logo"
            className={styles.footerLogo}
          />
          <p className={styles.companyDesc}>{t("footer.companyDesc")}</p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon}><Linkedin size={18} /></a>
            <a href="#" className={styles.socialIcon}><X size={18} /></a>
            <a href="#" className={styles.socialIcon}><Instagram size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.linksSection}>
          <div className={styles.linksTitle}>{t("footer.quickLinks")}</div>
          <ul className={styles.linksList}>
            <li><a href="signup">{t("navbar.dashboard")}</a></li>
            <li><a href="governmentschemes">{t("services.governmentSchemes")}</a></li>
            <li><a href="crop-recommendation">{t("services.cropSuggestion")}</a></li>
            <li><a href="jobs">{t("services.findJobs")}</a></li>
            <li><a href="contact">{t("navbar.contact")}</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className={styles.linksSection}>
          <div className={styles.linksTitle}>{t("footer.ourServices")}</div>
          <ul className={styles.linksList}>
            <li><a href="signup">{t("navbar.dashboard")}</a></li>
            <li><a href="profile">{t("navbar.profile")}</a></li>
            <li><a href="governmentschemes">{t("services.governmentSchemes")}</a></li>
            <li><a href="jobs">{t("services.findJobs")}</a></li>
            <li><a href="crop-recommendation">{t("services.cropSuggestion")}</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.linksSection}>
          <div className={styles.linksTitle}>{t("footer.contactUs")}</div>
          <ul className={styles.contactList}>
            <li><a href="mailto:info@agrovigya.com">info@agrovigya.com</a></li>
            <li><a href="tel:+916392919914">+91 6392919914</a></li>
            <li>{t("footer.address")}</li>
          </ul>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.bottomBar}>
        <span className={styles.copyright}>
          © {currentYear} Agrovigya. {t("footer.rightsReserved")}
        </span>
        <a href="#" className={styles.privacyLink}>{t("footer.privacyPolicy")}</a>
      </div>
    </footer>
  );
};

export default Footer;
