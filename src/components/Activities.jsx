import React from "react";

const Activities = () => {
  return (
    <section className="activities py-5" id="activities">
      <div className="container">
        <div className="section-title activities-section-title text-center mb-5">
          <h2>
            Why Join <span>IEEE PU?</span>
          </h2>
          <p>
            Comprehensive programs designed to <br />
            enhance technical skills and professional development
          </p>
        </div>

        <div className="activities-grid">
          <div className="activity-card">
            <div className="activity-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Technical Learning</h3>
            <p>
              Immerse yourself in learning about emerging technologies across
              electronics, programming, robotics, and research endeavors to
              foster innovation and improvement.
            </p>
          </div>

          <div className="activity-card">
            <div className="activity-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <h3>Competitions</h3>
            <p>
              Engage in numerous beneficial contests organized by IEEE PU SB,
              extending your expertise and experience to boost your professional
              portfolio.
            </p>
          </div>

          <div className="activity-card">
            <div className="activity-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Networking</h3>
            <p>
              Connect with various individuals and make lifelong friends while
              building professional relationships that advance your career
              prospects.
            </p>
          </div>

          <div className="activity-card">
            <div className="activity-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>Skill Development</h3>
            <p>
              Develop new skills across content writing, social media
              management, graphic design, UI/UX design, and web development.
            </p>
          </div>

          <div className="activity-card">
            <div className="activity-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Workshops & Seminars</h3>
            <p>
              Participate in workshops, industrial tours, and seminars providing
              practical experiences that contribute to career development.
            </p>
          </div>

          <div className="activity-card">
            <div className="activity-icon">
              <i className="fas fa-microchip"></i>
            </div>
            <h3>Research & Innovation</h3>
            <p>
              Confront various research endeavors and innovation projects that
              push the boundaries of engineering knowledge and application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
