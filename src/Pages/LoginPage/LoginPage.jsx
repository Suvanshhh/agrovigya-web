import React, { useState } from "react";
import { signInWithGoogle, loginWithEmail } from "../../firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";

import { useTranslation } from "react-i18next";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
    const { t } = useTranslation();
    // const [phone, setPhone] = useState("");
    // const [confirmation, setConfirmation] = useState(null);
    // const [otp, setOtp] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [activeTab] = useState("email");
    const navigate = useNavigate();

    return (
        <div className={styles.pageWrapper}>
            <Navbar />
            <div className={styles.loginSplit}>
                <div className={styles.rightPane}>
                    <img
                        src="https://i.postimg.cc/9MgBBgNs/log-in-signup.png"
                        alt={t("login.illustrationAlt")}
                        className={styles.illustration}
                    />
                </div>
                <div className={styles.leftPane}>
                    <div className={styles.loginCard}>
                        <h2 className={styles.loginTitle}>{t("login.title")}</h2>
                        {error && <div className={styles.errorMessage}>{error}</div>}
                        <form onSubmit={activeTab === "email" ? async (e) => {
                            e.preventDefault();
                            try {
                                setLoading(true);
                                await loginWithEmail(email, password);
                                setLoading(false);
                                navigate("/");
                            } catch (error) {
                                setLoading(false);
                                console.error("Login error:", error);
                                setError(`${t("login.error")} ${error.message || error}`);
                            }
                        } : undefined}>
                            <input
                                type="email"
                                placeholder={t("login.emailPlaceholder")}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className={styles.input}
                                style={{ display: activeTab === "email" ? "block" : "none" }}
                                autoComplete="username"
                            />
                            <input
                                type="password"
                                placeholder={t("login.passwordPlaceholder")}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className={styles.input}
                                style={{ display: activeTab === "email" ? "block" : "none" }}
                                autoComplete="current-password"
                            />
                            <button
                                type="submit"
                                className={styles.loginButton}
                                style={{ display: activeTab === "email" ? "block" : "none" }}
                            >
                                {t("login.loginButton")}
                            </button>
                        </form>
                        <button
                            className={styles.googleButton}
                            onClick={async () => {
                                try {
                                    setLoading(true);
                                    await signInWithGoogle();
                                    setLoading(false);
                                    navigate("/");
                                } catch (error) {
                                    setLoading(false);
                                    setError(t("login.googleError"));
                                }
                            }}
                        >
                            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"

                                alt="Google"
                                className={styles.googleIcon}
                            />
                            {t("login.googleLogin")}
                        </button>
                        <div className={styles.forgotRow}>
                            <Link to="/forgot-password">{t("login.forgotPassword")}</Link>
                        </div>
                        <div className={styles.signupPrompt}>
                            {t("login.signupPrompt")} <Link to="/signup">{t("login.signupLink")}</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default LoginPage;
