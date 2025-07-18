import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./Login.css"; // Reusing the same styles

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    studentId: "",
    department: "",
    agreeToTerms: false,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate signup process
    setTimeout(() => {
      setIsSubmitting(false);
      console.log("Signup submitted:", formData);
    }, 2000);
  };

  const floatingElements = [
    { id: 1, delay: 0, duration: 8 },
    { id: 2, delay: 1, duration: 10 },
    { id: 3, delay: 2, duration: 12 },
    { id: 4, delay: 3, duration: 9 },
  ];

  return (
    <>
      <Navbar variant="blue" />
      <section className="login-page">
        {/* Animated Background */}
        <div className="login-background">
          <div className="login-gradient-orb login-gradient-orb-1"></div>
          <div className="login-gradient-orb login-gradient-orb-2"></div>
          <div className="login-gradient-orb login-gradient-orb-3"></div>

          {floatingElements.map((element) => (
            <div
              key={element.id}
              className="login-floating-element"
              style={{
                "--delay": `${element.delay}s`,
                "--duration": `${element.duration}s`,
              }}
            ></div>
          ))}

          <div className="login-interactive-grid">
            <div className="login-grid-lines"></div>
            <div
              className="login-grid-spotlight"
              style={{
                "--mouse-x": `${mousePosition.x}%`,
                "--mouse-y": `${mousePosition.y}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="login-container">
          <div className={`login-content ${isLoaded ? "login-loaded" : ""}`}>
            {/* Left Side - Branding */}
            <div className="login-branding">
              <div className="login-brand-content">
                <div className="login-ieee-logo">
                  <div className="login-logo-circle">
                    <span className="login-logo-text">IEEE</span>
                  </div>
                  <div className="login-logo-pulse"></div>
                </div>

                <h1 className="login-brand-title">
                  Join the
                  <span className="login-highlight"> IEEE PU-SB</span> Community
                </h1>

                <p className="login-brand-subtitle">
                  Become part of the world's largest technical professional
                  organization. Start your journey in advancing technology for
                  humanity.
                </p>

                <div className="login-features">
                  <div className="login-feature">
                    <div className="login-feature-icon">🎓</div>
                    <span>Student Membership Benefits</span>
                  </div>
                  <div className="login-feature">
                    <div className="login-feature-icon">🤝</div>
                    <span>Networking Opportunities</span>
                  </div>
                  <div className="login-feature">
                    <div className="login-feature-icon">💼</div>
                    <span>Professional Development</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="login-form-section">
              <div className="login-form-container">
                <div className="login-form-header">
                  <h2 className="login-form-title">Create Account</h2>
                  <p className="login-form-subtitle">
                    Fill in your details to join IEEE PU-SB
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                    }}
                  >
                    <div className="login-input-group">
                      <label htmlFor="firstName" className="login-label">
                        First Name
                      </label>
                      <div className="login-input-wrapper">
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="login-input"
                          placeholder="First name"
                          required
                        />
                        <div className="login-input-icon">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle
                              cx="12"
                              cy="7"
                              r="4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="login-input-group">
                      <label htmlFor="lastName" className="login-label">
                        Last Name
                      </label>
                      <div className="login-input-wrapper">
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="login-input"
                          placeholder="Last name"
                          required
                        />
                        <div className="login-input-icon">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle
                              cx="12"
                              cy="7"
                              r="4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="login-input-group">
                    <label htmlFor="email" className="login-label">
                      Email Address
                    </label>
                    <div className="login-input-wrapper">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="login-input"
                        placeholder="Enter your email"
                        required
                      />
                      <div className="login-input-icon">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <polyline
                            points="22,6 12,13 2,6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                    }}
                  >
                    <div className="login-input-group">
                      <label htmlFor="studentId" className="login-label">
                        Student ID
                      </label>
                      <div className="login-input-wrapper">
                        <input
                          type="text"
                          id="studentId"
                          name="studentId"
                          value={formData.studentId}
                          onChange={handleInputChange}
                          className="login-input"
                          placeholder="Student ID"
                          required
                        />
                        <div className="login-input-icon">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              x="2"
                              y="3"
                              width="20"
                              height="14"
                              rx="2"
                              ry="2"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <line
                              x1="8"
                              y1="21"
                              x2="16"
                              y2="21"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <line
                              x1="12"
                              y1="17"
                              x2="12"
                              y2="21"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="login-input-group">
                      <label htmlFor="department" className="login-label">
                        Department
                      </label>
                      <div className="login-input-wrapper">
                        <select
                          id="department"
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                          className="login-input"
                          required
                          style={{ paddingLeft: "3rem" }}
                        >
                          <option value="">Select Department</option>
                          <option value="cse">
                            Computer Science & Engineering
                          </option>
                          <option value="eee">
                            Electrical & Electronic Engineering
                          </option>
                        </select>
                        <div className="login-input-icon">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M22 10V6C22 5.45 21.55 5 21 5H3C2.45 5 2 5.45 2 6V10C2 10.55 2.45 11 3 11H21C21.55 11 22 10.55 22 10Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6 21H18C18.55 21 19 20.55 19 20V16C19 15.45 18.55 15 18 15H6C5.45 15 5 15.45 5 16V20C5 20.55 5.45 21 6 21Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="login-input-group">
                    <label htmlFor="password" className="login-label">
                      Password
                    </label>
                    <div className="login-input-wrapper">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="login-input"
                        placeholder="Create a password"
                        required
                      />
                      <button
                        type="button"
                        className="login-password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M17.94 17.94A10.07 10.07 0 0 1 12 20C7 20 2.73 16.39 1 12A18.45 18.45 0 0 1 5.06 5.06L17.94 17.94Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.9 4.24A9.12 9.12 0 0 1 12 4C17 4 21.27 7.61 23 12A18.5 18.5 0 0 1 19.42 16.42"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1 1L23 23"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.71 8.71A3 3 0 1 0 15.29 15.29"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="3"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="login-input-group">
                    <label htmlFor="confirmPassword" className="login-label">
                      Confirm Password
                    </label>
                    <div className="login-input-wrapper">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="login-input"
                        placeholder="Confirm your password"
                        required
                      />
                      <button
                        type="button"
                        className="login-password-toggle"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M17.94 17.94A10.07 10.07 0 0 1 12 20C7 20 2.73 16.39 1 12A18.45 18.45 0 0 1 5.06 5.06L17.94 17.94Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.9 4.24A9.12 9.12 0 0 1 12 4C17 4 21.27 7.61 23 12A18.5 18.5 0 0 1 19.42 16.42"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1 1L23 23"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.71 8.71A3 3 0 1 0 15.29 15.29"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="3"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="login-form-options">
                    <label className="login-checkbox">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        required
                      />
                      <span className="login-checkmark"></span>I agree to the{" "}
                      <Link to="/terms" className="login-link">
                        Terms & Conditions
                      </Link>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className={`login-submit-btn ${
                      isSubmitting ? "login-submitting" : ""
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="login-spinner"></div>
                        Creating Account...
                      </>
                    ) : (
                      <>
                        Create Account
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M5 12H19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 5L19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </>
                    )}
                  </button>

                  <div className="login-signup-link">
                    Already have an account?
                    <Link to="/login" className="login-link">
                      Sign in here
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default SignUp;
