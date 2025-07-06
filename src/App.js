import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ExCom from "./Pages/ExCom2025";

import Home from "./components/Home";
import WIE from "./Pages/WIE";
import CS from "./Pages/CS";
import RAS from "./Pages/RAS";
import PES from "./Pages/PES";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excom" element={<ExCom />} />
        <Route path="/wie" element={<WIE />} />
        <Route path="/cs" element={<CS />} />
        <Route path="/ras" element={<RAS />} />
        <Route path="/pes" element={<PES />} />
      </Routes>
    </Router>
  );
}

export default App;
