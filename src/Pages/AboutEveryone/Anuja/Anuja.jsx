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
                Anuja Sharma is an accomplished legal academic and Assistant
                Professor at DES’ Shri Navalmal Firodia Law College, Pune, with
                over two and a half years of teaching experience. Specializing
                in Constitutional Law, Administrative Law, Labour Law, Law of
                Crimes, and Professional Ethics, she has made significant
                contributions both in the classroom and through academic
                leadership. Ms. Sharma is a NET-qualified educator (2019) and
                serves as the Faculty Coordinator for the Legal Research Cell,
                Placement and Internship Cell, and ISO Audit at her institution.
                A prolific author and editor, Ms. Sharma has contributed
                chapters and research papers to peer-reviewed journals and
                edited volumes, including the book 'Law and Morality' (ISBN:
                978-81-969024-7-6) and the journal Fiat Justitia (ISSN
                2320-2696). Her research interests span majoritarian morality,
                age of consent, and judicial trends in Indian sedition law. She
                has also designed a certificate course in AI and Law and is
                currently developing a book titled "AI in the Courtroom:
                Navigating the Legal Landscape." Ms. Sharma is frequently
                invited as a guest lecturer, delivering talks on topics such as
                Human Rights and Duties and the Indian Constitution at leading
                institutions. She has earned special appreciation from the State
                Climate Action Cell, Government of Maharashtra, for her
                contributions to Themisia 2.0 (Environment Law), as well as for
                her consultancy work with NAAC. Her commitment to professional
                development is reflected in her completion of induction and
                refresher programs with top grades from Jamia Millia Islamia and
                UGC-HRDC Ranchi University, respectively. Through her teaching,
                research, editorial work, and academic leadership, Anuja Sharma
                continues to make a meaningful impact on legal education and
                scholarship in India. This biography is concise, highlights her
                qualifications, teaching and research experience, publications,
                leadership roles, recognitions, and ongoing
                contributions—mirroring the style and structure of your example.
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
