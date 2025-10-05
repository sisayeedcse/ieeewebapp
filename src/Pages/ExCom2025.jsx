// src/Pages/ExCom2025.jsx
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Committee from "../components/Committee";
import "./ExCom2025.css";

const ExCom2025 = () => {
  const location = useLocation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get the year from the current path, default to 2025
  const getCurrentYear = () => {
    const currentPath = location.pathname;
    console.log("Current path:", currentPath);

    if (currentPath.includes("/committee/")) {
      const year = currentPath.split("/committee/")[1];
      console.log("Extracted year:", year);
      return year || "2025";
    }
    console.log("Defaulting to 2025");
    return "2025"; // Default for /excom and /excom2025 routes
  };

  const currentYear = getCurrentYear();
  console.log("Final current year:", currentYear);

  // Navigation component for year selection
  const YearNavigation = () => {
    const isActive = (year) => {
      return currentYear === year;
    };

    return (
      <div className="committee-nav">
        <Link
          to="/committee/2023"
          className={`committee-nav-link ${isActive("2023") ? "active" : ""}`}
        >
          2023
        </Link>
        <Link
          to="/committee/2024"
          className={`committee-nav-link ${isActive("2024") ? "active" : ""}`}
        >
          2024
        </Link>
        <Link
          to="/committee/2025"
          className={`committee-nav-link ${isActive("2025") ? "active" : ""}`}
        >
          2025
        </Link>
      </div>
    );
  };

  return (
    <>
      <Navbar variant="blue" />
      <section className="committee-section">
        <div className="container">
          <YearNavigation />
          <Committee year={currentYear} />
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ExCom2025;
