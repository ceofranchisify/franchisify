import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// ✅ Import images
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
  { name: "Jithin Sivadas", role: "Brand Onboarding Manager (BOM)", image: jithin },
  { name: "Ashwath E", role: "Business Consultant Manager (BCM)", image: ashwath },
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

const containerVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  },
};

const Team = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-[#07293d] mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our <span className="text-[#fbbf24]">Team</span>
        </motion.h2>

        {/* Team Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
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
              className="bg-[#07293d] rounded-2xl shadow-md flex flex-col items-center p-4 md:p-5 min-w-0 transition-all duration-300"
            >
              {/* Profile Image */}
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
                />
              </div>

              {/* Member Info */}
              <h3 className="text-lg md:text-xl font-semibold text-white text-center">{member.name}</h3>
              <p className="text-gray-300 text-sm md:text-base text-center mt-1">{member.role}</p>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4 justify-center">
                {[FaInstagram, FaTwitter, FaLinkedinIn, FaFacebookF].map((Icon, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-white hover:text-[#fbbf24] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={22} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
