import React, { useState } from "react";
import { signInWithGoogle, signUpWithEmail } from "../../firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import styles from "./SignupPage.module.css";

const Signup = () => {
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
      setError("Google signup failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!agree) {
      setError("You must agree to the Terms of Use and Privacy Policy");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const user = await signUpWithEmail(email, password);
      if (user) navigate("/dashboard");
    } catch (error) {
      setError("Signup failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.pageBg}>
      <Navbar />
      <div className={styles.signupWrapper}>
        <form className={styles.signupCard} onSubmit={handleEmailSignup}>
          <h2 className={styles.signupTitle}>Sign up</h2>
          <div className={styles.inputRow}>
            <div className={styles.inputCol}>
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Ex: Suvansh Choudhary"
                value={name}
                onChange={e => setName(e.target.value)}
                className={styles.input}
                disabled={loading}
              />
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Ex: 1234567890"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className={styles.input}
                disabled={loading}
              />
              <label>Email</label>
              <input
                type="email"
                placeholder="Ex: abcd@gmail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={styles.input}
                disabled={loading}
              />
            </div>
            <div className={styles.inputCol}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Ex: 12345678"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={styles.input}
                disabled={loading}
              />
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className={styles.input}
                disabled={loading}
              />
              <div className={styles.checkboxRow}>
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={e => setAgree(e.target.checked)}
                  id="terms"
                  disabled={loading}
                />
                <label htmlFor="terms">
                  I agree to all <span className={styles.termsLink}>Terms of Use</span> and <span className={styles.termsLink}>Privacy Policy</span>
                </label>
              </div>
            </div>
          </div>
          {error && <div className={styles.errorMsg}>{error}</div>}
          <button className={styles.signupBtn} type="submit" disabled={loading}>
            Sign in
          </button>
          <div className={styles.dividerRow}>
            <span className={styles.dividerLine}></span>
            <span className={styles.dividerText}>or</span>
            <span className={styles.dividerLine}></span>
          </div>
          <button
            type="button"
            className={styles.googleBtn}
            onClick={handleGoogleSignup}
            disabled={loading}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className={styles.googleIcon}
            />
            Sign up with google
          </button>
          <div className={styles.loginPrompt}>
            Already have an account?{" "}
            <Link to="/login" className={styles.loginLink}>
              Log in here
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
