import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import styles from "./about.module.css";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const teamMembers = [
  { name: "Siya Nimkar", role: "Researcher", img: "https://i.postimg.cc/PJ2jfK0m/siya-pic.jpg" },
  { name: "Shrut Kolhe", role: "Researcher", img: "https://i.postimg.cc/KjPjcWMq/shrut-pic2-removebg-preview.png" },
  { name: "Suvansh Choudhary", role: "Developer", img: "https://i.ibb.co/PzCw2K7S/1000158921-01.jpg" },
  { name: "Agniva Maiti", role: "Developer", img: "https://i.postimg.cc/hgzHNdVc/agniva-pic.jpg" },
  { name: "Shivam", role: "Developer", img: "https://i.postimg.cc/fLkx8mPW/shivam-pic.jpg" },
];

const projectDirector = {
  name: "Shubhra Tripathi",
  role: "",
  img: "https://i.postimg.cc/65pKbJGz/shubhra-pic.jpg",
};

const mentors = [
  { name: "Adv. Ashok Palande", role: "Vice Chairman, GB and Council, DES Chairman, CDC, DES SNFLC", img: "https://i.ibb.co/PvGB5gpM/Ashok-palande-pic.jpg" },
  { name: "Dr. Sunita Adhav", role: "Principal, DES SNFLC", img: "https://i.ibb.co/9kCD72CN/sunita-adhav-pic.jpg" },
  { name: "Anuja Sharma", img: "https://i.postimg.cc/MHWw8g36/anuja-pic.jpg" },
  { name: "Dr. Aishwarya Rahul Yadav", img: "https://i.postimg.cc/Jn38vRqY/aishwarya-pic.jpg0" },
];

const About = () => (
  <div>
    <Navbar />

    {/* Hero Section
    <section className={styles.heroSection}>
      {/* <div className={styles.heroOverlay} /> */}
      {/* <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>About us</h1>
      </div>
      <div className={styles.scrollIndicator}>
        <ChevronDown className={styles.chevron} />
      </div>
    </section>   */} 

    {/* Who We Are */}
    <section className={styles.whoWeAreSection}>
      <h2 className={styles.sectionTitle}>Who We Are</h2>
      <div className={styles.whoWeAreContent}>
        <div className={styles.aboutText}>
          AgroVigya is a pioneering digital platform committed to transforming India’s agricultural landscape by addressing disguised unemployment and fostering sustainable livelihoods. Our mission is to empower farmers, job seekers, and rural workers by integrating technology-driven solutions that bridge the gap between agriculture, employment, and skill development.<br /><br />
          Through data-driven crop recommendations, labor estimation tools, and job-matching services, we optimize agricultural productivity while connecting job seekers with relevant employment opportunities. AgroVigya also facilitates upskilling programs to enhance employability and provides seamless access to government schemes, subsidies, and financial aid. By leveraging AI-driven insights and a user-friendly interface, we ensure accessibility and efficiency in rural workforce development. Our platform is more than just an app—it’s a movement toward economic self-sufficiency, enabling farmers to increase their earnings, reducing unemployment, and creating a sustainable, technology-driven agricultural ecosystem.
        </div>
        <div className={styles.featureGrid}>
          <div className={`${styles.featureCard} ${styles.fadeInLeft}`}>
            <div className={styles.featureBg} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }} />
            <div className={styles.featureContent}>
              <h3>Global Impact</h3>
              <p>Revolutionizing agriculture through cutting-edge technology.</p>
            </div>
          </div>
          <div className={`${styles.featureCard} ${styles.fadeInRight}`}>
            <div className={styles.featureBg} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }} />
            <div className={styles.featureContent}>
              <h3>Expert Team</h3>
              <p>Dedicated professionals with expertise in agriculture and AI.</p>
            </div>
          </div>
          <div className={`${styles.featureCard} ${styles.fadeInLeft}`}>
            <div className={styles.featureBg} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80')" }} />
            <div className={styles.featureContent}>
              <h3>Innovation</h3>
              <p>Harnessing AI and data-driven insights for better farming.</p>
            </div>
          </div>
          <div className={`${styles.featureCard} ${styles.fadeInRight}`}>
            <div className={styles.featureBg} style={{ background: "#0d7c20" }} />
            <div className={styles.featureContent}>
              <h3>Focused Approach</h3>
              <p>Providing tailored solutions to support farmers worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Vision Section */}
    <section className={styles.visionSection}>
      <div className={styles.visionCard}>
        <h2>Our Vision</h2>
        <p>
          At AgroVigya, our vision is a future where agriculture empowers, sustains, and uplifts every rural community. We are committed to bridging the gap between agricultural potential and rural prosperity by providing innovative solutions, fostering skill development, and ensuring equitable access to resources. Our goal is to create a resilient ecosystem that not only enhances productivity but also improves the quality of life for farmers and rural workers across India.
        </p>
      </div>
    </section>

    {/* Our Mentors */}
    <section className={styles.mentorsSection}>
      <h2 className={styles.sectionTitle}>Our Mentors</h2>
      <div className={styles.teamGrid}>
        {mentors.map((mentor, idx) => (
          <div key={idx} className={`${styles.teamCard} ${styles.fadeInUp}`}>
            <img src={mentor.img} alt={mentor.name} className={styles.teamImage} />
            <h3 className={styles.teamName}>{mentor.name}</h3>
            {mentor.role && <p className={styles.teamRole}>{mentor.role}</p>}
          </div>
        ))}
      </div>
    </section>

    {/* Our Founder */}
    <section className={styles.founderSection}>
      <h2 className={styles.sectionTitle}>Our Founder</h2>
      <div className={`${styles.founderCard} ${styles.fadeInUp}`}>
        <img src={projectDirector.img} alt={projectDirector.name} className={styles.founderImage} />
        <h3 className={styles.teamName}>{projectDirector.name}</h3>
        <p className={styles.teamRole}>{projectDirector.role}</p>
      </div>
    </section>

    {/* Our Team */}
    <section className={styles.teamSection}>
      <h2 className={styles.sectionTitle}>Our Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, idx) => (
          <Link to={`/profile/${member.name}`} key={idx} className={`${styles.teamCard} ${styles.fadeInUp}`}>
            <img src={member.img} alt={member.name} className={styles.teamImage} />
            <h3 className={styles.teamName}>{member.name}</h3>
            <p className={styles.teamRole}>{member.role}</p>
          </Link>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
