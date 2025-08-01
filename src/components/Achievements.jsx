import React from "react";

const achievements = [
  {
    icon: "fas fa-medal",
    title: "Excellence Award",
    desc: "Recognized for outstanding performance and innovation in student activities and technical development.",
  },
  {
    icon: "fas fa-trophy",
    title: "Web Contest Winner",
    desc: "First place champion in regional web development competition showcasing technical skills and creativity.",
  },
  {
    icon: "fas fa-star",
    title: "Top Student Branch",
    desc: "Awarded leading status among IEEE student branches for exceptional contributions to engineering education.",
  },
];

const Achievements = () => {
  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        <div className="achievements-header">
          <div className="achievements-badge">
            <span className="badge-text">Recognition</span>
          </div>
          <h2 className="achievements-title">
            Our <span className="gradient-text">Achievements</span>
          </h2>
          <p className="achievements-subtitle">
            Celebrating excellence in innovation, leadership, and technical
            advancement
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div
              className={`achievement-card achievement-card-${index + 1}`}
              key={index}
            >
              <div className="achievement-card-inner">
                <div className="achievement-icon">
                  <div className="icon-wrapper">
                    <i className={item.icon}></i>
                  </div>
                  <div className="icon-glow"></div>
                </div>
                <div className="achievement-content">
                  <h3 className="achievement-title">{item.title}</h3>
                  <p className="achievement-desc">{item.desc}</p>
                </div>
                <div className="achievement-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
