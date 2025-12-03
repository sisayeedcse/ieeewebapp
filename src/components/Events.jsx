import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get base URL from environment variable or fallback
  const BASE_URL = "https://ieee-event-app.vercel.app";

  // Fetch recent events from backend API
  useEffect(() => {
    const fetchRecentEvents = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try multiple API endpoints that might exist
        const endpoints = [
          `${BASE_URL}/api/event?limit=6&page=1`,
          `${BASE_URL}/api/events?limit=6`,
          `${BASE_URL}/api/events?page=1&pageSize=6`,
        ];

        let data = null;
        let lastError = null;

        for (const url of endpoints) {
          try {
            console.log(`🔍 Trying API endpoint: ${url}`);
            const response = await fetch(url);

            if (response.ok) {
              const responseData = await response.json();
              console.log("✅ API Response:", responseData);

              // Handle different API response structures
              if (responseData.data && Array.isArray(responseData.data)) {
                data = responseData.data;
              } else if (Array.isArray(responseData)) {
                data = responseData;
              } else if (
                responseData.events &&
                Array.isArray(responseData.events)
              ) {
                data = responseData.events;
              }

              if (data && data.length > 0) {
                console.log(
                  `✅ Successfully fetched ${data.length} events from API`
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

        if (data && data.length > 0) {
          setEvents(data);
        } else {
          throw new Error(lastError || "No events found from any API endpoint");
        }
      } catch (error) {
        console.error("❌ Error fetching recent events:", error);
        setError(error.message);
        console.log("🔄 Falling back to static images");
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentEvents();
  }, [BASE_URL]);

  // Fallback static images for when API fails or no events
  const fallbackImages = [
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691563/event_img_1_boqokz.png",
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691562/event_img_2_afxz21.png",
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691561/event_img_3_uyjcvj.png",
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691553/event_img_4_lggcqm.png",
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691563/event_img_1_boqokz.png",
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691562/event_img_2_afxz21.png",
  ];

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Get display items - either fetched events or fallback images
  const displayItems =
    events.length > 0
      ? events.slice(0, 6)
      : fallbackImages.map((img, idx) => ({
          id: idx + 1,
          title: `Event ${idx + 1}`,
          image_url: img,
          date: null,
        }));
  return (
    <section className="events-section">
      <div className="container">
        <div className="events-header">
          <div className="events-badge">
            <span className="badge-text">Gallery</span>
          </div>
          <h2 className="events-title">
            Recent <span className="gradient-text">Events</span>
          </h2>
          <p className="events-subtitle">
            Explore our vibrant community through moments captured at our recent
            events and activities
          </p>
          {/* API Status Indicator */}
          {!loading && (
            <div
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontSize: "0.85rem",
                color: events.length > 0 ? "#22c55e" : "#f59e0b",
              }}
            >
              {events.length > 0 ? (
                <span></span>
              ) : error ? (
                <span>
                  <i
                    className="fas fa-exclamation-triangle"
                    style={{ marginRight: "5px" }}
                  ></i>
                  Using offline gallery (API: {error})
                </span>
              ) : (
                <span>
                  <i
                    className="fas fa-info-circle"
                    style={{ marginRight: "5px" }}
                  ></i>
                  No recent events available
                </span>
              )}
            </div>
          )}
        </div>

        <div className="events-gallery">
          {loading
            ? // Loading skeleton
              Array.from({ length: 6 }, (_, idx) => (
                <div
                  className={`event-card event-card-${(idx % 3) + 1}`}
                  key={`loading-${idx}`}
                >
                  <div className="event-image-wrapper">
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#f1f5f9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          border: "3px solid #e2e8f0",
                          borderTop: "3px solid #3b82f6",
                          borderRadius: "50%",
                          animation: "spin 1s linear infinite",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))
            : error
            ? // Error state with fallback to static images
              fallbackImages.map((img, idx) => (
                <div
                  className={`event-card event-card-${(idx % 3) + 1}`}
                  key={`fallback-${idx}`}
                >
                  <div className="event-image-wrapper">
                    <img
                      src={img}
                      alt={`Event ${idx + 1}`}
                      className="event-image"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.backgroundColor = "#e2e8f0";
                        e.target.style.border = "2px dashed #94a3b8";
                      }}
                    />
                    <div className="event-overlay">
                      <div className="event-content">
                        <div className="event-number">
                          {String(idx + 1).padStart(2, "0")}
                        </div>
                        <div className="event-info">
                          <h4
                            style={{
                              color: "white",
                              margin: "0 0 8px 0",
                              fontSize: "0.9rem",
                            }}
                          >
                            Event Gallery {idx + 1}
                          </h4>
                          <p
                            style={{
                              color: "#e2e8f0",
                              margin: 0,
                              fontSize: "0.8rem",
                              opacity: 0.8,
                            }}
                          >
                            {error && "API temporarily unavailable"}
                          </p>
                        </div>
                        <Link to={`/events`} className="event-btn">
                          <span>View Events</span>
                          <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="event-glow"></div>
                  </div>
                </div>
              ))
            : // Display fetched events
              displayItems.map((event, idx) => (
                <div
                  className={`event-card event-card-${(idx % 3) + 1}`}
                  key={event.id || idx}
                >
                  <div className="event-image-wrapper">
                    <img
                      src={
                        event.image_url ||
                        fallbackImages[idx % fallbackImages.length]
                      }
                      alt={event.title || `Event ${idx + 1}`}
                      className="event-image"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          fallbackImages[idx % fallbackImages.length];
                        if (
                          e.target.src ===
                          fallbackImages[idx % fallbackImages.length]
                        ) {
                          e.target.style.backgroundColor = "#e2e8f0";
                          e.target.style.border = "2px dashed #94a3b8";
                        }
                      }}
                    />
                    <div className="event-overlay">
                      <div className="event-content">
                        <div className="event-number">
                          {String(idx + 1).padStart(2, "0")}
                        </div>
                        <div className="event-info">
                          <h4
                            style={{
                              color: "white",
                              margin: "0 0 8px 0",
                              fontSize: "0.9rem",
                            }}
                          >
                            {event.title || `Event ${idx + 1}`}
                          </h4>
                          {event.date && (
                            <p
                              style={{
                                color: "#e2e8f0",
                                margin: 0,
                                fontSize: "0.8rem",
                                opacity: 0.8,
                              }}
                            >
                              <i
                                className="fas fa-calendar"
                                style={{ marginRight: "4px" }}
                              ></i>
                              {formatDate(event.date)}
                            </p>
                          )}
                        </div>
                        <Link
                          to={event.id ? `/event/${event.id}` : `/events`}
                          className="event-btn"
                        >
                          <span>{event.id ? "View Event" : "View Events"}</span>
                          <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="event-glow"></div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
