import React from "react";
import { Link } from "react-router-dom";

const wie =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691511/wie_logo_ootcui.png",
  cs =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691512/cs_logo_tswsbw.png",
  ras =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691509/ras_logo_lxbqcd.png",
  pes =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691508/pes_logo_fhltfa.png";

const societies = [
  { image: cs, name: "CS", link: "/cs" },
  { image: pes, name: "PES", link: "/pes" },
  { image: ras, name: "RAS", link: "/ras" },
  { image: wie, name: "WIE", link: "/wie" },
];

const Societies = () => {
  return (
    <section id="societies" className="societies-section">
      <div className="container">
        <div className="societies-header">
          <div className="societies-badge">
            <span className="badge-text">Community</span>
          </div>
          <h2 className="societies-title">
            Our IEEE{" "}
            <span className="gradient-text">Societies & Technical Clubs</span>
          </h2>
          <p className="societies-subtitle">
            Join our specialized IEEE societies to explore your interests, build
            skills, and connect with like-minded peers in your field of
            interest.
          </p>
        </div>

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
