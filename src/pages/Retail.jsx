import React from "react";
import { Link } from "react-router-dom";
import zearash from "../assets/images/Zerash.jpg";
import retailfranchise from "../assets/images/retail.jpg";

const franchises = [
  {
    name: "Zerash",
    logo: zearash,
    investment: "₹30 - ₹50 Lakhs",
    sqft: "1000 - 2000 sq.ft",
  },
];

const Retail = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${retailfranchise})`,
        }}
      >
        <div className="absolute inset-0 bg-black/20 "></div>
        <h1 className="relative text-3xl md:text-4xl text-white font-bold font-serif drop-shadow-lg">
          Retail Franchises
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="p-4 bg-white shadow text-gray-700 text-sm">
        <Link to="/" className="hover:text-orange-500 font-medium">Home</Link>
        <span className="mx-1"> / </span>
        <span className="font-semibold">Retail</span>
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

export default Retail;
