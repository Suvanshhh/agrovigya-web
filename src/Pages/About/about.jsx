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





// import React, { useEffect, useRef, useState } from 'react';

// const About = () => {
//   const [visibleItems, setVisibleItems] = useState(new Set());
//   const observerRef = useRef(null);

//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisibleItems(prev => new Set([...prev, entry.target.dataset.index]));
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: '50px' }
//     );

//     const elements = document.querySelectorAll('[data-animate]');
//     elements.forEach(el => observerRef.current.observe(el));

//     return () => {
//       if (observerRef.current) {
//         observerRef.current.disconnect();
//       }
//     };
//   }, []);

//   const founders = [
//     {
//       name: "Shubhra Tripathi",
//       role: "Founder & Director",
//       description: "Visionary leader with 20+ years in agricultural innovation and sustainable farming solutions.",
//       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
//     },
//     {
//       name: "Dr. Rajesh Kumar",
//       role: "Co-founder & CEO",
//       description: "Agricultural Engineer with deep expertise in precision agriculture and technology integration.",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
//     }
//   ];

//   const mentors = [
//     {
//       name: "Dr. Anand Krishnan",
//       role: "Agricultural Advisor",
//       description: "Former Director of Agricultural Research with 30+ years of field experience.",
//       image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
//     },
//     {
//       name: "Ravi Sharma",
//       role: "Technology Mentor",
//       description: "Ex-CTO of major agtech companies, specializing in IoT and AI solutions.",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
//     },
//     {
//       name: "Dr. Sunita Rao",
//       role: "Research Mentor",
//       description: "Leading scientist in crop genomics and sustainable farming practices.",
//       image: "https://images.unsplash.com/photo-1594736797933-d0c6051dbf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
//     },
//     {
//       name: "Prof. Maya Gupta",
//       role: "Innovation Advisor",
//       description: "Academic leader in agricultural technology and rural development programs.",
//       image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
//     }
//   ];

//   const teamMembers = [
//     {
//       name: "Dr. Priya Sharma",
//       role: "CTO",
//       description: "AI/ML specialist focused on precision agriculture and crop monitoring systems.",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
//     },
//     {
//       name: "Amit Patel",
//       role: "Head of Operations",
//       description: "Operations expert with deep knowledge of agricultural supply chains and farmer networks.",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
//     },
//     {
//       name: "Dr. Meera Singh",
//       role: "Research Director",
//       description: "Plant pathologist specializing in disease detection and crop health analytics.",
//       image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
//     },
//     {
//       name: "Rahul Verma",
//       role: "Lead Developer",
//       description: "Full-stack developer with expertise in building scalable agricultural technology platforms.",
//       image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
//     },
//     {
//       name: "Dr. Kavita Nair",
//       role: "Data Scientist",
//       description: "Specializes in machine learning models for crop prediction and yield optimization.",
//       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
//     },
//     {
//       name: "Arjun Singh",
//       role: "UX/UI Designer",
//       description: "Creative designer focused on user-centered design for agricultural applications.",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
//     }
//   ];

