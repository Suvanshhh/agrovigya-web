import React from "react";
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
          <p className={styles.companyDesc}>
            Empowering farmers with technology-driven solutions for a sustainable future.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon}><Twitter size={20} /></a>
            <a href="#" className={styles.socialIcon}><Linkedin size={20} /></a>
            <a href="#" className={styles.socialIcon}><Instagram size={20} /></a>
            <a href="#" className={styles.socialIcon}><Github size={20} /></a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className={styles.linksSection}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.linksList}>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/schemes">Government Schemes</a></li>
            <li><a href="/crop-suggestion">Crop Suggestion</a></li>
            <li><a href="/jobs">Find Jobs</a></li>
            <li><a href="/skills">Skill Development</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div className={styles.servicesSection}>
          <h3 className={styles.footerTitle}>Our Services</h3>
          <ul className={styles.linksList}>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/schemes">Schemes</a></li>
            <li><a href="/skills">My Skills</a></li>
            <li><a href="/jobs">Find Jobs</a></li>
            <li><a href="/crop-suggestion">Crop Suggestion</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.contactSection}>
          <h3 className={styles.footerTitle}>Contact Us</h3>
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
              <p>XYZ, Maharashtra, India</p>
            </div>
            <div className={styles.contactItem}>
              <Instagram size={16} />
              <a href="#">Instagram</a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className={styles.newsletter}>
            <h4 className={styles.newsletterTitle}>
              Subscribe to Our Newsletter
            </h4>
            <form className={styles.subscribeForm}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.emailInput}
              />
              <button type="submit" className={styles.subscribeBtn}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          <p className={styles.copyright}>
            © {currentYear} AgroVigya. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
