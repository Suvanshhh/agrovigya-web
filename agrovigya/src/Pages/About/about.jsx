import React from 'react';
import { Globe, Users, Target, Rocket, ChevronDown } from 'lucide-react';
import styles from './about.module.css';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/Navbar/navbar';

const AboutPage = () => {
  const teamMembers = [
    { name: "Shivam", role: "Founder & CEO", img: "https://i.ibb.co/w6ddxYh/Whats-App-Image-2025-01-28-at-13-51-24-1.jpg" },  
    { name: "Suvansh Choudhary", role: "Founder & CEO", img: "https://i.ibb.co/PzCw2K7S/1000158921-01.jpg" },
    { name: "Shivangi Pandey", role: "HR & Social Media Manager", img: "https://i.ibb.co/zHM4YND/Whats-App-Image-2025-01-28-at-13-51-24.jpg" },
    { name: "Vaidik Shresth", role: "Lead Developer", img: "https://i.ibb.co/mNFmg0C/Whats-App-Image-2025-01-28-at-13-51-23-2.jpg" },
    { name: "Swapnil Raj", role: "Developer", img: "https://i.ibb.co/TwgzZ4k/Whats-App-Image-2025-01-28-at-13-51-23-1.jpg" },
    { name: "Shivam Tiwari", role: "Marketing Lead", img: "https://i.ibb.co/bHBrX8C/Whats-App-Image-2025-01-28-at-13-51-23.jpg" },
    { name: "Utkarsh Kumar", role: "Cloud Engineer", img: "https://i.ibb.co/6c8tFcxJ/Whats-App-Image-2025-01-29-at-23-34-51.jpg" }
  ];

  return (
    <div>
      <Navbar />
      
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              <span className={styles.titlePart1}>About</span>
              <span className={styles.titlePart2}>DevEssence</span>
            </h1>
            <p className={styles.subtitle}>
              Smart Solutions, Faster Results
            </p>
          </div>
          <div className={styles.scrollIndicator}>
            <ChevronDown className={styles.chevron} />
          </div>
        </section>

        {/* Company Info Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Who We Are</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <Globe className={styles.icon} />
                <h3 className={styles.cardTitle}>Global Reach</h3>
                <p className={styles.cardText}>Serving clients worldwide with innovative solutions</p>
              </div>
              <div className={styles.infoCard}>
                <Users className={styles.icon} />
                <h3 className={styles.cardTitle}>Expert Team</h3>
                <p className={styles.cardText}>Skilled professionals dedicated to excellence</p>
              </div>
              <div className={styles.infoCard}>
                <Target className={styles.icon} />
                <h3 className={styles.cardTitle}>Focused Approach</h3>
                <p className={styles.cardText}>Targeted solutions for specific needs</p>
              </div>
              <div className={styles.infoCard}>
                <Rocket className={styles.icon} />
                <h3 className={styles.cardTitle}>Innovation</h3>
                <p className={styles.cardText}>Cutting-edge technology solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className={styles.visionMission}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Our Vision & Mission</h2>
            <div className={styles.visionMissionGrid}>
              <div className={styles.visionCard}>
                <h3 className={styles.cardTitle}>Our Vision</h3>
                <p className={styles.cardText}>
                  To be the most trusted and innovative software development company
                  delivering exceptional digital solutions that transform businesses
                  and enhance lives.
                </p>
              </div>
              <div className={styles.visionCard}>
                <h3 className={styles.cardTitle}>Our Mission</h3>
                <p className={styles.cardText}>
                  Empower businesses with cutting-edge software solutions that enhance
                  efficiency, drive success, and create lasting value for our clients
                  through innovation and excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Meet Our Team</h2>
            <div className={styles.teamGrid}>
              {teamMembers.map((member, index) => (
                <div key={index} className={styles.teamCard}>
                  <div className={styles.imageWrapper}>
                    <div className={styles.imageGradient} />
                    <img
                      src={member.img || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop"}
                      alt={member.name}
                      className={styles.memberImage}
                    />
                  </div>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <div className={styles.cardOverlay} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
