import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import AboutPage from "./Pages/About/about";
import ContactPage from "./Pages/Contact/contact";
import ProfilePage from "./Pages/Profile/Profile";
import DynamicProfile from "./Pages/Profile/DynamicProfile";
import CropRecommendationPage from "./Pages/CropRecomPage/CropRecommendationPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import LabourEstimation from "./components/LabourEstimation/LabourEstimation";
import AuthModal from "./components/Auth/AuthModal/AuthModal";
import { useAuth } from "./context/AuthContext";
import i18n from "./i18n"; // Importing i18n configuration
import GovtSchemes from "./Pages/GovtSchemes/GovtSchemes";
import Marketplace from "./Pages/Marketplace/Marketplace";

// Import member components
import Agniva from "./Pages/AboutEveryone/Agniva/Agniva";
import Aishwarya from "./Pages/AboutEveryone/Aishwarya/Aishwarya";
import Anuja from "./Pages/AboutEveryone/Anuja/Anuja";
import Ashok from "./Pages/AboutEveryone/Ashok/Ashok";
import Isha from "./Pages/AboutEveryone/Isha/Isha";
import Shivam from "./Pages/AboutEveryone/Shivam/Shivam";
import Shrut from "./Pages/AboutEveryone/Shrut/Shrut";
import Shubhra from "./Pages/AboutEveryone/Shubhra/Shubhra";
import Siya from "./Pages/AboutEveryone/Siya/Siya";
import Sunita from "./Pages/AboutEveryone/Sunita/Sunita";
import Suvansh from "./Pages/AboutEveryone/Suvansh/Suvansh";

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
      console.log(
        "Reason:",
        user ? "User is logged in" : "hideAuthModal is true"
      );
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
        <Route path="/labour-estimation" element={<LabourEstimation />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:name" element={<DynamicProfile />} />
        <Route
          path="/crop-recommendation"
          element={<CropRecommendationPage />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/governmentschemes" element={<GovtSchemes />} />
        <Route path="/marketplace" element={<Marketplace />} />

        {/* Member routes */}
        <Route path="/abouteveryone/agniva" element={<Agniva />} />
        <Route path="/abouteveryone/aishwarya" element={<Aishwarya />} />
        <Route path="/abouteveryone/anuja" element={<Anuja />} />
        <Route path="/abouteveryone/ashok" element={<Ashok />} />
        <Route path="/abouteveryone/isha" element={<Isha />} />
        <Route path="/abouteveryone/shivam" element={<Shivam />} />
        <Route path="/abouteveryone/shrut" element={<Shrut />} />
        <Route path="/abouteveryone/shubhra" element={<Shubhra />} />
        <Route path="/abouteveryone/siya" element={<Siya />} />
        <Route path="/abouteveryone/sunita" element={<Sunita />} />
        <Route path="/abouteveryone/suvansh" element={<Suvansh />} />
      </Routes>
    </Router>
  );
}

export default App;
