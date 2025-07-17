// src/Pages/AboutUs.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./AboutUs.css";
const ieeebdLogo =
  "https://res.cloudinary.com/dknflcbt1/image/upload/v1752734375/ieeebd_logo_ihfuav.png";

const AboutUs = () => {
  return (
    <>
      <Navbar variant="blue" />
      <div className="aboutpage-aboutus-page">
        {/* Hero Section */}
        <section className="aboutpage-aboutus-hero">
          <div className="aboutpage-hero-background">
            <div className="aboutpage-hero-pattern"></div>
            <div className="aboutpage-hero-overlay"></div>
          </div>
          <div className="container aboutpage-hero-content">
            <div className="aboutpage-hero-badge">
              <span className="aboutpage-ieee-logo">IEEE</span>
              <span className="aboutpage-divider">|</span>
              <span>Premier University</span>
            </div>
            <h1 className="aboutpage-hero-title">
              About IEEE PU
              <span className="aboutpage-highlight-text">Student Branch</span>
            </h1>
            <p className="aboutpage-hero-subtitle">
              Fostering Innovation, Leadership & Excellence in Engineering
              Through Global Collaboration
            </p>
            <div className="aboutpage-hero-stats">
              <div className="aboutpage-stat-item">
                <span className="aboutpage-about-stat-number">100+</span>
                <span className="aboutpage-about-stat-label">
                  Registered Students
                </span>
              </div>
              <div className="aboutpage-stat-divider"></div>
              <div className="aboutpage-stat-item">
                <span className="aboutpage-about-stat-number">4</span>
                <span className="aboutpage-about-stat-label">
                  Technical Societies
                </span>
              </div>
              <div className="aboutpage-stat-divider"></div>
              <div className="aboutpage-stat-item">
                <span className="aboutpage-about-stat-number">20+</span>
                <span className="aboutpage-about-stat-label">
                  Event Organized
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="aboutpage-mission-section">
          <div className="container">
            <div className="aboutpage-mission-grid">
              <div className="aboutpage-mission-content">
                <h2 className="aboutpage-section-heading">Our Mission</h2>
                <p className="aboutpage-mission-text">
                  The IEEE Premier University Student Branch is a dynamic
                  community of aspiring engineers, technologists, and
                  innovators. We are dedicated to advancing technology for the
                  benefit of humanity through technical excellence, professional
                  development, and collaborative innovation.
                </p>
                <div className="aboutpage-mission-features">
                  <div className="aboutpage-feature-item">
                    <div className="aboutpage-feature-icon">🚀</div>
                    <div className="aboutpage-feature-text">
                      <h4>Innovation</h4>
                      <p>
                        Driving technological advancement through research and
                        development
                      </p>
                    </div>
                  </div>
                  <div className="aboutpage-feature-item">
                    <div className="aboutpage-feature-icon">👥</div>
                    <div className="aboutpage-feature-text">
                      <h4>Leadership</h4>
                      <p>
                        Developing future leaders in engineering and technology
                      </p>
                    </div>
                  </div>
                  <div className="aboutpage-feature-item">
                    <div className="aboutpage-feature-icon">🌍</div>
                    <div className="aboutpage-feature-text">
                      <h4>Global Impact</h4>
                      <p>
                        Creating solutions that benefit communities worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aboutpage-mission-visual">
                <div className="aboutpage-visual-card">
                  <div className="aboutpage-card-header">
                    <h3>IEEE Core Values</h3>
                  </div>
                  <div className="aboutpage-card-content">
                    <div className="aboutpage-value-item">
                      <span className="aboutpage-value-dot"></span>
                      <span>Technical Excellence</span>
                    </div>
                    <div className="aboutpage-value-item">
                      <span className="aboutpage-value-dot"></span>
                      <span>Professional Integrity</span>
                    </div>
                    <div className="aboutpage-value-item">
                      <span className="aboutpage-value-dot"></span>
                      <span>Global Collaboration</span>
                    </div>
                    <div className="aboutpage-value-item">
                      <span className="aboutpage-value-dot"></span>
                      <span>Innovation & Creativity</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* IEEE Bangladesh Section */}
        <section className="aboutpage-ieee-bd-section">
          <div className="container">
            <div className="aboutpage-bd-section-grid">
              <div className="aboutpage-bd-content">
                <h2 className="aboutpage-section-heading">
                  IEEE Bangladesh Section
                </h2>
                <p className="aboutpage-bd-description">
                  The IEEE Bangladesh Section stands as one of the most dynamic
                  and impactful IEEE sections in Region 10 (Asia Pacific),
                  consistently promoting technological advancement and
                  professional development across universities and industries
                  throughout Bangladesh.
                </p>
                <div className="aboutpage-bd-highlights">
                  <div className="aboutpage-highlight-item">
                    <h4>Leadership Excellence</h4>
                    <p>
                      Recognized globally for outstanding leadership and
                      innovation in technical education
                    </p>
                  </div>
                  <div className="aboutpage-highlight-item">
                    <h4>Community Impact</h4>
                    <p>
                      Facilitating humanitarian technology initiatives and
                      community outreach programs
                    </p>
                  </div>
                  <div className="aboutpage-highlight-item">
                    <h4>Technical Advancement</h4>
                    <p>
                      Hosting flagship events and technical conferences that
                      drive industry collaboration
                    </p>
                  </div>
                </div>
              </div>
              <div className="aboutpage-ieebd-logo">
                <img
                  src={ieeebdLogo}
                  alt="IEEE Logo"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AboutUs;
