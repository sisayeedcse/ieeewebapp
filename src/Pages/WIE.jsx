import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./WIE.css";

const wieLogo =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691511/wie_logo_ootcui.png",
  wie_1 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691471/wie_1_xt2tva.png",
  wie_2 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691472/wie_2_jme5rm.png",
  wie_3 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691474/wie_3_maamln.png",
  wie_4 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691473/wie_4_dexkzv.png",
  wie_5 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691474/wie_5_qimipe.png",
  wie_6 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691476/wie_6_npasrj.png",
  wie_7 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691476/wie_7_uerbbz.png";

const WIE = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { number: "2023", label: "Founded" },
    { number: "50+", label: "Active Members" },
    { number: "15+", label: "Events Hosted" },
    { number: "100%", label: "Empowerment" },
  ];

  const teamMembers = [
    {
      name: "MONISHA DEY",
      position: "MENTOR, IEEE WIE PU 2025",
      image: wie_1,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "SUMAIYA KHANAM",
      position: "CHAIR, IEEE WIE PU 2025",
      image: wie_2,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "AFRA IBANT",
      position: "VICE CHAIR, IEEE WIE PU 2025",
      image: wie_3,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "SANJIDA SULTANA AKHI",
      position: "SECRETARY, IEEE WIE PU 2025",
      image: wie_4,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "SHATABDI BARUA",
      position: "TREASURER, IEEE WIE PU 2025",
      image: wie_5,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "REHNUMA AHMED",
      position: "ACTIVITY COORDINATOR, IEEE WIE PU 2025",
      image: wie_6,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "FAHMIDA SULTANA RIFAT",
      position: "SOCIAL MEDIA & GRAPHICS COORDINATOR, IEEE WIE PU 2025",
      image: wie_7,
      facebook: "#",
      linkedin: "#",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar variant="blue" />

      {/* Hero Section */}
      <section className="wie-hero">
        <div className="wie-hero-background">
          <div className="wie-floating-elements">
            <div className="wie-circle wie-circle-1"></div>
            <div className="wie-circle wie-circle-2"></div>
            <div className="wie-circle wie-circle-3"></div>
          </div>
        </div>

        <div className="wie-hero-content">
          <div className="wie-hero-logo">
            <img
              src={wieLogo}
              alt="IEEE WIE PU Logo"
              className="wie-logo-main"
            />
          </div>

          <div className="wie-hero-text">
            <h1 className="wie-main-title">
              <span className="wie-title-line">Women in</span>
              <span className="wie-title-line wie-title-emphasis">
                Engineering
              </span>
            </h1>
            <p className="wie-hero-subtitle">
              IEEE PU Student Branch Affinity Group
            </p>
            <div className="wie-hero-tagline">
              <span className="wie-tagline-text">
                Empowering • Inspiring • Leading
              </span>
            </div>
          </div>
        </div>

        <div className="wie-scroll-indicator">
          <div className="wie-scroll-line"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="wie-stats">
        <div className="container">
          <div className="wie-stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`wie-stat-item ${
                  index === currentStat ? "wie-stat-active" : ""
                }`}
              >
                <div className="wie-stat-number">{stat.number}</div>
                <div className="wie-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="wie-mission">
        <div className="container">
          <div className="wie-mission-content">
            <div className="wie-mission-text">
              <h2 className="wie-section-title">Our Mission</h2>
              <p className="wie-mission-description">
                We are dedicated to empowering women in engineering and
                technology at Premier University. Our vision is to create a
                passionate community where talented individuals utilize their
                skills to drive innovation and make a meaningful impact in the
                world of technology.
              </p>
              <div className="wie-mission-highlights">
                <div className="wie-highlight">
                  <div className="wie-highlight-icon">🎯</div>
                  <span>Professional Development</span>
                </div>
                <div className="wie-highlight">
                  <div className="wie-highlight-icon">🚀</div>
                  <span>Career Advancement</span>
                </div>
                <div className="wie-highlight">
                  <div className="wie-highlight-icon">💪</div>
                  <span>Skill Enhancement</span>
                </div>
              </div>
            </div>
            <div className="wie-mission-visual">
              <div className="wie-geometric-shape">
                <div className="wie-shape-inner">
                  <img
                    src={wieLogo}
                    alt="IEEE WIE Logo"
                    className="wie-shape-logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="wie-team">
        <div className="container">
          <div className="wie-team-header">
            <h2 className="wie-team-section-title">
              Meet <span>Our Team</span>
            </h2>
            <p className="wie-team-subtitle">
              The passionate leaders driving our mission forward
            </p>
          </div>
          <div className="wie-team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="wie-team-card">
                <div className="wie-team-image-container">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="wie-team-image"
                  />
                  <div className="wie-team-overlay">
                    <div className="wie-team-social">
                      <div className="wie-social-icon">
                        <a
                          href={member.facebook}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </div>
                      <div className="wie-social-icon">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wie-team-info">
                  <h3 className="wie-team-name">{member.name}</h3>
                  <p className="wie-team-position">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WIE;
