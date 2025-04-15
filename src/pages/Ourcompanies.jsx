import React from "react";
import { motion } from "framer-motion";

// Import images
import sib from "../assets/images/SIB.jpg";
import careerCafe from "../assets/images/careercafe.jpg";
import kovai from "../assets/images/Kovai.png";
import backgroundImage from "../assets/images/hero3.webp";

const franchiseData = [
  { image: sib, url: "https://studyinbengaluru.com" },
  { image: careerCafe, url: "https://careercafe.co" },
  { image: kovai, url: "https://www.kovairawutherbiriyani.com" },
];

const Customers = () => {
  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`
      }}
    >
      {/* Heading */}
      <h2
        className="text-5xl font-bold text-center mb-12 flex justify-center gap-2"
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}
      >
        <span className="text-white">OnBoarded</span>
        <span className="text-[#fbbf24]">Clients</span>
      </h2>

      {/* Grid Container */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {franchiseData.map((franchise, index) => (
            <motion.a
              key={index}
              href={franchise.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-4 flex justify-center items-center transition-transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                className="max-w-[120px] max-h-[120px] object-contain"
                src={franchise.image}
                alt={`Franchise ${index + 1}`}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
