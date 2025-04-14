import React from "react";
import { FaBusinessTime, FaBalanceScale, FaBullhorn, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Franchise Model Development",
    description: "We create structured franchise models to help businesses expand efficiently.",
    icon: <FaBusinessTime className="text-blue-500" />,
    id: "franchise-model-development",
  },
  {
    title: "Legal Support",
    description: "Our team ensures legal compliance and smooth operations for your franchise.",
    icon: <FaBalanceScale className="text-green-500" />,
    id: "legal-support",
  },
  {
    title: "Lead Generation",
    description: "We use marketing strategies to attract and convert potential franchisees.",
    icon: <FaBullhorn className="text-yellow-500" />,
    id: "lead-generation",
  },
  {
    title: "Franchise Selling",
    description: "We connect businesses with the right franchise partners for seamless growth.",
    icon: <FaUsers className="text-purple-500" />,
    id: "franchise-selling",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleLearnMore = (sectionId) => {
    navigate("/deservices");
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="relative bg-white text-white py-24 px-6">
      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-black"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-[#fbbf24]">Services</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl text-black max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          End-to-end solutions designed to fuel the success and scalability of your franchise.
        </motion.p>

        <div className="grid gap-10 mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] p-10 rounded-3xl shadow-lg border border-white/20 backdrop-blur-lg transform transition duration-500 hover:scale-105 hover:bg-white/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl mb-6 mx-auto flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-gray-300 leading-relaxed">{service.description}</p>
              <button
                onClick={() => handleLearnMore(service.id)}
                className="mt-6 px-6 py-3 bg-[#fbbf24] text-white font-semibold rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
