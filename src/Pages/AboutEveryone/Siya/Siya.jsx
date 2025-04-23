import React from "react";
import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer/footer";
import styles from "./Siya.module.css";

const Siya = () => {
  return (
    <>
      <Navbar />
      <div className={styles.profileBg}>
        <div className={styles.profileContainer}>
          <h1 className={styles.profileTitle}>Siya Nimkar</h1>
          <div className={styles.profileCard}>
            <div className={styles.profileImageWrapper}>
              <img
                src="https://i.postimg.cc/PJ2jfK0m/siya-pic.jpg"
                alt="Siya Nimkar"
                className={styles.profileImage}
              />
              <div className={styles.profileDetails}>
                {/* <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>location</span>
                  <span className={styles.detailValue}>Pune, Maharashtra</span>
                </div> */}
                {/* <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>phone</span>
                  <span className={styles.detailValue}>-</span>
                </div> */}
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>researcher</span>
                  {/* <span className={styles.detailValue}>Website Developer</span> */}
                </div>
              </div>
            </div>
            <div className={styles.profileDesc}>
              <p>
                I am Siya Nimkar, a dedicated research team member at Agrovigya
                and a B.A. LL.B. student at DES Shri Navalmal Firodia Law
                College, Pune. My curiosity and inquisitiveness drive my passion
                for research, allowing me to analyze complex issues with a
                critical and organized approach. I take pride in delivering
                well-researched and timely work while leveraging my strong
                communication and leadership skills. In addition to my academic
                and research pursuits, I am a UPSC Civil Services Examination
                aspirant, preparing diligently for the past 1.5 years at Jnana
                Prabodhini, Pune.
              </p>
              <p>
                With a commitment to continuous learning and excellence, I
                strive to contribute meaningfully in both academic and
                professional settings.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Siya;
