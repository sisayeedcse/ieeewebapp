// src/Pages/ExCom.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ExCom2025.css";

import img1 from "../assets/Excom2025/exCom_img1.png";
import img2 from "../assets/Excom2025/exCom_img2.png";
import img3 from "../assets/Excom2025/exCom_img3.png";
import img4 from "../assets/Excom2025/exCom_img4.png";
import img5 from "../assets/Excom2025/exCom_img5.png";
import img6 from "../assets/Excom2025/exCom_img6.png";
import img7 from "../assets/Excom2025/exCom_img7.png";
import img8 from "../assets/Excom2025/exCom_img8.png";
import img9 from "../assets/Excom2025/exCom_img9.png";
import img10 from "../assets/Excom2025/exCom_img10.png";
import img11 from "../assets/Excom2025/exCom_img11.png";
import img12 from "../assets/Excom2025/exCom_img12.png";
import img13 from "../assets/Excom2025/exCom_img13.png";
import img14 from "../assets/Excom2025/exCom_img14.png";
import img15 from "../assets/Excom2025/exCom_img15.png";
import img16 from "../assets/Excom2025/exCom_img16.png";

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
  { img: img13, name: "Dhruba Chowdhury", role: "Joint Secretary" },
  { img: img14, name: "Rup Das Gupta", role: "Event & Operation Coordinator" },
  { img: img15, name: "Md. Arman Siddique", role: "Social Media Coordinator" },
  { img: img16, name: "Arnab Das", role: "Graphics Coordinator" },
];

const ExCom = () => {
  const chair = members.find((m) => m.role === "Chair");
  const viceChairs = members.filter((m) => m.role.includes("Vice Chair"));
  const rest = members.filter(
    (m) => m.role !== "Chair" && !m.role.includes("Vice Chair")
  );

  const renderMember = (member, index) => (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5" key={index}>
      <div className="excom-card">
        <div className="excom-img-wrapper">
          <img src={member.img} alt={member.name} className="excom-img" />
        </div>
        <div className="excom-info">
          <h5 className="member-name">{member.name}</h5>
          <p className="member-role">{member.role}</p>
          <div className="social-icons">
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-facebook"></i>
            <i className="fas fa-envelope"></i>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar variant="blue" />
      <section className="excom-section container">
        <h2 className="section-title text-center">
          IEEE PU Student Branch Executive Committee
        </h2>

        <div className="row justify-content-center">
          {renderMember(chair, 0)}
        </div>

        <div className="row justify-content-center">
          {viceChairs.map((m, i) => renderMember(m, i + 1))}
        </div>

        <div className="row justify-content-center">
          {rest.slice(0, 4).map((m, i) => renderMember(m, i + 4))}
        </div>
        <div className="row justify-content-center">
          {rest.slice(4, 8).map((m, i) => renderMember(m, i + 8))}
        </div>
        <div className="row justify-content-center">
          {rest.slice(8).map((m, i) => renderMember(m, i + 12))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ExCom;
