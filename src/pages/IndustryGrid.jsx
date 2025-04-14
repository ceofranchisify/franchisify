// src/components/IndustryGrid.jsx
import React from "react";
import { FaStore, FaWalking, FaSpa, FaGem, FaUtensils, FaBicycle, FaBook, FaCar } from "react-icons/fa";

const industries = [
    { icon: <FaUtensils size={50} />, label: "Restaurant" },
    { icon: <FaBook size={50} />, label: "Education" },
  { icon: <FaStore size={50} />, label: "Retail" },
  { icon: <FaWalking size={50} />, label: "Gym" },
  { icon: <FaSpa size={50} />, label: "Wellness" },
  { icon: <FaGem size={50} />, label: "Jewelry" },
  
  { icon: <FaBicycle size={50} />, label: "Sports" },
  
  { icon: <FaCar size={50} />, label: "Auto" },
];

const IndustryGrid = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Extensive Network of Brands & Industries to choose from
      </h2>
      <div className="w-24 h-1 bg-[#fbbf24] mx-auto my-4"></div>

      <button className="mt-4 bg-[#fbbf24] hover:bg-[#fbbf24] text-white font-semibold py-2 px-6 rounded-full transition-all">
        View all →
      </button>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {industries.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-gray-700 hover:text-orange-500 transition">
            {item.icon}
            <p className="mt-3 text-lg font-semibold border-b-2 border-gray-200 hover:border-orange-500">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustryGrid;
