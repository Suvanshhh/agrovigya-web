import React from "react";
import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer/footer";
import styles from "./Anuja.module.css";

const Anuja = () => {
  return (
    <>
      <Navbar />
      <div className={styles.profileBg}>
        <div className={styles.profileContainer}>
          <h1 className={styles.profileTitle}>Anuja Sharma</h1>
          <div className={styles.profileCard}>
            <div className={styles.profileImageWrapper}>
              <img
                src="https://i.postimg.cc/MHWw8g36/anuja-pic.jpg"
                alt="Anuja Sharma"
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
                  <span className={styles.detailLabel}> PROJECT MENTOR</span>
                  {/* <span className={styles.detailValue}>Website Developer</span> */}
                </div>
              </div>
            </div>
            <div className={styles.profileDesc}>
              <p>
                Agriculture has always been the soul of our nation, providing
                livelihoods to millions and sustaining economies for
                generations. However, the sector continues to face challenges
                such as employment gaps, lack of market accessibility, and
                limited technological integration. Agrovigya is a promising step
                toward bridging these challenges by merging technology with
                traditional agricultural wisdom to create a more efficient,
                self-reliant, and sustainable ecosystem. Mentoring this
                initiative has been a truly rewarding experience. The dedication
                and vision behind Agrovigya reflect a deep understanding of
                rural challenges and a strong commitment to empowering farmers
                and job seekers. This platform is not just about enhancing
                employment opportunities; it is about fostering financial
                independence, market transparency, and knowledge-driven
                decision-making. What makes Agrovigya remarkable is its
                inclusive and scalable approach—leveraging AI, data analytics,
                and digital accessibility to ensure that even the most remote
                farmers and rural laborers can benefit from modern advancements.
                By eliminating middlemen, streamlining access to government
                schemes, and promoting sustainable agricultural practices,
                Agrovigya is set to revolutionize the agricultural landscape. I
                commend the entire team for their relentless efforts, strategic
                vision, and passion for social impact. I am confident that
                Agrovigya will not only enhance rural livelihoods but also
                contribute significantly to the nation’s progress.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Anuja;
