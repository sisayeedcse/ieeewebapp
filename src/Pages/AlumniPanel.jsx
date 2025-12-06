// src/Pages/AlumniPanel.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import alumniData from "../data/alumniData";
import "./AlumniPanel.css";

const AlumniPanel = () => {
  // Get available years from alumniData dynamically
  const availableYears = Object.keys(alumniData)
    .map((year) => parseInt(year))
    .sort((a, b) => b - a); // Sort in descending order (newest first)

  // State to track which year is currently selected (default: 2025)
  const [selectedYear, setSelectedYear] = useState(2025);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get the alumni for the selected year from imported data
  const getCurrentAlumni = () => {
    return alumniData[selectedYear] || [];
  };

  // Handle year change from dropdown
  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  // Get current alumni based on selected year
  const currentAlumni = getCurrentAlumni();

  const renderAlumni = (alumniMember, index) => {
    return (
      <div className="alumni-card" key={index}>
        <div className="alumni-img-container">
          <img
            src={alumniMember.img}
            alt={alumniMember.name}
            className="alumni-img"
          />
          <div className="alumni-img-overlay"></div>
        </div>

        <div className="alumni-info">
          <h3 className="alumni-name">{alumniMember.name}</h3>
          <p className="alumni-title">{alumniMember.title}</p>
          <p className="alumni-position">{alumniMember.position}</p>
          <p className="alumni-department">{alumniMember.department}</p>

          <div className="alumni-contact">
            {alumniMember.linkedin && (
              <a
                href={alumniMember.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-icon"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            )}
            {alumniMember.facebook && (
              <a
                href={alumniMember.facebook}
                target="_blank"
                rel="noreferrer"
                className="contact-icon"
              >
                <i className="fab fa-facebook"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar variant="blue" />
      <section className="alumni-section">
        <div className="container">
          <h2>Alumni Advisory Panel {selectedYear}</h2>
          <p className="subtitle">
            Meet our distinguished alumni advisors who provide valuable guidance
            and mentorship, leveraging their experience to support the growth of
            IEEE Premier University Student Branch.
          </p>

          {/* Year Selector Dropdown */}
          <div className="year-selector-container">
            <select
              className="year-selector"
              value={selectedYear}
              onChange={handleYearChange}
              aria-label="Select Alumni Panel Year"
            >
              {availableYears.map((year) => (
                <option key={year} value={year}>
                  Alumni Panel {year}
                </option>
              ))}
            </select>
          </div>

          <div className="section-divider"></div>

          <div className="alumni-grid">
            {/* Show content only if there are alumni for the selected year */}
            {currentAlumni.length > 0 ? (
              <div className="alumni-row">
                {currentAlumni.map((alumniMember, index) =>
                  renderAlumni(alumniMember, index)
                )}
              </div>
            ) : (
              <div className="no-members-message">
                <p>No alumni panel data available for {selectedYear}.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AlumniPanel;
