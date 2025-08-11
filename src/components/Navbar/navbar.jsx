import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, LogOut, User } from "lucide-react";
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
    {
      name: t("services.labourEstimation"),
      path: "https://labourestimation-agrovigya-production.up.railway.app/",
    },
    { name: t("services.governmentSchemes"), path: "/govt-schemes" },
    { name: t("services.marketplace"), path: "/marketplace" },
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
              src="https://i.postimg.cc/0QwcFG1R/agrovigya-logos-04.png"
              alt="AgroVigya Logo"
              className={styles.logoImage}
            />
          </Link>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            <Link to="/" className={styles.navLink}>
              {t("navbar.home")}
            </Link>
            <Link to="/about" className={styles.navLink}>
              {t("navbar.aboutUs")}
            </Link>

            {/* Services Dropdown for Desktop */}
            <div className={styles.dropdownContainer} ref={dropdownRef}>
              <button
                className={styles.dropdownTrigger}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                {t("navbar.services")}{" "}
                <ChevronDown className={styles.dropdownIcon} />
              </button>
              {isServicesOpen && (
                <div className={styles.dropdownMenu}>
                  {services.map((service, index) =>
                    service.path.startsWith("http") ? (
                      <a
                        key={index}
                        href={service.path}
                        className={styles.mobileDropdownItem}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {service.name}
                      </a>
                    ) : (
                      <Link
                        key={index}
                        to={service.path}
                        className={styles.mobileDropdownItem}
                      >
                        {service.name}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>

            <Link to="/download-app" className={styles.navLink}>
              {t("navbar.download_app")}
            </Link>

            {/* Language Switcher for Desktop */}
            <div className={styles.languageSwitcherContainer}>
              <LanguageSwitcher />
            </div>

            {/* Profile and Logout Dropdown */}
            {user ? (
              <div className={styles.profileDropdownContainer}>
                <button className={styles.profileButton} onClick={handleProfileClick}>
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="Profile" className={styles.profileImage} />
                  ) : (
                    <User size={24} />
                  )}
                </button>
                <div className={styles.profileDropdownMenu}>
                  <Link to="/profile" className={styles.profileDropdownItem}>
                    {t("navbar.profile")}
                  </Link>
                  <button onClick={handleLogout} className={styles.profileDropdownItem}>
                    {t("navbar.logout")}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link to="/signup" className={styles.navLink}>
                  {t("navbar.login_signup")}
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className={styles.mobileMenuButton}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={styles.hamburger}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/" className={styles.mobileNavLink}>
            {t("navbar.home")}
          </Link>
          <Link to="/about" className={styles.mobileNavLink}>
            {t("navbar.aboutUs")}
          </Link>

          {/* Services Dropdown for Mobile */}
          <div className={styles.mobileDropdown}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={styles.mobileDropdownTrigger}
            >
              {t("navbar.services")}
              <ChevronDown
                className={`${styles.mobileDropdownIcon} ${
                  isServicesOpen ? styles.rotate : ""
                }`}
              />
            </button>
            {isServicesOpen && (
              <div className={styles.mobileDropdownContent}>
                {services.map((services, index) =>
                  services.path.startsWith("http") ? (
                    <a
                      key={index}
                      href={services.path}
                      className={styles.mobileDropdownItem}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {services.name}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={services.path}
                      className={styles.mobileDropdownItem}
                    >
                      {services.name}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>

          {/* Profile and Logout Dropdown for Mobile */}
          {user ? (
            <div className={styles.mobileProfileDropdownContainer}>
              <button className={styles.mobileProfileButton} onClick={handleProfileClick}>
                {user.photoURL ? (
                  <img src={user.photoURL} alt="Profile" className={styles.mobileProfileImage} />
                ) : (
                  <User size={24} />
                )}
              </button>
              <div className={styles.mobileProfileDropdownMenu}>
                <Link to="/profile" className={styles.mobileProfileDropdownItem}>
                  {t("navbar.profile")}
                </Link>
                <button onClick={handleLogout} className={styles.mobileProfileDropdownItem}>
                  {t("navbar.logout")}
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link to="/login" className={styles.mobileNavButton}>
                Login
              </Link>
              <Link to="/signup" className={styles.mobileNavButton}>
                Signup
              </Link>
            </>
          )}

          <Link to="/contact" className={styles.mobileContactButton}>
            {t("navbar.contact")}
          </Link>

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
