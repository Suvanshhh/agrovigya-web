import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000); // 3 seconds animation duration

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.landingContainer}>
      <img
        src="https://i.postimg.cc/9fPv4RGn/logo-1-h-removebg-preview.png"
        alt="Logo"
        className={styles.animatedLogo}
      />
    </div>
  );
};

export default LandingPage;
