import React from "react";
import { FaBusinessTime, FaBalanceScale, FaBullhorn, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Franchise Model Development",
    description: "We help create a scalable and profitable franchise model tailored to your business needs.",
    icon: <FaBusinessTime />,
  },
  {
    title: "Legal Support",
    description: "Our expert legal team ensures your franchise operates within regulations and compliance.",
    icon: <FaBalanceScale />,
  },
  {
    title: "Lead Generation",
    description: "We implement data-driven marketing strategies to attract the right franchise partners.",
    icon: <FaBullhorn />,
  },
  {
    title: "Franchise Selling",
    description: "Expand your franchise network with our expert franchise matchmaking and consulting services.",
    icon: <FaUsers />,
  },
];

const Services = () => {
  return (
    <section className="relative bg-gradient-to-b  to-blue-900 from-gray-900 py-24 px-6 overflow-hidden">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/your-image-path.svg')" }} 
      ></div>

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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
