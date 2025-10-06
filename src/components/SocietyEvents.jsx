import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SocietyEvents.css";

// Demo event data for each society
const societyEventsData = {
  WIE: [
    {
      id: 1,
      title: "Women in Tech Leadership Summit",
      date: "2024-12-15",
      description:
        "Empowering women leaders in technology through networking and skill development.",
      image:
        "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691563/event_img_1_boqokz.png",
      type: "Workshop",
    },
    {
      id: 2,
      title: "Code & Coffee: Women Developers Meetup",
      date: "2024-11-20",
      description:
        "A casual networking event for women in software development.",
      image:
        "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691562/event_img_2_afxz21.png",
      type: "Networking",
    },
    {
      id: 3,
      title: "Girls in STEM Career Fair",
      date: "2024-10-30",
      description: "Connecting young women with opportunities in STEM fields.",
      image:
        "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691561/event_img_3_uyjcvj.png",
      type: "Career",
    },
  ],
  RAS: [
    {
      id: 4,
      title: "Robotics Competition 2024",
      date: "2024-12-10",
      description:
        "Annual robotics competition featuring autonomous navigation challenges.",
      image:
        "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691553/event_img_4_lggcqm.png",
      type: "Competition",
    },
    {
      id: 5,
      title: "AI & Robotics Workshop",
      date: "2024-11-25",
      description: "Hands-on workshop on integrating AI with robotic systems.",
      image:
        "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691563/event_img_1_boqokz.png",
      type: "Workshop",
    },
    {
      id: 6,
      title: "Arduino & Sensor Integration Bootcamp",
      date: "2024-10-15",
      description: "Learn to build intelligent sensor networks with Arduino.",
      image:
        "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691562/event_img_2_afxz21.png",
      type: "Bootcamp",
    },
  ],
  CS: [
    {
      id: 7,
      title: "CodeWar Hackathon 2024",
      date: "2024-12-05",
      description:
        "48-hour intensive coding competition with real-world problem solving.",
      image:
        "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691561/event_img_3_uyjcvj.png",
      type: "Hackathon",
    },
    {
      id: 8,
      title: "Machine Learning Masterclass",
      date: "2024-11-18",
      description: "Deep dive into ML algorithms and practical implementation.",
      image:
        "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691553/event_img_4_lggcqm.png",
      type: "Workshop",
    },
    {
      id: 9,
      title: "Cybersecurity Awareness Workshop",
      date: "2024-10-22",
      description: "Essential cybersecurity practices for software developers.",
      image:
        "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691563/event_img_1_boqokz.png",
      type: "Workshop",
    },
  ],
};

