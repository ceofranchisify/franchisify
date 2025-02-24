import React from "react";
import contactImage from "../assets/images/Franchisify.in (1)_page-0010.jpg"; // Ensure this path is correct

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-10 bg-gradient-to-b from-gray-500 to-blue-500">
      {/* Left Side - Image */}
      <div className="md:w-1/2 hidden md:block">
        <img src={contactImage} alt="Franchise Inquiry" className="w-full h-full object-cover rounded-lg" />
      </div>

      {/* Right Side - Contact Form */}
      <div className="md:w-1/2 w-full  p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Contact us</h2>
        <p className="text-white text-center mb-4">
          Fill in your details and we’ll get back to you with more information.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-white font-medium">Full Name</label>
            <input type="text" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-medium">Email</label>
              <input type="email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-white font-medium">Phone</label>
              <input type="tel" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+91 xxxxxxxxxx" />
            </div>
          </div>

          <div>
            <label className="block text-white font-medium">Location (City, State)</label>
            <input type="text" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Bangalore, India" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-medium">Investment Budget</label>
              <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Budget</option>
                <option value="5-10L">₹5-10 Lakhs</option>
                <option value="10-20L">₹10-20 Lakhs</option>
                <option value="20-50L">₹20-50 Lakhs</option>
                <option value="50L+">₹50 Lakhs & above</option>
              </select>
            </div>
            <div>
              <label className="block text-white font-medium">Business Type</label>
              <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Type</option>
                <option value="Retail">Retail</option>
                <option value="Food & Beverage">Food & Beverage</option>
                <option value="Education">Education</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-white font-medium">Message</label>
            <textarea className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Tell us about your business interest..."></textarea>
          </div>

          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold w-full hover:bg-blue-700 transition">
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;