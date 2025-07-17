import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IeeePortal from "./Pages/IeeePortal";
import ExCom from "./Pages/ExCom2025";
import Home from "./components/Home";
import AboutUs from "./Pages/AboutUs";
import WIE from "./Pages/WIE";
import CS from "./Pages/CS";
import RAS from "./Pages/RAS";
import PES from "./Pages/PES";
import Events from "./Pages/EventPage";
import Developer from "./Pages/Developer";
import Contact from "./Pages/ContactUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/portal" element={<IeeePortal />} />
        <Route path="/excom" element={<ExCom />} />
        <Route path="/wie" element={<WIE />} />
        <Route path="/cs" element={<CS />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/ras" element={<RAS />} />
        <Route path="/pes" element={<PES />} />
      </Routes>
    </>
  );
}

export default App;
