import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaCogs, FaDollarSign, FaLightbulb } from "react-icons/fa";

const highlights = [
  {
    title: "Successful Franchise Models",
    description: "Designed to maximize your brand's potential and ensure sustainable growth.",
    icon: <FaChartLine className="text-5xl text-blue-500 drop-shadow-glow" />,
  },
  {
    title: "Operational Strategies",
    description: "Providing step-by-step guidance to streamline your franchise operations.",
    icon: <FaCogs className="text-5xl text-green-400 drop-shadow-glow" />,
  },
  {
    title: "Profitability Focus",
    description: "Ensuring that expansion leads to tangible financial success.",
    icon: <FaDollarSign className="text-5xl text-yellow-500 drop-shadow-glow" />,
  },
  {
    title: "Market Insights",
    description: "Equipping franchisees with essential tools and industry knowledge.",
    icon: <FaLightbulb className="text-5xl text-purple-400 drop-shadow-glow" />,
  },
];

const WhyFranchisify = () => {
  return (
    <section className="relative bg-[#0A192F] text-white py-24 px-6 overflow-hidden">
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why <span className="text-blue-400">Franchisify?</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We focus on creating success stories rather than merely exchanging contracts.
        </motion.p>

        {/* Highlights Grid */}
        <div className="grid gap-10 mt-12 sm:grid-cols-2 lg:grid-cols-2">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/5 p-8 rounded-3xl shadow-xl border border-white/20 transition duration-500 hover:scale-105 hover:shadow-neon backdrop-blur-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFranchisify;
