import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SocietyEvents from "../components/SocietyEvents";
import { wieData } from "../data/wieData";
import "./WIE.css";

const wieLogo =
  "https://res.cloudinary.com/dknflcbt1/image/upload/v1759670627/WIE_LOGO_TRANS_bdfbia.png";

const WIE = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  // Get available years from wieData dynamically
  const availableYears = Object.keys(wieData)
    .map((year) => parseInt(year))
    .sort((a, b) => b - a); // Sort in descending order (newest first)

  // Get year from URL params, default to latest available year if not provided
  const { year } = useParams();
  const navigate = useNavigate();
  const selectedYear = year ? parseInt(year) : availableYears[0] || 2025;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle year change from dropdown
  const handleYearChange = (event) => {
    const newYear = event.target.value;
    navigate(`/wie/${newYear}`);
  };

  // Get team members for the selected year from imported data
  const getCurrentTeamMembers = () => {
    return wieData[selectedYear] || [];
  };

  const stats = [
    { number: "2024", label: "Founded" },
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

      {/* Social Section */}
      <section className="wie-social">
        <div className="wie-social-container">
          <div className="wie-social-header">
            <h2 className="wie-social-title">Connect With Us</h2>
            <p className="wie-social-subtitle">
              Join our empowering community and stay connected with inspiring
              women in engineering
            </p>
          </div>

          <div className="wie-social-content">
            <div className="wie-social-platform">
              <a
                href="https://www.facebook.com/IEEE.PU.WIE"
                target="_blank"
                rel="noreferrer"
                className="wie-social-button wie-social-facebook"
              >
                <i className="fab fa-facebook-f wie-social-icon"></i>
                <div className="wie-social-text">
                  <span className="wie-social-label">Follow us on</span>
                  <span className="wie-social-name">Facebook</span>
                </div>
              </a>
            </div>

            <div className="wie-social-platform">
              <a
                href="https://www.linkedin.com/company/ieee-premier-university-student-branch-wie-affinity-group"
                target="_blank"
                rel="noreferrer"
                className="wie-social-button wie-social-linkedin"
              >
                <i className="fab fa-linkedin-in wie-social-icon"></i>
                <div className="wie-social-text">
                  <span className="wie-social-label">Connect on</span>
                  <span className="wie-social-name">LinkedIn</span>
                </div>
              </a>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="wie-social-decoration"></div>
          <div className="wie-social-decoration"></div>
          <div className="wie-social-decoration"></div>
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
            <div className="wie-year-selector-container">
              <select
                className="wie-year-selector"
                value={selectedYear}
                onChange={handleYearChange}
                aria-label="Select WIE Committee Year"
              >
                {availableYears.map((year) => (
                  <option key={year} value={year}>
                    Executive Members {year}
                  </option>
                ))}
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
                        {member.facebook && (
                          <div className="wie-social-icon">
                            <a
                              href={member.facebook}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </div>
                        )}
                        {member.linkedin && (
                          <div className="wie-social-icon">
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </div>
                        )}
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
