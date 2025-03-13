import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative py-20 px-6">
            <motion.h1
              className="text-5xl font-extrabold text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About <span className="text-blue-700">Franchisify</span>
            </motion.h1>
            <motion.p
              className="mt-6 text-center text-lg max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Franchisify is your comprehensive resource for launching a new
              business. We connect franchisors with franchisees, presenting
              attractive and profitable opportunities for both parties, while
              supporting positive business growth.
            </motion.p>
    
            {/* ✅ Mission Section */}
            <div className="relative mt-16 flex flex-col md:flex-row items-center gap-12 ">
              {/* Mission Text */}
              <motion.div
                className="md:w-1/2 text-center md:text-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-blue-400">Our Mission</h2>
                <p className="mt-4 text-lg">
                  Our mission at Franchisify is to turn companies into profitable
                  franchises that provide long-term success. We encourage business
                  models which are supported by market research and industry best
                  practices.
                </p>
              </motion.div>
    
              {/* Mission Image */}
              <motion.img
                src={missionImage}
                alt="Mission"
                className="md:w-1/2 w-full max-w-lg rounded-2xl shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
    
            {/* ✅ Vision Section */}
            <div className="relative flex flex-col md:flex-row-reverse items-center gap-12 py-16 px-6">
              {/* Vision Text */}
              <motion.div
                className="md:w-1/2 text-center md:text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-blue-400">Our Vision</h2>
                <p className="mt-4 text-lg">
                  Franchisify envisions a world in which firms can maximize their
                  potential through strategic franchising. They want to provide
                  entrepreneurs with proven business concepts for long-term growth
                  and profitability.
                </p>
              </motion.div>
    
              {/* Vision Image */}
              <motion.img
                src={visionImage}
                alt="Vision"
                className="md:w-1/2 w-full max-w-lg rounded-2xl shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        
  );
};

export default About;
