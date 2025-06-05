import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import styles from "./about.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const teamMembers = [
  {
    key: "siyaNimkar",
    img: "https://i.postimg.cc/PJ2jfK0m/siya-pic.jpg",
  },
  {
    key: "shrutiKolhe",
    img: "https://i.postimg.cc/KjPjcWMq/shrut-pic2-removebg-preview.png",
  },
  {
    key: "suvanshChoudhary",
    img: "https://i.ibb.co/PzCw2K7S/1000158921-01.jpg",
  },
  {
    key: "agnivaMaiti",
    img: "https://i.postimg.cc/hgzHNdVc/agniva-pic.jpg",
  },
  {
    key: "shivam",
    img: "https://i.postimg.cc/fLkx8mPW/shivam-pic.jpg",
  },
  {
    key: "ishaDeolakar",
    img: "https://i.postimg.cc/NfMkPDmL/ISHa.jpg",
  },
];

const projectDirector = {
  key: "shubhraTripathi",
  role: "Founder and Director",
  img: "https://i.postimg.cc/65pKbJGz/shubhra-pic.jpg",
};

const mentors = [
  {
    key: "ashokpalande",
    img: "https://i.ibb.co/PvGB5gpM/Ashok-palande-pic.jpg",
  },
  {
    key: "sunitaadhav",
    img: "https://i.ibb.co/9kCD72CN/sunita-adhav-pic.jpg",
  },
  {
    key: "aishwaryayadav",
    img: "https://i.postimg.cc/Jn38vRqY/aishwarya-pic.jpg0",
  },
  {
    key: "anujasharma",
    img: "https://i.postimg.cc/MHWw8g36/anuja-pic.jpg",
  },
  
];

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />

      {/* Who We Are */}
      <section className={styles.whoWeAreSection}>
        <h2 className={styles.sectionTitle}>{t("aboutUs.whoWeAre")}</h2>
        <div className={styles.whoWeAreContent}>
          <div className={styles.aboutText}>
            {t("aboutUs.whoWeAreContent")}
          </div>
          <div className={styles.featureGrid}>
            <div className={`${styles.featureCard} ${styles.fadeInLeft}`}>
              <div
                className={styles.featureBg}
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
                }}
              />
              <div className={styles.featureContent}>
                <h3>{t("aboutUs.globalImpact")}</h3>
                <p>{t("aboutUs.globalImpactDesc")}</p>
              </div>
            </div>
            <div className={`${styles.featureCard} ${styles.fadeInRight}`}>
              <div
                className={styles.featureBg}
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
                }}
              />
              <div className={styles.featureContent}>
                <h3>{t("aboutUs.expertTeam")}</h3>
                <p>{t("aboutUs.expertTeamDesc")}</p>
              </div>
            </div>
            <div className={`${styles.featureCard} ${styles.fadeInLeft}`}>
              <div
                className={styles.featureBg}
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className={styles.featureContent}>
                <h3>{t("aboutUs.innovation")}</h3>
                <p>{t("aboutUs.innovationDesc")}</p>
              </div>
            </div>
            <div className={`${styles.featureCard} ${styles.fadeInRight}`}>
              <div
                className={styles.featureBg}
                style={{ background: "#0d7c20" }}
              />
              <div className={styles.featureContent}>
                <h3>{t("aboutUs.focusedApproach")}</h3>
                <p>{t("aboutUs.focusedApproachDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mentors */}
      <section className={styles.mentorsSection}>
        <h2 className={styles.sectionTitle}>{t("ourMentors")}</h2>
        <div className={styles.teamGrid}>
          {mentors.map((mentor, idx) => (
            <Link
              key={idx}
              to={`/profile/${encodeURIComponent(t(`mentor.${mentor.key}.name`))}`}
              className={`${styles.teamCard} ${styles.fadeInUp}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={mentor.img}
                alt={t(`mentor.${mentor.key}.name`)}
                className={styles.teamImage}
              />
              <h3 className={styles.teamName}>
                {t(`mentor.${mentor.key}.name`)}
              </h3>
              <p className={styles.teamRole}>
                {t(`mentor.${mentor.key}.role`)}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Our Founder */}
      <section className={styles.founderSection}>
        <h2 className={styles.sectionTitle}>{t("ourFounder")}</h2>
        <Link
          to={`/profile/${encodeURIComponent(t(`team.${projectDirector.key}.name`))}`}
          className={`${styles.founderCard} ${styles.fadeInUp}`}
          style={{ textDecoration: "none" }}
        >
          <img
            src={projectDirector.img}
            alt={t(`team.${projectDirector.key}.name`)}
            className={styles.founderImage}
          />
          <h3 className={styles.founderName}>
            {t(`team.${projectDirector.key}.name`)}
          </h3>
          <p className={styles.founderRole}>
            {t(`team.${projectDirector.key}.role`)}
          </p>
        </Link>
      </section>

      {/* Our Team */}
      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>{t("ourTeam")}</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, idx) => (
            <Link
              key={idx}
              to={`/profile/${encodeURIComponent(t(`team.${member.key}.name`))}`}
              className={`${styles.teamCard} ${styles.fadeInUp}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={member.img}
                alt={t(`team.${member.key}.name`)}
                className={styles.teamImage}
              />
              <h3 className={styles.teamName}>
                {t(`team.${member.key}.name`)}
              </h3>
              <p className={styles.teamRole}>
                {t(`team.${member.key}.role`)}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
