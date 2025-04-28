import React from "react";
import { motion } from "framer-motion";
import missionImage from "../assets/images/Franchisify.in (1)_page-0009.jpg";

const About = () => {
  return (
    <div id="about" className="bg-white">
      {/* About Intro Section */}
      <section className="relative py-16 px-4 sm:px-8 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center rounded-2xl overflow-hidden shadow-xl">
          {/* Left: Title */}
          <motion.div
            className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] text-white flex justify-center items-center p-8 md:p-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center leading-snug">
              About <span className="text-yellow-400">Franchisify</span>
            </h1>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            className="bg-white p-8 md:p-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              <strong className="text-[#0F172A]">Franchisify</strong> is your
              trusted partner for launching and scaling franchise-based businesses. 
              We connect franchisors with the right franchisees and empower entrepreneurs 
              with valuable opportunities for sustainable growth.
            </p>
            <p className="mt-4 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              Our goal is to unlock the true potential of India’s franchising
              industry by turning businesses into thriving franchises backed by
              strategy and insight.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision - Image - Mission Section */}
      <section className="py-16 px-4 sm:px-8 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-center">
          {/* Our Vision */}
          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] p-8 rounded-3xl shadow-lg h-full flex flex-col justify-between">
              <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-center text-white">
                Our Vision
              </h2>
              <p className="text-white text-base sm:text-lg leading-relaxed text-justify">
                <span className="text-purple-400 font-semibold">Franchisify</span> envisions a world 
                where businesses maximize their potential through strategic franchising. 
                We empower entrepreneurs with proven business concepts for long-term growth 
                and profitability, creating a thriving ecosystem.
              </p>
            </div>
          </motion.div>

          {/* Center Image */}
          <motion.div
            className="h-full flex justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-3xl shadow-lg w-full h-full min-h-[350px] flex items-center justify-center">
              <img
                src={missionImage}
                alt="Franchisify Vision and Mission"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] p-8 rounded-3xl shadow-lg h-full flex flex-col justify-between">
              <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-center text-white">
                Our Mission
              </h2>
              <p className="text-white text-base sm:text-lg leading-relaxed text-justify">
                At <span className="text-cyan-400 font-semibold">Franchisify</span>, 
                our mission is to transform companies into profitable franchises 
                backed by research and best practices. We foster scalable, sustainable 
                business models for lasting success and growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
