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
    <section className="achievements-section py-5" id="achievements">
      <div className="section-title container text-center">
        <h2 className="achievements-title">
          Our <span>Achievements</span>
        </h2>
        <p className="achievements-subtitle mb-5">
          Recognized excellence in student branch activities and competitions
        </p>

        <div className="achieveRow row justify-content-center g-4">
          {achievements.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="achievement-card h-100 p-4 shadow bg-white rounded text-center">
                <div className="achievement-icon mb-3">
                  <div className="icon-circle mx-auto">
                    <i className={`${item.icon} fa-2x`}></i>
                  </div>
                </div>
                <h4 className="achievement-title">{item.title}</h4>
                <p className="achievement-desc mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
