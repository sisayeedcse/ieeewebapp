import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./EventPage.css";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [featuredLoading, setFeaturedLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalEvents, setTotalEvents] = useState(0);
  const [eventsPerPage] = useState(6); // 6 events per page

  // Get base URL from environment variable or fallback
  const BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

  // Fetch featured events (upcoming events)
  const fetchFeaturedEvents = async () => {
    try {
      setFeaturedLoading(true);
      
      // Use dedicated date query to get upcoming events
      const currentDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
      const url = `${BASE_URL}/api/event?date=${currentDate}&limit=3&page=1`;

      console.log('Fetching featured events from:', url);
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log("Featured events - API Response:", data);

      // Handle different response structures
      const eventsArray = data.data || data.events || data || [];
      console.log("Featured events - Events array:", eventsArray);

      // Sort by most recently created/added (if available)
      const sortedEvents = eventsArray.sort((a, b) => {
        // Sort by createdAt if available (most recent first)
        if (a.createdAt && b.createdAt) {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
        // Fallback: sort by id (assuming higher id means more recent)
        if (a.id && b.id) {
          return b.id - a.id;
        }
        // Final fallback: sort by event date (earliest upcoming event first)
        return new Date(a.date) - new Date(b.date);
      });

      console.log("Featured events - Sorted upcoming events:", sortedEvents);
      setFeaturedEvents(sortedEvents);
    } catch (error) {
      console.error("Error fetching featured events:", error);
      setFeaturedEvents([]);
    } finally {
      setFeaturedLoading(false);
    }
  };

  // Fetch events with optional category filter and pagination
  const fetchEvents = async (category = null, page = 1) => {
    try {
      setLoading(true);
      let url = `${BASE_URL}/api/event`;

      // Build query parameters using page/pageSize pattern (which your backend prefers)
      const params = new URLSearchParams();

      // Add pagination parameters - trying both patterns to see which works
      params.append("page", page.toString());
      params.append("pageSize", eventsPerPage.toString());
      // Also try limit/offset in case the backend prefers that
      params.append("limit", eventsPerPage.toString());
      params.append("offset", ((page - 1) * eventsPerPage).toString());

      // Add tag-based filtering parameter if not 'all' and not null
      if (category && category !== "all") {
        // Try multiple parameter names for tag filtering
        params.append("tags", category);
        params.append("tag", category);
        params.append("category", category);
      }

      url += `?${params.toString()}`;
      console.log("Fetching events with URL:", url);

      const response = await fetch(url);
      const data = await response.json();
      console.log("Events API response:", data);

      let eventsData = data.data || data.events || data || [];

      // Client-side filtering as fallback if backend doesn't support tag filtering
      if (category && category !== "all" && eventsData.length > 0) {
        eventsData = eventsData.filter((event) => {
          // Check if event has tags property and if it contains the category
          if (event.tags) {
            // Handle both string and array tags
            if (Array.isArray(event.tags)) {
              return event.tags.some((tag) =>
                tag.toLowerCase().includes(category.toLowerCase())
              );
            } else if (typeof event.tags === "string") {
              return event.tags.toLowerCase().includes(category.toLowerCase());
            }
          }

          // Also check in title and description as fallback
          const searchText = category.toLowerCase();
          const titleMatch = event.title?.toLowerCase().includes(searchText);
          const descMatch = event.description
            ?.toLowerCase()
            .includes(searchText);

          return titleMatch || descMatch;
        });
      }

      // Update state with the filtered data
      setEvents(eventsData);
      setTotalEvents(data.meta?.total || eventsData.length); // Use actual length for client-side filtering
      setCurrentPage(data.meta?.currentPage || page);
    } catch (error) {
      console.error("Error fetching events:", error);
      setEvents([]);
      setTotalEvents(0);
    } finally {
      setLoading(false);
    }
  };
  // Initial fetch on component mount
  useEffect(() => {
    fetchEvents();
    fetchFeaturedEvents();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle category filter change
  const handleFilterChange = (categoryId) => {
    console.log("Filtering events by category:", categoryId);
    setActiveFilter(categoryId);
    setCurrentPage(1); // Reset to first page when changing category
    fetchEvents(categoryId, 1);
  };

  // Handle page change
  const handlePageChange = (page) => {
    // Store current scroll position relative to the events section
    const eventsSection = document.querySelector(
      ".eventpage-event-page-filter-section"
    );
    const currentScrollTop = window.pageYOffset;
    const eventsSectionTop = eventsSection?.offsetTop || 0;

    fetchEvents(activeFilter, page);

    // After a small delay (to let the loading state render), maintain scroll position
    setTimeout(() => {
      const newEventsSectionTop = eventsSection?.offsetTop || 0;
      const scrollAdjustment = newEventsSectionTop - eventsSectionTop;
      window.scrollTo({
        top: currentScrollTop + scrollAdjustment,
        behavior: "instant",
      });
    }, 50);
  };

  // Calculate pagination info
  const totalPages = Math.ceil(totalEvents / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage + 1;
  const endIndex = Math.min(currentPage * eventsPerPage, totalEvents);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Helper function to trim description
  const trimDescription = (description, maxLength = 100) => {
    if (!description) return "";
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + "...";
  };

  const categories = [
    { id: "all", name: "All Events", icon: "fas fa-calendar-alt" },
    { id: "workshops", name: "Workshops", icon: "fas fa-tools" },
    { id: "summits", name: "Summits", icon: "fas fa-mountain" },
    { id: "competitions", name: "Competitions", icon: "fas fa-trophy" },
    { id: "networking", name: "Networking", icon: "fas fa-users" },
    { id: "celebrations", name: "Celebrations", icon: "fas fa-star" },
  ];

  const eventStats = [
    { number: "50+", label: "Events Organized", icon: "fas fa-calendar-check" },
    { number: "2000+", label: "Participants", icon: "fas fa-users" },
    { number: "15+", label: "Industry Partners", icon: "fas fa-handshake" },
    { number: "5+", label: "Years Experience", icon: "fas fa-award" },
  ];

  return (
    <>
      <Navbar variant="blue" />
      <div className="eventpage-event-page-main">
        {/* Hero Section */}
        <section className="eventpage-hero">
          <div className="eventpage-hero-background">
            <div className="eventpage-hero-grid"></div>
            <div className="eventpage-hero-glow"></div>
          </div>
          <div className="eventpage-container">
            <div className="eventpage-hero-content">
              <div className="eventpage-hero-badge">
                <span className="eventpage-badge-icon">✨</span>
                <span>Premier University IEEE Events</span>
              </div>
              <h1 className="eventpage-hero-title">
                <span className="eventpage-title-main">Inspiring Events &</span>
                <span className="eventpage-title-highlight">
                  Tech Gatherings
                </span>
              </h1>
              <p className="eventpage-hero-description">
                Discover our exciting lineup of technical workshops, innovative
                summits, competitive programming challenges, and networking
                opportunities that shape the future of technology and
                engineering excellence.
              </p>
              <div className="eventpage-hero-actions">
                <button
                  className="eventpage-cta-primary"
                  onClick={() => {
                    const allEventsSection = document.querySelector(
                      ".eventpage-event-page-filter-section"
                    );
                    if (allEventsSection) {
                      allEventsSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  <span>Explore Events</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
                <Link to="/portal" className="eventpage-cta-secondary">
                  <i className="fas fa-users"></i>
                  <span>Join Us</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Event Stats */}
        <section className="eventpage-event-page-stats-section">
          <div className="eventpage-event-page-container">
            <div className="eventpage-event-page-stats-grid">
              {eventStats.map((stat, index) => (
                <div key={index} className="eventpage-event-page-stat-card">
                  <div className="eventpage-event-page-stat-icon">
                    <i className={stat.icon}></i>
                  </div>
                  <div className="eventpage-event-page-stat-content">
                    <span className="eventpage-event-page-stat-number">
                      {stat.number}
                    </span>
                    <span className="eventpage-event-page-stat-label">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="eventpage-event-page-featured-events-section">
          <div className="eventpage-event-page-container">
            <div className="eventpage-event-page-section-header">
              <h2 className="eventpage-event-page-section-title">
                Upcoming  Events
              </h2>
              <p className="eventpage-event-page-section-subtitle">
                Don't miss these upcoming flagship events designed to elevate
                your technical skills
              </p>
            </div>
            <div className="eventpage-event-page-featured-events-grid">
              {featuredLoading ? (
                // Loading placeholder for featured events
                Array.from({ length: 3 }, (_, index) => (
                  <div
                    key={`featured-loading-${index}`}
                    className={`eventpage-event-page-featured-event-card ${
                      index === 1 ? "eventpage-event-page-featured-large" : ""
                    } eventpage-loading-card`}
                  >
                    <div className="eventpage-event-page-event-image eventpage-loading-skeleton">
                      <div className="eventpage-loading-placeholder"></div>
                    </div>
                    <div className="eventpage-event-page-event-content">
                      <div className="eventpage-loading-skeleton eventpage-loading-title"></div>
                      <div className="eventpage-loading-skeleton eventpage-loading-description"></div>
                      <div className="eventpage-loading-skeleton eventpage-loading-description"></div>
                    </div>
                  </div>
                ))
              ) : featuredEvents.length === 0 ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "2rem",
                    gridColumn: "1 / -1",
                  }}
                >
                  <i
                    className="fas fa-calendar-times"
                    style={{ fontSize: "2rem", marginBottom: "1rem" }}
                  ></i>
                  <p>No upcoming events available at the moment.</p>
                </div>
              ) : (
                featuredEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className={`eventpage-event-page-featured-event-card ${
                      index === 1 ? "eventpage-event-page-featured-large" : ""
                    }`}
                  >
                    <div className="eventpage-event-page-event-image">
                      <img src={event.image_url} alt={event.title} />
                      <div className="eventpage-event-page-event-status">
                        <span className="eventpage-event-page-status-badge upcoming">
                          Upcoming
                        </span>
                      </div>
                    </div>
                    <div className="eventpage-event-page-event-content">
                      <div className="eventpage-event-page-event-meta">
                        <span className="eventpage-event-page-event-date">
                          <i className="fas fa-calendar"></i>
                          {formatDate(event.date)}
                        </span>
                        <span className="eventpage-event-page-event-time">
                          <i className="fas fa-clock"></i>
                          {event.startTime} - {event.endTime}
                        </span>
                      </div>
                      <h3 className="eventpage-event-page-event-title">
                        {event.title}
                      </h3>
                      <p className="eventpage-event-page-event-description">
                        {event.description}
                      </p>
                      <div className="eventpage-event-page-event-details">
                        <span className="eventpage-event-page-event-location">
                          <i className="fas fa-map-marker-alt"></i>
                          {event.venue}
                        </span>
                        <span className="eventpage-event-page-event-attendees">
                          <i className="fas fa-users"></i>
                          {event.attendeesCount} attendees
                        </span>
                      </div>
                      <Link
                        to={`/event/${event.id}`}
                        className="eventpage-event-page-event-btn"
                      >
                        <i className="fas fa-arrow-right"></i>
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Event Filter Section */}
        <section className="eventpage-event-page-filter-section">
          <div className="eventpage-event-page-container">
            <div className="eventpage-event-page-section-header">
              <h2 className="eventpage-event-page-section-title">All Events</h2>
              <p className="eventpage-event-page-section-subtitle">
                Explore our comprehensive collection of technical events and
                activities
              </p>
            </div>
            <div className="eventpage-event-page-filter-tabs">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`eventpage-event-page-filter-tab ${
                    activeFilter === category.id
                      ? "eventpage-event-page-active"
                      : ""
                  }`}
                  onClick={() => handleFilterChange(category.id)}
                  disabled={loading}
                >
                  <i className={category.icon}></i>
                  {category.name}
                  {activeFilter === category.id && !loading && (
                    <span className="eventpage-filter-count">
                      ({totalEvents})
                    </span>
                  )}
                </button>
              ))}
            </div>
            {activeFilter !== "all" && (
              <div className="eventpage-filter-status">
                <span className="eventpage-filter-active-indicator">
                  <i className="fas fa-filter"></i>
                  Showing events tagged with "
                  {categories.find((c) => c.id === activeFilter)?.name}"
                  {!loading && (
                    <button
                      className="eventpage-clear-filter"
                      onClick={() => handleFilterChange("all")}
                      title="Clear filter"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  )}
                </span>
              </div>
            )}
            <div className="eventpage-event-page-events-grid">
              {loading ? (
                // Create placeholder cards to maintain grid height during loading
                Array.from({ length: eventsPerPage }, (_, index) => (
                  <div
                    key={`loading-${index}`}
                    className="eventpage-event-page-event-card eventpage-loading-card"
                  >
                    <div className="eventpage-event-page-event-image eventpage-loading-skeleton">
                      <div className="eventpage-loading-placeholder"></div>
                    </div>
                    <div className="eventpage-event-content">
                      <div className="eventpage-loading-skeleton eventpage-loading-title"></div>
                      <div className="eventpage-loading-skeleton eventpage-loading-description"></div>
                      <div className="eventpage-loading-skeleton eventpage-loading-description"></div>
                      <div className="eventpage-event-footer">
                        <div className="eventpage-loading-skeleton eventpage-loading-footer"></div>
                      </div>
                    </div>
                  </div>
                ))
              ) : events.length === 0 ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "2rem",
                    gridColumn: "1 / -1",
                  }}
                >
                  <i
                    className="fas fa-calendar-times"
                    style={{ fontSize: "2rem", marginBottom: "1rem" }}
                  ></i>
                  <p>No events found for this category.</p>
                </div>
              ) : (
                events.map((event) => (
                  <div
                    key={event.id}
                    className="eventpage-event-page-event-card"
                  >
                    <div className="eventpage-event-page-event-image">
                      <img src={event.image_url} alt={event.title} />
                      <div className="eventpage-event-page-event-overlay">
                        <Link
                          to={`/event/${event.id}`}
                          className="eventpage-event-page-overlay-btn"
                        >
                          <i className="fas fa-eye"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="eventpage-event-content">
                      <h3 className="eventpage-event-title">{event.title}</h3>
                      <p className="eventpage-event-description">
                        {trimDescription(event.description)}
                      </p>
                      <div className="eventpage-event-footer">
                        <div className="eventpage-event-info">
                          <span className="eventpage-event-date">
                            <i className="fas fa-calendar"></i>
                            {formatDate(event.date)}
                          </span>
                          <span className="eventpage-event-location">
                            <i className="fas fa-map-marker-alt"></i>
                            {event.venue}
                          </span>
                        </div>
                        <Link
                          to={`/event/${event.id}`}
                          className="eventpage-event-btn-small"
                        >
                          <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Pagination */}
            {!loading && (
              <div className="eventpage-pagination">
                <div className="eventpage-pagination-info">
                  <span>
                    Showing {totalEvents > 0 ? startIndex : 0}-
                    {totalEvents > 0 ? endIndex : 0} of {totalEvents} events
                  </span>
                </div>
                {totalPages > 1 && (
                  <div className="eventpage-pagination-controls">
                    {/* Previous Button */}
                    <button
                      className={`eventpage-pagination-btn ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <i className="fas fa-chevron-left"></i>
                      Previous
                    </button>

                    {/* Page Numbers */}
                    <div className="eventpage-pagination-numbers">
                      {/* First page */}
                      {currentPage > 3 && (
                        <>
                          <button
                            className="eventpage-pagination-number"
                            onClick={() => handlePageChange(1)}
                          >
                            1
                          </button>
                          {currentPage > 4 && (
                            <span className="eventpage-pagination-dots">
                              ...
                            </span>
                          )}
                        </>
                      )}

                      {/* Pages around current page */}
                      {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(
                          (page) =>
                            page >= Math.max(1, currentPage - 2) &&
                            page <= Math.min(totalPages, currentPage + 2)
                        )
                        .map((page) => (
                          <button
                            key={page}
                            className={`eventpage-pagination-number ${
                              currentPage === page ? "active" : ""
                            }`}
                            onClick={() => handlePageChange(page)}
                          >
                            {page}
                          </button>
                        ))}

                      {/* Last page */}
                      {currentPage < totalPages - 2 && (
                        <>
                          {currentPage < totalPages - 3 && (
                            <span className="eventpage-pagination-dots">
                              ...
                            </span>
                          )}
                          <button
                            className="eventpage-pagination-number"
                            onClick={() => handlePageChange(totalPages)}
                          >
                            {totalPages}
                          </button>
                        </>
                      )}
                    </div>

                    {/* Next Button */}
                    <button
                      className={`eventpage-pagination-btn ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="eventpage-cta-section">
          <div className="eventpage-container">
            <div className="eventpage-cta-content">
              <h2 className="eventpage-cta-title">
                Ready to Join Our Next Event?
              </h2>
              <p className="eventpage-cta-subtitle">
                Stay updated with the latest events and be part of our vibrant
                tech community
              </p>
              <div className="eventpage-cta-actions">
                <Link to="/contactus" className="eventpage-cta-secondary">
                  <i className="fas fa-envelope"></i>
                  <span>Get in Touch</span>
                </Link>
                <Link to="/contactus" className="eventpage-cta-secondary">
                  <i className="fas fa-phone"></i>
                  <span>Contact Us</span>
                </Link>
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

export default EventPage;
