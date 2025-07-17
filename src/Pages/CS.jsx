import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./SocietiesPage.css";
const csLogo =
  "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691512/cs_logo_tswsbw.png";

const CS = () => {
  return (
    <>
      <Navbar variant="blue" />
      <div className="society-page">
        <div className="society-header">
          <img src={csLogo} alt="CS Logo" className="society-logo" />
          <h1>IEEE PU - Computer Society (CS)</h1>
          <p>
            The IEEE PU CS chapter empowers students to explore cutting-edge
            technologies in computing, AI, cybersecurity, and software
            development through workshops, contests, and hands-on learning.
          </p>
        </div>

        <div className="society-content container">
          <h2>Our Mission</h2>
          <p>
            To create an ecosystem of continuous learning, innovation, and
            collaboration in the computing field for Premier University
            students.
          </p>

          <h2>Activities</h2>
          <ul>
            <li>CodeWar Hackathons</li>
            <li>AI & ML Workshops</li>
            <li>System Design Bootcamps</li>
          </ul>

          <h2>Why Join?</h2>
          <p>
            Gain exposure to real-world software projects, develop your
            portfolio, and network with tech leaders globally through IEEE CS.
          </p>
        </div>
      </div>
    </>
  );
};

export default CS;
