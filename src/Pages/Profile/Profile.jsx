// Profile.jsx
import React, { useState } from "react";
import styles from "./Profile.module.css";
import { Edit2 } from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+123 456 7890",
    location: "New York, USA",
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.profileContainer}>
      <h2 className={styles.profileTitle}>Profile</h2>
      <div className={styles.profileCard}>
        <div className={styles.profileField}>
          <label>Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              className={styles.inputField}
            />
          ) : (
            <span>{profileData.name}</span>
          )}
        </div>
        <div className={styles.profileField}>
          <label>Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              className={styles.inputField}
            />
          ) : (
            <span>{profileData.email}</span>
          )}
        </div>
        <div className={styles.profileField}>
          <label>Phone:</label>
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
              className={styles.inputField}
            />
          ) : (
            <span>{profileData.phone}</span>
          )}
        </div>
        <div className={styles.profileField}>
          <label>Location:</label>
          {isEditing ? (
            <input
              type="text"
              name="location"
              value={profileData.location}
              onChange={handleChange}
              className={styles.inputField}
            />
          ) : (
            <span>{profileData.location}</span>
          )}
        </div>
        <button onClick={handleEditClick} className={styles.editButton}>
          {isEditing ? "Save" : "Edit"} <Edit2 className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default Profile;
