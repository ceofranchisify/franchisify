import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroVideo from "../assets/video/vid1.mp4";

const HeroSection = () => {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Background Circles */}
      <motion.div 
        className="hidden sm:block absolute top-10 left-10 w-28 sm:w-40 h-28 sm:h-40 bg-blue-500 opacity-20 rounded-full blur-3xl z-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.div 
        className="hidden sm:block absolute bottom-10 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-indigo-500 opacity-20 rounded-full blur-3xl z-20"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />

      {/* Foreground Content - Centered */}
      <div className="relative z-30 flex items-center justify-center h-full px-4 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-[#e0e0e0]">
              Revolutionizing
            </span>{" "}
            the Realm of Franchising
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 px-2 sm:px-8">
            The ultimate franchise growth platform, empowering businesses with
            structured solutions and AI-powered insights.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link to="/deservices">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#fbbf24] text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg shadow-md transition duration-300"
              >
                Learn More
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#ff9800] to-[#ff5722] text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg shadow-md hover:bg-[#fbbf24] hover:text-black transition duration-300"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
