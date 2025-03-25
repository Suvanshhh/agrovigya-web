import React, { useState } from "react";
import { resetPassword } from "../../../firebase/auth";
import { useNavigate } from "react-router-dom";



const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address");
      return;
    }

    setLoading(true);
    setError("");
    try {
      await resetPassword(email);
      setSuccess(true);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setError("Invalid email address format.");
          break;
        case "auth/user-not-found":
          setError("No account found with this email.");
          break;
        case "auth/too-many-requests":
          setError("Too many requests. Please try again later.");
          break;
        default:
          setError(`Failed to send reset email: ${error.message}`);
      }
      console.error("Password Reset Error:", error.code, error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      {error && <p className="error-message">{error}</p>}
      {success ? (
        <div>
          <p className="success-message">
            Password reset email sent! Check your inbox for further
            instructions.
          </p>
          <button onClick={() => navigate("/login")}>Back to Login</button>
        </div>
      ) : (
        <form onSubmit={handleResetPassword}>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={loading}
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Reset Password"}
          </button>
          <div>
            <button type="button" onClick={() => navigate("/login")}>
              Back to Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
