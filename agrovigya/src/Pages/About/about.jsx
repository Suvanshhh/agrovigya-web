import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import styles from "./about.module.css";
import { Users, Target, Rocket, Globe, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Siya Nimkar",
    role: "Researcher",
    img: "https://i.postimg.cc/PJ2jfK0m/siya-pic.jpg",
  },
  {
    name: "Shrut Kolhe",
    role: "Researcher",
    img: "https://i.postimg.cc/KjPjcWMq/shrut-pic2-removebg-preview.png",
  },
  {
    name: "Suvansh Choudhary",
    role: "Developer",
    img: "https://i.ibb.co/PzCw2K7S/1000158921-01.jpg",
  },
  {
    name: "Agniva Maiti",
    role: "Developer",
    img: "https://i.postimg.cc/hgzHNdVc/agniva-pic.jpg",
  },
  {
    name: "Shivam",
    role: "Developer",
    img: "https://i.postimg.cc/fLkx8mPW/shivam-pic.jpg",
  },
];

const projectDirector = {
  name: "Shubhra Tripathi",
  role: "",
  img: "https://i.postimg.cc/65pKbJGz/shubhra-pic.jpg",
};

const mentors = [
  {
    name: "Adv. Ashok Palande",
    role: "Vice Chairman, GB and Council, DES Chairman, CDC, DES SNFLC",
    img: "https://i.ibb.co/PvGB5gpM/Ashok-palande-pic.jpg",
  },
  {
    name: "Dr. Sunita Adhav",
    role: "Principal, DES SNFLC",
    img: "https://i.ibb.co/9kCD72CN/sunita-adhav-pic.jpg",
  },
  { name: "Anuja Sharma", img: "https://i.postimg.cc/MHWw8g36/anuja-pic.jpg" },
  {
    name: "Dr. Aishwarya Rahul Yadav",
    img: "https://i.postimg.cc/Jn38vRqY/aishwarya-pic.jpg0",
  },
];

const About = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About AgroVigya</h1>
          <p className={styles.heroSubtitle}>
            Empowering Farmers with Innovation
          </p>
        </div>
        <div className={styles.scrollIndicator}>
          <ChevronDown className={styles.chevron} />
        </div>
      </section>

      {/* Company Info Section */}
      <section className={styles.infoSection}>
        <h2 className={styles.sectionTitle}>Who We Are</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <Globe className={styles.icon} />
            <h3>Global Impact</h3>
            <p>Revolutionizing agriculture through cutting-edge technology.</p>
          </div>
          <div className={styles.infoCard}>
            <Users className={styles.icon} />
            <h3>Expert Team</h3>
            <p>Dedicated professionals with expertise in agriculture and AI.</p>
          </div>
          <div className={styles.infoCard}>
            <Target className={styles.icon} />
            <h3>Focused Approach</h3>
            <p>Providing tailored solutions to support farmers worldwide.</p>
          </div>
          <div className={styles.infoCard}>
            <Rocket className={styles.icon} />
            <h3>Innovation</h3>
            <p>Harnessing AI and data-driven insights for better farming.</p>
          </div>
        </div>
      </section>

      {/* Our Mentors Section (Now on Top) */}
      <section className={styles.mentorsSection}>
        <h2 className={styles.sectionTitle}>Our Mentors</h2>
        <div className={styles.teamGrid}>
          {mentors.map((mentor, index) => (
            <div key={index} className={styles.teamCard}>
              <img
                src={mentor.img}
                alt={mentor.name}
                className={styles.teamImage}
              />
              <h3 className={styles.teamName}>{mentor.name}</h3>
              {mentor.role && <p className={styles.teamRole}>{mentor.role}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Project Director Section */}
      <section className={styles.projectDirectorSection}>
        <h2 className={styles.sectionTitle}>Founder</h2>
        <div className={styles.projectDirectorCard}>
          <img
            src={projectDirector.img}
            alt={projectDirector.name}
            className={styles.teamImage}
          />
          <h3 className={styles.teamName}>{projectDirector.name}</h3>
          <p className={styles.teamRole}>{projectDirector.role}</p>
        </div>
      </section>

      {/* Our Team Section (Now at the Bottom) */}
      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <Link
              to={`/profile/${member.name}`}
              key={index}
              className={styles.teamCard}
            >
              <img
                src={member.img}
                alt={member.name}
                className={styles.teamImage}
              />
              <h3 className={styles.teamName}>{member.name}</h3>
              <p className={styles.teamRole}>{member.role}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
