import React from "react";
import { Link } from "react-router-dom";
import velby from "../assets/images/Velby logo.png";
import wellness from "../assets/images/wellness.jpg";

const franchises = [
  {
    name: "Velby",
    logo: velby,
    tiers: [
      {
        title: "Tier 1 (Metro)",
        investment: "₹33L - ₹38L",
        area: "1000 sq ft+",
      },
      {
        title: "Tier 2 (Major)",
        investment: "₹23L - ₹28L",
        area: "800 sq ft+",
      },
      {
        title: "Tier 3 (Growing)",
        investment: "₹15L - ₹20L",
        area: "500 sq ft+",
      },
      {
        title: "Tier 4 (Small)",
        investment: "₹12L - ₹17L",
        area: "300 sq ft+",
      },
    ],
    masterFranchise: [
      {
        title: "State level",
        investment: "₹70L - ₹95L",
        area: "1000 sq ft",
      },
      {
        title: "Zonal level",
        investment: "₹1.75Cr - ₹1.96Cr",
        area: "1000 sq ft",
      },
    ],
  },
];

const Wellness = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${wellness})`,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <h1 className="relative text-3xl md:text-4xl text-white font-bold font-serif drop-shadow-lg">
          Wellness Franchises
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="p-4 bg-white shadow text-gray-700 text-sm">
        <Link to="/" className="hover:text-orange-500 font-medium">
          Home
        </Link>
        <span className="mx-1"> / </span>
        <span className="font-semibold">Retail</span>
      </div>

      {/* Franchise Cards */}
      <div className="p-6 grid gap-4 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {franchises.map((item, index) => (
          <Link to="/contact" key={index} className="flex justify-center">
            <div className="relative group w-[260px] rounded-xl cursor-pointer">
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
                  <h3 className="text-base font-semibold mb-2">{item.name}</h3>

                  {/* Show Tier Information */}
                  {item.tiers.map((tier, idx) => (
                    <div key={idx} className="text-xs mb-1">
                      <p className="font-semibold">{tier.title}</p>
                      <p>Investment: {tier.investment}</p>
                      <p>Area: {tier.area}</p>
                    </div>
                  ))}

                  {/* Show Master Franchise Info */}
                  <div className="mt-2">
                    <p className="font-semibold text-sm underline mb-1">Master Franchise</p>
                    {item.masterFranchise.map((master, idx) => (
                      <div key={idx} className="text-xs">
                        <p className="font-semibold">{master.title}</p>
                        <p>Investment: {master.investment}</p>
                        <p>Area: {master.area}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Wellness;
