import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Team from "../components/Team";
import ChatBot from "./Chatbot";
import WhyFranchisify from "./WhyChooseus";
import Customers from "./Ourcompanies";

const Home = () => {
  return (
    <div className="relative">
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

