// src/Pages/IeeePortal.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./IeeePortal.css";

const IeeePortal = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingElements = [
    { id: 1, delay: 0, duration: 8 },
    { id: 2, delay: 1, duration: 10 },
    { id: 3, delay: 2, duration: 12 },
    { id: 4, delay: 3, duration: 9 },
    { id: 5, delay: 4, duration: 11 },
  ];

  return (
    <>
      <Navbar variant="blue" />
      <section className="portal-hero">
        {/* Animated Background */}
        <div className="portal-background">
          <div className="gradient-orb gradient-orb-1"></div>
          <div className="gradient-orb gradient-orb-2"></div>
          <div className="gradient-orb gradient-orb-3"></div>

          {/* Floating Elements */}
          {floatingElements.map((element) => (
            <div
              key={element.id}
              className="floating-element"
              style={{
                "--delay": `${element.delay}s`,
                "--duration": `${element.duration}s`,
              }}
            ></div>
          ))}

          {/* Interactive Grid */}
          <div className="interactive-grid">
            <div className="grid-lines"></div>
            <div
              className="grid-spotlight"
              style={{
                "--mouse-x": `${mousePosition.x}%`,
                "--mouse-y": `${mousePosition.y}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="portal-container">
          <div className={`portal-content ${isLoaded ? "loaded" : ""}`}>
            {/* IEEE Badge */}
            <div className="ieee-badge">
              <div className="badge-logo">
                <div className="logo-circle">
                  <span className="logo-text">IEEE</span>
                </div>
                <div className="logo-pulse"></div>
              </div>
              <div className="badge-text">
                <span className="badge-title">Premier University</span>
                <span className="badge-subtitle">Student Branch Portal</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="portal-title">
              <span className="title-line">Welcome to Your</span>
              <span className="title-highlight">Digital IEEE Journey</span>
            </h1>

            {/* Description */}
            <p className="portal-description">
              Connect with fellow engineers, access exclusive resources, and be
              part of the global IEEE community. Your pathway to professional
              excellence starts here.
            </p>

            {/* Feature Pills */}
            <div className="feature-pills">
              <div className="pill">
                <div className="pill-icon">🌐</div>
                <span>Global Network</span>
              </div>
              <div className="pill">
                <div className="pill-icon">📚</div>
                <span>Resources</span>
              </div>
              <div className="pill">
                <div className="pill-icon">🚀</div>
                <span>Career Growth</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="portal-actions">
              <Link to="/login" className="action-btn primary-btn">
                <span className="btn-text">Log In</span>
                <div className="btn-glow"></div>
                <div className="btn-particles"></div>
              </Link>

              <Link to="/signup" className="action-btn secondary-btn">
                <span className="btn-text">Sign Up</span>
                <div className="btn-border"></div>
                <div className="btn-shine"></div>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <div className="scroll-dot"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default IeeePortal;
