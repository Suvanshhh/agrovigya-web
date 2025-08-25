import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import styles from "./Profile.module.css";
import { Bell, Settings, Pencil, Check, X, Camera, Trash2, Plus } from "lucide-react";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
} from 'chart.js';
import { supabase } from '../../services/supabaseClient';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const notificationsInitial = [
  { id: 1, type: "New job posted", caption: "Check the latest job openings." },
  { id: 2, type: "Sale successful", caption: "Your produce has been sold." },
  { id: 3, type: "Weather alert", caption: "Rain expected tomorrow." },
];

const defaultProfile = {
  name: "Suvansh Choudhary",
  location: "Mulshi, Maharashtra",
  job: "Organic Farmer",
  image: "https://i.postimg.cc/3Nw6b2Kk/farmer-illustration.png",
};

const experiencesInitial = [
  { id: 1, role: "Field Supervisor", company: "Green Farms", years: 2 },
  { id: 2, role: "Market Liaison", company: "AgroMart", years: 1 },
];

const marketStatsMock = {
  labels: ["Tomatoes", "Potatoes", "Onions", "Spinach"],
  datasets: [
    {
      label: "Tons Sold",
      backgroundColor: "#29c175",
      data: [12, 19, 3, 5],
    },
  ],
};

const Profile = () => {
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setFirebaseUser(user);
      setAuthLoading(false);
    });
    return unsubscribe;
  }, []);

  const [profile, setProfile] = useState(defaultProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [editProfile, setEditProfile] = useState(defaultProfile);
  const [imagePreview, setImagePreview] = useState(defaultProfile.image);
  const [imageFile, setImageFile] = useState(null);
  const [avatarError, setAvatarError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const fileInputRef = useRef();

  const [experiences, setExperiences] = useState(experiencesInitial);
  const [expForm, setExpForm] = useState({ role: "", company: "", years: "" });
  const [expEditingId, setExpEditingId] = useState(null);

  const [notifications, setNotifications] = useState(notificationsInitial);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (firebaseUser) {
      setProfile({
        name: firebaseUser.displayName || defaultProfile.name,
        location: defaultProfile.location,
        job: defaultProfile.job,
        image: firebaseUser.photoURL || defaultProfile.image,
      });
      setEditProfile({
        name: firebaseUser.displayName || defaultProfile.name,
        location: defaultProfile.location,
        job: defaultProfile.job,
        image: firebaseUser.photoURL || defaultProfile.image,
      });
      setImagePreview(firebaseUser.photoURL || defaultProfile.image);
    }
  }, [firebaseUser]);

  if (authLoading) return <div>Loading...</div>;
  if (!firebaseUser) return <div>Please log in.</div>;

  const handleEdit = () => {
    setEditProfile(profile);
    setImagePreview(profile.image);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditProfile(profile);
    setImagePreview(profile.image);
    setImageFile(null);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
  };

  const handleImageClick = () => {
    if (isEditing && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (evt) => {
        setImagePreview(evt.target.result);
        setAvatarError(false);
      };
      reader.readAsDataURL(file);
    } else {
      setStatusMsg("Please select a valid image file.");
    }
  };

  const handleAvatarError = () => {
    setAvatarError(true);
  };

