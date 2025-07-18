// src/Pages/IeeePortal.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./IeeePortal.css";

const IeeePortal = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

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
      <section className="portalpage-hero">
        {/* Animated Background */}
        <div className="portalpage-background">
          <div className="portalpage-gradient-orb portalpage-gradient-orb-1"></div>
          <div className="portalpage-gradient-orb portalpage-gradient-orb-2"></div>
          <div className="portalpage-gradient-orb portalpage-gradient-orb-3"></div>

          {/* Floating Elements */}
          {floatingElements.map((element) => (
            <div
              key={element.id}
              className="portalpage-floating-element"
              style={{
                "--delay": `${element.delay}s`,
                "--duration": `${element.duration}s`,
              }}
            ></div>
          ))}

          {/* Interactive Grid */}
          <div className="portalpage-interactive-grid">
            <div className="portalpage-grid-lines"></div>
            <div
              className="portalpage-grid-spotlight"
              style={{
                "--mouse-x": `${mousePosition.x}%`,
                "--mouse-y": `${mousePosition.y}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="portalpage-container">
          <div
            className={`portalpage-content ${
              isLoaded ? "portalpage-loaded" : ""
            }`}
          >
            {/* IEEE Badge */}
            <div className="portalpage-ieee-badge">
              <div className="portalpage-badge-logo">
                <div className="portalpage-logo-circle">
                  <span className="portalpage-logo-text">IEEE</span>
                </div>
                <div className="portalpage-logo-pulse"></div>
              </div>
              <div className="portalpage-badge-text">
                <span className="portalpage-badge-title">
                  Premier University
                </span>
                <span className="portalpage-badge-subtitle">
                  Student Branch Portal
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="portalpage-title">
              <span className="portalpage-title-line">Welcome to Your</span>
              <span className="portalpage-title-highlight">
                Digital IEEE Journey
              </span>
            </h1>

            {/* Description */}
            <p className="portalpage-description">
              Connect with fellow engineers, access exclusive resources, and be
              part of the global IEEE community. Your pathway to professional
              excellence starts here.
            </p>

            {/* Feature Pills */}
            <div className="portalpage-feature-pills">
              <div className="portalpage-pill">
                <div className="portalpage-pill-icon">🌐</div>
                <span>Global Network</span>
              </div>
              <div className="portalpage-pill">
                <div className="portalpage-pill-icon">📚</div>
                <span>Resources</span>
              </div>
              <div className="portalpage-pill">
                <div className="portalpage-pill-icon">🚀</div>
                <span>Career Growth</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="portalpage-actions">
              <Link
                to="/login"
                className="portalpage-action-btn portalpage-primary-btn"
              >
                <span className="portalpage-btn-text">Log In</span>
                <div className="portalpage-btn-glow"></div>
                <div className="portalpage-btn-particles"></div>
              </Link>

              <Link
                to="/signup"
                className="portalpage-action-btn portalpage-secondary-btn"
              >
                <span className="portalpage-btn-text">Sign Up</span>
                <div className="portalpage-btn-border"></div>
                <div className="portalpage-btn-shine"></div>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="portalpage-scroll-indicator">
          <div className="portalpage-scroll-line"></div>
          <div className="portalpage-scroll-dot"></div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default IeeePortal;