const SocietyEvents = ({ society, variant }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get base URL from environment variable or fallback
  const BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

  // Fetch society-specific events from API
  useEffect(() => {
    const fetchSocietyEvents = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try multiple API endpoints that might exist
        const endpoints = [
          `${BASE_URL}/api/event?limit=6`,
          `${BASE_URL}/api/events?limit=6`,
          `${BASE_URL}/api/events?page=1&pageSize=6`,
        ];

        let allEvents = [];
        let lastError = null;

        for (const url of endpoints) {
          try {
            console.log(`🔍 Fetching society events from: ${url}`);
            const response = await fetch(url);

            if (response.ok) {
              const responseData = await response.json();
              console.log("✅ Society Events API Response:", responseData);

              // Handle different API response structures
              if (responseData.data && Array.isArray(responseData.data)) {
                allEvents = responseData.data;
              } else if (Array.isArray(responseData)) {
                allEvents = responseData;
              } else if (
                responseData.events &&
                Array.isArray(responseData.events)
              ) {
                allEvents = responseData.events;
              }

              if (allEvents && allEvents.length > 0) {
                console.log(
                  `✅ Successfully fetched ${allEvents.length} events from API`
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

        if (allEvents && allEvents.length > 0) {
          // Filter events based on society tags
          const filteredEvents = allEvents.filter((event) => {
            if (!event.tags) return false;

            // Handle both string and array tags
            let eventTags = [];
            if (Array.isArray(event.tags)) {
              eventTags = event.tags.map((tag) =>
                typeof tag === "string"
                  ? tag.toUpperCase()
                  : (tag.text || tag.name || tag.title || "").toUpperCase()
              );
            } else if (typeof event.tags === "string") {
              eventTags = [event.tags.toUpperCase()];
            }

            // Check if any of the event tags match the society name
            return eventTags.includes(society.toUpperCase());
          });

          console.log(
            `🎯 Filtered ${filteredEvents.length} events for ${society} society`
          );
          setEvents(filteredEvents.slice(0, 3)); // Limit to 3 events for display
        } else {
          throw new Error(lastError || "No events found from any API endpoint");
        }
      } catch (error) {
        console.error(`❌ Error fetching ${society} events:`, error);
        setError(error.message);
        console.log("🔄 Falling back to demo data");

        // Fallback to demo data for the specific society
        const fallbackEvents = societyEventsData[society] || [];
        setEvents(fallbackEvents);
      } finally {
        setLoading(false);
      }
    };

    fetchSocietyEvents();
  }, [society, BASE_URL]);

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

  const getVariantClass = (baseClass) => {
    return `${baseClass} ${baseClass}-${variant}`;
  };

  return (
    <section className={getVariantClass("society-events")}>
      <div className="container">
        <div className={getVariantClass("society-events-header")}>
          <div className={getVariantClass("society-events-badge")}>
            <span className="badge-text">Our Events</span>
          </div>
          <h2 className={getVariantClass("society-events-title")}>
            Recent <span className="gradient-text">Activities</span>
          </h2>
          <p className={getVariantClass("society-events-subtitle")}>
            Discover the exciting events and workshops organized by our{" "}
            {society} chapter
          </p>
        </div>

        {loading ? (
          // Loading skeleton
          <div className={getVariantClass("society-events-grid")}>
            {Array.from({ length: 3 }, (_, idx) => (
              <div
                key={`loading-${idx}`}
                className={getVariantClass("society-event-card")}
              >
                <div className={getVariantClass("society-event-image-wrapper")}>
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
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
                <div className={getVariantClass("society-event-content")}>
                  <div
                    style={{
                      height: "20px",
                      backgroundColor: "#e2e8f0",
                      borderRadius: "4px",
                      marginBottom: "10px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "60px",
                      backgroundColor: "#f1f5f9",
                      borderRadius: "4px",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={getVariantClass("society-events-grid")}>
            {events.map((event, index) => (
              <div
                key={event.id || index}
                className={getVariantClass("society-event-card")}
              >
                <div className={getVariantClass("society-event-image-wrapper")}>
                  <img
                    src={
                      event.image_url ||
                      event.image ||
                      `https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691563/event_img_${
                        (index % 4) + 1
                      }_boqokz.png`
                    }
                    alt={event.title}
                    className={getVariantClass("society-event-image")}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = `https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691563/event_img_${
                        (index % 4) + 1
                      }_boqokz.png`;
                      if (e.target.src.includes("event_img_")) {
                        e.target.style.backgroundColor = "#e2e8f0";
                        e.target.style.border = "2px dashed #94a3b8";
                      }
                    }}
                  />
                  <div className={getVariantClass("society-event-overlay")}>
                    <div className={getVariantClass("society-event-type")}>
                      {event.type || event.category || society}
                    </div>
                  </div>
                </div>

                <div className={getVariantClass("society-event-content")}>
                  <div className={getVariantClass("society-event-date")}>
                    {formatDate(event.date) || event.date || "Date TBA"}
                  </div>
                  <h3 className={getVariantClass("society-event-title")}>
                    {event.title}
                  </h3>
                  <p className={getVariantClass("society-event-description")}>
                    {event.description?.substring(0, 100) + "..." ||
                      `Join us for this exciting ${society} event!`}
                  </p>
                  <Link
                    to={event.id ? `/event/${event.id}?variant=${variant}` : `/events`}
                    className={getVariantClass("society-event-btn")}
                  >
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}

            {/* Show message when no events are found */}
            {!loading && events.length === 0 && (
              <div
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "40px 20px",
                  color: "#64748b",
                }}
              >
                <i
                  className="fas fa-calendar-times"
                  style={{
                    fontSize: "3rem",
                    marginBottom: "20px",
                    opacity: 0.5,
                  }}
                ></i>
                <h3 style={{ marginBottom: "10px" }}>
                  No {society} Events Yet
                </h3>
                <p>
                  Check back soon for upcoming {society} activities and
                  workshops!
                </p>
              </div>
            )}
          </div>
        )}

        <div className={getVariantClass("society-events-footer")}>
          <Link to="/events" className={getVariantClass("view-all-events-btn")}>
            <span>View All Events</span>
            <i className="fas fa-calendar-alt"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SocietyEvents;