const handleSave = async () => {
  setLoading(true);

  let photoURL = profile.image;

  try {
    if (imageFile) {
      // Generate unique filename
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${firebaseUser.uid}_${Date.now()}.${fileExt}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('profile-images')
        .upload(fileName, imageFile, { cacheControl: '3600', upsert: true });

      if (uploadError) {
        setStatusMsg('Failed to upload image.');
        setLoading(false);
        return;
      }

      // Get public URL for the uploaded image
      const { data, error: urlError } = supabase.storage
        .from('profile-images')
        .getPublicUrl(fileName);

      if (urlError) {
        setStatusMsg('Failed to get image URL.');
        setLoading(false);
        return;
      }

      photoURL = data.publicUrl;
    }

    // Update Firebase user profile with new photo URL and name
    await updateProfile(firebaseUser, {
      displayName: editProfile.name,
      photoURL,
    });

    // Update local profile state
    setProfile({ ...editProfile, image: photoURL });
    setStatusMsg('Profile updated!');
    setAvatarError(false);
    setIsEditing(false);
    setImageFile(null);
  } catch (error) {
    setStatusMsg('Failed to update profile.');
    console.error('Profile update error:', error);
  } finally {
    setLoading(false);
  }
};

  const handleExpChange = (e) => {
    setExpForm({ ...expForm, [e.target.name]: e.target.value });
  };

  const handleExpSave = () => {
    if (!expForm.role || !expForm.company || !expForm.years) {
      setStatusMsg("All fields required!");
      setTimeout(() => setStatusMsg(""), 2000);
      return;
    }
    if (expEditingId !== null) {
      setExperiences(
        experiences.map((exp) =>
          exp.id === expEditingId ? { ...exp, ...expForm } : exp
        )
      );
      setExpEditingId(null);
      setStatusMsg("Experience updated!");
    } else {
      setExperiences([
        ...experiences,
        {
          id: Date.now(),
          role: expForm.role,
          company: expForm.company,
          years: expForm.years,
        },
      ]);
      setStatusMsg("Experience added!");
    }
    setExpForm({ role: "", company: "", years: "" });
    setTimeout(() => setStatusMsg(""), 2300);
  };

  const handleExpEdit = (exp) => {
    setExpEditingId(exp.id);
    setExpForm({
      role: exp.role,
      company: exp.company,
      years: exp.years,
    });
  };

  const handleExpDelete = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
    if (expEditingId === id) setExpEditingId(null);
    setStatusMsg("Experience deleted.");
    setTimeout(() => setStatusMsg(""), 1800);
  };

  const handleNotifClear = () => setNotifications([]);
  const handleNotifDelete = (id) =>
    setNotifications(notifications.filter((n) => n.id !== id));

  const SettingsModal = ({ onClose }) => (
    <div className={styles.settingsModal} role="dialog" aria-modal="true">
      <div className={styles.settingsHeader}>
        <Settings size={20} />
        <span>Settings</span>
        <button onClick={onClose}><X size={18} /></button>
      </div>
      <div className={styles.settingsBody}>
        <ul>
          <li>Password settings (Coming soon)</li>
          <li>Account privacy</li>
          <li>Notification preferences</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className={styles.pageBg}>
      <Navbar />
      <div className={styles.profileWrapper}>
        <div className={styles.gridContainer}>
          {/* Profile Card */}
          <div className={styles.profileCard}>
            <div
              className={`${styles.avatarWrapper} ${isEditing ? styles.avatarEdit : ""}`}
              onClick={handleImageClick}
              title={isEditing ? "Click to change profile image" : ""}
              style={{ cursor: isEditing ? "pointer" : "default" }}
            >
              {!avatarError ? (
                <img
                  src={imagePreview}
                  alt="Profile"
                  className={styles.avatar}
                  onError={handleAvatarError}
                />
              ) : (
                <span className={styles.avatarFallback}>
                  {profile.name.split(" ").map((n) => n[0]).join("").toUpperCase()}
                </span>
              )}
              {isEditing && (
                <>
                  <div className={styles.avatarOverlay}>
                    <Camera size={28} />
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    className={styles.avatarInput}
                    onChange={handleImageChange}
                    tabIndex={-1}
                  />
                </>
              )}
            </div>
            <div className={styles.profileInfo}>
              {isEditing ? (
                <>
                  <input
                    className={styles.profileInput}
                    name="name"
                    value={editProfile.name}
                    onChange={handleChange}
                  />
                  <input
                    className={styles.profileInput}
                    name="location"
                    value={editProfile.location}
                    onChange={handleChange}
                  />
                  <input
                    className={styles.profileInput}
                    name="job"
                    value={editProfile.job}
                    onChange={handleChange}
                  />
                </>
              ) : (
                <>
                  <div className={styles.profileName}>{profile.name}</div>
                  <div className={styles.profileLoc}>{profile.location}</div>
                  <div className={styles.profileJob}>{profile.job}</div>
                </>
              )}
            </div>
            <div className={styles.profileActions}>
              {isEditing ? (
                <>
                  <button
                    className={styles.saveBtn}
                    aria-label="Save"
                    onClick={handleSave}
                    disabled={loading}
                  >
                    <Check size={18} />
                    {loading ? "Saving..." : "Save"}
                  </button>
                  <button
                    className={styles.cancelBtn}
                    aria-label="Cancel"
                    onClick={handleCancel}
                    disabled={loading}
                  >
                    <X size={18} /> Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className={styles.editBtn}
                    aria-label="Edit"
                    onClick={handleEdit}
                  >
                    <Pencil size={18} /> Edit
                  </button>
                  <button
                    className={styles.settingsBtn}
                    aria-label="Settings"
                    onClick={() => setShowSettings(true)}
                  >
                    <Settings size={18} />
                  </button>
                </>
              )}
            </div>
            {statusMsg && <div className={styles.statusMessage}>{statusMsg}</div>}
          </div>

          {/* Experience */}
          <div className={styles.expCard}>
            <div className={styles.cardTitle}>Experience</div>
            <ul className={styles.expList}>
              {experiences.length === 0 ? (
                <li style={{ color: "#d4ae56" }}>No experience added.</li>
              ) : (
                experiences.map((exp) => (
                  <li key={exp.id} className={styles.expItem}>
                    <span>
                      <strong>{exp.role}</strong> @ {exp.company} — {exp.years} yrs
                    </span>
                    <button aria-label="Edit Experience" onClick={() => handleExpEdit(exp)}>
                      <Pencil size={16} />
                    </button>
                    <button aria-label="Delete Experience" onClick={() => handleExpDelete(exp.id)}>
                      <Trash2 size={16} />
                    </button>
                  </li>
                ))
              )}
            </ul>
            <div className={styles.expForm}>
              <input
                placeholder="Role"
                name="role"
                value={expForm.role}
                onChange={handleExpChange}
              />
              <input
                placeholder="Company"
                name="company"
                value={expForm.company}
                onChange={handleExpChange}
              />
              <input
                placeholder="Years"
                type="number"
                name="years"
                value={expForm.years}
                min="0"
                onChange={handleExpChange}
              />
              <button
                aria-label={expEditingId ? "Update Experience" : "Add Experience"}
                onClick={handleExpSave}
              >
                {expEditingId ? <Check size={16} /> : <Plus size={16} />}
              </button>
              {expEditingId && (
                <button
                  aria-label="Cancel Experience Edit"
                  onClick={() => {
                    setExpEditingId(null);
                    setExpForm({ role: "", company: "", years: "" });
                  }}
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Market Statistics */}
          <div className={styles.marketCard}>
            <div className={styles.cardTitle}>Market Statistics</div>
            <Bar
              data={marketStatsMock}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: true,
                  },
                  title: {
                    display: true,
                    text: 'Produce Sales (Tons)',
                  },
                },
              }}
              style={{ maxWidth: 300, background: "#fff" }}
            />
          </div>

          {/* Notifications */}
          <div className={styles.notificationsPanel}>
            <div className={styles.notificationsHeader}>
              <Bell size={20} />
              <span>Notifications</span>
              <button
                className={styles.clearNotifBtn}
                onClick={handleNotifClear}
                disabled={notifications.length === 0}
                aria-label="Clear Notifications"
              >
                Clear All
              </button>
              <Settings
                size={18}
                style={{ cursor: "pointer" }}
                aria-label="Open Settings"
                onClick={() => setShowSettings(true)}
              />
            </div>
            <div className={styles.notificationsList}>
              {notifications.length === 0 ? (
                <div style={{ color: "#b7e7d1" }}>No notifications.</div>
              ) : (
                notifications.map((notif) => (
                  <div className={styles.notificationItem} key={notif.id}>
                    <div className={styles.notifDot}></div>
                    <div>
                      <div className={styles.notifType}>{notif.type}</div>
                      <div className={styles.notifCaption}>{notif.caption}</div>
                    </div>
                    <button
                      aria-label="Delete Notification"
                      onClick={() => handleNotifDelete(notif.id)}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
      <Footer />
    </div>
  );
};

export default Profile;
