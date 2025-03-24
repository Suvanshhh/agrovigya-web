import React, { useState } from "react";
import { signInWithGoogle, signInWithPhone, loginWithEmail } from "../../firebase/auth";

import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { Mail, Phone, ChevronDown } from "lucide-react";

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

    const handleGoogleLogin = async () => {
        setLoading(true);
        setError("");
        try {
            const user = await signInWithGoogle();
            if (user) navigate("/dashboard");
        } catch (error) {
            switch (error.code) {
                case "auth/popup-closed-by-user":
                    setError("Login canceled. You closed the login window.");
                    break;
                case "auth/cancelled-popup-request":
                    setError("Another popup is already open.");
                    break;
                case "auth/popup-blocked":
                    setError("Login popup was blocked by your browser. Please allow popups for this site.");
                    break;
                case "auth/user-disabled":
                    setError("This account has been disabled. Please contact support.");
                    break;
                default:
                    setError(`Login failed: ${error.message}`);
            }
            console.error("Google Login Error:", error.code, error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please enter both email and password");
            return;
        }
        
        setLoading(true);
        setError("");
        try {
            const user = await loginWithEmail(email, password);
            if (user) navigate("/dashboard");
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
                case "auth/too-many-requests":
                    setError("Too many failed login attempts. Please try again later.");
                    break;
                default:
                    setError(`Login failed: ${error.message}`);
            }
            console.error("Email Login Error:", error.code, error.message);
        } finally {
            setLoading(false);
        }
    };

    const handlePhoneLogin = async () => {
        if (!phone || phone.length < 10) {
            setError("Please enter a valid phone number");
            return;
        }
        
        setLoading(true);
        setError("");
        try {
            const confirmationResult = await signInWithPhone(phone);
            setConfirmation(confirmationResult);
        } catch (error) {
            switch (error.code) {
                case "auth/invalid-phone-number":
                    setError("The phone number is not valid.");
                    break;
                case "auth/missing-phone-number":
                    setError("Please enter a phone number.");
                    break;
                case "auth/quota-exceeded":
                    setError("SMS quota exceeded. Please try again later.");
                    break;
                case "auth/user-disabled":
                    setError("This phone number has been disabled.");
                    break;
                case "auth/captcha-check-failed":
                    setError("reCAPTCHA verification failed. Please try again.");
                    break;
                default:
                    setError(`Failed to send OTP: ${error.message}`);
            }
            console.error("Phone Login Error:", error.code, error.message);
        } finally {
            setLoading(false);
        }
    };

    const verifyOtp = async () => {
        if (!otp) {
            setError("Please enter the OTP");
            return;
        }
        
        setLoading(true);
        setError("");
        try {
            await confirmation.confirm(otp);
            navigate("/dashboard");
        } catch (error) {
            switch (error.code) {
                case "auth/invalid-verification-code":
                    setError("The verification code is invalid. Please try again.");
                    break;
                case "auth/code-expired":
                    setError("The verification code has expired. Please request a new one.");
                    break;
                default:
                    setError(`OTP verification failed: ${error.message}`);
            }
            console.error("OTP Verification Error:", error.code, error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Welcome Back</h1>
                    <p className={styles.heroSubtitle}>
                        Login to access your AgroVigya account
                    </p>
                </div>
                <div className={styles.scrollIndicator}>
                    <ChevronDown className={styles.chevron} />
                </div>
            </section>

            {/* Login Section */}
            <section className={styles.loginSection}>
                <div className={styles.loginContainer}>
                    {error && <div className={styles.errorMessage}>{error}</div>}
                    
                    {/* Login Method Tabs */}
                    <div className={styles.loginTabs}>
                        <button 
                            className={`${styles.tabButton} ${activeTab === 'email' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('email')}
                        >
                            <Mail size={18} />
                            <span>Email</span>
                        </button>
                        <button 
                            className={`${styles.tabButton} ${activeTab === 'phone' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('phone')}
                        >
                            <Phone size={18} />
                            <span>Phone</span>
                        </button>
                        <button 
                            className={`${styles.tabButton} ${activeTab === 'google' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('google')}
                        >
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                                alt="Google" 
                                className={styles.googleIcon} 
                            />
                            <span>Google</span>
                        </button>
                    </div>

                    {/* Email Login Form */}
                    {activeTab === 'email' && (
                        <div className={styles.loginCard}>
                            <Mail className={styles.icon} />
                            <h3>Login with Email</h3>
                            <form onSubmit={handleEmailLogin}>
                                <div className={styles.inputGroup}>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                        disabled={loading}
                                        className={styles.input}
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        disabled={loading}
                                        className={styles.input}
                                    />
                                </div>
                                <div className={styles.forgotPassword}>
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                </div>
                                <button type="submit" disabled={loading} className={styles.loginButton}>
                                    {loading ? "Processing..." : "Login"}
                                </button>
                            </form>
                        </div>
                    )}

                    {/* Phone Login Form */}
                    {activeTab === 'phone' && (
                        <div className={styles.loginCard}>
                            <Phone className={styles.icon} />
                            <h3>Login with Phone</h3>
                            {!confirmation ? (
                                <>
                                    <div className={styles.inputGroup}>
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="Enter phone number"
                                            disabled={loading}
                                            className={styles.input}
                                        />
                                    </div>
                                    <button 
                                        id="send-otp-button"
                                        onClick={handlePhoneLogin} 
                                        disabled={loading} 
                                        className={styles.loginButton}
                                    >
                                        {loading ? "Sending..." : "Send OTP"}
                                    </button>
                                </>
                            ) : (
                                <>
                                    <div className={styles.inputGroup}>
                                        <input
                                            type="text"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            placeholder="Enter OTP"
                                            disabled={loading}
                                            className={styles.input}
                                        />
                                    </div>
                                    <button onClick={verifyOtp} disabled={loading} className={styles.loginButton}>
                                        {loading ? "Verifying..." : "Verify OTP"}
                                    </button>
                                </>
                            )}
                            <div id="recaptcha-container" className={styles.recaptchaContainer}></div>
                        </div>
                    )}

                    {/* Google Login */}
                    {activeTab === 'google' && (
                        <div className={styles.loginCard}>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                                alt="Google" 
                                className={styles.googleLogo} 
                            />
                            <h3>Login with Google</h3>
                            <p>Click the button below to login with your Google account.</p>
                            <button onClick={handleGoogleLogin} disabled={loading} className={styles.googleButton}>
                                {loading ? "Processing..." : "Continue with Google"}
                            </button>
                        </div>
                    )}

                    <div className={styles.signupPrompt}>
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LoginPage;
