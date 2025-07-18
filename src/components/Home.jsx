import React, { useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Vision from "./Vision";
import Societies from "./Societies";
import Activities from "./Activities";
import Achievements from "./Achievements";
import Events from "./Events";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Events />
      <Societies />
      <Activities />
      <Achievements />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
