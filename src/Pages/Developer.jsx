// src/Pages/Developer.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Developer.css";

const Azmayn =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691408/dev_1_kkecag.png",
  Sayeed =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691408/dev_2_wy06zx.png",
  Hamed =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752772874/dev_3_hv2yp4.png",
  Arnab =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691407/dev_5_pl6chd.png",
  Rafi =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691408/dev_4_jprzbf.png";

const developers = [
  {
    name: "Md. Azmayn",
    role: "Developer Instructor, Webmaster, IEEE PU SB & Chair, IEEE CS PU SB 2025",
    image: Azmayn,
    type: "Instructor",
    facebook: "https://www.facebook.com/azmayen.retike",
    linkedin: "https://www.linkedin.com/in/md-azmayen-a95263269/",
  },
  {
    name: "Sayeed Ibne Saif",
    role: "Frontend Developer, Additional Webmaster & Secretary, IEEE CS PU SB 2025",
    image: Sayeed,
    type: "Frontend",
    facebook: "https://www.facebook.com/S.I.Sayeed.official/",
    linkedin: "https://www.linkedin.com/in/sisayeedofficial/",
  },
  {
    name: "Hamed Hasan",
    role: "Frontend Developer & Joint Secretary, IEEE CS PU SB 2025",
    image: Hamed,
    type: "Frontend",
    facebook: "https://www.facebook.com/hamed.hasan.497550",
    linkedin: "#",
  },
  {
    name: "Mohammad Rafi",
    role: "Backend Developer & Vice-chair (Technical), IEEE CS PU SB 2025",
    image: Rafi,
    type: "Backend",
    facebook: "https://www.facebook.com/Muhammadrafi.2318",
    linkedin: "https://www.linkedin.com/in/md-mashruul-islam/",
  },
  {
    name: "Arnab Shikder",
    role: "Backend Developer & Treasurer, IEEE CS PU SB 2025",
    image: Arnab,
    type: "Backend",
    facebook: "https://www.facebook.com/arnabshikder24/",
    linkedin: "https://www.linkedin.com/in/arnabshikder/",
  },
];

const DeveloperCard = ({ dev }) => (
  <div className={`dev-showcard dev-${dev.type.toLowerCase()}`}>
    <div className="dev-show-inner">
      <div className="show-image">
        <img src={dev.image} alt={dev.name} />
      </div>
      <div className="show-content">
        <h4 className="show-name">{dev.name}</h4>
        <p className="show-role">{dev.role}</p>
        <div className="show-meta">
          <span className="dev-tag">{dev.type}</span>
          <div className="dev-socials">
            <a href={dev.facebook} target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href={dev.linkedin} target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Developer = () => {
  return (
    <>
      <Navbar variant="blue" />
      <div className="developer-page">
        <div className="container text-center">
          <div style={{ paddingTop: "100px" }}></div>
          <h1 className="developer-title">
            Meet Our <span>Developer Team</span>
          </h1>
          <p className="developer-subtitle">
            Get to know the passionate individuals behind the digital presence
            of IEEE Premier University Student Branch.
          </p>
          <hr
            style={{
              width: "100px",
              margin: "20px auto 40px",
              borderTop: "3px solid #1e3a8a",
            }}
          />

          <div className="developer-showcase new-layout">
            <div className="top-dev">
              <DeveloperCard dev={developers[0]} />
            </div>
            <div style={{ height: "40px" }}></div>
            <div className="bottom-dev">
              {developers.slice(1).map((dev, idx) => (
                <DeveloperCard key={idx + 1} dev={dev} />
              ))}
            </div>
            <div style={{ height: "90px" }}></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Developer;
