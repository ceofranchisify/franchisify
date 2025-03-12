import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Team from "../components/Team";
import ChatBot from "../pages/Chatbot";
import WhyFranchisify from "../pages/WhyChooseus"; // Ensure correct casing
import Customers from "../pages/Ourcompanies"; // Ensure correct casing

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyFranchisify />
      <Services />
      <Customers />
      <Team />
      <ChatBot />
    </div>
  );
};

export default Home;
