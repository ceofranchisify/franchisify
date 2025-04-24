import React from "react";
import { motion } from "framer-motion";
import missionImage from "../assets/images/Franchisify.in (1)_page-0009.jpg";

const About = () => {
  return (
    <div id="about" className="bg-white">
      {/* About Intro Section */}
      <div className="relative py-20 px-6 sm:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-2xl overflow-hidden shadow-xl">
          {/* Title */}
          <motion.div
            className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] text-white flex justify-center items-center p-10"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-center">
              About <span className="text-yellow-400">Franchisify</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            className="bg-white p-10 flex flex-col justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong className="text-[#0F172A]">Franchisify</strong> is your
              trusted partner for launching and scaling franchise-based
              businesses. We connect franchisors with the right franchisees and
              empower entrepreneurs with valuable opportunities for sustainable
              growth.
            </p>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              Our goal is to unlock the true potential of India’s franchising
              industry by turning businesses into thriving franchises backed by
              strategy and insight.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Vision, Image, Mission Section */}
      <section className="py-20 px-6 sm:px-12 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
          {/* Vision */}
          <motion.div
            className="flex flex-col justify-between h-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] p-8 rounded-3xl shadow-xl border border-purple-500/50 backdrop-blur-lg h-full flex flex-col justify-between">
              <h1 className="text-4xl font-bold mb-5 text-center">
                Our Vision
              </h1>
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
            className="flex flex-col justify-between h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] p-8 rounded-3xl shadow-xl border border-cyan-500/50 backdrop-blur-lg h-full flex flex-col justify-between">
              <h1 className="text-4xl font-bold mb-5 text-center">Our Mission</h1>
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
