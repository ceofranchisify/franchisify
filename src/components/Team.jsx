import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// ✅ Import images from `src/assets/images/`
import shafi from "../assets/images/IMG_3596.png";
import jino from "../assets/images/jino-removebg-preview.png";
import praveen from "../assets/images/praveen-removebg-preview.png";
import jithin from "../assets/images/jithin.png";
import ashwath from "../assets/images/ashwath.png";

// ✅ Team Members Data
const teamMembers = [
  { name: "Shafi Shoukath", role: "Chairman", image: shafi },
  { name: "Jino Joseph", role: "Chief Executive Officer (CEO)", image: jino },
  { name: "Praveen Kumar", role: "Franchise Development Manager (FDM)", image: praveen },
  { name: "Jithin Sivadas", role: "Brand Onboarding Manager(BOM)", image: jithin },
  { name: "Ashwath E", role: "Business Consultant Manager(BCM)", image: ashwath }
];

// ✅ Animation Variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const containerVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 }
  }
};

const Team = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-center text-[#07293d] mb-12 flex justify-center items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Team
        </motion.h2>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-[#07293d] rounded-lg shadow-lg overflow-hidden p-6 flex flex-col items-center transition-all w-full h-[450px]"
            >
              {/* Profile Image */}
              <div className="w-full h-60 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-md"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
                />
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-semibold text-white text-center">{member.name}</h3>
              <p className="text-gray-300 text-center">{member.role}</p>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-white hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={22} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-white hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={22} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-white hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={22} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-white hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={22} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
