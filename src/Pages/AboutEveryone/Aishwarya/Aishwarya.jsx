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
                Dr. Aishwarya Rahul Yadav is a distinguished academician with
                over twelve years of expertise in legal education, specializing
                in Medical Law, Family Law, Intellectual Property Rights, and
                Law of Torts. She holds a Ph.D. in Medical Law from New Law
                College, Bharati Vidyapeeth Deemed University, Pune, along with
                an LL.M. in Business, Science and Technology Law from Pune
                University and an MBL from the prestigious National Law School
                of India University. Dr. Aishwarya Yadav is presently serving at
                DES Shri Navalmal Firodia Law College, Pune, where she continues
                to make significant contributions to the field of legal
                education. A prolific author, she has penned highly regarded
                research papers published in UGC-listed journals and numerous
                scholarly articles, with a focus on the ethical and legal
                dimensions of medical experimentation and drug regulation in
                India. Her scholarly contributions have earned her widespread
                recognition within the academic community. A NET-qualified
                educator and certified POSH Act trainer, she has delivered
                various guest lectures and served as an editor for several
                esteemed academic publications.
              </p>
              <p>
                She is frequently sought after as a resource person, judge, and
                mentor, contributing her vast knowledge and expertise to
                national and international legal forums. Her outstanding
                contributions to legal scholarship and pedagogy have earned her
                several prestigious accolades, including the Global Faculty
                Award (2021) and the International Research Excellence Award
                (2021).
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
