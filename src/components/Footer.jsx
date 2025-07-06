import React from "react";

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
              <a href="#about" className="text-light text-decoration-none">
                About Us
              </a>
            </p>
            <p>
              <a href="#activities" className="text-light text-decoration-none">
                Activities
              </a>
            </p>
            <p>
              <a
                href="#achievements"
                className="text-light text-decoration-none"
              >
                Achievements
              </a>
            </p>
            <p>
              <a href="#contact" className="text-light text-decoration-none">
                Contact
              </a>
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
              <i className="fas fa-envelope me-2"></i> info@ieeePUsb.org
            </p>
            <p>
              <i className="fas fa-phone me-2"></i> +880 123 456 789
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
