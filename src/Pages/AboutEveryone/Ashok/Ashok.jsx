import React from "react";
import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer/footer";
import styles from "./Ashok.module.css";

const Ashok = () => {
  return (
    <>
      <Navbar />
      <div className={styles.profileBg}>
        <div className={styles.profileContainer}>
          <h1 className={styles.profileTitle}>Ashok Palande</h1>
          <div className={styles.profileCard}>
            <div className={styles.profileImageWrapper}>
              <img
                src="https://i.ibb.co/PvGB5gpM/Ashok-palande-pic.jpg"
                alt="Ashok Palande"
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
                  <span className={styles.detailLabel}>
                    Vice chairman, GB and Council, DES
                    chairman, CDC, DES SNFLC
                  </span>
                  {/* <span className={styles.detailValue}>Website Developer</span> */}
                </div>
              </div>
            </div>
            <div className={styles.profileDesc}>
              <p>
                Agriculture has always been the backbone of our nation, shaping
                its economy, culture, and livelihoods. However, with changing
                times, evolving challenges, and new opportunities, it is
                essential to integrate modern technology with traditional wisdom
                to ensure sustainable growth. Agrovigya is a step in this
                direction—an innovative initiative that not only enhances
                employment opportunities in the rural sector but also
                strengthens the agricultural ecosystem through digital
                solutions, skill development, and direct market access. Guiding
                and supporting this project has been an inspiring experience. It
                reflects the dedication, vision, and relentless efforts of the
                team in addressing critical issues like disguised unemployment,
                lack of financial accessibility, and the need for technological
                intervention in farming. Agrovigya is more than just a
                platform—it is a movement towards self-sufficiency, empowerment,
                and a digitally advanced rural economy.
              </p>
              <p>
                I applaud the team for their commitment, innovation, and hard
                work in shaping this initiative. There is still much more to
                achieve, and I am confident that Agrovigya will continue to make
                a lasting impact on the agricultural sector and rural workforce,
                creating new opportunities and driving sustainable progress.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ashok;