//   const styles = {
//     container: {
//       minHeight: '100vh',
//       backgroundColor: '#f8f9fa',
//       position: 'relative'
//     },
//     heroSection: {
//       position: 'relative',
//       minHeight: '80vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       overflow: 'hidden',
//       background: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
//       color: 'white'
//     },
//     heroBackground: {
//       position: 'absolute',
//       inset: '0',
//       zIndex: '1'
//     },
//     heroBlob1: {
//       position: 'absolute',
//       top: '80px',
//       left: '40px',
//       width: '288px',
//       height: '288px',
//       backgroundColor: '#10b981',
//       borderRadius: '50%',
//       mixBlendMode: 'multiply',
//       filter: 'blur(40px)',
//       opacity: '0.2',
//       animation: 'blob 7s infinite'
//     },
//     heroBlob2: {
//       position: 'absolute',
//       top: '160px',
//       right: '40px',
//       width: '288px',
//       height: '288px',
//       backgroundColor: '#059669',
//       borderRadius: '50%',
//       mixBlendMode: 'multiply',
//       filter: 'blur(40px)',
//       opacity: '0.2',
//       animation: 'blob 7s infinite',
//       animationDelay: '2s'
//     },
//     heroBlob3: {
//       position: 'absolute',
//       bottom: '-32px',
//       left: '80px',
//       width: '288px',
//       height: '288px',
//       backgroundColor: '#047857',
//       borderRadius: '50%',
//       mixBlendMode: 'multiply',
//       filter: 'blur(40px)',
//       opacity: '0.2',
//       animation: 'blob 7s infinite',
//       animationDelay: '4s'
//     },
//     // Floating particles
//     floatingParticles: {
//       position: 'absolute',
//       inset: '0',
//       zIndex: '5'
//     },
//     particle1: {
//       position: 'absolute',
//       top: '25%',
//       left: '25%',
//       width: '8px',
//       height: '8px',
//       backgroundColor: 'white',
//       borderRadius: '50%',
//       opacity: '0.6',
//       animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
//     },
//     particle2: {
//       position: 'absolute',
//       top: '75%',
//       left: '75%',
//       width: '4px',
//       height: '4px',
//       backgroundColor: '#a7f3d0',
//       borderRadius: '50%',
//       opacity: '0.8',
//       animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
//     },
//     particle3: {
//       position: 'absolute',
//       top: '50%',
//       right: '25%',
//       width: '12px',
//       height: '12px',
//       backgroundColor: '#6ee7b7',
//       borderRadius: '50%',
//       opacity: '0.4',
//       animation: 'bounce 1s infinite'
//     },
//     particle4: {
//       position: 'absolute',
//       top: '15%',
//       right: '15%',
//       width: '6px',
//       height: '6px',
//       backgroundColor: '#34d399',
//       borderRadius: '50%',
//       opacity: '0.7',
//       animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite'
//     },
//     particle5: {
//       position: 'absolute',
//       bottom: '20%',
//       left: '15%',
//       width: '10px',
//       height: '10px',
//       backgroundColor: '#10b981',
//       borderRadius: '50%',
//       opacity: '0.5',
//       animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
//     },
//     gridPattern: {
//       position: 'absolute',
//       inset: '0',
//       opacity: '0.2',
//       backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
//       backgroundSize: '50px 50px'
//     },
//     heroContent: {
//       position: 'relative',
//       zIndex: '10',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '0 20px',
//       textAlign: 'center'
//     },
//     heroTitle: {
//       fontSize: 'clamp(2rem, 6vw, 4rem)',
//       fontWeight: '900',
//       lineHeight: '1.1',
//       background: 'linear-gradient(to right, white, #a7f3d0, #6ee7b7)',
//       backgroundClip: 'text',
//       WebkitBackgroundClip: 'text',
//       color: 'transparent',
//       marginBottom: '1.5rem',
//       animation: 'pulse 3s ease-in-out infinite'
//     },
//     heroSubtitle: {
//       fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
//       color: '#a7f3d0',
//       maxWidth: '800px',
//       margin: '0 auto 2rem auto',
//       lineHeight: '1.6',
//       fontWeight: '300'
//     },
//     heroStats: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(2, 1fr)',
//       gap: '1.5rem',
//       marginTop: '2rem',
//       paddingTop: '1.5rem',
//       borderTop: '1px solid rgba(255,255,255,0.2)'
//     },
//     cardSection: {
//       padding: '3rem 20px',
//       backgroundColor: 'white'
//     },
//     globalImpactCard: {
//       background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080")',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       borderRadius: '20px',
//       padding: '2rem',
//       color: 'white',
//       marginBottom: '2rem',
//       maxWidth: '700px',
//       margin: '0 auto 2rem auto'
//     },
//     focusedCard: {
//       background: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
//       borderRadius: '20px',
//       padding: '2rem',
//       color: 'white',
//       maxWidth: '700px',
//       margin: '0 auto'
//     },
//     cardTitle: {
//       fontSize: '1.5rem',
//       fontWeight: 'bold',
//       marginBottom: '1rem'
//     },
//     cardDescription: {
//       fontSize: '1rem',
//       opacity: '0.9',
//       lineHeight: '1.6'
//     },
//     sectionBase: {
//       padding: '3rem 20px',
//       textAlign: 'center'
//     },
//     sectionTitle: {
//       fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
//       fontWeight: 'bold',
//       color: '#1f2937',
//       marginBottom: '1.5rem'
//     },
//     sectionSubtitle: {
//       fontSize: '1rem',
//       color: '#6b7280',
//       maxWidth: '600px',
//       margin: '0 auto 2rem auto',
//       lineHeight: '1.6'
//     },
//     personGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//       gap: '1.5rem',
//       maxWidth: '1200px',
//       margin: '0 auto'
//     },
//     personCard: {
//       background: 'white',
//       borderRadius: '15px',
//       padding: '1.5rem',
//       boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
//       transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
//       cursor: 'pointer',
//       opacity: '0',
//       transform: 'translateY(50px)',
//       border: '1px solid #f3f4f6'
//     },
//     personCardVisible: {
//       opacity: '1',
//       transform: 'translateY(0)'
//     },
//     personImage: {
//       width: '100px',
//       height: '100px',
//       borderRadius: '50%',
//       objectFit: 'cover',
//       margin: '0 auto 1rem auto',
//       display: 'block',
//       border: '3px solid #f3f4f6'
//     },
//     personName: {
//       fontSize: '1.125rem',
//       fontWeight: 'bold',
//       color: '#1f2937',
//       marginBottom: '0.5rem'
//     },
//     personRole: {
//       fontSize: '0.875rem',
//       color: '#059669',
//       fontWeight: '600',
//       marginBottom: '0.75rem'
//     },
//     personDescription: {
//       fontSize: '0.8rem',
//       color: '#6b7280',
//       lineHeight: '1.4'
//     },
//     foundersSection: {
//       backgroundColor: '#f9fafb'
//     },
//     mentorsSection: {
//       backgroundColor: 'white'
//     },
//     teamSection: {
//       backgroundColor: '#f9fafb'
//     }
//   };

