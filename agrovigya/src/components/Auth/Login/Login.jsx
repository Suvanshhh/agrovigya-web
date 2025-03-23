import React, { useState } from "react";

import {
    signInWithGoogle,
    signInWithPhone,
    loginWithEmail,
} from "../../../firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [phone, setPhone] = useState("");
    const [confirmation, setConfirmation] = useState(null);
    const [otp, setOtp] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        setLoading(true);
        setError("");
        try {
            const user = await signInWithGoogle();
            if (user) navigate("/");
        } catch (error) {
            // Handle specific Firebase error codes
            switch (error.code) {
                case "auth/popup-closed-by-user":
                    setError("Login canceled. You closed the login window.");
                    break;
                case "auth/cancelled-popup-request":
                    setError("Another popup is already open.");
                    break;
                case "auth/popup-blocked":
                    setError(
                        "Login popup was blocked by your browser. Please allow popups for this site."
                    );
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
            if (user) navigate("/");
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
            navigate("/");
        } catch (error) {
            switch (error.code) {
                case "auth/invalid-verification-code":
                    setError("The verification code is invalid. Please try again.");
                    break;
                case "auth/code-expired":
                    setError(
                        "The verification code has expired. Please request a new one."
                    );
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
            <h1>Login</h1>
            {error && <p className="error-message">{error}</p>}

            {/* Email/Password Login Form */}
            <form onSubmit={handleEmailLogin}>
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        disabled={loading}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        disabled={loading}
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Processing..." : "Login with Email"}
                </button>
                <div>
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
            </form>

            {/* Google Login */}
            <button onClick={handleGoogleLogin} disabled={loading}>
                {loading ? "Processing..." : "Login with Google"}
            </button>

            {/* Phone Login */}
            <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                disabled={loading}
            />
            <button onClick={handlePhoneLogin} disabled={loading}>
                {loading ? "Sending..." : "Send OTP"}
            </button>
            {confirmation && (
                <>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                        disabled={loading}
                    />
                    <button onClick={verifyOtp} disabled={loading}>
                        {loading ? "Verifying..." : "Verify OTP"}
                    </button>
                </>
            )}
            <div id="recaptcha-container"></div>
        </div>
    );
};

export default Login;
