import React, { useState } from "react";
import { Link } from "react-router-dom";
import velby from "../assets/images/Velby logo.png";
import wellness from "../assets/images/wellness.jpg";

const franchises = [
  {
    name: "Velby",
    logo: velby,
    rating: "4.5",
    description:
      "At Velby, we blend innovation with care to build a future-ready healthcare system. Our AI-powered platform delivers preventive care, smart diagnostics, and access to global healthcare—all under one digital umbrella. Join us as a Velby Franchise Partner and shape a purposeful business in a fast-growing sector",
    model: "Retail & Online",
    origin: "Kozhikode Kerala",
    year: "2024",
    tierInvestments: {
      Tier1: "₹33L - ₹38L",
      Tier2: "₹23L - ₹28L",
      Tier3: "₹12L - ₹20L",
      Tier4: "₹10L - ₹17L",
    },
    masterFranchise: {
      State: "₹70L - ₹95L",
      Zonal: "₹1.75Cr - ₹1.96Cr",
    },
  },
];

const Wellness = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
        <span className="font-semibold">Wellness</span>
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
                  {item.rating} Google Ratings
                </span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  Verified Brand
                </span>
              </div>
              <p className="mt-2">{item.description?.slice(0, 100)}...</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-3 text-gray-600 text-xs">
                <div>
                  <strong>Model:</strong> {item.model}
                </div>
                <div>
                  <strong>Brand Origin:</strong> {item.origin}
                </div>
                <div>
                  <strong>Est. Year:</strong> {item.year}
                </div>
              </div>

              {/* Expanded Details */}
              {expandedIndex === index && (
                <div className="bg-gray-100 p-3 rounded mt-2 text-xs">
                  <p>{item.description}</p>

                  {/* Tier Investment Details */}
                  <div className="mt-4 text-gray-700">
                    <h3 className="font-semibold mb-1">Tier Investment:</h3>
                    <ul className="list-disc ml-5 space-y-1">
                      <li><strong>Tier 1 Metro:</strong> {item.tierInvestments?.Tier1}</li>
                      <li><strong>Tier 2 Metro:</strong> {item.tierInvestments?.Tier2}</li>
                      <li><strong>Tier 3:</strong> {item.tierInvestments?.Tier3}</li>
                      <li><strong>Tier 4:</strong> {item.tierInvestments?.Tier4}</li>
                    </ul>
                  </div>

                  {/* Master Franchise Details */}
                  <div className="mt-4 text-gray-700">
                    <h3 className="font-semibold mb-1">Master Franchise Options:</h3>
                    <ul className="list-disc ml-5 space-y-1">
                      <li><strong>State Level:</strong> {item.masterFranchise?.State}</li>
                      <li><strong>Zonal Level:</strong> {item.masterFranchise?.Zonal}</li>
                    </ul>
                  </div>

                  <button
                    onClick={() => toggleDescription(index)}
                    className="text-red-500 text-xs mt-4 underline"
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

export default Wellness;
