import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/images/franch.png";
import missionImage from "../assets/images/IMG13.jpg";
import visionImage from "../assets/images/Franchisify.in (1)_page-0009.jpg";

const HeroAbout = () => {
  return (
    <div className="relative overflow-hidden text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 py-24 bg-gradient-to-r from-[#83C4E3] to-[#5A9EC2]">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left relative z-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffaa00] to-[#000000] leading-tight">
            Revolutionizing the Realm of Franchising
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            The ultimate franchise growth platform, empowering businesses with structured solutions and AI-powered insights.
          </p>
          <div className="mt-10 flex flex-col lg:flex-row items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-orange-500/50"
            >
              Get Started 🚀
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-orange-500 text-orange-400 px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-orange-500 hover:text-white transition"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex justify-center items-center relative z-10"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={heroImage}
            alt="Franchise Opportunity"
            className="rounded-3xl w-full max-w-lg shadow-lg transform hover:scale-105 transition duration-300"
          />
        </motion.div>
      </div>

      {/* About Section */}
      <div className="relative bg-white text-center py-24 px-10">
        <motion.h1
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-[#ffab00]">Franchisify</span>
        </motion.h1>
        <motion.p
          className="mt-6 text-lg max-w-3xl mx-auto text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Franchisify is your comprehensive resource for launching a new business. We connect franchisors with franchisees, presenting attractive and profitable opportunities for both parties while supporting positive business growth.
        </motion.p>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-24 px-10 bg-[#0F172A] text-white grid lg:grid-cols-2 gap-16 items-center">
        {/* Mission Section */}
        <motion.div
          className="bg-[#1E293B] p-10 rounded-3xl shadow-xl border border-cyan-500/30 backdrop-blur-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-cyan-400">Our Mission</h1>
          <p className="mt-4 text-lg text-gray-300">
            Our mission at Franchisify is to turn companies into profitable franchises that provide long-term success.
          </p>
        </motion.div>
        <motion.img
          src={missionImage}
          alt="Mission"
          className="w-full max-w-lg rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Vision Section */}
        <motion.img
          src={visionImage}
          alt="Vision"
          className="w-full max-w-lg rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="bg-[#1E293B] p-10 rounded-3xl shadow-xl border border-purple-500/30 backdrop-blur-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-purple-400">Our Vision</h1>
          <p className="mt-4 text-lg text-gray-300">
            Franchisify envisions a world in which firms can maximize their potential through strategic franchising.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroAbout;
