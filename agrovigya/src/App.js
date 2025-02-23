import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/home';
import AboutPage from './Pages/About/about';
import ContactPage from './Pages/Contact/contact'; // Import the ContactPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
