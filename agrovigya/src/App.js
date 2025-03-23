import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import AboutPage from "./Pages/About/about";
import ContactPage from "./Pages/Contact/contact";
import ProfilePage from "./Pages/Profile/Profile";
import CropRecommendationPage from "./Pages/CropRecomPage/CropRecommendationPage";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";

function App() {
  return (
    <Router>
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
