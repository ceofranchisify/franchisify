import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

// ✅ Import images from `src/assets/images/`
import shafi from "../assets/images/IMG_3596.png";
import jino from "../assets/images/jino-removebg-preview.png";
import praveen from "../assets/images/praveen-removebg-preview.png";

// ✅ Team Members Data
const teamMembers = [
  {
    name: "Shafi Shoukath",
    role: "Chairman",
    image: shafi,
  },
  {
    name: "Jino Joseph",
    role: "Chief Executive Officer (CEO)",
    image: jino,
  },
  {
    name: "Praveen Kumar",
    role: "Franchise Development Manager (FDM)",
    image: praveen,
  },
];

// ✅ Animation Variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Team = () => {
  return (
    <section className="relative bg-gradient-to-r bg-[#fff] py-20 px-6">
      <div className="container mx-auto text-center">
        {/* ✅ Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-blue"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Team
        </motion.h2>

        <motion.p
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Meet our dedicated team of professionals committed to excellence and
          innovation.
        </motion.p>

        {/* ✅ Team Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 py-10">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-r from-[#83C4E3] to-[#5A9EC2] shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 flex flex-col items-center text-center p-6 rounded-xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* ✅ Member Image */}
              <div className="relative object-cover w-40 h-60 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ✅ Member Name & Role */}
              <h4 className="mt-4 text-2xl font-bold text-white">
                {member.name}
              </h4>
              <p className="text-white font-medium mt-1">{member.role}</p>

              {/* ✅ Social Media Icons */}
              <div className="flex gap-4 mt-3 text-white">
                <a href="#" className="hover:text-blue-600">
                  <FaFacebookF size={24} />
                </a>
                <a href="#" className="hover:text-pink-600">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="hover:text-blue-700">
                  <FaLinkedinIn size={24} />
                </a>
                <a href="#" className="hover:text-black">
                  <FaTwitter size={24} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
