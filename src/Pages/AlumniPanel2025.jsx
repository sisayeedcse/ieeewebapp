// src/Pages/AlumniPanel2025.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AlumniPanel2025.css";

const Alumni_1 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752753439/alumni_1_giasyt.png",
  Alumni_2 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752753440/alumni_2_grolwa.png",
  Alumni_3 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752753440/alumni_3_lckspa.png",
  Alumni_4 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752753440/alumni_4_l4jtaf.png";

const alumni = [
  {
    img: Alumni_1,
    name: "Anik Barua",
    title: "Alumni Advisor",
    position: "Chair, IEEE PU SB '23",
    department: "IEEE Premier University Student Branch",
  },
  {
    img: Alumni_2,
    name: "Mohammed Mohiuddin",
    title: "Alumni Advisor",
    position: "Chair, IEEE PU SB '24",
    department: "IEEE Premier University Student Branch",
  },
  {
    img: Alumni_3,
    name: "Nazia Sultana Plabon",
    title: "Alumni Advisor",
    position: "Secretary, IEEE PU SB '24",
    department: "IEEE Premier University Student Branch",
  },
  {
    img: Alumni_4,
    name: "Joy Dey",
    title: "Alumni Advisor",
    position: "Vice Chair (Activity), IEEE PU SB '24",
    department: "IEEE Premier University Student Branch",
  },
];

const AlumniPanel2025 = () => {
  const renderAlumni = (alumniMember, index) => {
    return (
      <div className="alumni-card" key={index}>
        <div className="alumni-img-container">
          <img
            src={alumniMember.img}
            alt={alumniMember.name}
            className="alumni-img"
          />
          <div className="alumni-img-overlay"></div>
        </div>

        <div className="alumni-info">
          <h3 className="alumni-name">{alumniMember.name}</h3>
          <p className="alumni-title">{alumniMember.title}</p>
          <p className="alumni-position">{alumniMember.position}</p>
          <p className="alumni-department">{alumniMember.department}</p>

          <div className="alumni-contact">
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

  return (
    <>
      <Navbar variant="blue" />
      <section className="alumni-section">
        <div className="container">
          <h2>Alumni Advisory Panel 2025</h2>
          <p className="subtitle">
            Meet our distinguished alumni advisors who provide valuable guidance
            and mentorship, leveraging their experience to support the growth of
            IEEE Premier University Student Branch.
          </p>

          <div className="section-divider"></div>

          <div className="alumni-grid">
            <div className="alumni-row">
              {alumni.map((alumniMember, index) =>
                renderAlumni(alumniMember, index)
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AlumniPanel2025;
