import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import AboutPage from "./Pages/About/about";
import ContactPage from "./Pages/Contact/contact";
import ProfilePage from "./Pages/Profile/Profile";
import CropRecommendationPage from "./Pages/CropRecomPage/CropRecommendationPage";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import AuthModal from "./components/Auth/AuthModal/AuthModal";
import { useAuth } from "./context/AuthContext";

function App() {
  // For testing, temporarily force modal to show
  const [showAuthModal, setShowAuthModal] = useState(true);
  
  const auth = useAuth();
  console.log("Auth context:", auth);
  const user = auth?.user;
  
  useEffect(() => {
    // Check if user is not logged in and hasn't chosen to hide the modal
    const hideAuthModal = localStorage.getItem("hideAuthModal");
    console.log("Current user:", user);
    console.log("hideAuthModal value in localStorage:", hideAuthModal);

    if (!user && hideAuthModal !== "true") {
      console.log("Conditions met to show the AuthModal.");
      // Show modal after a short delay for better UX
      const timer = setTimeout(() => {
        setShowAuthModal(true);
        console.log("Just set showAuthModal to true");
        // Verify in next render cycle
        setTimeout(() => {
          console.log("After state update, showAuthModal should be:", true);
        }, 0);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      console.log("Conditions NOT met to show the AuthModal.");
      console.log("Reason:", user ? "User is logged in" : "hideAuthModal is true");
    }
  }, [user]);
  
  const handleLogin = (user) => {
    console.log("User logged in:", user);
    // You can add additional logic here if needed
  };

  return (
    <Router>
      {console.log("Before rendering, showAuthModal is:", showAuthModal)}
      {showAuthModal && (
        <AuthModal 
          onClose={() => {
            console.log("Closing AuthModal");
            setShowAuthModal(false);
          }} 
          onLogin={handleLogin}
        />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile/:name" element={<ProfilePage />} />
        <Route
          path="/crop-recommendation"
          element={<CropRecommendationPage />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
