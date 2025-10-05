import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IeeePortal from "./Pages/IeeePortal";
import ExCom from "./Pages/ExComPage";
import Home from "./components/Home";
import AboutUs from "./Pages/AboutUs";
import WIE from "./Pages/WIE";
import CS from "./Pages/CS";
import RAS from "./Pages/RAS";
import PES from "./Pages/PES";
import Events from "./Pages/EventPage";
import Developer from "./Pages/Developer";
import Contact from "./Pages/ContactUs";
import AdvisorPanels2025 from "./Pages/AdvisorPanels2025";
import AlumniPanel2025 from "./Pages/AlumniPanel2025";
import EventInfo from "./Pages/EventInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/advisors" element={<AdvisorPanels2025 />} />
        <Route path="/alumni" element={<AlumniPanel2025 />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:eventId" element={<EventInfo />} />
        <Route path="/login" element={<Navigate to="/" replace />} />
        <Route path="/signup" element={<Navigate to="/" replace />} />
        <Route path="/portal" element={<IeeePortal />} />
        <Route path="/excom" element={<ExCom />} />
        <Route path="/excom2025" element={<ExCom />} />
        <Route path="/committee/*" element={<ExCom />} />
        <Route path="/wie" element={<WIE />} />
        <Route path="/wie/:year" element={<WIE />} />
        <Route path="/cs" element={<CS />} />
        <Route path="/cs/:year" element={<CS />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/ras" element={<RAS />} />
        <Route path="/ras/:year" element={<RAS />} />
        <Route path="/pes" element={<PES />} />
      </Routes>
    </>
  );
}

export default App;
