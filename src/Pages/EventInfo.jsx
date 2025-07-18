// src/Pages/EventInfo.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./EventInfo.css";

// Demo event data - this will be replaced with dynamic data later
const demoEvents = {
  1: {
    id: 1,
    title: "IEEE Technical Workshop 2024: AI & Machine Learning Revolution",
    subtitle:
      "Exploring the Future of Artificial Intelligence and Its Applications",
    image:
      "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691563/event_img_1_boqokz.png",
    date: "March 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Premier University Auditorium",
    category: "Technical Workshop",
    status: "Upcoming",
    attendees: 150,
    organizer: "IEEE PU Student Branch",
    description: `Join us for an intensive technical workshop covering the latest advancements in Artificial Intelligence and Machine Learning. This comprehensive event is designed to provide participants with hands-on experience and deep insights into the revolutionary technologies that are shaping our future.

Our workshop will feature industry experts, cutting-edge research presentations, and interactive sessions that will enhance your understanding of AI and ML applications across various domains. Whether you're a student, researcher, or professional, this event promises to deliver valuable knowledge and networking opportunities.`,
    highlights: [
      "Interactive hands-on sessions with AI/ML tools",
      "Industry expert speakers and panelists",
      "Networking opportunities with professionals",
      "Certificate of participation",
      "Workshop materials and resources",
    ],
    speakers: [
      {
        name: "Mohammed Saifuddin Munna",
        title: "Counselor IEEE PU SB, Premier University",
        image:
          "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752752383/Advisor_3_k6xuck.png",
      },
      {
        name: "Dr. Shahid Mohammad Asif Iqbal",
        title: "Computer Networking Expert, Premier University",
        image:
          "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752752390/Advisor_1_pvxhbi.png",
      },
    ],
    agenda: [
      { time: "10:00 - 10:30", session: "Registration & Welcome" },
      {
        time: "10:30 - 12:00",
        session: "Introduction to AI & ML Fundamentals",
      },
      { time: "12:00 - 13:00", session: "Lunch Break" },
      {
        time: "13:00 - 14:30",
        session: "Hands-on Workshop: Building Your First ML Model",
      },
      { time: "14:30 - 15:00", session: "Coffee Break" },
      {
        time: "15:00 - 16:00",
        session: "Industry Applications & Future Trends",
      },
    ],
    tags: ["AI", "Machine Learning", "Technology", "Workshop", "Innovation"],
    registrationLink: "#register",
    requirements: "Basic programming knowledge preferred but not required",
    fee: "Free for IEEE Members, 100taka for Non-members",
  },
};

