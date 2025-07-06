import React from "react";
import { Link } from "react-router-dom";
import wie from "../assets/wie_logo.png";
import cs from "../assets/cs_logo.png";
import ras from "../assets/ras_logo.png";
import pes from "../assets/pes_logo.png";

const societies = [
  { image: cs, name: "CS", link: "/cs" },
  { image: pes, name: "PES", link: "/pes" },
  { image: ras, name: "RAS", link: "/ras" },
  { image: wie, name: "WIE", link: "/wie" },
];

const Societies = () => {
  return (
    <section id="societies" className="societies-section">
      <div className="container text-center">
        <h2 className="societies-title">
          Our IEEE <span>Societies & Technical Clubs</span>
        </h2>
        <p className="societies-desc mb-5">
          Join our specialized IEEE societies to explore your interests, build
          skills, and connect with like-minded peers in your field of interest.
        </p>

        <div className="row justify-content-center">
          {societies.map((society, index) => (
            <div className="col-12 col-sm-6 col-md-3 mb-4" key={index}>
              <Link to={society.link} className="society-logo-wrapper">
                <img
                  src={society.image}
                  alt={`IEEE ${society.name} Society`}
                  className="society-image img-fluid"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Societies;
