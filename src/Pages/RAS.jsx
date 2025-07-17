import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./SocietiesPage.css";
const rasLogo =
  "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691509/ras_logo_lxbqcd.png";

const RAS = () => {
  return (
    <>
      <Navbar variant="blue" />

      <div className="society-page">
        <div className="society-header">
          <img src={rasLogo} alt="RAS Logo" className="society-logo" />
          <h1>IEEE PU - Robotics and Automation Society (RAS)</h1>
          <p>
            At the forefront of robotics innovation, IEEE RAS at PU empowers
            students to design, build, and program intelligent systems through
            collaborative competitions and research.
          </p>
        </div>

        <div className="society-content container">
          <h2>What We Do</h2>
          <p>
            We host annual robot battles, automation challenges, and offer
            microcontroller training, giving students real-world robotics
            experience.
          </p>

          <h2>Signature Events</h2>
          <ul>
            <li>RoboSoccer League</li>
            <li>Drone Programming Bootcamps</li>
            <li>Arduino & Raspberry Pi Labs</li>
          </ul>

          <h2>Innovate with Us</h2>
          <p>
            Whether you're a coder, builder, or visionary — there's a place for
            you in our robotics revolution.
          </p>
        </div>
      </div>
    </>
  );
};

export default RAS;
