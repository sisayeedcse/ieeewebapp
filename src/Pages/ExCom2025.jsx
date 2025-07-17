// src/Pages/ExCom.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ExCom2025.css";

const img1 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691437/exCom_img1_pwqqum.png",
  img2 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691437/exCom_img2_nf1git.png",
  img3 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691438/exCom_img3_jzsazx.png",
  img4 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691437/exCom_img4_su5rwj.png",
  img5 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691439/exCom_img5_yfksij.png",
  img6 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691439/exCom_img6_a5tdly.png",
  img7 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691441/exCom_img7_bzzets.png",
  img8 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691441/exCom_img8_fe9xc8.png",
  img9 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691442/exCom_img9_qbfupr.png",
  img10 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691442/exCom_img10_qjzsju.png",
  img11 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691443/exCom_img11_pnicdl.png",
  img12 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691445/exCom_img12_v78mua.png",
  img13 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691445/exCom_img13_ilvmuf.png",
  img14 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691446/exCom_img14_eidlku.png",
  img15 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691446/exCom_img15_n0comz.png",
  img16 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691436/exCom_img16_eag879.png";

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
        <h2 className="text-center">
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