//   const keyframes = `
//     @keyframes blob {
//       0% { transform: translate(0px, 0px) scale(1); }
//       33% { transform: translate(30px, -50px) scale(1.1); }
//       66% { transform: translate(-20px, 20px) scale(0.9); }
//       100% { transform: translate(0px, 0px) scale(1); }
//     }
    
//     @keyframes ping {
//       75%, 100% {
//         transform: scale(2);
//         opacity: 0;
//       }
//     }
    
//     @keyframes pulse {
//       0%, 100% {
//         opacity: 1;
//       }
//       50% {
//         opacity: 0.5;
//       }
//     }
    
//     @keyframes bounce {
//       0%, 100% {
//         transform: translateY(-25%);
//         animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
//       }
//       50% {
//         transform: translateY(0);
//         animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
//       }
//     }
    
//     @keyframes fadeInUp {
//       from {
//         opacity: 0;
//         transform: translateY(30px);
//       }
//       to {
//         opacity: 1;
//         transform: translateY(0);
//       }
//     }
    
//     @media (min-width: 768px) {
//       .hero-stats-responsive {
//         grid-template-columns: repeat(4, 1fr) !important;
//       }
//     }
//   `;

//   return (
//     <div style={styles.container}>
//       <style>{keyframes}</style>
      
//       {/* Hero Section */}
//       <section style={styles.heroSection}>
//         <div style={styles.heroBackground}>
//           <div style={styles.heroBlob1}></div>
//           <div style={styles.heroBlob2}></div>
//           <div style={styles.heroBlob3}></div>
//         </div>
        
//         {/* Floating particles */}
//         <div style={styles.floatingParticles}>
//           <div style={styles.particle1}></div>
//           <div style={styles.particle2}></div>
//           <div style={styles.particle3}></div>
//           <div style={styles.particle4}></div>
//           <div style={styles.particle5}></div>
//         </div>
        
//         {/* Grid pattern overlay */}
//         <div style={styles.gridPattern}></div>
        
//         <div style={styles.heroContent}>
//           {/* Animated badge */}
//           <div style={{
//             display: 'inline-flex',
//             alignItems: 'center',
//             padding: '12px 24px',
//             borderRadius: '50px',
//             backgroundColor: 'rgba(255,255,255,0.2)',
//             backdropFilter: 'blur(10px)',
//             border: '1px solid rgba(255,255,255,0.3)',
//             color: '#a7f3d0',
//             fontSize: '0.875rem',
//             fontWeight: '500',
//             marginBottom: '2rem'
//           }}>
//             <span style={{
//               width: '8px',
//               height: '8px',
//               backgroundColor: '#a7f3d0',
//               borderRadius: '50%',
//               marginRight: '12px',
//               animation: 'pulse 2s infinite'
//             }}></span>
//             Revolutionizing Agriculture with AI
//           </div>

