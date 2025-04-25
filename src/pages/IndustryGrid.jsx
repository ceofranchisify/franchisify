// src/components/IndustryGrid.jsx
import React from "react";
import { FaStore, FaWalking, FaSpa, FaGem, FaUtensils, FaBicycle, FaBook, FaCar,FaHardHat } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const industries = [
  { icon: <FaUtensils size={50} />, label: "Restaurant", route: "/restaurant" },
  { icon: <FaBook size={50} />, label: "Education", route: "/education" },
  { icon: <FaStore size={50} />, label: "Retail", route: "/retail" },
  { icon: <FaWalking size={50} />, label: "Gym" },
  { icon: <FaSpa size={50} />, label: "Wellness" },
  { icon: <FaGem size={50} />, label: "Jewelry" },
  { icon: <FaBicycle size={50} />, label: "Sports" },
  { icon: <FaCar size={50} />, label: "Auto" },
  { icon: <FaHardHat size={50} />, label: "Construction", route: "/construction" }, // <-- New item
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
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Extensive Network of Brands & Industries to choose from
      </h2>
      <div className="w-24 h-1 bg-[#fbbf24] mx-auto my-4"></div>

      <button className="mt-4 bg-[#fbbf24] hover:bg-[#fbbf24] text-white font-semibold py-2 px-6 rounded-full transition-all">
        View all →
      </button>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {industries.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item.route)}
            className={`flex flex-col items-center text-gray-700 hover:text-orange-500 transition cursor-${item.route ? "pointer" : "default"}`}
          >
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
