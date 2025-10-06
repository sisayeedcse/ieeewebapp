import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SocietyEvents from "../components/SocietyEvents";
import { pesData } from "../data/pesData.js";
import "./PES.css";

const pesLogo =
  "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691508/pes_logo_fhltfa.png";

const PES = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  // Year selection functionality
  const { year } = useParams();
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState(year || "2025");

  // Get committee data for selected year
  const currentCommitteeData = pesData[selectedYear] || [];

  // Handle year change
  const handleYearChange = (event) => {
    const newYear = event.target.value;
    setSelectedYear(newYear);
    navigate(`/pes/${newYear}`);
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
    { number: "150+", label: "Active Members" },
    { number: "40+", label: "Events Hosted" },
    { number: "100%", label: "Sustainability" },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pes-page">
      <Navbar variant="pes" />

      {/* Hero Section */}
      <section className="pes-hero">
        <div className="pes-hero-background">
          <div className="pes-floating-elements">
            <div className="pes-circle pes-circle-1"></div>
            <div className="pes-circle pes-circle-2"></div>
            <div className="pes-circle pes-circle-3"></div>
          </div>
        </div>

        <div className="pes-hero-content">
          <div className="pes-hero-logo">
            <img
              src={pesLogo}
              alt="IEEE PES PU Logo"
              className="pes-logo-main"
            />
          </div>

          <div className="pes-hero-text">
            <h1 className="pes-main-title">
              <span className="pes-title-line">Power & Energy</span>
              <span className="pes-title-line pes-title-emphasis">Society</span>
            </h1>
            <p className="pes-hero-subtitle">IEEE PU Student Branch Chapter</p>
            <div className="pes-hero-tagline">
              <span className="pes-tagline-text">
                Powering • Sustaining • Innovating
              </span>
            </div>
          </div>
        </div>

        <div className="pes-scroll-indicator">
          <div className="pes-scroll-line"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pes-stats">
        <div className="container">
          <div className="pes-stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`pes-stat-item ${
                  index === currentStat ? "pes-stat-active" : ""
                }`}
              >
                <div className="pes-stat-number">{stat.number}</div>
                <div className="pes-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="pes-mission">
        <div className="container">
          <div className="pes-mission-content">
            <div className="pes-mission-text">
              <h2 className="pes-section-title">Our Mission</h2>
              <p className="pes-mission-description">
                The IEEE PU PES chapter empowers students to explore sustainable
                energy solutions, renewable power systems, smart grids, and
                electrical engineering innovations. We foster learning through
                hands-on projects, technical workshops, and research initiatives
                that address global energy challenges and promote sustainable
                development for Premier University students.
              </p>
              <div className="pes-mission-highlights">
                <div className="pes-highlight">
                  <div className="pes-highlight-icon">⚡</div>
                  <span>Smart Grid Technologies</span>
                </div>
                <div className="pes-highlight">
                  <div className="pes-highlight-icon">🌱</div>
                  <span>Renewable Energy Systems</span>
                </div>
                <div className="pes-highlight">
                  <div className="pes-highlight-icon">🔋</div>
                  <span>Energy Storage Solutions</span>
                </div>
              </div>
            </div>
            <div className="pes-mission-visual">
              <div className="pes-geometric-shape">
                <div className="pes-shape-inner">
                  <img
                    src={pesLogo}
                    alt="IEEE PES Logo"
                    className="pes-shape-logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="pes-social">
        <div className="pes-social-container">
          <div className="pes-social-header">
            <h2 className="pes-social-title">Connect With Us</h2>
            <p className="pes-social-subtitle">
              Follow our journey and stay updated with the latest events,
              achievements, and opportunities
            </p>
          </div>

          <div className="pes-social-content">
            <div className="pes-social-platform">
              <a
                href="https://www.facebook.com/ieee.pes.pu"
                target="_blank"
                rel="noreferrer"
                className="pes-social-button pes-social-facebook"
              >
                <i className="fab fa-facebook-f pes-social-icon"></i>
                <div className="pes-social-text">
                  <span className="pes-social-label">Follow us on</span>
                  <span className="pes-social-name">Facebook</span>
                </div>
              </a>
            </div>

            <div className="pes-social-platform">
              <a
                href="https://www.linkedin.com/company/ieee-pes-pu"
                target="_blank"
                rel="noreferrer"
                className="pes-social-button pes-social-linkedin"
              >
                <i className="fab fa-linkedin-in pes-social-icon"></i>
                <div className="pes-social-text">
                  <span className="pes-social-label">Connect on</span>
                  <span className="pes-social-name">LinkedIn</span>
                </div>
              </a>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="pes-social-decoration"></div>
          <div className="pes-social-decoration"></div>
          <div className="pes-social-decoration"></div>
        </div>
      </section>

      {/* Society Events Section */}
      <SocietyEvents society="PES" variant="pes" />

      {/* Team Section */}
      <section className="pes-team">
        <div className="container">
          <div className="pes-team-header">
            <h2 className="pes-team-section-title">
              Meet <span>Our Team</span>
            </h2>
            <p className="pes-team-subtitle">
              The dedicated leaders driving our energy and sustainability
              excellence
            </p>
          </div>

          {/* Year Selector Dropdown */}
          <div className="pes-year-selector-container">
            <select
              className="pes-year-selector"
              value={selectedYear}
              onChange={handleYearChange}
            >
              <option value="2025">Executive Members 2025</option>
              <option value="2026">Executive Members 2026</option>
              <option value="2027">Executive Members 2027</option>
            </select>
          </div>
          {currentCommitteeData.length > 0 ? (
            <div className="pes-team-grid">
              {currentCommitteeData.map((member, index) => (
                <div key={index} className="pes-team-card">
                  <div className="pes-team-image-container">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="pes-team-image"
                    />
                    <div className="pes-team-overlay">
                      <div className="pes-team-social">
                        <div className="pes-social-icon">
                          <a
                            href={member.facebook}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </div>
                        <div className="pes-social-icon">
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
                  <div className="pes-team-info">
                    <h3 className="pes-team-name">{member.name}</h3>
                    <p className="pes-team-position">{member.position}</p>
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

      <Footer variant="pes" />
      <ScrollToTop variant="pes" />
    </div>
  );
};

export default PES;