//           <h1 style={styles.heroTitle}>Who We Are</h1>
//           <p style={styles.heroSubtitle}>
//             We are a team of <span style={{ fontWeight: '600', color: 'white' }}>passionate innovators</span> and 
//             <span style={{ fontWeight: '600', color: 'white' }}> brilliant researchers</span> dedicated to 
//             <span style={{ background: 'linear-gradient(to right, #a7f3d0, #6ee7b7)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', fontWeight: 'bold' }}> revolutionizing agriculture</span> through cutting-edge technology solutions.
//           </p>

//           {/* Action Buttons */}
//           <div style={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '1rem',
//             justifyContent: 'center',
//             marginTop: '2rem',
//             marginBottom: '2rem'
//           }}>
//             <div style={{
//               display: 'flex',
//               flexDirection: 'row',
//               gap: '1rem',
//               justifyContent: 'center',
//               flexWrap: 'wrap'
//             }}>
//               <button style={{
//                 padding: '12px 32px',
//                 backgroundColor: 'white',
//                 color: '#064e3b',
//                 borderRadius: '50px',
//                 fontWeight: '600',
//                 border: 'none',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease',
//                 boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.backgroundColor = '#f0fdf4';
//                 e.target.style.transform = 'scale(1.05)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.backgroundColor = 'white';
//                 e.target.style.transform = 'scale(1)';
//               }}>
//                 Explore Our Impact
//               </button>
//               <button style={{
//                 padding: '12px 32px',
//                 backgroundColor: 'transparent',
//                 color: 'white',
//                 borderRadius: '50px',
//                 fontWeight: '600',
//                 border: '2px solid white',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease'
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.backgroundColor = 'white';
//                 e.target.style.color = '#064e3b';
//                 e.target.style.transform = 'scale(1.05)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.backgroundColor = 'transparent';
//                 e.target.style.color = 'white';
//                 e.target.style.transform = 'scale(1)';
//               }}>
//                 Meet Our Team
//               </button>
//             </div>
//           </div>
          
//           <div style={{...styles.heroStats}} className="hero-stats-responsive">
//             <div style={{ textAlign: 'center' }}>
//               <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>50K+</div>
//               <div style={{ color: '#a7f3d0', fontSize: '0.75rem' }}>Farmers Empowered</div>
//             </div>
//             <div style={{ textAlign: 'center' }}>
//               <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>25+</div>
//               <div style={{ color: '#a7f3d0', fontSize: '0.75rem' }}>Countries Reached</div>
//             </div>
//             <div style={{ textAlign: 'center' }}>
//               <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>1M+</div>
//               <div style={{ color: '#a7f3d0', fontSize: '0.75rem' }}>Acres Optimized</div>
//             </div>
//             <div style={{ textAlign: 'center' }}>
//               <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>95%</div>
//               <div style={{ color: '#a7f3d0', fontSize: '0.75rem' }}>Success Rate</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Card Section */}
//       <section style={styles.cardSection}>
//         <div style={styles.globalImpactCard}>
//           <h2 style={styles.cardTitle}>Global Impact</h2>
//           <p style={styles.cardDescription}>
//             We aim to make a positive impact globally through innovative agricultural solutions that connect farmers with cutting-edge technology.
//           </p>
//         </div>

//         <div style={styles.focusedCard}>
//           <h2 style={styles.cardTitle}>Focused Approach</h2>
//           <p style={styles.cardDescription}>
//             Our approach is always focused on delivering results that matter - sustainable farming, increased yields, and empowered agricultural communities.
//           </p>
//         </div>
//       </section>

//       {/* Mission & Vision Section */}
//       <section style={{...styles.sectionBase, backgroundColor: 'white'}}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
//             <h2 style={styles.sectionTitle}>Our Mission</h2>
//             <p style={styles.sectionSubtitle}>
//               Empowering farmers with technology for a sustainable future
//             </p>
//           </div>
          
