// src/Pages/AdvisorPanel.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import advisorData from "../data/advisorData";
import "./AdvisorPanels2025.css";

const AdvisorPanel = () => {
  // Get available years from advisorData dynamically
  const availableYears = Object.keys(advisorData)
    .map((year) => parseInt(year))
    .sort((a, b) => b - a); // Sort in descending order (newest first)

  // State to track which year is currently selected (default: 2025)
  const [selectedYear, setSelectedYear] = useState(2025);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get the advisors for the selected year from imported data
  const getCurrentAdvisors = () => {
    return advisorData[selectedYear] || [];
  };

  // Handle year change from dropdown
  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  // Get current advisors based on selected year
  const currentAdvisors = getCurrentAdvisors();

  // Group advisors by their roles
  const topAdvisors = currentAdvisors.filter(
    (advisor) => advisor.title === "Advisor"
  );
  const middleAdvisors = currentAdvisors.filter(
    (advisor) =>
      advisor.title === "Counselor" || advisor.title === "Chief Mentor"
  );
  const bottomMentors = currentAdvisors.filter(
    (advisor) => advisor.title === "Mentor"
  );

  const renderAdvisor = (advisor, index) => {
    const isFeatured = false; // Can be customized if needed

    return (
      <div
        className={`advisor-card ${isFeatured ? "featured" : ""}`}
        key={index}
      >
        <div className="advisor-img-container">
          <img src={advisor.img} alt={advisor.name} className="advisor-img" />
          <div className="advisor-img-overlay"></div>
        </div>

        <div className="advisor-info">
          <div className="advisor-info-content">
            <h3 className="advisor-name">{advisor.name}</h3>
            <p className="advisor-title">{advisor.title}</p>
            <p className="advisor-position">{advisor.position}</p>
            <p className="advisor-department">{advisor.department}</p>
          </div>

          <div className="advisor-contact">
            {advisor.linkedin && (
              <a
                href={advisor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            )}
            {advisor.facebook && (
              <a
                href={advisor.facebook}
                target="_blank"
                rel="noopener noreferrer"
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
      <section className="advisor-section">
        <div className="container">
          <h2>Advisory Panel {selectedYear}</h2>
          <p className="subtitle">
            Meet our distinguished advisory panel who provide strategic guidance
            and mentorship to shape the future of IEEE Premier University
            Student Branch.
          </p>

          {/* Year Selector Dropdown */}
          <div className="year-selector-container">
            <select
              className="year-selector"
              value={selectedYear}
              onChange={handleYearChange}
              aria-label="Select Advisory Panel Year"
            >
              {availableYears.map((year) => (
                <option key={year} value={year}>
                  Advisory Panel {year}
                </option>
              ))}
            </select>
          </div>

          <div className="section-divider"></div>

          <div className="advisor-grid">
            {/* Show content only if there are advisors for the selected year */}
            {currentAdvisors.length > 0 ? (
              <>
                {/* Top Advisors - 3 cards per row */}
                {topAdvisors.length > 0 && (
                  <div className="advisor-row triple-cards">
                    {topAdvisors.map((advisor, index) =>
                      renderAdvisor(advisor, index)
                    )}
                  </div>
                )}

                {/* Middle Advisors (Counselor & Chief Mentor) - 2 cards per row */}
                {middleAdvisors.length > 0 && (
                  <div className="advisor-row double-cards">
                    {middleAdvisors.map((advisor, index) =>
                      renderAdvisor(advisor, index)
                    )}
                  </div>
                )}

                {/* Bottom Mentors - 3 cards per row */}
                {bottomMentors.length > 0 && (
                  <div className="advisor-row triple-cards">
                    {bottomMentors.map((advisor, index) =>
                      renderAdvisor(advisor, index)
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="no-members-message">
                <p>No advisory panel data available for {selectedYear}.</p>
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

export default AdvisorPanel;
