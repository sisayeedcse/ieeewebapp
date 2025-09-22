import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SocietyEvents from "../components/SocietyEvents";
import { wieData } from "../data/wieData";
import "./WIE.css";

const wieLogo =
  "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691511/wie_logo_ootcui.png";

const WIE = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  // Get year from URL params, default to 2025 if not provided
  const { year } = useParams();
  const navigate = useNavigate();
  const selectedYear = year ? parseInt(year) : 2025;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle year change from dropdown
  // This function updates the URL to reflect the selected year
  const handleYearChange = (event) => {
    const newYear = event.target.value;
    navigate(`/wie/${newYear}`);
  };

  // Get team members for the selected year
  // This function returns the appropriate data based on the year selected
  const getCurrentTeamMembers = () => {
    return wieData[selectedYear] || [];
  };

  const stats = [
    { number: "2023", label: "Founded" },
    { number: "50+", label: "Active Members" },
    { number: "15+", label: "Events Hosted" },
    { number: "100%", label: "Empowerment" },
  ];

  // Get current team members based on selected year
  const teamMembers = getCurrentTeamMembers();

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wie-page">
      <Navbar variant="wie" />

      {/* Hero Section */}
      <section className="wie-hero">
        <div className="wie-hero-background">
          <div className="wie-floating-elements">
            <div className="wie-circle wie-circle-1"></div>
            <div className="wie-circle wie-circle-2"></div>
            <div className="wie-circle wie-circle-3"></div>
          </div>
        </div>

        <div className="wie-hero-content">
          <div className="wie-hero-logo">
            <img
              src={wieLogo}
              alt="IEEE WIE PU Logo"
              className="wie-logo-main"
            />
          </div>

          <div className="wie-hero-text">
            <h1 className="wie-main-title">
              <span className="wie-title-line">Women in</span>
              <span className="wie-title-line wie-title-emphasis">
                Engineering
              </span>
            </h1>
            <p className="wie-hero-subtitle">
              IEEE PU Student Branch Affinity Group
            </p>
            <div className="wie-hero-tagline">
              <span className="wie-tagline-text">
                Empowering • Inspiring • Leading
              </span>
            </div>
          </div>
        </div>

        <div className="wie-scroll-indicator">
          <div className="wie-scroll-line"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="wie-stats">
        <div className="container">
          <div className="wie-stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`wie-stat-item ${
                  index === currentStat ? "wie-stat-active" : ""
                }`}
              >
                <div className="wie-stat-number">{stat.number}</div>
                <div className="wie-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="wie-mission">
        <div className="container">
          <div className="wie-mission-content">
            <div className="wie-mission-text">
              <h2 className="wie-section-title">Our Mission</h2>
              <p className="wie-mission-description">
                We are dedicated to empowering women in engineering and
                technology at Premier University. Our vision is to create a
                passionate community where talented individuals utilize their
                skills to drive innovation and make a meaningful impact in the
                world of technology.
              </p>
              <div className="wie-mission-highlights">
                <div className="wie-highlight">
                  <div className="wie-highlight-icon">🎯</div>
                  <span>Professional Development</span>
                </div>
                <div className="wie-highlight">
                  <div className="wie-highlight-icon">🚀</div>
                  <span>Career Advancement</span>
                </div>
                <div className="wie-highlight">
                  <div className="wie-highlight-icon">💪</div>
                  <span>Skill Enhancement</span>
                </div>
              </div>
            </div>
            <div className="wie-mission-visual">
              <div className="wie-geometric-shape">
                <div className="wie-shape-inner">
                  <img
                    src={wieLogo}
                    alt="IEEE WIE Logo"
                    className="wie-shape-logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Society Events Section */}
      <SocietyEvents society="WIE" variant="wie" />

      {/* Team Section */}
      <section className="wie-team">
        <div className="container">
          <div className="wie-team-header">
            <h2 className="wie-team-section-title">
              Meet <span>Our Team</span>
            </h2>
            <p className="wie-team-subtitle">
              The passionate leaders driving our mission forward
            </p>

            {/* Year Selector Dropdown */}
            {/* This dropdown allows users to switch between different years */}
            <div className="wie-year-selector-container">
              <select
                className="wie-year-selector"
                value={selectedYear}
                onChange={handleYearChange}
                aria-label="Select WIE Committee Year"
              >
                <option value={2025}>Executive Members 2025</option>
                <option value={2026}>Executive Members 2026</option>
                <option value={2027}>Executive Members 2027</option>
              </select>
            </div>
          </div>

          {/* Show team members if available for the selected year */}
          {teamMembers.length > 0 ? (
            <div className="wie-team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="wie-team-card">
                  <div className="wie-team-image-container">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="wie-team-image"
                    />
                    <div className="wie-team-overlay">
                      <div className="wie-team-social">
                        <div className="wie-social-icon">
                          <a
                            href={member.facebook}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </div>
                        <div className="wie-social-icon">
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
                  <div className="wie-team-info">
                    <h3 className="wie-team-name">{member.name}</h3>
                    <p className="wie-team-position">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-members-message">
              <p>No committee members data available for {selectedYear}.</p>
            </div>
          )}
        </div>
      </section>

      <Footer variant="wie" />
      <ScrollToTop variant="wie" />
    </div>
  );
};

export default WIE;
