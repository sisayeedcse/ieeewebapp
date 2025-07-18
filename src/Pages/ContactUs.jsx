// src/Pages/ContactUs.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./ContactUs.css";

const ContactUs = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        category: "general",
      });

      setTimeout(() => {
        setSubmitStatus("");
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Visit Us",
      details: ["Premier University", "Chittagong, Bangladesh"],
      color: "#3b82f6",
    },
    {
      icon: "fas fa-phone",
      title: "Call Us",
      details: ["+880-31-2510796", "+880-31-2510797"],
      color: "#10b981",
    },
    {
      icon: "fas fa-envelope",
      title: "Email Us",
      details: ["ieee@pu.ac.bd", "info.ieee@pu.ac.bd"],
      color: "#f59e0b",
    },
    {
      icon: "fas fa-clock",
      title: "Office Hours",
      details: ["Mon - Fri: 9:00 AM - 5:00 PM", "Sat: 9:00 AM - 1:00 PM"],
      color: "#8b5cf6",
    },
  ];

  const quickLinks = [
    { name: "Membership", icon: "fas fa-user-plus", href: "#membership" },
    { name: "Events", icon: "fas fa-calendar", href: "#events" },
    { name: "Societies", icon: "fas fa-users", href: "#societies" },
    { name: "About Us", icon: "fas fa-info-circle", href: "#about" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "fab fa-facebook-f", url: "#", color: "#1877f2" },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "#",
      color: "#0077b5",
    },
    { name: "Twitter", icon: "fab fa-twitter", url: "#", color: "#1da1f2" },
    { name: "Instagram", icon: "fab fa-instagram", url: "#", color: "#e4405f" },
  ];

  return (
    <>
      <Navbar variant="blue" />
      <div className="contactpage-contact-page">
        {/* Hero Section */}
        <section className="contactpage-contact-hero">
          <div className="contactpage-hero-background">
            <div className="contactpage-hero-pattern"></div>
            <div className="contactpage-hero-overlay"></div>
          </div>
          <div className="contactpage-container contactpage-hero-content">
            <div className="contactpage-hero-badge">
              <i className="fas fa-envelope"></i>
              <span>Get In Touch</span>
            </div>
            <h1 className="contactpage-hero-title">
              Contact
              <span className="contactpage-highlight-text">
                IEEE PU Student Branch
              </span>
            </h1>
            <p className="contactpage-hero-subtitle">
              Have questions about IEEE activities, membership, or events? We're
              here to help! Reach out to us through any of the channels below or
              send us a message.
            </p>
            <div className="contactpage-hero-stats">
              <div className="contactpage-stat-item">
                <span className="contactpage-stat-number">24/7</span>
                <span className="contactpage-stat-label">Support</span>
              </div>
              <div className="contactpage-stat-item">
                <span className="contactpage-stat-number">&lt;2h</span>
                <span className="contactpage-stat-label">Response Time</span>
              </div>
              <div className="contactpage-stat-item">
                <span className="contactpage-stat-number">100%</span>
                <span className="contactpage-stat-label">Satisfaction</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="contactpage-contact-info-section">
          <div className="contactpage-container">
            <div className="contactpage-contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contactpage-contact-info-card">
                  <div
                    className="contactpage-info-icon"
                    style={{ backgroundColor: info.color }}
                  >
                    <i className={info.icon}></i>
                  </div>
                  <h3 className="contactpage-info-title">{info.title}</h3>
                  <div className="contactpage-info-details">
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="contactpage-main-contact-section">
          <div className="contactpage-container">
            <div className="contactpage-contact-grid">
              {/* Contact Form */}
              <div className="contactpage-contact-form-container">
                <div className="contactpage-form-header">
                  <h2 className="contactpage-form-title">Send us a Message</h2>
                  <p className="contactpage-form-subtitle">
                    Fill out the form below and we'll get back to you as soon as
                    possible
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="contactpage-contact-form"
                >
                  <div className="contactpage-form-row">
                    <div className="contactpage-form-group">
                      <label htmlFor="name">Full Name</label>
                      <div className="contactpage-input-wrapper">
                        <i className="fas fa-user"></i>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                    </div>
                    <div className="contactpage-form-group">
                      <label htmlFor="email">Email Address</label>
                      <div className="contactpage-input-wrapper">
                        <i className="fas fa-envelope"></i>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="contactpage-form-row">
                    <div className="contactpage-form-group">
                      <label htmlFor="category">Category</label>
                      <div className="contactpage-select-wrapper">
                        <i className="fas fa-tag"></i>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="general">General Inquiry</option>
                          <option value="membership">Membership</option>
                          <option value="events">Events</option>
                          <option value="societies">Societies</option>
                          <option value="technical">Technical Support</option>
                          <option value="collaboration">Collaboration</option>
                        </select>
                      </div>
                    </div>
                    <div className="contactpage-form-group">
                      <label htmlFor="subject">Subject</label>
                      <div className="contactpage-input-wrapper">
                        <i className="fas fa-pen"></i>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="contactpage-form-group">
                    <label htmlFor="message">Message</label>
                    <div className="contactpage-textarea-wrapper">
                      <i className="fas fa-comment"></i>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your inquiry..."
                        rows="6"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`contactpage-submit-btn ${
                      isSubmitting ? "contactpage-submitting" : ""
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Send Message
                      </>
                    )}
                  </button>

                  {submitStatus === "success" && (
                    <div className="contactpage-success-message">
                      <i className="fas fa-check-circle"></i>
                      <span>
                        Message sent successfully! We'll get back to you soon.
                      </span>
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Sidebar */}
              <div className="contactpage-contact-sidebar">
                <div className="contactpage-sidebar-card">
                  <h3 className="contactpage-sidebar-title">Quick Links</h3>
                  <div className="contactpage-quick-links">
                    {quickLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="contactpage-quick-link"
                      >
                        <i className={link.icon}></i>
                        <span>{link.name}</span>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="contactpage-sidebar-card">
                  <h3 className="contactpage-sidebar-title">Follow Us</h3>
                  <p className="contactpage-sidebar-text">
                    Stay connected with IEEE PU Student Branch on social media
                    for updates and events
                  </p>
                  <div className="contactpage-social-links">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="contactpage-social-link"
                        style={{ "--social-color": social.color }}
                        title={social.name}
                      >
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="contactpage-sidebar-card">
                  <h3 className="contactpage-sidebar-title">Need Help?</h3>
                  <p className="contactpage-sidebar-text">
                    Check out our FAQ section or browse our documentation for
                    quick answers
                  </p>
                  <div className="contactpage-help-links">
                    <a href="#faq" className="contactpage-help-link">
                      <i className="fas fa-question-circle"></i>
                      View FAQ
                    </a>
                    <a href="#docs" className="contactpage-help-link">
                      <i className="fas fa-book"></i>
                      Documentation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="contactpage-map-section">
          <div className="contactpage-container">
            <div className="contactpage-map-header">
              <h2 className="contactpage-map-title">Find Us on Campus</h2>
              <p className="contactpage-map-subtitle">
                Visit our office at Premier University campus for in-person
                assistance
              </p>
            </div>
            <div className="contactpage-map-container">
              <div className="contactpage-map-placeholder">
                <div className="contactpage-map-content">
                  <i className="fas fa-map-marked-alt"></i>
                  <h3>Premier University</h3>
                  <p>IEEE Student Branch Office</p>
                  <p>Chittagong, Bangladesh</p>
                  <button className="contactpage-map-btn">
                    <i className="fas fa-directions"></i>
                    Get Directions
                  </button>
                </div>
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

export default ContactUs;
