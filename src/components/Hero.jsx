import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero6.png"; // Ensure the correct image path

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-24 py-16 sm:py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155]">
      {/* Background Circles */}
      <motion.div 
        className="absolute top-10 left-10 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-500 opacity-20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />

      {/* Left Content */}
      <motion.div
        className="lg:w-1/2 text-center lg:text-left relative z-10 mt-12 sm:mt-0 px-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-[#e0e0e0]">
            Revolutionizing
          </span>{" "}
          the Realm of Franchising
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300">
          The ultimate franchise growth platform, empowering businesses with
          structured solutions and AI-powered insights.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
          <Link to="/deservices">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#ff9800] to-[#ff5722] text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-lg shadow-md transition duration-300"
            >
              Learn More
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#fbbf24] text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#fbbf24] hover:text-black transition duration-300"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="lg:w-1/2 flex justify-center items-center relative z-10 mt-10 lg:mt-0 px-4"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={heroImage}
          alt="Franchise Opportunity"
          className="rounded-[40px] w-full max-w-sm sm:max-w-md md:max-w-lg "
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
