import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Team from "../components/Team";
import ChatBot from "./Chatbot";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Team />
      <ChatBot />
    </div>
  );
};

export default Home;


