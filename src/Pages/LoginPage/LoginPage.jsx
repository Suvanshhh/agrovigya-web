import React, { useState } from "react";
import { signInWithGoogle, signInWithPhone, loginWithEmail } from "../../firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { Mail, Phone } from "lucide-react";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
    const [phone, setPhone] = useState("");
    const [confirmation, setConfirmation] = useState(null);
    const [otp, setOtp] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState("email");
    const navigate = useNavigate();

    // ...handlers unchanged...

    // (Handlers omitted for brevity; keep your originals)

    return (
        <div className={styles.pageWrapper}>
            <Navbar />
            <div className={styles.loginSplit}>
                <div className={styles.leftPane}>
                    {/* <div className={styles.brandLogoRow}>
                        <img src="/logo.svg" alt="AgroVigya" className={styles.brandLogo} />
                        <span className={styles.brandText}>agrovigya</span>
                    </div> */}
                    <div className={styles.loginCard}>
                        <h2 className={styles.loginTitle}>Login</h2>
                        {error && <div className={styles.errorMessage}>{error}</div>}
                        <form onSubmit={activeTab === "email" ? (e) => { e.preventDefault(); /* call email handler */ } : undefined}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className={styles.input}
                                style={{ display: activeTab === "email" ? "block" : "none" }}
                                autoComplete="username"
                            />
                            <input
                                type="password"
                                placeholder="Password"
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
                                Log in
                            </button>
                        </form>
                        <button className={styles.googleButton}>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="Google"
                                className={styles.googleIcon}
                            />
                            Sign in with Google
                        </button>
                        <div className={styles.forgotRow}>
                            <Link to="/forgot-password">Forgot password?</Link>
                        </div>
                        <div className={styles.signupPrompt}>
                            Not registered yet? <Link to="/signup">Sign Up here</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.rightPane}>
                    <img
                        src="https://i.postimg.cc/3Nw6b2Kk/farmer-illustration.png"
                        alt="Farmers Illustration"
                        className={styles.illustration}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LoginPage;
