import React, { useState } from "react";
import { Link } from "react-router-dom";
import Oxlo from "../assets/images/oxlo.jpg";
import digitalfranchise from "../assets/images/digital.jpg";

const franchises = [
  {
    name: "Oxlo Ads",
    logo: Oxlo,
    investment: "₹2.5 Lakhs",
    sqft: "150-200 sq ft",
    model: "Digital Marketing",
    franchisees: "1",
    origin: "THIRUVANATHAPURAM",
    year: "2023",
    description:
      "We have a large pool of talented professionals with profound expertise in improving your communication strategy through unique and effective solutions. We make your communication strategy more effective and productive. It helps you explore unmatched opportunities by engaging your target audiences. Digital signage, also known as electronic signage, is used to communicate with target audiences. Digital networks typically feature independently addressable screens, kiosks, video walls and LED walls. Digital media benefits location owners and advertisers alike in being able to engage customers and/or audiences and extend the reach and effectiveness of marketing messages",
  },
];

const Digital = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <div
        className="h-80 bg-cover backdrop-blur-3xl bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${digitalfranchise})`,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <h1 className="relative text-3xl md:text-4xl text-white font-bold font-serif drop-shadow-lg">
          Digital Marketing Franchises
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="p-4 bg-white shadow text-gray-700 text-sm">
        <Link to="/" className="hover:text-orange-500 font-medium">
          Home
        </Link>
        <span className="mx-1"> / </span>
        <span className="font-semibold">Digital Marketing</span>
      </div>

      {/* Franchise Cards */}
      <div className="px-4 py-8 space-y-6 max-w-6xl mx-auto">
        {franchises.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg border flex flex-col md:flex-row items-start md:items-center gap-4 p-4 relative"
          >
            {/* Logo */}
            <img
              src={item.logo}
              alt={item.name}
              className="w-24 h-24 object-contain rounded border bg-white"
            />

            {/* Info */}
            <div className="flex-1 space-y-1 text-sm text-gray-700">
              <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
              <div className="flex flex-wrap gap-2 items-center text-xs">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
                  4.5 Google Ratings
                </span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  Verified Brand
                </span>
              </div>
              <p className="mt-2">{item.description?.slice(0, 100)}...</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-3 text-gray-600 text-xs">
                <div>
                  <strong>Investment:</strong> {item.investment}
                </div>
                <div>
                  <strong>Space:</strong> {item.sqft}
                </div>
                <div>
                  <strong>Model:</strong> {item.model}
                </div>
                <div>
                  <strong>Franchisees:</strong> {item.franchisees}
                </div>
                <div>
                  <strong>Brand Origin:</strong> {item.origin}
                </div>
                <div>
                  <strong>Est. Year:</strong> {item.year}
                </div>
              </div>

              {/* Toggle Description */}
              {expandedIndex === index && (
                <div className="bg-gray-100 p-3 rounded mt-2 text-xs">
                  <p>{item.description}</p>
                  <button
                    onClick={() => toggleDescription(index)}
                    className="text-red-500 text-xs mt-2 underline"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="flex flex-col items-end justify-center ml-auto">
              <button
                onClick={() => toggleDescription(index)}
                className="text-sm text-blue-600 border border-blue-500 px-4 py-1 rounded hover:bg-blue-50"
              >
                {expandedIndex === index ? "Hide Details" : "View Details"}
              </button>
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 mt-2 rounded"
              >
                Contact Brand
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Digital;
