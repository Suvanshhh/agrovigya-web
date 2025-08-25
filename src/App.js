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
// import LabourEstimationPage from "./Pages/LaborEs/LaboursEstimationPagePage";
import AuthModal from "./components/Auth/AuthModal/AuthModal";
import { useAuth } from "./context/AuthContext";

import GovtSchemes from "./Pages/GovtSchemes/GovtSchemes";
import Marketplace from "./Pages/Marketplace/Marketplace";
import ScrollToTop from "./components/utils/ScrollToTop";
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

import LandingPage from "./Pages/LandingPage/LandingPage";
import LabourEstimationPage from "./Pages/LaborEs/LaboursEstimationPagePage";

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const { user, loading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const landingTimer = setTimeout(() => {
      setShowLanding(false);
    }, 3000);

    // Only show AuthModal if user is not logged in, hasn't explicitly hidden it, and authentication state is loaded
    if (!loading && !user && localStorage.getItem("hideAuthModal") !== "true") {
      setShowAuthModal(true);
    } else {
      setShowAuthModal(false);
    }

    return () => {
      clearTimeout(landingTimer);
    };
  }, [user, loading]);
  // For testing, temporarily force modal to show
  

  

  

  const handleLogin = (user) => {
    console.log("User logged in:", user);
    // You can add additional logic here if needed
  };

  return (
    <Router>
      {showLanding ? (
        <LandingPage />
      ) : (
        <>
          {showAuthModal && (
            <AuthModal
              onClose={() => {
                console.log("Closing AuthModal");
                localStorage.setItem("hideAuthModal", "true");
                setShowAuthModal(false);
              }}
              onLogin={handleLogin}
            />
          )}
           <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/labour-estimation" element={<LabourEstimationPage />} />
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
           
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/govt-schemes" element={<GovtSchemes />} />


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
        </>
      )}
    </Router>
  );
}

export default App;