//           <div style={{ 
//             display: 'grid', 
//             gridTemplateColumns: '1fr', 
//             gap: '2rem', 
//             alignItems: 'center' 
//           }}>
//             {/* Mission Content */}
//             <div style={{
//               backgroundColor: '#f8fffe',
//               borderRadius: '20px',
//               padding: '2rem',
//               border: '1px solid #d1fae5',
//               position: 'relative',
//               overflow: 'hidden'
//             }}>
//               {/* Background decoration */}
//               <div style={{
//                 position: 'absolute',
//                 top: '-50px',
//                 right: '-50px',
//                 width: '150px',
//                 height: '150px',
//                 backgroundColor: '#d1fae5',
//                 borderRadius: '50%',
//                 opacity: '0.3'
//               }}></div>
              
//               <div style={{ 
//                 display: 'grid', 
//                 gridTemplateColumns: '1fr', 
//                 gap: '2rem',
//                 position: 'relative',
//                 zIndex: '2'
//               }}>
//                 <div>
//                   <p style={{ 
//                     fontSize: '1.125rem', 
//                     color: '#374151', 
//                     marginBottom: '2rem', 
//                     lineHeight: '1.7',
//                     fontWeight: '400'
//                   }}>
//                     To empower farmers worldwide with cutting-edge agricultural technology that increases productivity, 
//                     promotes sustainability, and creates a more food-secure future for all.
//                   </p>
                  
//                   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
//                     <div style={{ 
//                       textAlign: 'center',
//                       padding: '1.5rem',
//                       backgroundColor: 'white',
//                       borderRadius: '15px',
//                       boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
//                       transition: 'transform 0.3s ease',
//                       cursor: 'pointer'
//                     }}
//                     onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
//                     onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
//                     >
//                       <div style={{ 
//                         width: '50px', 
//                         height: '50px', 
//                         backgroundColor: '#d1fae5', 
//                         borderRadius: '50%', 
//                         display: 'flex', 
//                         alignItems: 'center', 
//                         justifyContent: 'center', 
//                         margin: '0 auto 1rem auto' 
//                       }}>
//                         <span style={{ fontSize: '1.5rem' }}>🌱</span>
//                       </div>
//                       <h3 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Sustainability</h3>
//                       <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Eco-friendly farming practices</p>
//                     </div>
                    
//                     <div style={{ 
//                       textAlign: 'center',
//                       padding: '1.5rem',
//                       backgroundColor: 'white',
//                       borderRadius: '15px',
//                       boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
//                       transition: 'transform 0.3s ease',
//                       cursor: 'pointer'
//                     }}
//                     onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
//                     onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
//                     >
//                       <div style={{ 
//                         width: '50px', 
//                         height: '50px', 
//                         backgroundColor: '#d1fae5', 
//                         borderRadius: '50%', 
//                         display: 'flex', 
//                         alignItems: 'center', 
//                         justifyContent: 'center', 
//                         margin: '0 auto 1rem auto' 
//                       }}>
//                         <span style={{ fontSize: '1.5rem' }}>📈</span>
//                       </div>
//                       <h3 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Innovation</h3>
//                       <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>AI-powered solutions</p>
//                     </div>
                    
//                     <div style={{ 
//                       textAlign: 'center',
//                       padding: '1.5rem',
//                       backgroundColor: 'white',
//                       borderRadius: '15px',
//                       boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
//                       transition: 'transform 0.3s ease',
//                       cursor: 'pointer'
//                     }}
//                     onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
//                     onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
//                     >
//                       <div style={{ 
//                         width: '50px', 
//                         height: '50px', 
//                         backgroundColor: '#d1fae5', 
//                         borderRadius: '50%', 
//                         display: 'flex', 
//                         alignItems: 'center', 
//                         justifyContent: 'center', 
//                         margin: '0 auto 1rem auto' 
//                       }}>
//                         <span style={{ fontSize: '1.5rem' }}>🤝</span>
//                       </div>
//                       <h3 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Community</h3>
//                       <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Farmer empowerment</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Global Impact Section */}
//       <section style={{ 
//         padding: '3rem 20px', 
//         backgroundColor: '#1f2937', 
//         color: 'white', 
//         position: 'relative', 
//         overflow: 'hidden' 
//       }}>
//         <div style={{
//           position: 'absolute',
//           inset: '0',
//           backgroundImage: 'url("https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           opacity: '0.4'
//         }}></div>
//         <div style={{ position: 'relative', zIndex: '10', maxWidth: '1200px', margin: '0 auto' }}>
//           <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
//             <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '1.5rem' }}>Global Impact</h2>
//             <p style={{ fontSize: '1.25rem', color: '#d1d5db', maxWidth: '600px', margin: '0 auto' }}>
//               We aim to make a positive impact globally through innovative agricultural solutions
//             </p>
//           </div>
          
