import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    // Simulate login process
    setTimeout(() => {
      setIsSubmitting(false);
      // Add your actual login logic here
      console.log("Login submitted:", formData);
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

          {/* Floating Elements */}
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

          {/* Interactive Grid */}
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
                  Welcome Back to
                  <span className="login-highlight"> IEEE PU-SB</span>
                </h1>

                <p className="login-brand-subtitle">
                  Continue your journey in advancing technology for humanity.
                  Connect with fellow engineers and access exclusive resources.
                </p>

                <div className="login-features">
                  <div className="login-feature">
                    <div className="login-feature-icon">🌐</div>
                    <span>Global IEEE Network</span>
                  </div>
                  <div className="login-feature">
                    <div className="login-feature-icon">📚</div>
                    <span>Exclusive Resources</span>
                  </div>
                  <div className="login-feature">
                    <div className="login-feature-icon">🚀</div>
                    <span>Career Development</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="login-form-section">
              <div className="login-form-container">
                <div className="login-form-header">
                  <h2 className="login-form-title">Sign In</h2>
                  <p className="login-form-subtitle">
                    Enter your credentials to access your account
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
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
                        placeholder="Enter your password"
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

                  <div className="login-form-options">
                    <label className="login-checkbox">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                      />
                      <span className="login-checkmark"></span>
                      Remember me
                    </label>

                    <Link to="/forgot-password" className="login-forgot-link">
                      Forgot password?
                    </Link>
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
                        Signing In...
                      </>
                    ) : (
                      <>
                        Sign In
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

                  <div className="login-divider">
                    <span>or</span>
                  </div>

                  <div className="login-social-buttons"></div>

                  <div className="login-signup-link">
                    Don't have an account?
                    <Link to="/signup" className="login-link">
                      Sign up here
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

export default Login;
