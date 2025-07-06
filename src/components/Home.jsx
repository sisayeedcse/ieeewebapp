import React from "react";
import Hero from "./Hero";
import About from "./About";
import Vision from "./Vision";
import Societies from "./Societies";
import Activities from "./Activities";
import Achievements from "./Achievements";
import Events from "./Events";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Societies />
      <Activities />
      <Achievements />
      <Events />
      <Footer />
    </>
  );
};

export default Home;
