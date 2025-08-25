import React from 'react';
import Navbar from '../../../components/Navbar/navbar';
import Footer from '../../../components/Footer/footer';
import styles from './Isha.module.css';

const Isha = () => {
  return (
    <>
       <Navbar />
      <div className={styles.profileBg}>
        <div className={styles.profileContainer}>
          <h1 className={styles.profileTitle}>Isha Deolekar</h1>
          <div className={styles.profileCard}>
            <div className={styles.profileImageWrapper}>
              <img
                src="https://i.postimg.cc/NfMkPDmL/ISHa.jpg"
                alt="Isha Deolekar"
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
                  <span className={styles.detailLabel}>UI/UX & Graphics Designer</span>
                  {/* <span className={styles.detailValue}>a</span> */}
                </div>
              </div>
            </div>
            <div className={styles.profileDesc}>
              <p>
              I'm Isha Deolekar, a Ui/ Ux designer at Agrovigya and a second-year UX design student at MIT World Peace University, Pune, with a passion for crafting intuitive and visually engaging digital experiences. I love designing responsive interfaces that feel seamless across web and mobile platforms while staying true to brand identity. Problem-solving and attention to detail are at the core of my work—I enjoy finding creative ways to enhance user interactions.

              </p>
              <p>
              Beyond UI design, I’ve also explored branding through logo design, including a project for Agrovigya, which gave me a deeper appreciation for visual storytelling. I’m always eager to learn, experiment, and create designs that not only look good but also feel effortless to use!

              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
};

export default Isha;
