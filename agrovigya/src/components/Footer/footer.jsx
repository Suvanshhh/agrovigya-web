import React from "react";
import { useTranslation } from "react-i18next";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";
import styles from "./footer.module.css";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Company Info Section */}
        <div className={styles.companySection}>
          <img
            src="https://i.postimg.cc/j2tXv7Cn/agro-Vigya-Logo.png"
            alt="Agrovigya Logo"
            className={styles.footerLogo}
          />
          <p className={styles.companyDesc}>{t("footer.companyDesc")}</p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon}><Twitter size={20} /></a>
            <a href="#" className={styles.socialIcon}><Linkedin size={20} /></a>
            <a href="#" className={styles.socialIcon}><Instagram size={20} /></a>
            <a href="#" className={styles.socialIcon}><Github size={20} /></a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className={styles.linksSection}>
          <h3 className={styles.footerTitle}>{t("footer.quickLinks")}</h3>
          <ul className={styles.linksList}>
            <li><a href="/dashboard">{t("navbar.dashboard")}</a></li>
            <li><a href="/schemes">{t("services.governmentSchemes")}</a></li>
            <li><a href="/crop-suggestion">{t("services.cropSuggestion")}</a></li>
            <li><a href="/jobs">{t("services.findJobs")}</a></li>
            <li><a href="/skills">{t("services.skillDevelopment")}</a></li>
            <li><a href="/contact">{t("footer.contactUs")}</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div className={styles.servicesSection}>
          <h3 className={styles.footerTitle}>{t("footer.ourServices")}</h3>
          <ul className={styles.linksList}>
            <li><a href="/dashboard">{t("navbar.dashboard")}</a></li>
            <li><a href="/profile">{t("navbar.profile")}</a></li>
            <li><a href="/schemes">{t("services.governmentSchemes")}</a></li>
            <li><a href="/skills">{t("services.skillDevelopment")}</a></li>
            <li><a href="/jobs">{t("services.findJobs")}</a></li>
            <li><a href="/crop-suggestion">{t("services.cropSuggestion")}</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.contactSection}>
          <h3 className={styles.footerTitle}>{t("footer.contactUs")}</h3>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <Mail size={16} />
              <a href="mailto:info@agrovigya.com">info@agrovigya.com</a>
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} />
              <a href="tel:+916392919914">+91 6392919914</a>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={16} />
              <p>{t("footer.address")}</p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className={styles.newsletter}>
            <h4 className={styles.newsletterTitle}>{t("footer.newsletterTitle")}</h4>
            <form className={styles.subscribeForm}>
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className={styles.emailInput}
              />
              <button type="submit" className={styles.subscribeBtn}>
                {t("footer.subscribe")}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          <p className={styles.copyright}>
            © {currentYear} AgroVigya. {t("footer.rightsReserved")}
          </p>
          <div className={styles.legalLinks}>
            <a href="/privacy">{t("footer.privacyPolicy")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
