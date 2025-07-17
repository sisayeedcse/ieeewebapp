import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./SocietiesPage.css";
const pesLogo =
  "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691508/pes_logo_fhltfa.png";

const PES = () => {
  return (
    <>
      <Navbar variant="blue" />
      <div className="society-page">
        <div className="society-header">
          <img src={pesLogo} alt="PES Logo" className="society-logo" />
          <h1>IEEE PU - Power & Energy Society (PES)</h1>
          <p>
            IEEE PES drives innovation in power systems and energy
            sustainability. Our chapter at PU connects students to industry
            insights, renewable technologies, and smart grid research.
          </p>
        </div>

        <div className="society-content container">
          <h2>Our Goals</h2>
          <p>
            Foster awareness and skills in power generation, transmission, and
            renewable energy systems.
          </p>

          <h2>Highlighted Initiatives</h2>
          <ul>
            <li>Energy Innovation Day</li>
            <li>Industrial Tours: Power Plants</li>
            <li>Green Grid Research Series</li>
          </ul>

          <h2>Build the Future</h2>
          <p>Join PES to shape tomorrow’s energy solutions — today.</p>
        </div>
      </div>
    </>
  );
};

export default PES;
