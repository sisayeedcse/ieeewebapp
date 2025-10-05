// src/Pages/ExComPage.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import committeeData from "../data/committeeData";
import "./ExComPage.css";

const ExComPage = () => {
  // Get available years from committeeData dynamically
  const availableYears = Object.keys(committeeData)
    .map((year) => parseInt(year))
    .sort((a, b) => b - a); // Sort in descending order (newest first)

  // State to track which year is currently selected (default: latest year)
  const [selectedYear, setSelectedYear] = useState(availableYears[0] || 2025);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get the committee members for the selected year from imported data
  const getCurrentMembers = () => {
    return committeeData[selectedYear] || [];
  };

  // Handle year change from dropdown
  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  // Get current members based on selected year
  const currentMembers = getCurrentMembers();
  const chair = currentMembers.find((m) => m.role === "Chair");
  const viceChairs = currentMembers.filter((m) =>
    m.role.includes("Vice Chair")
  );
  const rest = currentMembers.filter(
    (m) => m.role !== "Chair" && !m.role.includes("Vice Chair")
  );

  const renderMember = (member, index, isFeatured = false) => (
    <div className={`excom-card ${isFeatured ? "featured" : ""}`} key={index}>
      <div className="excom-img-container">
        <img src={member.img} alt={member.name} className="excom-img" />
        <div className="excom-img-overlay"></div>
      </div>
      <div className="excom-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <div className="excom-contact">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          )}
          {member.facebook && (
            <a
              href={member.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <i className="fab fa-facebook"></i>
            </a>
          )}
          {member.email && (
            <a href={`mailto:${member.email}`} className="contact-icon">
              <i className="fas fa-envelope"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar variant="blue" />
      <section className="excom-section">
        <div className="container">
          <h2>IEEE PU Student Branch Executive Committee {selectedYear}</h2>
          <p className="subtitle">
            Meet our dedicated executive committee members who lead and manage
            various activities and initiatives of IEEE Premier University
            Student Branch.
          </p>

          {/* Year Selector Dropdown */}
          <div className="year-selector-container">
            <select
              className="year-selector"
              value={selectedYear}
              onChange={handleYearChange}
              aria-label="Select Executive Committee Year"
            >
              {availableYears.map((year) => (
                <option key={year} value={year}>
                  Executive Members {year}
                </option>
              ))}
            </select>
          </div>

          <div className="section-divider"></div>

          <div className="excom-grid">
            {/* Show content only if there are members for the selected year */}
            {currentMembers.length > 0 ? (
              <>
                {/* Chair - Single card */}
                {chair && (
                  <div className="excom-row single-card">
                    {renderMember(chair, 0, true)}
                  </div>
                )}

                {/* Vice Chairs - 3 cards */}
                {viceChairs.length > 0 && (
                  <div className="excom-row triple-cards">
                    {viceChairs.map((m, i) => renderMember(m, i + 1))}
                  </div>
                )}

                {/* Other members - 4 cards per row */}
                {rest.length > 0 && (
                  <>
                    <div className="excom-row quad-cards">
                      {rest.slice(0, 4).map((m, i) => renderMember(m, i + 4))}
                    </div>
                    {rest.length > 4 && (
                      <div className="excom-row quad-cards">
                        {rest.slice(4, 8).map((m, i) => renderMember(m, i + 8))}
                      </div>
                    )}
                    {rest.length > 8 && (
                      <div className="excom-row quad-cards">
                        {rest.slice(8).map((m, i) => renderMember(m, i + 12))}
                      </div>
                    )}
                  </>
                )}
              </>
            ) : (
              <div className="no-members-message">
                <p>No committee members data available for {selectedYear}.</p>
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

export default ExComPage;
