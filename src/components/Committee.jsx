import React, { useEffect } from "react";
import committeeData from "../data/committeeData";
import "./committee.css";

const Committee = ({ year }) => {
  const members = committeeData[year] || [];

  // Debug logging
  console.log("Committee component - Year:", year);
  console.log("Committee component - Members:", members);
  console.log("Committee component - Committee Data:", committeeData);

  // Scroll to top when component mounts or year changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [year]);

  // Organize members by role hierarchy
  const chair = members.find((m) => m.role === "Chair");
  const viceChairs = members.filter((m) => m.role.includes("Vice Chair"));
  const rest = members.filter(
    (m) => m.role !== "Chair" && !m.role.includes("Vice Chair")
  );

  const renderMember = (member, index, isFeatured = false) => (
    <div
      className={`committee-card ${isFeatured ? "featured" : ""}`}
      key={member.id || index}
    >
      <div className="committee-img-container">
        <img src={member.img} alt={member.name} className="committee-img" />
        <div className="committee-img-overlay"></div>
      </div>
      <div className="committee-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <div className="committee-contact">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label={`${member.name} LinkedIn`}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href={member.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label={`${member.name} Facebook`}
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`mailto:${member.email}`}
            className="contact-icon"
            aria-label={`Email ${member.name}`}
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );

  const renderMembersInRows = (membersList, cardsPerRow = 4) => {
    const rows = [];
    for (let i = 0; i < membersList.length; i += cardsPerRow) {
      const rowMembers = membersList.slice(i, i + cardsPerRow);
      rows.push(
        <div
          key={`row-${i}`}
          className={`committee-row ${
            cardsPerRow === 3 ? "triple-cards" : "quad-cards"
          }`}
        >
          {rowMembers.map((member, index) => renderMember(member, i + index))}
        </div>
      );
    }
    return rows;
  };

  if (members.length === 0) {
    return (
      <section className="committee-section">
        <div className="container">
          <h2>Executive Committee {year}</h2>
          <div className="no-data">
            <p>No committee data available for {year}.</p>
            <p>Debug: Year received: {year}</p>
            <p>
              Debug: Available years: {Object.keys(committeeData).join(", ")}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="committee-section">
      <div className="container">
        <h2>IEEE PU Student Branch Executive Committee {year}</h2>
        <p className="subtitle">
          Meet our dedicated executive committee members who lead and manage
          various activities and initiatives of IEEE Premier University Student
          Branch.
        </p>

        <div className="section-divider"></div>

        <div className="committee-grid">
          <p>
            Debug Info: Year = {year}, Members count = {members.length}
          </p>

          {/* Chair - Single card */}
          {chair && (
            <div className="committee-row single-card">
              {renderMember(chair, 0, true)}
            </div>
          )}

          {/* Vice Chairs - 3 cards */}
          {viceChairs.length > 0 && (
            <div className="committee-row triple-cards">
              {viceChairs.map((member, index) =>
                renderMember(member, index + 1)
              )}
            </div>
          )}

          {/* Other members - 4 cards per row */}
          {rest.length > 0 && renderMembersInRows(rest, 4)}
        </div>
      </div>
    </section>
  );
};

export default Committee;
