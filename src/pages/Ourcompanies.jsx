import React from 'react';
import { motion } from 'framer-motion';

// Import images from assets
import sib from '../assets/images/SIB.jpg';
import akam from '../assets/images/akam-logo-green.png';
import careerCafe from '../assets/images/careercafe.jpg';
import studyinindia from '../assets/images/siilogo-1.png';
import kovai from '../assets/images/Kovai.png';
import babyque from '../assets/images/babyque.png';

const franchiseData = [
  { image: sib, url: 'https://studyinbengaluru.com' },
  { image: akam, url: 'https://akammindcare.com' },
  { image: careerCafe, url: 'https://careercafe.co' },
  { image: studyinindia, url: 'https://thestudyinindia.com' },
  { image: kovai },
  { image:babyque  },
];

const Customers = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155]">
      {/* Heading */}
      <h2 className="text-5xl font-bold text-center text-white mb-12">
        OnBoarded Clients
      </h2>

      {/* Container */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {franchiseData.map((franchise, index) => (
            <motion.a
              key={index}
              href={franchise.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white  rounded-2xl p-4 flex justify-center items-center transition-all transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                className="w-34 h-34 object-contain"
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