//           <div style={{ 
//             display: 'grid', 
//             gridTemplateColumns: 'repeat(2, 1fr)', 
//             gap: '2rem',
//             '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(4, 1fr)' }
//           }}>
//             <div style={{ textAlign: 'center' }}>
//               <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#6ee7b7', marginBottom: '0.5rem' }}>50K+</div>
//               <div style={{ color: '#d1d5db' }}>Farmers Connected</div>
//             </div>
//             <div style={{ textAlign: 'center' }}>
//               <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#6ee7b7', marginBottom: '0.5rem' }}>25+</div>
//               <div style={{ color: '#d1d5db' }}>Countries Served</div>
//             </div>
//             <div style={{ textAlign: 'center' }}>
//               <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#6ee7b7', marginBottom: '0.5rem' }}>1M+</div>
//               <div style={{ color: '#d1d5db' }}>Acres Optimized</div>
//             </div>
//             <div style={{ textAlign: 'center' }}>
//               <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#6ee7b7', marginBottom: '0.5rem' }}>30%</div>
//               <div style={{ color: '#d1d5db' }}>Yield Increase</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Journey Section */}
//       <section style={{...styles.sectionBase, backgroundColor: '#f8fafc'}}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
//             <h2 style={styles.sectionTitle}>Our Journey</h2>
//             <p style={styles.sectionSubtitle}>
//               Key milestones in transforming agriculture
//             </p>
//           </div>

//           <div style={{ 
//             display: 'grid', 
//             gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
//             gap: '1.5rem' 
//           }}>
//             {[
//               {
//                 year: '2020',
//                 title: 'Foundation',
//                 description: 'Started with a vision to bridge traditional farming and modern technology.',
//                 icon: '🌟',
//                 color: '#059669'
//               },
//               {
//                 year: '2021',
//                 title: 'Product Launch',
//                 description: 'Launched AI-powered crop monitoring system for early disease detection.',
//                 icon: '🚀',
//                 color: '#0284c7'
//               },
//               {
//                 year: '2022',
//                 title: 'Global Expansion',
//                 description: 'Expanded to 10+ countries, partnering with local farming communities.',
//                 icon: '🌍',
//                 color: '#7c3aed'
//               },
//               {
//                 year: '2023',
//                 title: 'AI Innovation',
//                 description: 'Advanced machine learning for precision agriculture and yield prediction.',
//                 icon: '🤖',
//                 color: '#dc2626'
//               }
//             ].map((event, index) => (
//               <div 
//                 key={index} 
//                 style={{ 
//                   backgroundColor: 'white',
//                   borderRadius: '15px',
//                   padding: '1.5rem',
//                   boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
//                   border: '1px solid #e5e7eb',
//                   transition: 'all 0.3s ease',
//                   cursor: 'pointer',
//                   position: 'relative',
//                   overflow: 'hidden'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-8px)';
//                   e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
//                   e.currentTarget.style.borderColor = event.color;
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0)';
//                   e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
//                   e.currentTarget.style.borderColor = '#e5e7eb';
//                 }}
//               >
//                 {/* Small accent line */}
//                 <div style={{
//                   position: 'absolute',
//                   top: '0',
//                   left: '0',
//                   right: '0',
//                   height: '4px',
//                   backgroundColor: event.color,
//                   borderRadius: '15px 15px 0 0'
//                 }}></div>

