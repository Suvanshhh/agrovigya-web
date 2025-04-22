import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import styles from "./Profile.module.css";
import { Bell, Settings, Pencil, Check, X, Camera } from "lucide-react";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const notifications = [
  { id: 1, type: "New job notification", caption: "notification caption" },
  { id: 2, type: "New sale notification", caption: "notification caption" },
  { id: 3, type: "Weather notification", caption: "notification caption" },
  { id: 4, type: "New job notification", caption: "notification caption" },
  { id: 5, type: "New job notification", caption: "notification caption" },
  { id: 6, type: "New job notification", caption: "notification caption" },
  { id: 7, type: "New job notification", caption: "notification caption" },
  { id: 8, type: "New job notification", caption: "notification caption" },
  { id: 9, type: "New job notification", caption: "notification caption" },
];

const defaultProfile = {
  name: "John Doe",
  location: "Mulshi, Maharashtra",
  job: "current job",
  image: "https://i.postimg.cc/3Nw6b2Kk/farmer-illustration.png",
};

const Profile = () => {
  // Persistent login: always use onAuthStateChanged
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

  // All hooks at top level
  const [profile, setProfile] = useState(defaultProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [editProfile, setEditProfile] = useState(defaultProfile);
  const [imagePreview, setImagePreview] = useState(defaultProfile.image);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();

  // When firebaseUser changes (e.g. after refresh), update profile state
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

  // Loading/auth states
  if (authLoading) return <div>Loading...</div>;
  if (!firebaseUser) return <div>Please log in.</div>;

  // Handlers
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
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (evt) => {
        setImagePreview(evt.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    let photoURL = profile.image;
    if (imageFile) {
      try {
        const storage = getStorage();
        const storageRef = ref(storage, `profileImages/${firebaseUser.uid}/${imageFile.name}`);
        await uploadBytes(storageRef, imageFile);
        photoURL = await getDownloadURL(storageRef);
      } catch (err) {
        alert("Failed to upload image. Try again.");
        setLoading(false);
        return;
      }
    }
    try {
      await updateProfile(firebaseUser, {
        displayName: editProfile.name,
        photoURL: photoURL,
      });
      setProfile({
        ...editProfile,
        image: photoURL,
      });
      setIsEditing(false);
      setImageFile(null);
    } catch (err) {
      alert("Failed to update profile. Try again.");
    }
    setLoading(false);
  };

  return (
    <div className={styles.pageBg}>
      <Navbar />
      <div className={styles.profileWrapper}>
        <div className={styles.gridContainer}>
          {/* Left: Profile Card */}
          <div className={styles.profileCard}>
            <div
              className={`${styles.avatarWrapper} ${isEditing ? styles.avatarEdit : ""}`}
              onClick={handleImageClick}
              title={isEditing ? "Click to change profile image" : ""}
              style={{ cursor: isEditing ? "pointer" : "default" }}
            >
              <img
                src={imagePreview}
                alt="Profile"
                className={styles.avatar}
              />
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
                    <Check size={18} /> {loading ? "Saving..." : "Save"}
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
                <button
                  className={styles.editBtn}
                  aria-label="Edit"
                  onClick={handleEdit}
                >
                  <Pencil size={18} /> Edit
                </button>
              )}
            </div>
          </div>
          {/* Top Middle Left: Empty Card */}
          <div className={styles.emptyCard}></div>
          {/* Experience */}
          <div className={styles.expCard}>
            <div className={styles.cardTitle}>Experience</div>
          </div>
          {/* Bottom Middle Left: Empty Card */}
          <div className={styles.emptyCard}></div>
          {/* Market Statistics */}
          <div className={styles.marketCard}>
            <div className={styles.cardTitle}>Market Statistics</div>
          </div>
          {/* Bottom Middle Right: Empty Card */}
          <div className={styles.emptyCard}></div>
          {/* Notifications */}
          <div className={styles.notificationsPanel}>
            <div className={styles.notificationsHeader}>
              <Bell size={20} />
              <span>Notifications</span>
              <Settings size={18} />
            </div>
            <div className={styles.notificationsList}>
              {notifications.map((notif, i) => (
                <div className={styles.notificationItem} key={notif.id}>
                  <div className={styles.notifDot}></div>
                  <div>
                    <div className={styles.notifType}>{notif.type}</div>
                    <div className={styles.notifCaption}>{notif.caption}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
