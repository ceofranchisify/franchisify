import React from "react";
import { Link } from "react-router-dom";
import Oxlo from "../assets/images/oxlo.jpg";
import digitalfranchise from "../assets/images/digital.jpg";



const franchises = [
  {
    name: "Oxlo Ads",
    logo: Oxlo,
    investment: "₹3.5 Lakhs",
    
  },
  
];

const Digital = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <div
        className="h-80 bg-cover backdrop-blur-3xl bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${digitalfranchise})`,
        }}
      >
        <div className="absolute inset-0 bg-black/20 "></div>
        <h1 className="relative text-3xl md:text-4xl text-white font-bold font-serif drop-shadow-lg">
          Digital Marketing Franchises
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="p-4 bg-white shadow text-gray-700 text-sm">
        <Link to="/" className="hover:text-orange-500 font-medium">Home</Link>
        <span className="mx-1"> / </span>
        <span className="font-semibold">Digital Marketing</span>
      </div>

      {/* Franchise Cards */}
      <div className="p-6 grid gap-4 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {franchises.map((item, index) => (
          <Link to="/contact" key={index} className="flex justify-center">
            <div className="relative group w-[230px] rounded-xl cursor-pointer">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-border-spin group-hover:scale-105 transition-transform duration-300 z-0" />
              
              {/* Card Content */}
              <div className="relative z-10 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] rounded-xl shadow-md overflow-hidden">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-full h-28 object-contain p-3 bg-white"
                />
                <div className="p-3 text-center text-white">
                  <h3 className="text-base font-semibold">{item.name}</h3>
                  <p className="mt-2 text-sm">
                    <span className="font-medium">Investment:</span>{" "}
                    {item.investment}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Area:</span> {item.sqft}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Digital;
