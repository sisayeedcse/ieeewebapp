// src/Pages/ExCom2025.jsx
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./ExCom2025.css";

const img1 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691437/exCom_img1_pwqqum.png",
  img2 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691437/exCom_img2_nf1git.png",
  img3 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691438/exCom_img3_jzsazx.png",
  img4 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691437/exCom_img4_su5rwj.png",
  img5 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691439/exCom_img5_yfksij.png",
  img6 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691439/exCom_img6_a5tdly.png",
  img7 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691441/exCom_img7_bzzets.png",
  img8 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691441/exCom_img8_fe9xc8.png",
  img9 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691442/exCom_img9_qbfupr.png",
  img10 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691442/exCom_img10_qjzsju.png",
  img11 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691443/exCom_img11_pnicdl.png",
  img12 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691445/exCom_img12_v78mua.png",
  img13 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691445/exCom_img13_ilvmuf.png",
  img14 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691446/exCom_img14_eidlku.png",
  img15 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752764601/exCom_img15_b8augp.png",
  img16 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691436/exCom_img16_eag879.png";

const members = [
  { img: img1, name: "Dhruba Dey", role: "Chair" },
  { img: img2, name: "Raktim Barua", role: "Vice Chair (Activity)" },
  { img: img3, name: "Sajeda Hoque", role: "Vice Chair (Technical)" },
  { img: img4, name: "Indrajit Barua", role: "Vice Chair (Administration)" },
  { img: img5, name: "Susmoy Barua", role: "Secretary" },
  { img: img6, name: "Ifteker Mohd Shayafuddin", role: "Treasurer" },
  { img: img9, name: "Dhruba Chowdhury", role: "Joint Secretary" },
  { img: img7, name: "Md Azmayen", role: "Webmaster" },
  { img: img8, name: "Sayeed Ibne Saif", role: "Additional Webmaster" },
  { img: img10, name: "Rup Das Gupta", role: "Event & Operation Coordinator" },
  { img: img11, name: "Md. Arman Siddique", role: "Social Media Coordinator" },
  { img: img12, name: "Arnab Das", role: "Graphics Coordinator" },
  { img: img13, name: "Farhan Iqbal Chowdhury", role: "Logistic Coordinator" },
  {
    img: img14,
    name: "Koshik Das",
    role: "Communcation & Public Relation Officer",
  },
  { img: img15, name: "Bhadon Barua", role: "Workshop Coordinator" },
  {
    img: img16,
    name: "Anup Dipto",
    role: "Assistant Event & Operation Coordinator",
  },
];

const ExCom2025 = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const chair = members.find((m) => m.role === "Chair");
  const viceChairs = members.filter((m) => m.role.includes("Vice Chair"));
  const rest = members.filter(
    (m) => m.role !== "Chair" && !m.role.includes("Vice Chair")
  );

  const renderMember = (member, index, isFeatured = false) => (
    <div className={`excom-card ${isFeatured ? "featured" : ""}`} key={index}>
      <div className="excom-img-container">
        <img src={member.img} alt={member.name} className="excom-img" />
        <div className="excom-img-overlay"></div>
      </div>
      <div className="excom-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <div className="excom-contact">
          <div className="contact-icon">
            <i className="fab fa-linkedin-in"></i>
          </div>
          <div className="contact-icon">
            <i className="fab fa-facebook"></i>
          </div>
          <div className="contact-icon">
            <i className="fas fa-envelope"></i>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar variant="blue" />
      <section className="excom-section">
        <div className="container">
          <h2>IEEE PU Student Branch Executive Committee 2025</h2>
          <p className="subtitle">
            Meet our dedicated executive committee members who lead and manage
            various activities and initiatives of IEEE Premier University
            Student Branch.
          </p>

          <div className="section-divider"></div>

          <div className="excom-grid">
            {/* Chair - Single card */}
            <div className="excom-row single-card">
              {renderMember(chair, 0, true)}
            </div>

            {/* Vice Chairs - 3 cards */}
            <div className="excom-row triple-cards">
              {viceChairs.map((m, i) => renderMember(m, i + 1))}
            </div>

            {/* Other members - 4 cards per row */}
            <div className="excom-row quad-cards">
              {rest.slice(0, 4).map((m, i) => renderMember(m, i + 4))}
            </div>
            <div className="excom-row quad-cards">
              {rest.slice(4, 8).map((m, i) => renderMember(m, i + 8))}
            </div>
            <div className="excom-row quad-cards">
              {rest.slice(8).map((m, i) => renderMember(m, i + 12))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ExCom2025;
