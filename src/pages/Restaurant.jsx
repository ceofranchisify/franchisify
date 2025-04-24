import React from "react";
import { Link } from "react-router-dom";
import kovai from "../assets/images/Kovai.png";
import lnc from "../assets/images/LNC.jpg";
import TTP from "../assets/images/Teatalk.jpg";
import TTE from "../assets/images/TeaTalkExpress.jpg";
import KOKO from "../assets/images/kokoking.jpg"
import restaurant from "../assets/images/restaurant.jpg";

const franchises = [
  {
    name: "Kovai Rawuther Biriyani",
    logo: kovai,
    investment: "₹20 - ₹25 Lakhs",
    sqft: "1600-1800 sq.ft",
  },
  {
    name: "Lessincafe",
    logo: lnc,
    investment: "₹12 Lakhs",
    sqft: "200 Sqft",
  },
  {
    name: "Tea talk Budget Premium Cafe",
    logo: TTP,
    investment: "₹10-20 Lakhs",
    sqft: "200-300 sqft",
  },
  {
    name: "Tea talk express",
    logo: TTE,
    investment: "₹5 Lakhs",
    sqft: "200-250 sqft",
  },
  {
    name: "Kokoking",
    logo: KOKO,
    investment: "₹8Lakhs",
    sqft: "150 sqft",
  },
];

const Restaurant = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${restaurant})`,
        }}
      >
        <div className="absolute inset-0 bg-black/20 "></div>
        <h1 className="relative text-3xl md:text-4xl text-white font-bold drop-shadow-lg">
          Restaurant Franchises
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="p-4 bg-white shadow text-gray-700 text-sm">
        <Link to="/" className="hover:text-orange-500 font-medium">Home</Link>
        <span className="mx-1"> / </span>
        <span className="font-semibold">Restaurant</span>
      </div>

      {/* Franchise Cards */}
      <div className="p-6 grid gap-4 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {franchises.map((item, index) => (
          <Link to="/contact" key={index} className="flex justify-center">
            <div className="w-[230px] bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] rounded-xl shadow-md overflow-hidden transform transition hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <img
                src={item.logo}
                alt={item.name}
                className="w-full h-28 object-contain p-3 bg-white"
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

export default Restaurant;
