import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation
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
    { name: t("services.governmentSchemes"), path: "/government-schemes" },
    { name: t("services.skillDevelopment"), path: "/skill-development" },
    { name: t("services.findJobs"), path: "/find-jobs" },
    { name: t("services.cropSuggestion"), path: "/crop-recommendation" }
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <img
              src="https://i.postimg.cc/j2tXv7Cn/agro-Vigya-Logo.png"
              alt="AgroVigya Logo"
              className={styles.logoImage}
            />
          </Link>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            <Link to="/" className={styles.navLink}>{t("navbar.home")}</Link>
            <Link to="/about" className={styles.navLink}>{t("navbar.aboutUs")}</Link>

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
                    <Link key={index} to={service.path} className={styles.dropdownItem}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* <Link to="/dashboard" className={styles.navLink}>{t("navbar.dashboard")}</Link> */}
            <Link to="/profile" className={styles.navLink}>{t("navbar.profile")}</Link>

            {/* Login & Signup Buttons */}
            <Link to="/login" className={styles.navButton}>Login</Link>
            <Link to="/signup" className={styles.navButton}>Signup</Link>

            <Link to="/contact" className={styles.contactButton}>{t("navbar.contact")}</Link>

            {/* Language Switcher for Desktop */}
            <div className={styles.languageSwitcherContainer}>
              <LanguageSwitcher />
            </div>
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
          <Link to="/" className={styles.mobileNavLink}>{t("navbar.home")}</Link>
          <Link to="/about" className={styles.mobileNavLink}>{t("navbar.aboutUs")}</Link>

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
                  <Link key={index} to={service.path} className={styles.mobileDropdownItem}>
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* <Link to="/dashboard" className={styles.mobileNavLink}>{t("navbar.dashboard")}</Link> */}
          <Link to="/profile" className={styles.mobileNavLink}>{t("navbar.profile")}</Link>

          {/* Login & Signup Buttons for Mobile */}
          <Link to="/login" className={styles.mobileNavButton}>Login</Link>
          <Link to="/signup" className={styles.mobileNavButton}>Signup</Link>

          <Link to="/contact" className={styles.mobileContactButton}>{t("navbar.contact")}</Link>

          {/* Language Switcher for Mobile */}
          <div className={styles.languageSwitcherContainer}>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
