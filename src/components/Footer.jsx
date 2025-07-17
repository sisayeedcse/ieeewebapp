import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer text-white py-5" id="contact">
      <div className="container">
        <div className="footer-content row mb-4">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="text-primary">IEEE PU Student Branch</h3>
            <p>
              Advancing engineering excellence through innovation, learning, and
              leadership. Join us in shaping the future of technology.
            </p>
            <div className="social-links d-flex gap-3 mt-3">
              <a
                target="_blank"
                href="https://www.facebook.com/IEEEPremierUniversity"
              >
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/ieee-pusb"
              >
                <i className="fab fa-linkedin-in text-white"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="text-primary">Quick Links</h3>
            <p>
              <Link className="nav-link" to="/aboutus">
                About
              </Link>
            </p>
            <p>
              <Link className="nav-link" to="/events">
                Activities
              </Link>
            </p>
            <p>
              <Link className="nav-link" to="/contactus">
                Contact
              </Link>
            </p>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="text-primary">Contact Info</h3>
            <p>
              <i className="fas fa-map-marker-alt me-2"></i> Premier University,
              Chittagong, Bangladesh.
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i> ieeepusb@gmail.com
            </p>
            <p>
              <i className="fas fa-phone me-2"></i> +880-1719142953 (Counselor)
            </p>
          </div>
        </div>

        <div className="footer-bottom text-center pt-3 border-top border-secondary">
          <p className="text-light mb-0">
            &copy; 2025 IEEE PU Student Branch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
