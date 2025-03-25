import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import styles from "./profile.module.css";

// Sample data for fetching user details
const teamMembers = [
  { name: "Siya Nimkar", role: "Researcher", img: "https://i.postimg.cc/PJ2jfK0m/siya-pic.jpg", bio: "Passionate about agricultural research and sustainability." },
  { name: "Shrut Kolhe", role: "Researcher", img: "https://i.postimg.cc/KjPjcWMq/shrut-pic2-removebg-preview.png", bio: "Expert in AI-driven farming solutions." },
  { name: "Suvansh Choudhary", role: "Developer", img: "https://i.ibb.co/PzCw2K7S/1000158921-01.jpg", bio: "Full-stack developer building AgroVigya’s digital solutions." },
  { name: "Agniva Maiti", role: "Developer", img: "https://i.postimg.cc/hgzHNdVc/agniva-pic.jpg", bio: "Specialist in backend and database optimization." },
  { name: "Shivam", role: "Developer", img: "https://i.postimg.cc/fLkx8mPW/shivam-pic.jpg", bio: "Passionate about frontend UI/UX." },
];

const ProfilePage = () => {
  const { name } = useParams(); // Get dynamic name from URL
  const person = teamMembers.find(member => member.name === name); // Find person data

  if (!person) {
    return <h2 className="text-center text-red-500">Profile Not Found!</h2>;
  }

  return (
    <div>
      <Navbar />
      <div className={styles.profileContainer}>
        <img src={person.img} alt={person.name} className={styles.profileImage} />
        <h2 className={styles.profileName}>{person.name}</h2>
        <p className={styles.profileRole}>{person.role}</p>
        <p className={styles.profileBio}>{person.bio}</p>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
