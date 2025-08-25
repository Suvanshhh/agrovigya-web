import React from "react";
import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer/footer";
import styles from "./Agniva.module.css";

const Agniva = () => {
  return (
    <>
      <Navbar />
      <div className={styles.profileBg}>
        <div className={styles.profileContainer}>
          <h1 className={styles.profileTitle}>Agniva Maiti</h1>
          <div className={styles.profileCard}>
            <div className={styles.profileImageWrapper}>
              <img
                src="https://i.postimg.cc/hgzHNdVc/agniva-pic.jpg"
                alt="Agniva Maiti"
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
                Nomoskar! I'm a developer from Dimapur, Nagaland, currently an
                undergrad at KIIT-DU. I work with Flutter, React Native, and
                Kotlin for app development, alongside web development. My
                interests extend to AI-ML, particularly LLMs, NLP, and computer
                vision. I love exploring new tech, refining my skills, and
                turning ideas into functional, well-designed applications.
              </p>
              <p>
                When I’m not coding, you’ll probably find me with a cup of
                coffee, brainstorming my next project.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Agniva;
