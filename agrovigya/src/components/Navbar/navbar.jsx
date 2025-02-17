import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    'Schemes',
    'My Skills',
    'Find Jobs',
    'Crop Suggestion'
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          {/* Logo */}
          <a href="/" className={styles.logo}>
            <img 
              src="https://i.postimg.cc/j2tXv7Cn/agro-Vigya-Logo.png" 
              alt="Devessence Logo" 
              className={styles.logoImage}
            />
          </a>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            <a href="/" className={styles.navLink}>Home</a>
            <a href="/about" className={styles.navLink}>About</a>

            {/* Services Dropdown for Desktop */}
            <div 
              className={styles.dropdownContainer}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={styles.dropdownTrigger}>
                Services <ChevronDown className={styles.dropdownIcon} />
              </button>
              
              {isServicesOpen && (
                <div className={styles.dropdownMenu}>
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={`#${service.toLowerCase().replace(' ', '-')}`}
                      className={styles.dropdownItem}
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/dashboard" className={styles.navLink}>Dashboard</a>
            <a href="/profile" className={styles.navLink}>Profile</a>
            {/* <a href="/schemes" className={styles.navLink}>Schemes</a>
            <a href="/skills" className={styles.navLink}>My Skills</a>
            <a href="/jobs" className={styles.navLink}>Find Jobs</a>
            <a href="/crop-suggestion" className={styles.navLink}>Crop Suggestion</a> */}
            <a href="/contact" className={styles.contactButton}>Contact Us</a>
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
          <a href="/" className={styles.mobileNavLink}>Home</a>
          <a href="/about" className={styles.mobileNavLink}>About</a>

          {/* Services Dropdown for Mobile */}
          <div className={styles.mobileDropdown}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={styles.mobileDropdownTrigger}
            >
              Services
              <ChevronDown className={`${styles.mobileDropdownIcon} ${isServicesOpen ? styles.rotate : ''}`} />
            </button>
            
            {isServicesOpen && (
              <div className={styles.mobileDropdownContent}>
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={`#${service.toLowerCase().replace(' ', '-')}`}
                    className={styles.mobileDropdownItem}
                  >
                    {service}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/dashboard" className={styles.mobileNavLink}>Dashboard</a>
          <a href="/profile" className={styles.mobileNavLink}>Profile</a>
          {/* <a href="/schemes" className={styles.mobileNavLink}>Schemes</a>
          <a href="/skills" className={styles.mobileNavLink}>My Skills</a>
          <a href="/jobs" className={styles.mobileNavLink}>Find Jobs</a>
          <a href="/crop-suggestion" className={styles.mobileNavLink}>Crop Suggestion</a> */}
          <a href="/contact" className={styles.mobileContactButton}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
