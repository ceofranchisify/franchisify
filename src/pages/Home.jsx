import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Team from "../components/Team";
import ChatBot from "../pages/Chatbot";
import WhyFranchisify from "../pages/WhyChooseus";
import About from "./About";
import IndustryGrid from "./IndustryGrid";

const Home = () => {
  return (
    <div>
      <Hero />
      <About /> {/* Make sure this component wraps its content in a <section id="about"> */}
      <IndustryGrid />
      <WhyFranchisify />
      <Services />
      <Team />
      <ChatBot />
    </div>
  );
};

export default Home;
