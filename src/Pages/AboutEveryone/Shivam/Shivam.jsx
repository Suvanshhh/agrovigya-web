import React from "react";
import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer/footer";
import styles from "./Shivam.module.css";

const Shivam = () => {
  return (
    <>
      <Navbar />
      <div className={styles.profileBg}>
        <div className={styles.profileContainer}>
          <h1 className={styles.profileTitle}>Shivam</h1>
          <div className={styles.profileCard}>
            <div className={styles.profileImageWrapper}>
              <img
                src="https://i.postimg.cc/fLkx8mPW/shivam-pic.jpg"
                alt="Shivam"
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
                  <span className={styles.detailLabel}>App Developer</span>

                </div>
              </div>
            </div>
            <div className={styles.profileDesc}>
              <p>
                As a passionate developer, I thrive on building innovative and
                efficient solutions that enhance user experiences. With
                expertise in Flutter, Node.js, and machine learning, I
                specialize in crafting dynamic applications, from mobile apps to
                intelligent chatbots. Whether it's designing seamless UI/UX,
                optimizing backend performance, or integrating AI-driven
                features, I’m always eager to push the boundaries of technology.
              </p>
              <p>
                Being an active contributor to hackathons and entrepreneurial
                projects, I believe in creating impactful digital products that
                bridge gaps and solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shivam;
