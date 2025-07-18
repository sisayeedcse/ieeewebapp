import React from "react";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-header">
          <div className="about-badge">
            <span className="badge-text">About Us</span>
          </div>
          <h2 className="about-title">
            About <span className="gradient-text">IEEE PU SB</span>
          </h2>
          <p className="about-subtitle">
            Leading Student Branch dedicated to the continual advancement of
            engineering knowledge and skills among students.
          </p>
        </div>

        <div className="row align-items-center about-content">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="about-heading text-primary mb-4">
              <h3>
                <span>Our Story, </span>Our Impact
              </h3>
            </div>
            <p className="about-paragraph">
              Since 2019, IEEE Premier University Student Branch has fostered
              innovation, leadership, and community among aspiring engineers.
            </p>
            <p className="about-paragraph">
              From hands-on workshops to global networking, we're building a
              generation of changemakers through technology and collaboration.
            </p>
            <p className="about-paragraph">
              Home to passionate learners, bold innovators, and future tech
              leaders backed by a global alumni network and impactful events.
            </p>
          </div>

          <div className="col-md-6">
            <div className="row text-center g-3">
              {[
                { num: "500+", label: "Active Members" },
                { num: "15+", label: "Years of Excellence" },
                { num: "50+", label: "Events Organized" },
                { num: "10+", label: "Awards Won" },
              ].map((stat, i) => (
                <div className="col-6" key={i}>
                  <div className="stat-box shadow bg-white rounded p-4">
                    <h4 className="stat-number">{stat.num}</h4>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
