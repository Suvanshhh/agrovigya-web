import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import styles from "./about.module.css";
import { Leaf, Users, Target, Rocket, Globe, ChevronDown } from "lucide-react";

const teamMembers = [
  { name: "Shubhra Tripathi", role: "Product Director", img: "" },
  { name: "Suvansh Choudhary", role: "Developer", img: "https://i.ibb.co/PzCw2K7S/1000158921-01.jpg" },
  { name: "Agniva Maiti", role: "Developer", img: "" },
  { name: "Shivam", role: "Developer", img: "" },
  { name: "Shrut", role: "Researcher", img: "" },
  { name: "Siya", role: "Researcher", img: "" }
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
          <p className={styles.heroSubtitle}>Empowering Farmers with Innovation</p>
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

      {/* Vision & Mission Section */}
      <section className={styles.visionMissionSection}>
        <h2 className={styles.sectionTitle}>Our Vision & Mission</h2>
        <div className={styles.visionMissionGrid}>
          <div className={styles.visionCard}>
            <h3>Our Vision</h3>
            <p>To revolutionize agriculture through AI-driven solutions and empower farmers with knowledge and resources.</p>
          </div>
          <div className={styles.visionCard}>
            <h3>Our Mission</h3>
            <p>To make farming smarter, more sustainable, and accessible by bridging the gap between technology and agriculture.</p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              <img src={member.img} alt={member.name} className={styles.teamImage} />
              <h3 className={styles.teamName}>{member.name}</h3>
              <p className={styles.teamRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
