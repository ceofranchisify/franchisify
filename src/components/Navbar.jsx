import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/images/Franchisify.in (1).png"; // Adjust path as needed

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Scroll to About Section (Works from Any Page)
  const scrollToAbout = (event) => {
    event.preventDefault();
    if (location.pathname !== "/") {
      navigate("/"); // Redirect to Home first
      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to allow navigation before scrolling
    } else {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ✅ Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-12 transition-transform duration-300 hover:scale-110 font-serif" />
        </Link>

        {/* ✅ Desktop Navigation */}
        <ul className="hidden md:flex space-x-4 text-sm font-medium">
          <li><Link to="/" className="text-black hover:text-blue-600 transition">Home</Link></li>
          <li><a href="#about" onClick={scrollToAbout} className="text-black hover:text-blue-600 transition">About</a></li>
          <li><Link to="/deservices" className="text-black hover:text-blue-600 transition">Services</Link></li>
          <li><Link to="/contact" className="text-black hover:text-blue-600 transition">Contact</Link></li>
        </ul>

        {/* ✅ Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ✅ Mobile Navigation Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-transparent border-t-0 transition-all duration-300 ease-in-out font-serif`}>
        <div className="px-6 py-4 space-y-4">
          <Link to="/" className="block text-black hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/deservices" className="block text-black hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Services</Link>
          <a href="#about" onClick={scrollToAbout} className="block text-black hover:text-blue-600 transition">About</a>
          <Link to="/contact" className="block text-black hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

