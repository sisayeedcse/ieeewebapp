// src/Pages/AdvisorPanels2025.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AdvisorPanels2025.css";

const Advisor_1 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752752390/Advisor_1_pvxhbi.png",
  Advisor_2 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752752382/Advisor_2_svutqp.png",
  Advisor_3 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752752383/Advisor_3_k6xuck.png",
  Advisor_4 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752752389/Advisor_4_knxtat.png",
  Advisor_5 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752752387/Advisor_5_ejfq7x.png",
  Advisor_6 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752752385/Advisor_6_g1fckm.png",
  Advisor_7 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752752392/Advisor_7_zbtxig.png";

const advisors = [
  {
    img: Advisor_1,
    name: "Dr. Shahid Md. Asif Iqbal",
    title: "Advisor",
    position: "Professor & Chairman",
    department: "Department of Computer Science and Engineering",
  },
  {
    img: Advisor_2,
    name: "Tuton Chandra Mallick",
    title: "Advisor",
    position: "Associate Professor & Chairman",
    department: "Department of Electrical and Electronic Engineering",
  },
  {
    img: Advisor_3,
    name: "Mohammed Saifuddin Munna",
    title: "Counselor",
    position: "Associate Professor",
    department: "Department of Electrical and Electronic Engineering",
  },
  {
    img: Advisor_4,
    name: "Kingshuk Dhar",
    title: "Chief Mentor",
    position: "Assistant Professor",
    department: "Department of Computer Science and Engineering",
  },
  {
    img: Advisor_5,
    name: "Avisheak Das",
    title: "Mentor",
    position: "Lecturer",
    department: "Department of CSE",
  },
  {
    img: Advisor_7,
    name: "Monisha Dey",
    title: "Mentor",
    position: "Lecturer",
    department: "Department of EEE",
  },
  {
    img: Advisor_6,
    name: "Ms. Tashin Hossain",
    title: "Mentor",
    position: "Lecturer",
    department: "Department of CSE",
  },
];

const AdvisorPanels2025 = () => {
  const renderAdvisor = (advisor, index) => {
    const isFeatured = index === 0; // First advisor is featured

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
          <h3 className="advisor-name">{advisor.name}</h3>
          <p className="advisor-title">{advisor.title}</p>
          <p className="advisor-position">{advisor.position}</p>
          <p className="advisor-department">{advisor.department}</p>

          <div className="advisor-contact">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-icon">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div className="contact-icon">
              <i className="fab fa-facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Split advisors into the 1-3-3 format
  const firstAdvisor = advisors.slice(0, 1);
  const secondRowAdvisors = advisors.slice(1, 4);
  const thirdRowAdvisors = advisors.slice(4, 7);

  return (
    <>
      <Navbar variant="blue" />
      <section className="advisor-section">
        <div className="container">
          <h2>Advisory Panel 2025</h2>
          <p className="subtitle">
            Meet our distinguished advisory panel who provide strategic guidance
            and mentorship to shape the future of IEEE Premier University
            Student Branch.
          </p>

          <div className="section-divider"></div>

          <div className="advisor-grid">
            {/* First row - 1 card */}
            <div className="advisor-row single-card">
              {firstAdvisor.map((advisor, index) =>
                renderAdvisor(advisor, index)
              )}
            </div>

            {/* Second row - 3 cards */}
            <div className="advisor-row triple-cards">
              {secondRowAdvisors.map((advisor, index) =>
                renderAdvisor(advisor, index + 1)
              )}
            </div>

            {/* Third row - 3 cards */}
            <div className="advisor-row triple-cards">
              {thirdRowAdvisors.map((advisor, index) =>
                renderAdvisor(advisor, index + 4)
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdvisorPanels2025;
