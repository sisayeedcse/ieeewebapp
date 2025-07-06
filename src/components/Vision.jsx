import React from "react";
import ieeeLogo from "../assets/ieeelogowhite.png";

const Vision = () => {
  return (
    <section id="vision" className="vision-section py-5 text-white">
      <div className="container vision-container d-flex flex-column flex-md-row align-items-center gap-5">
        <div className="vision-content">
          <h2 className="vision-title mb-4">Our Vision</h2>
          <p className="vision-text">
            To be a leading Student Branch dedicated to the continual
            advancement of engineering knowledge and skills among students. Our
            goal is to create a dynamic environment where members can master
            their technical skills, network, and advance their professional
            careers.
            <br />
            <br />
            With an unwavering commitment to excellence, we strive to shape the
            future of engineering for the betterment of humanity by developing a
            culture of lifelong learning and empowering future leaders.
            <br />
            <br />
            Through collaborative efforts and relentless dedication, we aspire
            to be at the forefront of engineering education and practice,
            leaving a lasting impact on society and inspiring future
            generations.
          </p>
        </div>
        <div className="vision-logo">
          <img src={ieeeLogo} alt="IEEE Logo" className="img-fluid rounded" />
        </div>
      </div>
    </section>
  );
};

export default Vision;
