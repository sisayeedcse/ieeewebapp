import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const logo =
  "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691507/IEEEPULOGO_merij4.png";
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
              <Link className="nav-link" to="/aboutus">
                About
              </Link>
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
                Committiee
              </a>
              <ul className="dropdown-menu" aria-labelledby="membersDropdown">
                <li>
                  <Link className="dropdown-item" to="/advisors">
                    Advisor Panel
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/alumni">
                    Alumni Panel
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/excom">
                    Executive Panel
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/developer">
                    Developers
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/events">
                Activities
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">
                Contact
              </Link>
            </li>

            <li className="nav-item d-lg-none mt-3">
              <Link
                to="/portal"
                className="btn btn-light login-btn rounded-pill px-4 py-2"
              >
                IEEE PU SB PORTAL
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-block">
          <Link
            to="/portal"
            className="btn btn-light login-btn rounded-pill px-4 py-2"
          >
            IEEE PU SB PORTAL
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
