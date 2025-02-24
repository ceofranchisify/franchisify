import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Team from "../components/Team";
import ChatBot from "./Chatbot";
import WhyFranchisify from "./WhyChooseus";

const Home = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show the button when scrolling down
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <Hero />
      <WhyFranchisify />
      <Services />
      <Team />
      <ChatBot />

      {/* Scroll to Top Button (Above ChatBot) */}
      {showScroll && (
        <button
          className="fixed bottom-20 right-6 z-50 bg-blue-600 hover:bg-blue-800 text-white p-3 rounded-full shadow-lg transition duration-300"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default Home;

