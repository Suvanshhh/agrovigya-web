import React, { useState } from "react";
import { signInWithGoogle, signUpWithEmail } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";

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
            // Handle specific Firebase error codes
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
        
        // Form validation
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
            <h1>Signup</h1>
            {error && <p className="error-message">{error}</p>}
            
            {/* Email/Password Signup Form */}
            <form onSubmit={handleEmailSignup}>
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
                <div>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        disabled={loading}
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Processing..." : "Sign up with Email"}
                </button>
            </form>
            
            {/* Google Signup */}
            <button onClick={handleGoogleSignup} disabled={loading}>
                {loading ? "Processing..." : "Sign up with Google"}
            </button>
        </div>
    );
};

export default Signup;
