import React from "react";
import { motion } from "framer-motion";
import missionImage from "../assets/images/hero5.jpg";
import visionImage from "../assets/images/Franchisify.in (1)_page-0009.jpg";

const About = () => {
  return (
    <div id="about" className="relative py-16 px-6 sm:px-10 bg-gray-50">
      {/* About Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 rounded-2xl overflow-hidden shadow-2xl">
        {/* Left Column: Title */}
        <motion.div
          className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] text-white flex justify-center items-center p-8 sm:p-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            About <span className="text-white">Franchisify</span>
          </h1>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div
          className="bg-white p-8 sm:p-10 flex flex-col justify-center rounded-tr-2xl lg:rounded-none"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Franchisify is your comprehensive resource for launching a new
            business. We connect franchisors with franchisees, presenting
            attractive and profitable opportunities for both parties while
            supporting positive business growth.
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Our mission at Franchisify is to turn businesses into thriving
            franchises that encourage long-term financial achievements. Even
            though India's franchising market currently lacks knowledge and
            enthusiasm, it has the potential to greatly improve your company.
          </p>
        </motion.div>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 sm:px-12 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Vision Section (Image on Top, Content Below) */}
          <motion.div
            className="flex flex-col items-center text-center space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={visionImage}
              alt="Vision"
              className="w-80 sm:w-96 md:w-full max-w-lg rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] p-8 rounded-3xl shadow-xl border border-purple-500/50 backdrop-blur-lg">
              <h1 className="text-4xl font-bold mb-5">Our Vision</h1>
              <p className="text-lg leading-relaxed">
                <span className="text-purple-400 font-semibold">Franchisify</span> envisions a world where businesses maximize their potential through strategic franchising. We strive to empower entrepreneurs with proven business concepts for long-term growth and profitability.
              </p>
            </div>
          </motion.div>

          {/* Mission Section (Content on Top, Image Below) */}
          <motion.div
            className="flex flex-col items-center text-center space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] p-8 rounded-3xl shadow-xl border border-cyan-500/50 backdrop-blur-lg">
              <h1 className="text-4xl font-bold mb-5">Our Mission</h1>
              <p className="text-lg leading-relaxed">
                Our mission at <span className="text-cyan-400 font-semibold">Franchisify</span> is to turn companies into profitable franchises that provide long-term success. We encourage business models supported by market research and industry best practices to ensure effectiveness, profitability, and growth.
              </p>
            </div>
            <img
              src={missionImage}
              alt="Mission"
              className="w-70 sm:w-86 md:w-full max-w-lg rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

