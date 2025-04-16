// src/components/Education.jsx
import React from "react";
import { Link } from "react-router-dom";
import sib from "../assets/images/SIB.jpg";
import educationfranchise from "../assets/images/education franchise.jpeg";
import ccafe from "../assets/images/careercafe.jpg";

const franchises = [
  {
    name: "Study In Bangalore",
    logo: sib,
    investment: "₹10 - ₹15 Lakhs",
    sqft: "800 - 1200 sq.ft",
  },
  {
    name: "Career Cafe",
    logo: ccafe,
    investment: "₹45 - ₹53 Lakhs",
    sqft: "2500 sq.ft",
  },
];

const Education = () => {
  return (
    <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] min-h-screen">
      {/* Hero Section */}
      <div
        className="h-96 bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${educationfranchise})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <h1 className="relative text-4xl md:text-5xl text-white font-bold drop-shadow-lg">
          Education Franchises
        </h1>  
      </div>

      {/* Breadcrumb */}
      <div className="p-4 bg-white shadow text-gray-700 text-sm">
        <Link to="/" className="hover:text-orange-500 font-medium">Home</Link> <span className="mx-1"> / </span>
        <span className="font-semibold">Education</span>
      </div>

      {/* Franchise Cards */}
      <div className="p-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {franchises.map((item, index) => (
          <Link to="/contact" key={index}>
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
              <img
                src={item.logo}
                alt={item.name}
                className="w-full h-48 object-contain p-4 bg-gray-100"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="mt-3 text-gray-600">
                  <strong className="text-gray-800">Investment:</strong> {item.investment}
                </p>
                <p className="text-gray-600">
                  <strong className="text-gray-800">Area:</strong> {item.sqft}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Education;
