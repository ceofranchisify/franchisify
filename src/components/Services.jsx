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
    <section className="relative bg-white py-16 px-4 sm:px-6 md:px-10 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-[#fbbf24]">Services</span>
        </motion.h2>

        {/* Section Description */}
        <motion.p
          className="mt-4 text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          End-to-end solutions designed to fuel the success and scalability of your franchise.
        </motion.p>

        {/* Service Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] p-6 sm:p-8 rounded-3xl shadow-xl border border-white/20 backdrop-blur-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="text-5xl sm:text-6xl mb-5">{service.icon}</div>

              {/* Service Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-white text-center">{service.title}</h3>

              {/* Service Description */}
              <p className="mt-3 text-gray-300 text-sm sm:text-base text-center leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Button */}
              <button
                onClick={() => handleLearnMore(service.id)}
                className="mt-6 px-5 py-3 bg-[#fbbf24] text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
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