const EventInfo = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // For demo purposes, use event 1 if no eventId or if eventId doesn't exist
  const event = demoEvents[eventId] || demoEvents[1];

  const handleRegister = () => {
    // This will be connected to actual registration system later
    alert("Registration functionality will be implemented soon!");
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this event: ${event.title}`;

    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
        );
        break;
      default:
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="event-info-page">
      <Navbar />

      {/* Hero Section */}
      <section className="event-info-hero">
        <div className="event-info-hero-bg">
          <img src={event.image} alt={event.title} />
          <div className="event-info-hero-overlay"></div>
        </div>
        <div className="event-info-hero-content">
          <div className="container">
            <div className="event-info-breadcrumb">
              <span onClick={() => navigate("/")} className="breadcrumb-link">
                Home
              </span>
              <i className="fas fa-chevron-right"></i>
              <span
                onClick={() => navigate("/events")}
                className="breadcrumb-link"
              >
                Events
              </span>
              <i className="fas fa-chevron-right"></i>
              <span>Event Details</span>
            </div>
            <div className="event-info-hero-text">
              <div className="event-info-category-badge">
                <i className="fas fa-calendar"></i>
                {event.category}
              </div>
              <h1 className="event-info-title">{event.title}</h1>
              <p className="event-info-subtitle">{event.subtitle}</p>
              <div className="event-info-meta">
                <div className="meta-item">
                  <i className="fas fa-calendar-alt"></i>
                  <span>{event.date}</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-clock"></i>
                  <span>{event.time}</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{event.location}</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-users"></i>
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="event-info-content">
        <div className="container">
          <div className="event-info-grid">
            {/* Main Article Content */}
            <article className="event-info-article">
              <div className="article-header">
                <div className="article-meta-info">
                  <div className="author-info">
                    <div className="author-avatar">
                      <i className="fas fa-user-circle"></i>
                    </div>
                    <div className="author-details">
                      <span className="author-name">
                        Organized by {event.organizer}
                      </span>
                      <span className="publish-date">
                        Published on {new Date().toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="article-share">
                    <span>Share:</span>
                    <button
                      onClick={() => handleShare("facebook")}
                      className="share-btn facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="share-btn twitter"
                    >
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="share-btn linkedin"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="share-btn copy"
                    >
                      <i className="fas fa-link"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="article-content">
                <div className="content-section">
                  <h2>About This Event</h2>
                  <div className="content-text">
                    {event.description.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="content-section">
                  <h2>Event Highlights</h2>
                  <ul className="highlights-list">
                    {event.highlights.map((highlight, index) => (
                      <li key={index}>
                        <i className="fas fa-check-circle"></i>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="content-section">
                  <h2>Featured Speakers</h2>
                  <div className="speakers-grid">
                    {event.speakers.map((speaker, index) => (
                      <div key={index} className="speaker-card">
                        <div className="speaker-image">
                          <img src={speaker.image} alt={speaker.name} />
                        </div>
                        <div className="speaker-info">
                          <h4>{speaker.name}</h4>
                          <p>{speaker.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="content-section">
                  <h2>Event Agenda</h2>
                  <div className="agenda-timeline">
                    {event.agenda.map((item, index) => (
                      <div key={index} className="agenda-item">
                        <div className="agenda-time">{item.time}</div>
                        <div className="agenda-content">
                          <div className="agenda-dot"></div>
                          <h4>{item.session}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="content-section">
                  <h2>Requirements & Information</h2>
                  <div className="info-grid">
                    <div className="info-card">
                      <i className="fas fa-graduation-cap"></i>
                      <h4>Prerequisites</h4>
                      <p>{event.requirements}</p>
                    </div>
                    <div className="info-card">
                      <i className="fa-solid fa-bangladeshi-taka-sign"></i>
                      <h4>Registration Fee</h4>
                      <p>{event.fee}</p>
                    </div>
                  </div>
                </div>

                <div className="content-section">
                  <h2>Tags</h2>
                  <div className="tags-container">
                    {event.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="event-info-sidebar">
              <div className="sidebar-sticky">
                <div className="event-quick-info">
                  <h3>Event Information</h3>
                  <div className="quick-info-item">
                    <i className="fas fa-calendar-alt"></i>
                    <div>
                      <strong>Date</strong>
                      <span>{event.date}</span>
                    </div>
                  </div>
                  <div className="quick-info-item">
                    <i className="fas fa-clock"></i>
                    <div>
                      <strong>Time</strong>
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <div className="quick-info-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <strong>Venue</strong>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="quick-info-item">
                    <i className="fas fa-tag"></i>
                    <div>
                      <strong>Category</strong>
                      <span>{event.category}</span>
                    </div>
                  </div>
                  <div className="quick-info-item">
                    <i className="fas fa-info-circle"></i>
                    <div>
                      <strong>Status</strong>
                      <span className={`status ${event.status.toLowerCase()}`}>
                        {event.status}
                      </span>
                    </div>
                  </div>

                  <button onClick={handleRegister} className="register-btn">
                    <i className="fas fa-ticket-alt"></i>
                    Register Now
                  </button>
                </div>

                <div className="related-events">
                  <h3>Related Events</h3>
                  <div className="related-event-item">
                    <div className="related-event-image">
                      <img
                        src="https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691562/event_img_2_afxz21.png"
                        alt="Related Event"
                      />
                    </div>
                    <div className="related-event-info">
                      <h4>Innovation Summit 2024</h4>
                      <span>April 20, 2024</span>
                    </div>
                  </div>
                  <div className="related-event-item">
                    <div className="related-event-image">
                      <img
                        src="https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691561/event_img_3_uyjcvj.png"
                        alt="Related Event"
                      />
                    </div>
                    <div className="related-event-info">
                      <h4>Tech Conference 2024</h4>
                      <span>May 15, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default EventInfo;
