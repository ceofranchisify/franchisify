import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaCogs, FaDollarSign, FaLightbulb } from "react-icons/fa";

const highlights = [
  {
    title: "Successful Franchise Models",
    description: "Designed to maximize your brand's potential and ensure sustainable growth.",
    icon: <FaChartLine className="text-4xl text-black" />,
  },
  {
    title: "Operational Strategies",
    description: "Providing step-by-step guidance to streamline your franchise operations.",
    icon: <FaCogs className="text-4xl text-black" />,
  },
  {
    title: "Profitability Focus",
    description: "Ensuring that expansion leads to tangible financial success.",
    icon: <FaDollarSign className="text-4xl text-black" />,
  },
  {
    title: "Market Insights",
    description: "Equipping franchisees with essential tools and industry knowledge.",
    icon: <FaLightbulb className="text-4xl text-black" />,
  }
];

const WhyFranchisify = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#83C4E3] to-[#5A9EC2] text-white py-24 px-6 overflow-hidden">
      <div className="relative max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-black drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Franchisify?
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We focus on creating success stories rather than merely exchanging contracts.
        </motion.p>

        <div className="grid gap-10 mt-12 sm:grid-cols-2 lg:grid-cols-2">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/10 p-8 rounded-3xl shadow-xl border border-white/20 transition transform duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-black">{item.title}</h3>
              <p className="mt-4 text-gray-200 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFranchisify;