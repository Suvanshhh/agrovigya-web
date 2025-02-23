import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    t("services.governmentSchemes"),
    t("services.skillDevelopment"),
    t("services.findJobs"),
    t("services.cropSuggestion"),
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          {/* Logo */}
          <a href="/" className={styles.logo}>
            <img
              src="https://i.postimg.cc/j2tXv7Cn/agro-Vigya-Logo.png"
              alt="AgroVigya Logo"
              className={styles.logoImage}
            />
          </a>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            <a href="/" className={styles.navLink}>{t("navbar.home")}</a>
            <a href="/about" className={styles.navLink}>{t("navbar.aboutUs")}</a>

            {/* Services Dropdown for Desktop */}
            <div
              className={styles.dropdownContainer}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={styles.dropdownTrigger}>
                {t("navbar.services")} <ChevronDown className={styles.dropdownIcon} />
              </button>
              {isServicesOpen && (
                <div className={styles.dropdownMenu}>
                  {services.map((service, index) => (
                    <a key={index} href={`#${service.toLowerCase().replace(" ", "-")}`} className={styles.dropdownItem}>
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="/dashboard" className={styles.navLink}>{t("navbar.dashboard")}</a>
            <a href="/profile" className={styles.navLink}>{t("navbar.profile")}</a>
            <a href="/contact" className={styles.contactButton}>{t("navbar.joinNow")}</a>
          </div>

          {/* Mobile Menu Button */}
          <div className={styles.mobileMenuButton}>
            <button onClick={() => setIsOpen(!isOpen)} className={styles.hamburger}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <a href="/" className={styles.mobileNavLink}>{t("navbar.home")}</a>
          <a href="/about" className={styles.mobileNavLink}>{t("navbar.aboutUs")}</a>

          {/* Services Dropdown for Mobile */}
          <div className={styles.mobileDropdown}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={styles.mobileDropdownTrigger}
            >
              {t("navbar.services")}
              <ChevronDown className={`${styles.mobileDropdownIcon} ${isServicesOpen ? styles.rotate : ""}`} />
            </button>
            {isServicesOpen && (
              <div className={styles.mobileDropdownContent}>
                {services.map((service, index) => (
                  <a key={index} href={`#${service.toLowerCase().replace(" ", "-")}`} className={styles.mobileDropdownItem}>
                    {service}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/dashboard" className={styles.mobileNavLink}>{t("navbar.dashboard")}</a>
          <a href="/profile" className={styles.mobileNavLink}>{t("navbar.profile")}</a>
          <a href="/contact" className={styles.mobileContactButton}>{t("navbar.joinNow")}</a>
        </div>
      )}
      <LanguageSwitcher />
    </nav>
  );
};

export default Navbar;
