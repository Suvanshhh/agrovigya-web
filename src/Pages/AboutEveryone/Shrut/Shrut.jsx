import React from 'react';
import Navbar from '../../../components/Navbar/navbar';
import Footer from '../../../components/Footer/footer';
import styles from './Shrut.module.css';

const Shrut = () => {
  return (
    <>
       <Navbar />
      <div className={styles.profileBg}>
        <div className={styles.profileContainer}>
          <h1 className={styles.profileTitle}>Shrut kolhe</h1>
          <div className={styles.profileCard}>
            <div className={styles.profileImageWrapper}>
              <img
                src="https://i.postimg.cc/KjPjcWMq/shrut-pic2-removebg-preview.png"
                alt="Shrut kolhe"
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
                  <span className={styles.detailLabel}>Researcher</span>
                  {/* <span className={styles.detailValue}>Website Developer</span> */}
                </div>
              </div>
            </div>
            <div className={styles.profileDesc}>
              <p>
              Pursuing law from DES Shri Navalmal Firodia Law College, Pune. Demonstrates strong research, analytical, and drafting skills with focus on achieving optimum results. Reliable team player who adapts seamlessly to changing needs, ensuring collaborative success, adapted to manage multiple tasks while maintaining high standards of precision and professionalism. 

              </p>
              <p>
              As a researcher in the team he is known to thrive in the quiet spaces, who can break down intricate challenges into actionable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
};

export default Shrut;
