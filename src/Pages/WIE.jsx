import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import wieLogo from "../assets/wie_logo.png";
import "./SocietiesPage.css";

const WIE = () => {
  return (
    <>
      <Navbar variant="blue" />

      <div className="society-page">
        <div className="society-header">
          <img src={wieLogo} alt="WIE Logo" className="society-logo" />
          <h1>IEEE PU - Women in Engineering (WIE)</h1>
          <p>
            IEEE WIE inspires, engages, and advances women in engineering
            through events, mentorship, and global connections. We are committed
            to empowering the next generation of women leaders in STEM.
          </p>
        </div>

        <div className="society-content container">
          <h2>Our Vision</h2>
          <p>
            Creating a collaborative space where gender diversity fuels
            innovation and excellence in engineering at Premier University.
          </p>

          <h2>Programs & Activities</h2>
          <ul>
            <li>WIE TechTalks: Conversations with women leaders in tech</li>
            <li>Mentorship Circle: Senior guidance for junior students</li>
            <li>STEM Outreach: Promoting STEM to high school girls</li>
          </ul>

          <h2>Join Our Sisterhood</h2>
          <p>
            Be a part of something bigger. IEEE WIE welcomes all students who
            are passionate about equity, diversity, and engineering excellence.
          </p>
        </div>
      </div>
    </>
  );
};

export default WIE;
