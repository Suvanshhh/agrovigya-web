import React from "react";
import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer/footer";
import styles from "./Aishwarya.module.css";

const Aishwarya = () => {
  return (
    <>
      <Navbar />
      <div className={styles.profileBg}>
        <div className={styles.profileContainer}>
          <h1 className={styles.profileTitle}>Dr. Aishwarya Yadav</h1>
          <div className={styles.profileCard}>
            <div className={styles.profileImageWrapper}>
              <img
                src="https://i.postimg.cc/Jn38vRqY/aishwarya-pic.jpg0"
                alt="Dr. Aishwarya Yadav"
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
                  <span className={styles.detailLabel}>PROJECT MENTOR</span>
                  {/* <span className={styles.detailValue}>Website Developer</span> */}
                </div>
              </div>
            </div>
            <div className={styles.profileDesc}>
              <p>
                Agriculture is not just the backbone of our economy; it is the
                foundation of human civilization. As we navigate an era of rapid
                technological advancements, it becomes imperative to bridge the
                gap between traditional farming methods and modern innovations.
                Agrovigya is a visionary initiative that seeks to transform
                rural employment and agricultural practices by integrating
                technology, data-driven insights, and market accessibility. It
                has been an enriching experience to mentor and guide this
                project, which is deeply rooted in the principles of
                sustainability, empowerment, and economic self-reliance. The
                platform not only addresses the critical issues of disguised
                unemployment, fragmented marketplaces, and lack of financial
                inclusion but also provides a practical, scalable solution to
                uplift rural communities. Agrovigya is more than just a digital
                platform—it is a movement toward a self-sufficient and
                technology-driven agricultural ecosystem. By leveraging
                AI-powered solutions, predictive analytics, and direct market
                linkages, this initiative fosters an environment where farmers
                and rural workers can thrive with dignity, stability, and
                financial security.
              </p>
              <p>
                I extend my heartfelt congratulations to the entire team for
                their dedication, perseverance, and unwavering commitment to
                this cause. I am confident that Agrovigya will set new
                benchmarks in agricultural innovation and rural employment while
                significantly contributing to the nation's socio-economic
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aishwarya;
