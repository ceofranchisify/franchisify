import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Team from "../components/Team";
import ChatBot from "../pages/Chatbot";
import WhyFranchisify from "../pages/WhyChooseus";
import About from "./About";
import IndustryGrid from "./IndustryGrid";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "about") {
      const el = document.getElementById("about");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
