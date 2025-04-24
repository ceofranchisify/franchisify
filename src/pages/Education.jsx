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
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${educationfranchise})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 "></div>
        <h1 className="relative text-3xl md:text-4xl text-white font-bold drop-shadow-lg">
          Education Franchises
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="p-4 bg-white shadow text-gray-700 text-sm">
        <Link to="/" className="hover:text-orange-500 font-medium">Home</Link>
        <span className="mx-1"> / </span>
        <span className="font-semibold">Education</span>
      </div>

      {/* Franchise Cards */}
      <div className="p-6 grid gap-4 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {franchises.map((item, index) => (
          <Link to="/contact" key={index} className="flex justify-center">
            <div className="w-[230px] bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] rounded-xl shadow-md overflow-hidden transform transition hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <img
                src={item.logo}
                alt={item.name}
                className="w-full h-28 object-contain p-3 bg-gray-100"
              />
              <div className="p-3 text-center text-white">
                <h3 className="text-base font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm">
                  <span className="font-medium">Investment:</span> {item.investment}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Area:</span> {item.sqft}
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
