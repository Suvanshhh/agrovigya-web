import React from 'react';
import Navbar from '../../../components/Navbar/navbar';
import Footer from '../../../components/Footer/footer';
import styles from './Suvansh.module.css';

const Suvansh = () => {
  return (
    <>
      <Navbar />
      <div className={styles.profileBg}>
        <div className={styles.profileContainer}>
          <h1 className={styles.profileTitle}>Suvansh Choudhary</h1>
          <div className={styles.profileCard}>
            <div className={styles.profileImageWrapper}>
              <img
                src="https://i.ibb.co/PzCw2K7S/1000158921-01.jpg"
                alt="Suvansh Choudhary"
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
                  <span className={styles.detailLabel}>Website Developer</span>
                  
                </div>
              </div>
            </div>
            <div className={styles.profileDesc}>
              <p>
                I am Suvansh Choudhary, a dedicated developer and team member at AgroVigya. My passion for technology and problem-solving drives my work in building robust and scalable digital solutions for the agricultural sector. I take pride in delivering clean, efficient code and collaborating with cross-functional teams to turn ideas into impactful products.
              </p>
              <p>
                With a strong foundation in full-stack development and a commitment to continuous learning, I strive to contribute meaningfully to both academic and professional settings.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Suvansh;
