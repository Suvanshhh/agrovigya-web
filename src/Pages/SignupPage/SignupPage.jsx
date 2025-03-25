import React, { useState } from "react";
import { signInWithGoogle, signUpWithEmail } from "../../firebase/auth";

import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { Mail, Lock, ChevronDown } from "lucide-react";
import styles from "./SignupPage.module.css";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
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
            switch (error.code) {
                case "auth/popup-closed-by-user":
                    setError("Signup canceled. You closed the signup window.");
                    break;
                case "auth/cancelled-popup-request":
                    setError("Another popup is already open.");
                    break;
                case "auth/popup-blocked":
                    setError("Signup popup was blocked by your browser. Please allow popups for this site.");
                    break;
                case "auth/email-already-in-use":
                    setError("This email is already registered. Please login instead.");
                    break;
                default:
                    setError(`Signup failed: ${error.message}`);
            }
            console.error("Google Signup Error:", error.code, error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleEmailSignup = async (e) => {
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
            if (user) navigate("/dashboard");
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
            console.error("Email Signup Error:", error.code, error.message);
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
                    <h1 className={styles.heroTitle}>Join AgroVigya</h1>
                    <p className={styles.heroSubtitle}>
                        Create an account to access agricultural insights and tools
                    </p>
                </div>
                <div className={styles.scrollIndicator}>
                    <ChevronDown className={styles.chevron} />
                </div>
            </section>

            {/* Signup Section */}
            <section className={styles.signupSection}>
                <div className={styles.signupContainer}>
                    {error && <div className={styles.errorMessage}>{error}</div>}
                    
                    <div className={styles.signupCard}>
                        <Mail className={styles.icon} />
                        <h3>Create Your Account</h3>
                        
                        <form onSubmit={handleEmailSignup}>
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
                            <div className={styles.inputGroup}>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm Password"
                                    disabled={loading}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.passwordRequirements}>
                                <p>Password must be at least 6 characters long</p>
                            </div>
                            <button type="submit" disabled={loading} className={styles.signupButton}>
                                {loading ? "Processing..." : "Sign up with Email"}
                            </button>
                        </form>
                        
                        <div className={styles.divider}>
                            <span>OR</span>
                        </div>
                        
                        <button onClick={handleGoogleSignup} disabled={loading} className={styles.googleButton}>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                                alt="Google" 
                                className={styles.googleIcon} 
                            />
                            {loading ? "Processing..." : "Sign up with Google"}
                        </button>
                    </div>

                    <div className={styles.loginPrompt}>
                        Already have an account? <Link to="/login">Login</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Signup;