//                 {/* Icon and Year */}
//                 <div style={{ 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   justifyContent: 'space-between',
//                   marginBottom: '1rem'
//                 }}>
//                   <div style={{
//                     width: '50px',
//                     height: '50px',
//                     backgroundColor: `${event.color}15`,
//                     borderRadius: '12px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                   }}>
//                     <span style={{ fontSize: '1.5rem' }}>{event.icon}</span>
//                   </div>
//                   <div style={{
//                     backgroundColor: event.color,
//                     color: 'white',
//                     padding: '4px 12px',
//                     borderRadius: '12px',
//                     fontSize: '0.75rem',
//                     fontWeight: '600'
//                   }}>
//                     {event.year}
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <h3 style={{ 
//                   fontSize: '1.125rem', 
//                   fontWeight: 'bold', 
//                   color: '#1f2937', 
//                   marginBottom: '0.75rem',
//                   lineHeight: '1.3'
//                 }}>
//                   {event.title}
//                 </h3>
//                 <p style={{ 
//                   color: '#6b7280', 
//                   lineHeight: '1.6',
//                   fontSize: '0.875rem'
//                 }}>
//                   {event.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Founders Section */}
//       <section style={{ ...styles.sectionBase, ...styles.foundersSection }}>
//         <h2 style={styles.sectionTitle}>Our Founders</h2>
//         <p style={styles.sectionSubtitle}>
//           Visionary leaders who started this journey to transform agriculture through innovation and technology.
//         </p>
//         <div style={styles.personGrid}>
//           {founders.map((founder, index) => (
//             <div 
//               key={index}
//               data-animate="true"
//               data-index={`founder-${index}`}
//               style={{
//                 ...styles.personCard,
//                 ...(visibleItems.has(`founder-${index}`) ? styles.personCardVisible : {}),
//                 transitionDelay: `${index * 150}ms`
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
//                 e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = visibleItems.has(`founder-${index}`) ? 'translateY(0) scale(1)' : 'translateY(50px) scale(1)';
//                 e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
//               }}
//             >
//               <img 
//                 src={founder.image} 
//                 alt={founder.name}
//                 style={styles.personImage}
//               />
//               <h3 style={styles.personName}>{founder.name}</h3>
//               <p style={styles.personRole}>{founder.role}</p>
//               <p style={styles.personDescription}>{founder.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Mentors Section */}
//       <section style={{ ...styles.sectionBase, ...styles.mentorsSection }}>
//         <h2 style={styles.sectionTitle}>Our Mentors</h2>
//         <p style={styles.sectionSubtitle}>
//           Experienced advisors and industry experts who guide our vision and strategic direction.
//         </p>
//         <div style={styles.personGrid}>
//           {mentors.map((mentor, index) => (
//             <div 
//               key={index}
//               data-animate="true"
//               data-index={`mentor-${index}`}
//               style={{
//                 ...styles.personCard,
//                 ...(visibleItems.has(`mentor-${index}`) ? styles.personCardVisible : {}),
//                 transitionDelay: `${index * 150}ms`
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
//                 e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = visibleItems.has(`mentor-${index}`) ? 'translateY(0) scale(1)' : 'translateY(50px) scale(1)';
//                 e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
//               }}
//             >
//               <img 
//                 src={mentor.image} 
//                 alt={mentor.name}
//                 style={styles.personImage}
//               />
//               <h3 style={styles.personName}>{mentor.name}</h3>
//               <p style={styles.personRole}>{mentor.role}</p>
//               <p style={styles.personDescription}>{mentor.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Team Members Section */}
//       <section style={{ ...styles.sectionBase, ...styles.teamSection }}>
//         <h2 style={styles.sectionTitle}>Our Team</h2>
//         <p style={styles.sectionSubtitle}>
//           Dedicated professionals from diverse backgrounds working together to build the future of agriculture.
//         </p>
//         <div style={styles.personGrid}>
//           {teamMembers.map((member, index) => (
//             <div 
//               key={index}
//               data-animate="true"
//               data-index={`team-${index}`}
//               style={{
//                 ...styles.personCard,
//                 ...(visibleItems.has(`team-${index}`) ? styles.personCardVisible : {}),
//                 transitionDelay: `${index * 150}ms`
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
//                 e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = visibleItems.has(`team-${index}`) ? 'translateY(0) scale(1)' : 'translateY(50px) scale(1)';
//                 e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
//               }}
//             >
//               <img 
//                 src={member.image} 
//                 alt={member.name}
//                 style={styles.personImage}
//               />
//               <h3 style={styles.personName}>{member.name}</h3>
//               <p style={styles.personRole}>{member.role}</p>
//               <p style={styles.personDescription}>{member.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;