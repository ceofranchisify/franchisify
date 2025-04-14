import React from "react";
import { motion } from "framer-motion";
import missionImage from "../assets/images/Franchisify.in (1)_page-0009.jpg";

const About = () => {
  return (
    <div id="about" className="relative py-16 px-6 sm:px-10">
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
            About <span className="text-[#fbbf24]">Franchisify</span>
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

      {/* Vision, Image, Mission Section */}
      <section className="py-20 px-6 sm:px-12 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
          {/* Vision */}
          <motion.div
            className="flex flex-col h-full justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] p-8 rounded-3xl shadow-xl border border-purple-500/50 backdrop-blur-lg h-full min-h-[450px] flex flex-col justify-between">
              <h1 className="text-4xl font-bold mb-5">Our Vision</h1>
              <p className="text-lg leading-relaxed">
                <span className="text-purple-400 font-semibold">
                  Franchisify
                </span>{" "}
                envisions a world where businesses maximize their potential
                through strategic franchising. We strive to empower
                entrepreneurs with proven business concepts for long-term growth
                and profitability. Our commitment is to create a thriving
                ecosystem where ideas turn into successful franchise ventures.
              </p>
            </div>
          </motion.div>

          {/* Center Image */}
          <motion.div
            className="flex justify-center items-center h-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-lg h-full min-h-[450px] w-full flex justify-center items-center">
              <img
                src={missionImage}
                alt="Franchisify"
                className="h-full w-full object-cover rounded-3xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="flex flex-col h-full justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] p-8 rounded-3xl shadow-xl border border-cyan-500/50 backdrop-blur-lg h-full min-h-[450px] flex flex-col justify-between">
              <h1 className="text-4xl font-bold mb-5">Our Mission</h1>
              <p className="text-lg leading-relaxed">
                Our mission at{" "}
                <span className="text-cyan-400 font-semibold">Franchisify</span>{" "}
                is to turn companies into profitable franchises that provide
                long-term success. We encourage business models supported by
                market research and industry best practices to ensure
                effectiveness, profitability, and growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
