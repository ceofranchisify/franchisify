import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaCogs, FaDollarSign, FaLightbulb } from "react-icons/fa";
import why from "../assets/images/why.jpg";

const highlights = [
  {
    title: "Successful Franchise Models",
    description: "Designed to maximize your brand's potential and ensure sustainable growth.",
    icon: <FaChartLine className="text-5xl text-[#fbbf24] drop-shadow-glow" />,
  },
  {
    title: "Operational Strategies",
    description: "Providing step-by-step guidance to streamline your franchise operations.",
    icon: <FaCogs className="text-5xl text-[#fbbf24] drop-shadow-glow" />,
  },
  {
    title: "Profitability Focus",
    description: "Ensuring that expansion leads to tangible financial success.",
    icon: <FaDollarSign className="text-5xl text-[#fbbf24] drop-shadow-glow" />,
  },
  {
    title: "Market Insights",
    description: "Equipping franchisees with essential tools and industry knowledge.",
    icon: <FaLightbulb className="text-5xl text-[#fbbf24] drop-shadow-glow" />,
  },
];

const WhyFranchisify = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white py-20 px-6 bg-cover bg-center"
      style={{
        backgroundImage: `url(${why})`,
        backgroundAttachment: "fixed", // Smooth parallax
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <div className="relative max-w-7xl w-full mx-auto text-center z-10">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why <span className="text-[#fbbf24]">Franchisify?</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="mt-4 text-base md:text-lg text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We focus on creating success stories rather than merely exchanging contracts.
        </motion.p>

        {/* Highlights Grid */}
        <div className="mt-16 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/5 p-8 rounded-3xl border border-white/20 backdrop-blur-lg shadow-lg hover:scale-105 hover:shadow-neon transition-all duration-500 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFranchisify;
