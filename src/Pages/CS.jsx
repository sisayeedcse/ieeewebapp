import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SocietyEvents from "../components/SocietyEvents";
import { csData } from "../data/csData.js";
import "./CS.css";

const csLogo =
  "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691512/cs_logo_tswsbw.png";

const CS = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  // Year selection functionality
  const { year } = useParams();
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState(year || "2025");

  // Get committee data for selected year
  const currentCommitteeData = csData[selectedYear] || [];

  // Handle year change
  const handleYearChange = (event) => {
    const newYear = event.target.value;
    setSelectedYear(newYear);
    navigate(`/cs/${newYear}`);
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update selected year when URL parameter changes
  useEffect(() => {
    if (year && year !== selectedYear) {
      setSelectedYear(year);
    }
  }, [year, selectedYear]);

  const stats = [
    { number: "2025", label: "Founded" },
    { number: "100+", label: "Active Members" },
    { number: "25+", label: "Events Hosted" },
    { number: "100%", label: "Innovation" },
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

      {/* Social Section */}
      <section className="cs-social">
        <div className="cs-social-container">
          <div className="cs-social-header">
            <h2 className="cs-social-title">Connect With Us</h2>
            <p className="cs-social-subtitle">
              Follow our journey and stay updated with the latest events,
              achievements, and opportunities
            </p>
          </div>

          <div className="cs-social-content">
            <div className="cs-social-platform">
              <a
                href="https://www.facebook.com/ieee.cs.pu"
                target="_blank"
                rel="noreferrer"
                className="cs-social-button cs-social-facebook"
              >
                <i className="fab fa-facebook-f cs-social-icon"></i>
                <div className="cs-social-text">
                  <span className="cs-social-label">Follow us on</span>
                  <span className="cs-social-name">Facebook</span>
                </div>
              </a>
            </div>

            <div className="cs-social-platform">
              <a
                href="https://www.linkedin.com/company/ieee-cs-pu"
                target="_blank"
                rel="noreferrer"
                className="cs-social-button cs-social-linkedin"
              >
                <i className="fab fa-linkedin-in cs-social-icon"></i>
                <div className="cs-social-text">
                  <span className="cs-social-label">Connect on</span>
                  <span className="cs-social-name">LinkedIn</span>
                </div>
              </a>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="cs-social-decoration"></div>
          <div className="cs-social-decoration"></div>
          <div className="cs-social-decoration"></div>
        </div>
      </section>

      {/* Society Events Section */}
      <SocietyEvents society="CS" variant="cs" />

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

          {/* Year Selector Dropdown */}
          <div className="cs-year-selector-container">
            <select
              className="cs-year-selector"
              value={selectedYear}
              onChange={handleYearChange}
            >
              <option value="2025">Executive Members 2025</option>
              <option value="2026">Executive Members 2026</option>
              <option value="2027">Executive Members 2027</option>
            </select>
          </div>
          {currentCommitteeData.length > 0 ? (
            <div className="cs-team-grid">
              {currentCommitteeData.map((member, index) => (
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
          ) : (
            <div className="no-members-message">
              <p>
                Committee information for {selectedYear} will be updated soon!
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer variant="cs" />
      <ScrollToTop variant="cs" />
    </div>
  );
};

export default CS;
