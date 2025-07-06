import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/WEBLOGO.png";

const Navbar = ({ variant }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navbarClass = `navbar fixed-top navbar-expand-lg ${
    variant === "blue"
      ? "navbar-blue"
      : scrolled
      ? "navbar-scrolled"
      : "navbar-transparent"
  }`;

  return (
    <nav className={navbarClass}>
      <div className="container d-flex align-items-center justify-content-between">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="IEEE PU Logo"
            className={`logo-img ${scrolled ? "logo-small" : ""}`}
          />
        </Link>

        <button
          className={`navbar-toggler ${
            scrolled || variant === "blue" ? "toggler-dark" : "toggler-light"
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navMenu"
        >
          <ul className="navbar-nav gap-lg-4 text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            {/* Societies Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#societies"
                id="societiesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Societies
              </a>
              <ul className="dropdown-menu" aria-labelledby="societiesDropdown">
                <li>
                  <Link className="dropdown-item" to="/wie">
                    IEEE PU - WIE SB
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ras">
                    IEEE PU - RAS SB
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/pes">
                    IEEE PU - PES SB
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/cs">
                    IEEE PU - CS SB
                  </Link>
                </li>
              </ul>
            </li>

            {/* Members Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="membersDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Members
              </a>
              <ul className="dropdown-menu" aria-labelledby="membersDropdown">
                <li>
                  <a className="dropdown-item" href="#AdvisorsPanel">
                    Advisors Panel
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#alumniPanel">
                    Alumni Panel
                  </a>
                </li>
                <li>
                  <Link className="dropdown-item" to="/excom">
                    IEEE EX.COM Members
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#activities">
                Activities
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#achievements">
                Achievements
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

            <li className="nav-item d-lg-none mt-3">
              <a href="#portal" className="btn btn-light login-btn w-100">
                IEEE PU SB PORTAL
              </a>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-block">
          <a
            href="#portal"
            className="btn btn-light login-btn rounded-pill px-4 py-2"
          >
            IEEE PU SB PORTAL
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
