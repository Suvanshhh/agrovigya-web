// Profile.jsx
import React, { useState } from "react";
import styles from "./Profile.module.css";
import { Bell, Settings, User, ChevronDown } from "lucide-react";

const Profile = () => {
  const notifications = [
    { id: 1, type: "New job notification", content: "notification content" },
    { id: 2, type: "New sale notification", content: "notification content" },
    { id: 3, type: "Weather notification", content: "notification content" },
    { id: 4, type: "New job notification", content: "notification content" },
    { id: 5, type: "New job notification", content: "notification content" },
    { id: 6, type: "New job notification", content: "notification content" },
    { id: 7, type: "New job notification", content: "notification content" },
    { id: 8, type: "New job notification", content: "notification content" },
    { id: 9, type: "New job notification", content: "notification content" },
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Navbar */}
      <div className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img 
            src="https://i.postimg.cc/L8zxQBhP/agrovigya-logo.png" 
            alt="AgroVigya Logo" 
            className={styles.logo} 
          />
          <div className={styles.logoText}>
            <span>agrovigya</span>
            <span className={styles.logoSubtext}>कृषि की नयी दिशा</span>
          </div>
        </div>
        
        <div className={styles.navLinks}>
          <span>Home</span>
          <span>About Us</span>
          <span>Our Services <ChevronDown size={16} /></span>
          <span>Download App</span>
          <span>भाषा | हिन्दी <ChevronDown size={16} /></span>
        </div>
        
        <div className={styles.userSection}>
          <User size={20} className={styles.userIcon} />
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.contentContainer}>
        <div className={styles.profileHeader}>
          <h1>Profile</h1>
        </div>
        
        <div className={styles.threeColumnLayout}>
          {/* Left Column - User Profile */}
          <div className={styles.profileCard}>
            <div className={styles.profileImageContainer}>
              <img 
                src="https://i.postimg.cc/FRRvk0wL/carrot-icon.png" 
                alt="Profile" 
                className={styles.profileImage} 
              />
            </div>
            <h2 className={styles.userName}>John Doe</h2>
            <p className={styles.userRole}>Mobile Developer</p>
            <p className={styles.userJobStatus}>current job</p>
          </div>

          {/* Middle Column - Experience & Market Stats */}
          <div className={styles.middleContent}>
            <div className={styles.experienceSection}>
              <h2>Experience</h2>
              {/* Empty content for now to match the design */}
            </div>
            
            <div className={styles.marketStats}>
              <h2>Market Statistics</h2>
              {/* Empty content for now to match the design */}
            </div>
          </div>

          {/* Right Column - Notifications */}
          <div className={styles.notificationsPanel}>
            <div className={styles.notificationsHeader}>
              <Bell size={16} />
              <h2>Notifications</h2>
              <Settings size={16} className={styles.settingsIcon} />
            </div>
            
            <div className={styles.notificationsList}>
              {notifications.map(notification => (
                <div key={notification.id} className={styles.notificationItem}>
                  <div className={styles.notificationDot}></div>
                  <div className={styles.notificationContent}>
                    <h3>{notification.type}</h3>
                    <p>{notification.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
