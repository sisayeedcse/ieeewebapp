// src/Pages/EventInfo.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./EventInfo.css";

const EventInfo = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedEvents, setRelatedEvents] = useState([]);
  
  // Get theme from URL query parameter
  const variant = searchParams.get('variant');
  const societyTheme = variant && ['wie', 'cs', 'ras', 'pes'].includes(variant.toLowerCase()) 
    ? variant.toLowerCase() 
    : 'default';

  // Get base URL from environment variable or fallback
  const BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

  // Fetch single event data from API
  useEffect(() => {
    const fetchEvent = async () => {
      if (!eventId) {
        setError("No event ID provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Try multiple API endpoints for single event
        const endpoints = [
          `${BASE_URL}/api/event/${eventId}`,
          `${BASE_URL}/api/events/${eventId}`,
        ];

        let eventData = null;
        let lastError = null;

        for (const url of endpoints) {
          try {
            console.log(`🔍 Fetching event from: ${url}`);
            const response = await fetch(url);

            if (response.ok) {
              const responseData = await response.json();
              console.log("✅ Event API Response:", responseData);

              // Handle different API response structures
              if (responseData.data) {
                eventData = responseData.data;
              } else if (responseData.event) {
                eventData = responseData.event;
              } else {
                eventData = responseData;
              }

              if (eventData && eventData.id) {
                console.log(
                  `✅ Successfully fetched event: ${eventData.title}`
                );
                break; // Success, exit the loop
              }
            } else {
              lastError = `HTTP ${response.status}: ${response.statusText}`;
            }
          } catch (endpointError) {
            lastError = endpointError.message;
            console.warn(`⚠️ Endpoint ${url} failed:`, endpointError.message);
          }
        }

        if (eventData && eventData.id) {
          setEvent(eventData);
          console.log('✅ Successfully fetched event:', eventData.title);
        } else {
          throw new Error(lastError || "Event not found");
        }
      } catch (error) {
        console.error("❌ Error fetching event:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId, BASE_URL]);

  // Fetch related events
  useEffect(() => {
    const fetchRelatedEvents = async () => {
      try {
        const endpoints = [
          `${BASE_URL}/api/event?limit=3`,
          `${BASE_URL}/api/events?limit=3`,
        ];

        for (const url of endpoints) {
          try {
            const response = await fetch(url);
            if (response.ok) {
              const responseData = await response.json();
              let eventsData = [];

              if (responseData.data && Array.isArray(responseData.data)) {
                eventsData = responseData.data;
              } else if (Array.isArray(responseData)) {
                eventsData = responseData;
              }

              // Filter out current event and take first 2
              const filtered = eventsData
                .filter((e) => e.id !== parseInt(eventId))
                .slice(0, 2);
              setRelatedEvents(filtered);
              break;
            }
          } catch (error) {
            console.warn("Could not fetch related events:", error);
          }
        }
      } catch (error) {
        console.warn("Error fetching related events:", error);
      }
    };

    if (eventId) {
      fetchRelatedEvents();
    }
  }, [eventId, BASE_URL]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Helper function to format time
  const formatTime = (event) => {
    // Check if event has startTime and endTime
    if (event?.startTime && event?.endTime) {
      return `${event.startTime} - ${event.endTime}`;
    }
    // Check for individual time properties
    if (event?.startTime) {
      return event.startTime;
    }
    // Fallback to original time field
    if (event?.time) {
      return event.time;
    }
    return "Time TBA";
  };

  // Loading state
  if (loading) {
    return (
      <div
        className={`event-info-page ${
          societyTheme !== "default" ? `theme-${societyTheme}` : ""
        }`}
      >
        <Navbar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
            flexDirection: "column",
          }}
        >
          <div
            className="loading-spinner"
            style={{
              width: "60px",
              height: "60px",
              border: "4px solid #f1f5f9",
              borderTop: `4px solid var(--primary-color, #3b82f6)`,
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              marginBottom: "20px",
            }}
          ></div>
          <p style={{ color: "#64748b", fontSize: "1.1rem" }}>
            Loading event details...
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  // Error state
  if (error || !event) {
    return (
      <div
        className={`event-info-page ${
          societyTheme !== "default" ? `theme-${societyTheme}` : ""
        }`}
      >
        <Navbar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
            flexDirection: "column",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <i
            className="fas fa-exclamation-triangle"
            style={{ fontSize: "4rem", color: "#f59e0b", marginBottom: "20px" }}
          ></i>
          <h2 style={{ color: "#374151", marginBottom: "10px" }}>
            Event Not Found
          </h2>
          <p style={{ color: "#64748b", marginBottom: "30px" }}>
            {error || "The requested event could not be found."}
          </p>
          <button
            onClick={() => navigate("/events")}
            className="back-to-events-btn"
            style={{
              background: `linear-gradient(135deg, var(--gradient-start, #667eea) 0%, var(--gradient-end, #764ba2) 100%)`,
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            <i className="fas fa-arrow-left" style={{ marginRight: "8px" }}></i>
            Back to Events
          </button>
        </div>
        <Footer />
      </div>
    );
  }

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
    <div
      className={`event-info-page ${
        societyTheme !== "default" ? `theme-${societyTheme}` : ""
      }`}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="event-info-hero">
        <div className="event-info-hero-bg">
          <img
            src={
              event.image_url ||
              event.image ||
              "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691563/event_img_1_boqokz.png"
            }
            alt={event.title}
          />
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
                {event.category || "Event"}
                {societyTheme !== "default" && (
                  <span className="society-indicator">
                    {societyTheme.toUpperCase()}
                  </span>
                )}
              </div>
              <h1 className="event-info-title">{event.title}</h1>
              <p className="event-info-subtitle">
                {event.subtitle ||
                  event.description?.substring(0, 150) + "..." ||
                  "Join us for this exciting event!"}
              </p>
              <div className="event-info-meta">
                <div className="meta-item">
                  <i className="fas fa-calendar-alt"></i>
                  <span>
                    {formatDate(event.date) || event.date || "Date TBA"}
                  </span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-clock"></i>
                  <span>{formatTime(event)}</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{event.location || event.venue || "Venue TBA"}</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-users"></i>
                  <span>
                    {event.attendees || event.max_attendees || "Open"}{" "}
                    {event.attendees ? "attendees" : ""}
                  </span>
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
                        Organized by{" "}
                        {event.organizer ||
                          event.organized_by ||
                          "IEEE PU Student Branch"}
                      </span>
                      <span className="publish-date">
                        Published on{" "}
                        {formatDate(event.created_at) ||
                          new Date().toLocaleDateString()}
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
                    {event.description ? (
                      event.description
                        .split("\n\n")
                        .map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))
                    ) : (
                      <p>Event description will be updated soon.</p>
                    )}
                  </div>
                </div>

                {event.highlights &&
                  Array.isArray(event.highlights) &&
                  event.highlights.length > 0 && (
                    <div className="content-section">
                      <h2>Event Highlights</h2>
                      <ul className="highlights-list">
                        {event.highlights.map((highlight, index) => (
                          <li key={index}>
                            <i className="fas fa-check-circle"></i>
                            {typeof highlight === "string"
                              ? highlight
                              : highlight.text ||
                                highlight.title ||
                                "Highlight"}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {event.speakers &&
                  Array.isArray(event.speakers) &&
                  event.speakers.length > 0 && (
                    <div className="content-section">
                      <h2>Featured Speakers</h2>
                      <div className="speakers-grid">
                        {event.speakers.map((speaker, index) => (
                          <div key={index} className="speaker-card">
                            <div className="speaker-image">
                              <img
                                src={
                                  speaker.image ||
                                  speaker.image_url ||
                                  "https://via.placeholder.com/150x150?text=Speaker"
                                }
                                alt={speaker.name || "Speaker"}
                              />
                            </div>
                            <div className="speaker-info">
                              <h4>{speaker.name || "Speaker Name"}</h4>
                              <p>
                                {speaker.title ||
                                  speaker.designation ||
                                  "Speaker"}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {event.agenda &&
                  Array.isArray(event.agenda) &&
                  event.agenda.length > 0 && (
                    <div className="content-section">
                      <h2>Event Agenda</h2>
                      <div className="agenda-timeline">
                        {event.agenda.map((item, index) => (
                          <div key={index} className="agenda-item">
                            <div className="agenda-time">
                              {item.time || "TBA"}
                            </div>
                            <div className="agenda-content">
                              <div className="agenda-dot"></div>
                              <h4>
                                {item.session ||
                                  item.title ||
                                  item.description ||
                                  "Session"}
                              </h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                <div className="content-section">
                  <h2>Requirements & Information</h2>
                  <div className="info-grid">
                    <div className="info-card">
                      <i className="fas fa-graduation-cap"></i>
                      <h4>Prerequisites</h4>
                      <p>
                        {event.requirements ||
                          event.prerequisites ||
                          "No specific requirements"}
                      </p>
                    </div>
                    <div className="info-card">
                      <i className="fa-solid fa-bangladeshi-taka-sign"></i>
                      <h4>Registration Fee</h4>
                      <p>
                        {event.registrationFee ||
                          event.fee ||
                          event.registration_fee ||
                          "Free"}
                      </p>
                    </div>
                  </div>
                </div>

                {event.tags &&
                  Array.isArray(event.tags) &&
                  event.tags.length > 0 && (
                    <div className="content-section">
                      <h2>Tags</h2>
                      <div className="tags-container">
                        {event.tags.map((tag, index) => (
                          <span key={index} className="tag">
                            {typeof tag === "string"
                              ? tag
                              : tag.text || tag.name || tag.title || "Tag"}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
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
                      <span>
                        {formatDate(event.date) || event.date || "Date TBA"}
                      </span>
                    </div>
                  </div>
                  <div className="quick-info-item">
                    <i className="fas fa-clock"></i>
                    <div>
                      <strong>Time</strong>
                      <span>{formatTime(event)}</span>
                    </div>
                  </div>
                  <div className="quick-info-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <strong>Venue</strong>
                      <span>
                        {event.location || event.venue || "Venue TBA"}
                      </span>
                    </div>
                  </div>
                  <div className="quick-info-item">
                    <i className="fas fa-tag"></i>
                    <div>
                      <strong>Category</strong>
                      <span>{event.category || "Event"}</span>
                    </div>
                  </div>
                  <div className="quick-info-item">
                    <i className="fas fa-info-circle"></i>
                    <div>
                      <strong>Status</strong>
                      <span
                        className={`status ${(
                          event.status || "upcoming"
                        ).toLowerCase()}`}
                      >
                        {event.status || "Upcoming"}
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
                  {relatedEvents.length > 0 ? (
                    relatedEvents.map((relatedEvent, index) => (
                      <div
                        key={relatedEvent.id || index}
                        className="related-event-item"
                        onClick={() => navigate(`/event/${relatedEvent.id}`)}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="related-event-image">
                          <img
                            src={
                              relatedEvent.image_url ||
                              relatedEvent.image ||
                              "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691562/event_img_2_afxz21.png"
                            }
                            alt={relatedEvent.title}
                          />
                        </div>
                        <div className="related-event-info">
                          <h4>{relatedEvent.title}</h4>
                          <span>
                            {formatDate(relatedEvent.date) || relatedEvent.date}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="related-event-item">
                      <div className="related-event-image">
                        <img
                          src="https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691562/event_img_2_afxz21.png"
                          alt="Related Event"
                        />
                      </div>
                      <div className="related-event-info">
                        <h4>More Events Coming Soon</h4>
                        <span>Stay tuned!</span>
                      </div>
                    </div>
                  )}
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
