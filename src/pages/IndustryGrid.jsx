// src/components/IndustryGrid.jsx
import React from "react";
import { FaStore, FaWalking, FaSpa, FaGem, FaUtensils, FaBicycle, FaBook, FaCar, FaHardHat,FaBullhorn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const industries = [
  { icon: <FaUtensils size={50} />, label: "Restaurant", route: "/restaurant" },
  { icon: <FaBook size={50} />, label: "Education", route: "/education" },
  { icon: <FaStore size={50} />, label: "Retail", route: "/retail" },
  { icon: <FaHardHat size={50} />, label: "Construction", route: "/construction" },
  { icon: <FaWalking size={50} />, label: "Gym" },
  { icon: <FaSpa size={50} />, label: "Wellness" ,route:"/wellness"},
  { icon: <FaGem size={50} />, label: "Jewellery" },
  { icon: <FaBicycle size={50} />, label: "Sports" },
  { icon: <FaCar size={50} />, label: "Auto" },
  { icon: <FaBullhorn size={50} />, label: "Digital Marketing", route: "/digital" },
];

const IndustryGrid = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <section className="py-16 bg-white text-center">
      {/* Section Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 px-4">
        Extensive Network of Brands & Industries to Choose From
      </h2>
      <div className="w-24 h-1 bg-[#fbbf24] mx-auto my-4"></div>

      {/* View All Button */}
      <button className="mt-6 mb-10 bg-[#fbbf24] hover:bg-[#f59e0b] text-white font-semibold py-2 px-8 rounded-full transition-all duration-300">
        View all →
      </button>

      {/* Industry Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 md:px-10">
        {industries.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item.route)}
            className={`flex flex-col items-center p-4 rounded-xl transition-all ${
              item.route ? "cursor-pointer hover:shadow-lg hover:text-orange-500" : "cursor-default"
            }`}
          >
            {item.icon}
            <p className="mt-3 text-base md:text-lg font-semibold text-gray-700 border-b-2 border-transparent hover:border-orange-500">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustryGrid;
