import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./CS.css";

const csLogo =
  "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691512/cs_logo_tswsbw.png";
const cs_1 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752760610/CS_1_ve7ec2.png",
  cs_2 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691406/demo_dinydt.png",
  cs_3 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752760612/CS_3_a0rte0.png",
  cs_4 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752760611/CS_4_wxtucf.png",
  cs_5 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752772827/CS_5_yihcwo.png",
  cs_6 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752760614/CS_6_wwqqnj.png",
  cs_7 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691406/demo_dinydt.png",
  cs_8 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752760611/CS_8_hjo2vm.png";

const CS = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { number: "2020", label: "Founded" },
    { number: "100+", label: "Active Members" },
    { number: "25+", label: "Events Hosted" },
    { number: "100%", label: "Innovation" },
  ];

  const teamMembers = [
    {
      name: "MD AZMAYEN",
      position: "CHAIR, IEEE CS PU 2025",
      image: cs_1,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "RAYANUL KADER CHOWDHURY ABID",
      position: "VICE-CHAIR (ACTIVITY), IEEE CS PU 2025",
      image: cs_2,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "MD MASHRAUUL ISLAM RAFI",
      position: "VICE-CHAIR (TECHNICAL), IEEE CS PU 2025",
      image: cs_3,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "SAYEED IBNE SAIF",
      position: "SECRETARY, IEEE CS PU 2025",
      image: cs_4,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "MOHAMMOD HAMED HASAN",
      position: "JOINT SECRETARY, IEEE CS PU 2025",
      image: cs_5,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "ARNAB SHIKDER",
      position: "TREASURER, IEEE CS PU 2025",
      image: cs_6,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "MOHAMMED TOWHIDUL ISLAM",
      position: "ORGANIZING SECRETARY, IEEE CS PU 2025",
      image: cs_7,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "ANINDITA BARUA",
      position: "SOCIAL MEDIA & GRAPHICS COORDINATOR, IEEE CS PU 2025",
      image: cs_8,
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
    <div className="cs-page">
      <Navbar variant="cs" />

      {/* Hero Section */}
      <section className="cs-hero">
        <div className="cs-hero-background">
          <div className="cs-floating-elements">
            <div className="cs-circle cs-circle-1"></div>
            <div className="cs-circle cs-circle-2"></div>
            <div className="cs-circle cs-circle-3"></div>
          </div>
        </div>

        <div className="cs-hero-content">
          <div className="cs-hero-logo">
            <img src={csLogo} alt="IEEE CS PU Logo" className="cs-logo-main" />
          </div>

          <div className="cs-hero-text">
            <h1 className="cs-main-title">
              <span className="cs-title-line">Computer</span>
              <span className="cs-title-line cs-title-emphasis">Society</span>
            </h1>
            <p className="cs-hero-subtitle">IEEE PU Student Branch Chapter</p>
            <div className="cs-hero-tagline">
              <span className="cs-tagline-text">
                Innovating • Computing • Leading
              </span>
            </div>
          </div>
        </div>

        <div className="cs-scroll-indicator">
          <div className="cs-scroll-line"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="cs-stats">
        <div className="container">
          <div className="cs-stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`cs-stat-item ${
                  index === currentStat ? "cs-stat-active" : ""
                }`}
              >
                <div className="cs-stat-number">{stat.number}</div>
                <div className="cs-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="cs-mission">
        <div className="container">
          <div className="cs-mission-content">
            <div className="cs-mission-text">
              <h2 className="cs-section-title">Our Mission</h2>
              <p className="cs-mission-description">
                The IEEE PU CS chapter empowers students to explore cutting-edge
                technologies in computing, AI, cybersecurity, and software
                development through workshops, contests, and hands-on learning.
                We create an ecosystem of continuous learning, innovation, and
                collaboration in the computing field for Premier University
                students.
              </p>
              <div className="cs-mission-highlights">
                <div className="cs-highlight">
                  <div className="cs-highlight-icon">⚡</div>
                  <span>CodeWar Hackathons</span>
                </div>
                <div className="cs-highlight">
                  <div className="cs-highlight-icon">🤖</div>
                  <span>AI & ML Workshops</span>
                </div>
                <div className="cs-highlight">
                  <div className="cs-highlight-icon">🏗️</div>
                  <span>System Design Bootcamps</span>
                </div>
              </div>
            </div>
            <div className="cs-mission-visual">
              <div className="cs-geometric-shape">
                <div className="cs-shape-inner">
                  <img
                    src={csLogo}
                    alt="IEEE CS Logo"
                    className="cs-shape-logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="cs-team">
        <div className="container">
          <div className="cs-team-header">
            <h2 className="cs-team-section-title">
              Meet <span>Our Team</span>
            </h2>
            <p className="cs-team-subtitle">
              The innovative leaders driving our computing excellence
            </p>
          </div>
          <div className="cs-team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="cs-team-card">
                <div className="cs-team-image-container">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="cs-team-image"
                  />
                  <div className="cs-team-overlay">
                    <div className="cs-team-social">
                      <div className="cs-social-icon">
                        <a
                          href={member.facebook}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </div>
                      <div className="cs-social-icon">
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
                <div className="cs-team-info">
                  <h3 className="cs-team-name">{member.name}</h3>
                  <p className="cs-team-position">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer variant="cs" />
      <ScrollToTop variant="cs" />
    </div>
  );
};

export default CS;
