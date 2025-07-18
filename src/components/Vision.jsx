import React from "react";

const Vision = () => {
  return (
    <section id="vision" className="vision-section">
      <div className="vision-background">
        <div className="vision-floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
        </div>
      </div>

      <div className="container vision-container">
        <div className="vision-header">
          <span className="vision-badge">Our Vision & Mission</span>
          <h2 className="vision-main-title">Shaping Tomorrow's Tech Leaders</h2>
        </div>

        <div className="vision-grid">
          <div className="vision-card vision-card">
            <div className="vision-icon">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="vision-svg"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="vision-card-title">Our Vision</h3>
            <p className="vision-card-text">
              Empowering students to become global technology leaders through
              innovation, collaboration, and excellence in engineering
              education.
            </p>
          </div>

          <div className="vision-card mission-card">
            <h3 className="mission-title">Our Mission</h3>
            <div className="mission-points">
              <div className="mission-point">
                <div className="mission-point-icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <span>
                  Organize technical workshops, seminars, and competitions to
                  enhance students' skills
                </span>
              </div>
              <div className="mission-point">
                <div className="mission-point-icon">
                  <i className="fas fa-network-wired"></i>
                </div>
                <span>
                  Connect students with industry professionals and global IEEE
                  network
                </span>
              </div>
              <div className="mission-point">
                <div className="mission-point-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <span>
                  Promote research and innovation through project-based learning
                </span>
              </div>
              <div className="mission-point">
                <div className="mission-point-icon">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <span>
                  Foster leadership and soft skills development among members
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
