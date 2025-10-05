// src/Pages/AdvisorPanels2025.jsx
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
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
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752752392/Advisor_7_zbtxig.png",
  Advisor_8 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1759671679/Advisor_8_rny7dz.png";

const advisors = [
  {
    img: Advisor_1,
    name: "Dr. Shahid Md. Asif Iqbal",
    title: "Advisor",
    position: "Assosiate Dean & Professor",
    department: "Department of Computer Science and Engineering",
    linkedin: "https://www.linkedin.com/in/shahid-asif-iqbal/",
    facebook: "https://www.facebook.com/asif.iqbal.3705/",
  },
  {
    img: Advisor_8,
    name: "Syed Md. Minhaz Hossain",
    title: "Advisor",
    position: " Associate Professor & Chairman",
    department: "Department of Computer Science and Engineering",
    linkedin: "https://www.linkedin.com/in/",
    facebook: "https://www.facebook.com/minhaz.hossain.90/",
  },
  {
    img: Advisor_2,
    name: "Tuton Chandra Mallick",
    title: "Advisor",
    position: "Associate Professor & Chairman",
    department: "Department of Electrical and Electronic Engineering",
    linkedin: "https://www.linkedin.com/in/tcmallick/",
    facebook: "https://www.facebook.com/tuton.c.mallick",
  },
  {
    img: Advisor_3,
    name: "Mohammed Saifuddin Munna",
    title: "Counselor",
    position: "Associate Professor",
    department: "Department of Electrical and Electronic Engineering",
    linkedin: "https://www.linkedin.com/in/mohammed-saifuddin-munna-aab67a10a/",
    facebook: "https://www.facebook.com/saifuddin.munna.5",
  },
  {
    img: Advisor_4,
    name: "Kingshuk Dhar",
    title: "Chief Mentor",
    position: "Assistant Professor",
    department: "Department of Computer Science and Engineering",
    linkedin: "https://www.linkedin.com/in/kingshuk-dhar-91a326327/",
    facebook: "https://www.facebook.com/kingshuk.dhar/",
  },
  {
    img: Advisor_5,
    name: "Avisheak Das",
    title: "Mentor",
    position: "Lecturer",
    department: "Department of CSE",
    linkedin: "https://www.linkedin.com/in/avisheak/",
    facebook: "https://www.facebook.com/avisheakdasshomrat/",
  },
  {
    img: Advisor_7,
    name: "Monisha Dey",
    title: "Mentor",
    position: "Lecturer",
    department: "Department of EEE",
    linkedin: "https://www.linkedin.com/in/monishadey-tusti/",
    facebook: "",
  },
  {
    img: Advisor_6,
    name: "Ms. Tashin Hossain",
    title: "Mentor",
    position: "Lecturer",
    department: "Department of CSE",
    linkedin: "https://www.linkedin.com/in/tashin-hossain-1b8814160/",
    facebook: "https://www.facebook.com/tahsin.hossain.59072",
  },
];

const AdvisorPanels2025 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderAdvisor = (advisor, index) => {
    const isFeatured = index === 0;

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

  // Group advisors by their roles
  const topAdvisors = advisors.filter((advisor) => advisor.title === "Advisor"); // 3 advisors
  const middleAdvisors = advisors.filter(
    (advisor) =>
      advisor.title === "Counselor" || advisor.title === "Chief Mentor"
  ); // Counselor and Chief Mentor
  const bottomMentors = advisors.filter(
    (advisor) => advisor.title === "Mentor"
  ); // 3 mentors

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
            <div className="advisor-row triple-cards">
              {topAdvisors.map((advisor, index) =>
                renderAdvisor(advisor, index)
              )}
            </div>

            <div className="advisor-row double-cards">
              {middleAdvisors.map((advisor, index) =>
                renderAdvisor(advisor, index)
              )}
            </div>

            <div className="advisor-row triple-cards">
              {bottomMentors.map((advisor, index) =>
                renderAdvisor(advisor, index)
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AdvisorPanels2025;
