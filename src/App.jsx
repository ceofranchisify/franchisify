import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import FranchiseModelDevelopment from "./pages/Desservices";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Restaurant from "./pages/Restaurant";
import Retail from "./pages/Retail";
import PrivacyPolicy from "./pages/privacypolicy";
import TermsAndConditions from "./pages/TermsandConditions";
import Construction from "./pages/construction";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/deservices" element={<FranchiseModelDevelopment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/construction" element={<Construction/>} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/privacy" element={<PrivacyPolicy />}/>
        <Route path="/terms" element={<TermsAndConditions />}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
