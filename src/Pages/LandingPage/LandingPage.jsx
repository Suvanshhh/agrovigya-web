import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 4000); // Let the animation finish before routing

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.landingContainer}>
      <img
        src="https://i.postimg.cc/HnGcvXdN/agrovigya-logos-03.png"
        alt="Logo"
        className={styles.animatedLogo}
      />
      <div className={styles.shutterTop}></div>
      <div className={styles.shutterBottom}></div>
    </div>
  );
};

export default LandingPage;
