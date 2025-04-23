import React from 'react';
import Navbar from '../../../components/Navbar/navbar';
import Footer from '../../../components/Footer/footer';
import styles from './Shubhra.module.css';

const Shubhra = () => {
  return (
    <>
       <Navbar />
      <div className={styles.profileBg}>
        <div className={styles.profileContainer}>
          <h1 className={styles.profileTitle}>Shubhra Tripathi</h1>
          <div className={styles.profileCard}>
            <div className={styles.profileImageWrapper}>
              <img
                src="https://i.postimg.cc/65pKbJGz/shubhra-pic.jpg"
                alt="Shubhra Tripathi"
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
                  <span className={styles.detailLabel}>FOUNDER</span>
                  {/* <span className={styles.detailValue}>Website Developer</span> */}
                </div>
              </div>
            </div>
            <div className={styles.profileDesc}>
              <p>
              I am a law student at DES Shri Navalmal Firodia Law College with a strong background in research and team collaboration. Through my experience in conducting insightful interviews, research, and editorial analysis, I have honed key skills in communication, time management, and strategic planning. Working with reputed publications has given me a deep understanding of social and political discourse.  

              </p>
              <p>
              As the product director of Agrovigya, I am committed to driving innovation and excellence in the agricultural sector. My leadership fosters a collaborative environment, ensuring impactful contributions to the community.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
};

export default Shubhra;
