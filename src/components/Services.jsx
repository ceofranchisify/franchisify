import React from "react";
import { FaBusinessTime, FaBalanceScale, FaBullhorn, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 

const services = [
  {
    title: "Franchise Model Development",
    description: "We create structured franchise models to help businesses expand efficiently.",
    icon: <FaBusinessTime />,
  },
  {
    title: "Legal Support",
    description: "Our team ensures legal compliance and smooth operations for your franchise.",
    icon: <FaBalanceScale />,
  },
  {
    title: "Lead Generation",
    description: "We use marketing strategies to attract and convert potential franchisees.",
    icon: <FaBullhorn />,
  },
  {
    title: "Franchise Selling",
    description: "We connect businesses with the right franchise partners for seamless growth.",
    icon: <FaUsers />,
  },
];

const Services = () => {
  const navigate = useNavigate();

  // Function to navigate & scroll to top
  const handleLearnMore = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    navigate("/deservices"); // Navigate to the page
  };

  return (
    <section className="relative bg-gradient-to-b to-blue-900 from-gray-900 py-24 px-6 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/your-image-path.svg')" }}></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-100 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          End-to-end solutions designed to fuel the success and scalability of your franchise.
        </motion.p>

        <div className="grid gap-12 mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glassmorphism p-10 rounded-3xl shadow-xl border border-white/20 transition transform duration-500 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-500 text-6xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-gray-200 leading-relaxed">{service.description}</p>
              <button
                onClick={handleLearnMore}
                className="mt-6 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg transition duration-300 hover:bg-blue-500"
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
