import React, { useState, useEffect, useCallback } from "react";
import { signInWithGoogle, loginWithEmail, signUpWithEmail } from "../../../firebase/auth";
import styles from "./AuthModal.module.css";

const AuthModal = ({ onClose, onLogin }) => {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberChoice, setRememberChoice] = useState(false);

  // Memoize handleClose to prevent unnecessary re-renders
  const handleClose = useCallback(() => {
    if (rememberChoice) {
      localStorage.setItem("hideAuthModal", "true");
    }
    onClose();
  }, [rememberChoice, onClose]);

  // Handle click outside modal to close
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.className === styles["auth-modal-overlay"]) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleClose]); // Added handleClose to dependency array

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const user = await loginWithEmail(email, password);
      if (user) {
        onLogin(user);
        handleClose();
      }
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setError("Invalid email address format.");
          break;
        case "auth/user-not-found":
          setError("No account found with this email. Please sign up first.");
          break;
        case "auth/wrong-password":
          setError("Incorrect password. Please try again.");
          break;
        default:
          setError(`Login failed: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }
    
    setLoading(true);
    setError("");
    try {
      const user = await signUpWithEmail(email, password);
      if (user) {
        onLogin(user);
        handleClose();
      }
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("This email is already registered. Please login instead.");
          break;
        case "auth/invalid-email":
          setError("Invalid email address format.");
          break;
        case "auth/weak-password":
          setError("Password is too weak. Please choose a stronger password.");
          break;
        default:
          setError(`Signup failed: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const user = await signInWithGoogle();
      if (user) {
        onLogin(user);
        handleClose();
      }
    } catch (error) {
      setError(`Google login failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles["auth-modal-overlay"]}>
      <div className={styles["auth-modal"]}>
        <div className={styles["auth-modal-header"]}>
          <div className={styles["auth-tabs"]}>
            <button
              className={`${styles["auth-tab"]} ${activeTab === "login" ? styles["active"] : ""}`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`${styles["auth-tab"]} ${activeTab === "signup" ? styles["active"] : ""}`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
          </div>
          <button className={styles["close-button"]} onClick={handleClose}>
            &times;
          </button>
        </div>

        <div className={styles["auth-modal-content"]}>
          {error && <div className={styles["error-message"]}>{error}</div>}

          {activeTab === "login" ? (
            <form onSubmit={handleLogin}>
              <div className={styles["form-group"]}>
                <label htmlFor="login-email">Email</label>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={loading}
                  className={styles.input}
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="login-password">Password</label>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  disabled={loading}
                  className={styles.input}
                />
              </div>
              <button 
                type="submit" 
                className={styles["auth-button"]} 
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignup}>
              <div className={styles["form-group"]}>
                <label htmlFor="signup-email">Email</label>
                <input
                  id="signup-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={loading}
                  className={styles.input}
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="signup-password">Password</label>
                <input
                  id="signup-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  disabled={loading}
                  className={styles.input}
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="signup-confirm-password">Confirm Password</label>
                <input
                  id="signup-confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  disabled={loading}
                  className={styles.input}
                />
              </div>
              <button 
                type="submit" 
                className={styles["auth-button"]} 
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign Up"}
              </button>
            </form>
          )}

          <div className={styles.divider}>
            <span>OR</span>
          </div>

          <button
            className={styles["google-button"]}
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            <img 
              src="https://i.ibb.co/bM1zHkzf/7123025-logo-google-g-icon.png" 
              alt="Google logo" 
              className={styles["google-icon"]}
            />
            Continue with Google
          </button>

          <div className={styles["remember-choice"]}>
            <label>
              <input
                type="checkbox"
                checked={rememberChoice}
                onChange={(e) => setRememberChoice(e.target.checked)}
              />
              Don't show this again
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
