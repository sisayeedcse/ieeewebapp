import React from "react";

const achievements = [
  {
    icon: "fas fa-medal",
    title: "Best Exemplary Student Branch",
    desc: "IEEE Region 10 award for two consecutive years, recognizing our outstanding contribution to student development.",
  },
  {
    icon: "fas fa-trophy",
    title: "IEEE R10 Web Contest",
    desc: "First place winner in the prestigious IEEE Region 10 Web Contest, showcasing our technical excellence.",
  },
  {
    icon: "fas fa-star",
    title: "Leading Student Branch",
    desc: "Solidified position as one of the best IEEE student branches, setting standards for excellence in engineering education.",
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
