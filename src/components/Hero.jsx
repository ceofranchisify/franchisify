import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/images/franch.png";
import missionImage from "../assets/images/IMG13.jpg";
import visionImage from "../assets/images/Franchisify.in (1)_page-0009.jpg";

const HeroAbout = () => {
  return (
    <div className="relative overflow-hidden text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-24 py-16 sm:py-20 bg-gradient-to-r from-[#83C4E3] to-[#5A9EC2]">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left relative z-10 mt-20 sm:mt-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#01013d] to-[#000000] leading-tight">
            Revolutionizing the Realm of Franchising
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-100">
            The ultimate franchise growth platform, empowering businesses with
            structured solutions and AI-powered insights.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#01013d] text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-blue-500/50"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#01013d] text-black px-6 sm:px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-blue-500 hover:text-white transition"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex justify-center items-center relative z-10 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={heroImage}
            alt="Franchise Opportunity"
            className="rounded-3xl w-full max-w-sm sm:max-w-md md:max-w-lg shadow-lg transform hover:scale-105 transition duration-300"
          />
        </motion.div>
      </div>
  

      {/* About Section */}
      <div id="about" className="relative py-16 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 rounded-2xl overflow-hidden shadow-lg">
          {/* Left Column: Title */}
          <motion.div
            className="bg-gradient-to-r from-[#83C4E3] to-[#5A9EC2] text-white flex justify-center items-center p-8 sm:p-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold">
              About <span className="text-white">Franchisify</span>
            </h1>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            className="bg-white p-8 sm:p-10 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-base sm:text-lg text-gray-600">
              Franchisify is your comprehensive resource for launching a new business. 
              We connect franchisors with franchisees, presenting attractive and 
              profitable opportunities for both parties while supporting positive 
              business growth.
            </p>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Our mission at Franchisify is to turn businesses into thriving 
              franchises that encourage long-term financial achievements. 
              Even though India's franchising market currently lacks knowledge 
              and enthusiasm, it has the potential to greatly improve your company.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-16 px-6 sm:px-10 text-white grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
        {/* Mission Section */}
        <motion.div
          className="bg-gradient-to-r from-[#83C4E3] to-[#5A9EC2] p-8 sm:p-10 rounded-3xl shadow-xl border border-cyan-500/30 backdrop-blur-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-black">
            Our Mission
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white">
          Our mission at Franchisify is to turn companies into profitable franchises that provide long-term success. We encourage business models which are supported by market research and industry best practices, that help us guarantee effectiveness, profitability, and growth.  

To create a sustainable ecosystem where franchisors and franchisees thrive together and introduce you to seamless and structured expansion plans. 
          </p>
        </motion.div>
        <motion.img
          src={missionImage}
          alt="Mission"
          className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Vision Section */}
        <motion.img
          src={visionImage}
          alt="Vision"
          className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="bg-gradient-to-r from-[#83C4E3] to-[#5A9EC2] p-8 sm:p-10 rounded-3xl shadow-xl border border-purple-500/30 backdrop-blur-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-black">
            Our Vision
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white">
          Franchisify envisions a world in which firms can maximize their potential through strategic franchising. They want to provide entrepreneurs with proven business concepts for long-term growth and profitability. They offer experienced advice and innovative solutions to ensure that any business may effectively develop and survive in today's competitive market. 
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroAbout;
