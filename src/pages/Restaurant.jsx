import React from "react";
import { Link } from "react-router-dom";
import kovai from "../assets/images/Kovai.png";
import lnc from "../assets/images/LNC.jpg";
import TTP from "../assets/images/Teatalk.jpg";
import TTE from "../assets/images/TeaTalkExpress.jpg";
import KOKO from "../assets/images/kokoking.jpg";
import restaurant from "../assets/images/restaurant.jpg";
import CE from "../assets/images/crunchys.jpg";
import stevia from "../assets/images/stevia logo-1.png";
import Sizzlly from "../assets/images/Sizzly Snacks Logo Kit_page-0001.jpg";
import BBB from "../assets/images/Big Bang Bajji Logo Kit_page-0001.jpg";
import foodoor from "../assets/images/foodoor.jpg";
import so from "../assets/images/spized.jpg";
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
    investment: "₹8 Lakhs",
    sqft: "150 sqft",
  },
  {
    name: "Crunchy's Express",
    logo: CE,
    investment: "₹12 Lakhs",
    sqft: "200 sqft",
  },
  {
    name: "Crunchy's",
    logo: CE,
    investment: "₹26.5 Lakhs",
    sqft: "600 sqft",
  },
  {
    name: "Crunchy's Master Franchise",
    logo: CE,
    investment: "₹50-75 Lakhs",
    sqft: "200 sqft",
  },
  {
    name: "Stevia Delights",
    logo: stevia,
    investment: "₹25 Lakhs",
    sqft: "LWH: 4*2*7",
  },
  {
    name: "Sizzlly Snacks",
    logo: Sizzlly,
    investment: "Shop-in-Shop: ₹3.5 Lakhs | Street Model: ₹4 Lakhs",
    sqft: "LWH: 6*3*8",
  },
  {
    name: "Big Bang Bajji",
    logo: BBB,
    investment: "Shop-in-Shop: ₹3.5 Lakhs | Street Model: ₹4 Lakhs",
    sqft: "LWH: 6*3*8",
  },
  {
    name: "Foodoor",
    logo: foodoor,
    investment: "₹1 Lakhs",
    
  },
  {
    name: "Spized Organics",
    logo: so,
    investment: "Silver :₹8 Lakhs|  Gold :₹14 Lakhs | Diamond:₹26 Lakhs  ", 
  },
];

const Restaurant = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${restaurant})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative text-3xl md:text-4xl text-white font-bold drop-shadow-lg">
          Restaurant Franchises
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="p-4 bg-white shadow text-gray-700 text-sm">
        <Link to="/" className="hover:text-orange-500 font-medium">
          Home
        </Link>
        <span className="mx-1"> / </span>
        <span className="font-semibold">Restaurant</span>
      </div>

      {/* Franchise Cards */}
      <div className="px-4 py-8 grid gap-6 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {franchises.map((item, index) => (
          <Link to="/contact" key={index} className="flex justify-center">
            <div className="relative group w-[230px] rounded-xl cursor-pointer">
              {/* Card Border */}
              <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 group-hover:scale-105 transition-transform duration-300 z-0" />

              {/* Card Content */}
              <div className="relative z-10 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] rounded-xl shadow-md overflow-hidden">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-full h-28 object-contain p-3 bg-white"
                />
                <div className="p-3 text-center text-white">
                  <h3 className="text-base font-semibold">{item.name}</h3>
                  {item.investment && (
                    <p className="mt-2 text-sm">
                      <span className="font-medium">Investment:</span> {item.investment}
                    </p>
                  )}
                  {item.sqft && (
                    <p className="text-sm">
                      <span className="font-medium">Area:</span> {item.sqft}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
