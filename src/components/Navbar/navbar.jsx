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
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileProfileDropdownOpen, setIsMobileProfileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const auth = useAuth();
  const user = auth?.user;
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

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
      setIsProfileDropdownOpen(false);
      setIsMobileProfileDropdownOpen(false);
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
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    }
    
    // Close dropdown when clicking anywhere outside
    document.addEventListener("mousedown", handleClickOutside);
    
    // Close dropdown when scrolling
    const handleScroll = () => {
      setIsProfileDropdownOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dropdownRef, profileDropdownRef]);

  const handleProfileClick = () => {
    if (user) {
      navigate("/profile");
      setIsProfileDropdownOpen(false);
      setIsMobileProfileDropdownOpen(false);
    } else {
      navigate("/login");
    }
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleMobileProfileDropdown = () => {
    setIsMobileProfileDropdownOpen(!isMobileProfileDropdownOpen);
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
                        className={styles.dropdownItem}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {service.name}
                      </a>
                    ) : (
                      <Link
                        key={index}
                        to={service.path}
                        className={styles.dropdownItem}
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
              <div className={styles.profileDropdownContainer} ref={profileDropdownRef}>
                <button 
                  className={styles.profileButton} 
                  onClick={toggleProfileDropdown}
                  aria-expanded={isProfileDropdownOpen}
                  aria-haspopup="true"
                >
                  {user.photoURL ? (
                    <img 
                      src={user.photoURL} 
                      alt="Profile" 
                      className={styles.profileImage}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className={styles.profileIconFallback}
                    style={{ display: user.photoURL ? 'none' : 'flex' }}
                  >
                    <User size={20} />
                  </div>
                  <ChevronDown className={`${styles.profileChevron} ${isProfileDropdownOpen ? styles.rotate : ''}`} />
                </button>
                {isProfileDropdownOpen && (
                  <div className={styles.profileDropdownMenu}>
                    <div className={styles.profileDropdownHeader}>
                      <div className={styles.profileInfo}>
                        {user.photoURL && (
                          <img 
                            src={user.photoURL} 
                            alt="Profile" 
                            className={styles.profileDropdownImage}
                          />
                        )}
                        <div className={styles.profileText}>
                          <p className={styles.profileName}>
                            {user.displayName || user.email?.split('@')[0] || 'User'}
                          </p>
                          <p className={styles.profileEmail}>{user.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.profileDropdownDivider}></div>
                    <button 
                      onClick={handleProfileClick} 
                      className={styles.profileDropdownItem}
                    >
                      <User size={16} />
                      <span>{t("navbar.profile")}</span>
                    </button>
                    <button 
                      onClick={handleLogout} 
                      className={styles.profileDropdownItem}
                    >
                      <LogOut size={16} />
                      <span>{t("navbar.logout")}</span>
                    </button>
                  </div>
                )}
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

          {/* Profile and Logout Section for Mobile */}
          {user ? (
            <div className={styles.mobileProfileSection}>
              <button 
                className={styles.mobileProfileButton} 
                onClick={toggleMobileProfileDropdown}
              >
                <div className={styles.mobileProfileButtonContent}>
                  {user.photoURL ? (
                    <img 
                      src={user.photoURL} 
                      alt="Profile" 
                      className={styles.mobileProfileImage}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className={styles.mobileProfileIconFallback}
                    style={{ display: user.photoURL ? 'none' : 'flex' }}
                  >
                    <User size={20} />
                  </div>
                  <div className={styles.mobileProfileText}>
                    <span className={styles.mobileProfileName}>
                      {user.displayName || user.email?.split('@')[0] || 'User'}
                    </span>
                    <span className={styles.mobileProfileEmail}>{user.email}</span>
                  </div>
                </div>
                <ChevronDown 
                  className={`${styles.mobileProfileChevron} ${isMobileProfileDropdownOpen ? styles.rotate : ''}`} 
                />
              </button>
              
              {isMobileProfileDropdownOpen && (
                <div className={styles.mobileProfileDropdownMenu}>
                  <button 
                    onClick={handleProfileClick} 
                    className={styles.mobileProfileDropdownItem}
                  >
                    <User size={16} />
                    <span>{t("navbar.profile")}</span>
                  </button>
                  <button 
                    onClick={handleLogout} 
                    className={styles.mobileProfileDropdownItem}
                  >
                    <LogOut size={16} />
                    <span>{t("navbar.logout")}</span>
                  </button>
                </div>
              )}
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