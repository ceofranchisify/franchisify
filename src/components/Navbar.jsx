import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/images/Franchisify.in b (2).png"; // Adjust path as needed

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to About Section (Works from Any Page)
  const scrollToAbout = (event) => {
    event.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={Logo}
            alt="Logo"
            className="h-14 sm:h-16 md:h-16 transition-transform duration-300 hover:scale-110 font-serif"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-lg font-semibold items-center">
          <li>
            <Link to="/" className="text-white hover:text-blue-500 transition-all duration-200">
              Home
            </Link>
          </li>
          <li>
            <a
              href="#about"
              onClick={scrollToAbout}
              className="text-white hover:text-blue-500 transition-all duration-200"
            >
              About
            </a>
          </li>
          <li>
            <Link to="/deservices" className="text-white hover:text-blue-500 transition-all duration-200">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-blue-500 transition-all duration-200">
              Career
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-blue-500 transition-all duration-200">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-transparent border-t-0 transition-all duration-300 ease-in-out font-serif`}
      >
        <div className="px-8 py-6 space-y-5 text-center text-lg font-semibold">
          <Link
            to="/"
            className="block text-white hover:text-blue-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/deservices"
            className="block text-white hover:text-blue-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <a
            href="#about"
            onClick={(e) => {
              scrollToAbout(e);
              setIsOpen(false);
            }}
            className="block text-white hover:text-blue-500 transition"
          >
            About
          </a>
          <Link
            to="/contact"
            className="block text-white hover:text-blue-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
