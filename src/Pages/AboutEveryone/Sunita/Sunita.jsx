import React from 'react';
import Navbar from '../../../components/Navbar/navbar';
import Footer from '../../../components/Footer/footer';
import styles from './Sunita.module.css';

const Sunita = () => {
  return (
    <>
       <Navbar />
      <div className={styles.profileBg}>
        <div className={styles.profileContainer}>
          <h1 className={styles.profileTitle}>Dr. Sunita Adhav</h1>
          <div className={styles.profileCard}>
            <div className={styles.profileImageWrapper}>
              <img
                src="https://i.ibb.co/9kCD72CN/sunita-adhav-pic.jpg"
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
                  <span className={styles.detailLabel}>Principal, DES SNFLC</span>
                  {/* <span className={styles.detailValue}>Website Developer</span> */}
                </div>
              </div>
            </div>
            <div className={styles.profileDesc}>
              <p>
              Agriculture is not just a profession; it is the foundation of our economy and the heart of countless livelihoods. In today’s fast-evolving world, bridging the gap between traditional farming practices and modern technological advancements is essential for sustainable growth. Agrovigya is a commendable initiative that addresses this need by integrating employment opportunities, agricultural innovation, and digital empowerment into one comprehensive platform.
It has been an honor to mentor and support this project, which is driven by a vision of self-reliance, sustainability, and economic upliftment for rural communities. Agrovigya not only provides farmers and rural workers with direct access to markets, job opportunities, and financial resources but also ensures that they are equipped with the knowledge and tools needed to thrive in the digital age.

              </p>
              <p>
              This initiative is a shining example of how innovation, dedication, and teamwork can create real, lasting impact. I congratulate the entire team for their commitment, perseverance, and passion in turning this vision into reality. As we move forward, I am confident that Agrovigya will continue to redefine agricultural and employment landscapes, empowering countless individuals and contributing to national progress.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
};

export default Sunita;
