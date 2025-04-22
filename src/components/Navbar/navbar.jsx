import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, LogOut } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import styles from "./navbar.module.css";
import { useAuth } from "../../context/AuthContext";
import { logout } from "../../firebase/auth";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const auth = useAuth();
  const user = auth?.user;
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const services = [
    { name: t("services.cropSuggestion"), path: "/crop-recommendation" },
    { name: t("services.labourEstimation"), path: "/labour-estimation" },
    { name: t("services.governmentSchemes"), path: "/governmentschemes" },
    { name: t("services.marketplace"), path: "/marketplace" }
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // --- Profile Button Handler ---
  const handleProfileClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <img
              src="https://i.postimg.cc/sDHmr0Hp/logo-1-03.png"
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
              ref={dropdownRef}
            >
              <button
                className={styles.dropdownTrigger}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
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

            {/* Updated Profile Button */}
            <button
              className={styles.navButton}
              onClick={handleProfileClick}
              type="button"
            >
              {t("navbar.profile")}
            </button>

            {/* Conditional Login/Logout Buttons */}
            {user ? (
              <button onClick={handleLogout} className={styles.navButton}>
                Logout <LogOut size={16} />
              </button>
            ) : (
              <>
                <Link to="/login" className={styles.navButton}>Login</Link>
                <Link to="/signup" className={styles.navButton}>Signup</Link>
              </>
            )}

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

          {/* Updated Profile Button for Mobile */}
          <button
            className={styles.mobileNavLink}
            onClick={handleProfileClick}
            type="button"
          >
            {t("navbar.profile")}
          </button>

          {/* Conditional Login/Logout Buttons for Mobile */}
          {user ? (
            <button onClick={handleLogout} className={styles.mobileNavButton}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className={styles.mobileNavButton}>Login</Link>
              <Link to="/signup" className={styles.mobileNavButton}>Signup</Link>
            </>
          )}

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
