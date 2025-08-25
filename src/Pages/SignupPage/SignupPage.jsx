import React, { useState } from "react";
import { signInWithGoogle, signUpWithEmail } from "../../firebase/auth";
// Firestore db import removed as per request
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar/navbar";

import styles from "./SignupPage.module.css";

const Signup = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignup = async () => {
    setLoading(true);
    setError("");
    try {
      const user = await signInWithGoogle();
      if (user) navigate("/dashboard");
    } catch (error) {
      setError(t("signup.googleSignupFailed"));
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !password || !confirmPassword) {
      setError(t("signup.fillAllFields"));
      return;
    }
    if (password !== confirmPassword) {
      setError(t("signup.passwordMismatch"));
      return;
    }
    if (!agree) {
      setError(t("signup.mustAgree"));
      return;
    }
    setLoading(true);
    setError("");
    try {
      const user = await signUpWithEmail(email, password);
      if (user) {
        // Firestore profile creation removed (db)
        navigate("/dashboard");
      }
    } catch (error) {
      setError(t("signup.signupFailed") + ": " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.pageBg}>
      <Navbar />
      <div className={styles.signupWrapper}>
        <div className={styles.signupSplit}>
          <div className={styles.rightPane}>
            <img
              src="https://i.postimg.cc/9MgBBgNs/log-in-signup.png"
              alt={t("signup.illustrationAlt")}
              className={styles.illustration}
            />
          </div>
          <form className={styles.signupCard} onSubmit={handleEmailSignup}>
            <h2 className={styles.signupTitle}>{t("signup.title")}</h2>
            <div className={styles.inputRow}>
              <div className={styles.inputCol}>
                <label>{t("signup.fullName")}</label>
                <input
                  type="text"
                  placeholder={t("signup.namePlaceholder")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={styles.input}
                  disabled={loading}
                />
                <label>{t("signup.phoneNumber")}</label>
                <input
                  type="tel"
                  placeholder={t("signup.phonePlaceholder")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={styles.input}
                  disabled={loading}
                />
                <label>{t("signup.email")}</label>
                <input
                  type="email"
                  placeholder={t("signup.emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                  disabled={loading}
                />
              </div>
              <div className={styles.inputCol}>
                <label>{t("signup.password")}</label>
                <input
                  type="password"
                  placeholder={t("signup.passwordPlaceholder")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                  disabled={loading}
                />
                <label>{t("signup.confirmPassword")}</label>
                <input
                  type="password"
                  placeholder={t("signup.confirmPasswordPlaceholder")}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={styles.input}
                  disabled={loading}
                />
                <div className={styles.checkboxRow}>
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    id="terms"
                    disabled={loading}
                  />
                  <label htmlFor="terms">
                    {t("signup.agreePrefix")}{" "}
                    <span className={styles.termsLink}>
                      {t("signup.termsOfUse")}
                    </span>{" "}
                    {t("signup.and")}{" "}
                    <span className={styles.termsLink}>
                      {t("signup.privacyPolicy")}
                    </span>
                  </label>
                </div>
              </div>
            </div>
            {error && <div className={styles.errorMsg}>{error}</div>}
            <button
              className={styles.signupBtn}
              type="submit"
              disabled={loading}
            >
              {t("signup.signUp")}
            </button>
            <div className={styles.dividerRow}>
              <span className={styles.dividerLine}></span>
              <span className={styles.dividerText}>{t("signup.or")}</span>
              <span className={styles.dividerLine}></span>
            </div>
            <button
              type="button"
              className={styles.googleBtn}
              onClick={handleGoogleSignup}
              disabled={loading}
            >
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="Google"
                className={styles.googleIcon}
              />
              {t("signup.signUpWithGoogle")}
            </button>
            <div className={styles.loginPrompt}>
              {t("signup.alreadyAccount")}{" "}
              <Link to="/login" className={styles.loginLink}>
                {t("signup.loginHere")}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
