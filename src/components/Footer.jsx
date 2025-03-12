import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/Franchisify.in 2 (3).jpg"; // ✅ Replace with your actual logo path

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#83C4E3] to-[#5A9EC2] text-white py-10 px-6">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* ✅ Left Column - Brand Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Franchisify Logo" className="w-32 mb-3" />  {/* ✅ Logo Image */}
          <h2 className="text-2xl font-bold text-black ">Franchisify</h2>
          <p className="text-black mt-2">Scaling Your Business with Confidence</p>
        </div>

        {/* ✅ Middle Column - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-black ">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="#" className="text-black hover:text-black transition">Help & Support</a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-black transition">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-black transition">Terms & Conditions</a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-black transition">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* ✅ Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold text-black ">Follow Us</h3>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="" className="text-black hover:text-black transition text-2xl"><FaInstagram /></a>
            <a href="#" className="text-black hover:text-black transition text-2xl"><FaFacebook /></a>
            <a href="#" className="text-black hover:text-black transition text-2xl"><FaYoutube /></a>
            <a href="#" className="text-black hover:text-black transition text-2xl"><FaLinkedin /></a>
          </div>
        </div>

        {/* ✅ Right Column - Location & Contact */}
        <div>
          <h3 className="text-xl font-semibold text-black">Our Office</h3>
          <p className="mt-3 flex items-center justify-center md:justify-start text-black">
            <FaMapMarkerAlt className="mr-2 text-lg" />
            Door No:84, Industrial Layout , 5TH Block , 3RD Cross Near Jyothi Nivas College, Koramangala, Bengaluru, Karnataka 560095
          </p>
          <p className="mt-3 flex items-center justify-center md:justify-start text-black">
            <FaPhone className="mr-2 text-lg" />
            +91 9035052280
          </p>
          <p className="mt-3 flex items-center justify-center md:justify-start text-black">
            <FaEnvelope className="mr-2 text-lg" />
            fdm@franchisify.in
          </p>
        </div>
      </div>

      {/* ✅ Copyright Section */}
      <div className="text-center text-black text-sm mt-10 border-t border-gray-500 pt-5">
        © {new Date().getFullYear()} Franchisify. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
