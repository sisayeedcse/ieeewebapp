import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./RAS.css";

const rasLogo =
  "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691509/ras_logo_lxbqcd.png";
const demoImg =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691406/demo_dinydt.png",
  ras_2 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691406/demo_dinydt.png",
  ras_6 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752830867/RAS_6_blmah1.png",
  ras_7 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752830868/RAS_7_qcevze.png",
  ras_8 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752830868/RAS_8_gugltn.png";

const RAS = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { number: "2023", label: "Founded" },
    { number: "45+", label: "Active Members" },
    { number: "12+", label: "Robot Projects" },
    { number: "100%", label: "Innovation" },
  ];

  const teamMembers = [
    {
      name: "SHOVON DAS",
      position: "CHAIR, IEEE PU RAS 2025",
      image: demoImg,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "FAHMIDA SULTANA",
      position: "VICE-CHAIR (ACTIVITY), IEEE PU RAS 2025",
      image: ras_2,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "VICKY NANDI",
      position: "VICE-CHAIR (TECHNICAL), IEEE PU RAS 2025",
      image: demoImg,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "ANUP DIPTA",
      position: "SECRETARY, IEEE PU RAS 2025",
      image: demoImg,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "ARNOB MAZUMDAR",
      position: "JOINT SECRETARY, IEEE PU RAS 2025",
      image: demoImg,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "TASNIA CHOWDHRY",
      position: "TREASURER, IEEE PU RAS 2025",
      image: ras_6,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "CHINMAY BARUA NOBO",
      position: "ORGANIZING SECRETARY, IEEE PU RAS 2025",
      image: ras_7,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "MUBARRAT E ISHMAM",
      position: "SOCIAL MEDIA & GRAPHICS COORDINATOR, IEEE PU RAS 2025",
      image: ras_8,
      facebook: "#",
      linkedin: "#",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ras-page">
      <Navbar variant="ras" />

      {/* Hero Section */}
      <section className="ras-hero">
        <div className="ras-hero-background">
          <div className="ras-floating-elements">
            <div className="ras-circle ras-circle-1"></div>
            <div className="ras-circle ras-circle-2"></div>
            <div className="ras-circle ras-circle-3"></div>
          </div>
        </div>

        <div className="ras-hero-content">
          <div className="ras-hero-logo">
            <img
              src={rasLogo}
              alt="IEEE RAS PU Logo"
              className="ras-logo-main"
            />
          </div>

          <div className="ras-hero-text">
            <h1 className="ras-main-title">
              <span className="ras-title-line">Robotics &</span>
              <span className="ras-title-line ras-title-emphasis">
                Automation Society
              </span>
            </h1>
            <p className="ras-hero-subtitle">
              IEEE PU Student Branch Technical Society
            </p>
            <div className="ras-hero-tagline">
              <span className="ras-tagline-text">
                Innovating • Building • Programming
              </span>
            </div>
          </div>
        </div>

        <div className="ras-scroll-indicator">
          <div className="ras-scroll-line"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="ras-stats">
        <div className="container">
          <div className="ras-stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`ras-stat-item ${
                  index === currentStat ? "ras-stat-active" : ""
                }`}
              >
                <div className="ras-stat-number">{stat.number}</div>
                <div className="ras-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="ras-mission">
        <div className="container">
          <div className="ras-mission-content">
            <div className="ras-mission-text">
              <h2 className="ras-section-title">Our Mission</h2>
              <p className="ras-mission-description">
                At the forefront of robotics innovation, IEEE RAS at Premier
                University empowers students to design, build, and program
                intelligent systems through collaborative competitions and
                cutting-edge research. We create a passionate community where
                future engineers develop revolutionary robotics solutions.
              </p>
              <div className="ras-mission-highlights">
                <div className="ras-highlight">
                  <div className="ras-highlight-icon">🤖</div>
                  <span>Robotics Development</span>
                </div>
                <div className="ras-highlight">
                  <div className="ras-highlight-icon">⚙️</div>
                  <span>Automation Engineering</span>
                </div>
                <div className="ras-highlight">
                  <div className="ras-highlight-icon">🔬</div>
                  <span>Research Innovation</span>
                </div>
              </div>
            </div>
            <div className="ras-mission-visual">
              <div className="ras-geometric-shape">
                <div className="ras-shape-inner">
                  <img
                    src={rasLogo}
                    alt="IEEE RAS Logo"
                    className="ras-shape-logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="ras-team">
        <div className="container">
          <div className="ras-team-header">
            <h2 className="ras-team-section-title">
              Meet <span>Our Team</span>
            </h2>
            <p className="ras-team-subtitle">
              The innovative minds driving robotics excellence forward
            </p>
          </div>
          <div className="ras-team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="ras-team-card">
                <div className="ras-team-image-container">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="ras-team-image"
                  />
                  <div className="ras-team-overlay">
                    <div className="ras-team-social">
                      <div className="ras-social-icon">
                        <a
                          href={member.facebook}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </div>
                      <div className="ras-social-icon">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ras-team-info">
                  <h3 className="ras-team-name">{member.name}</h3>
                  <p className="ras-team-position">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer variant="ras" />
      <ScrollToTop variant="ras" />
    </div>
  );
};

export default RAS;
