// src/Pages/EventPage.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./EventPage.css";

const event1 =
  "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691563/event_img_1_boqokz.png";
const event2 =
  "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691562/event_img_2_afxz21.png";
const event3 =
  "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691561/event_img_3_uyjcvj.png";
const event4 =
  "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691553/event_img_4_lggcqm.png";
const eventImages = [event1, event2, event3, event4, event1, event2];

const EventPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const featuredEvents = [
    {
      id: 1,
      title: "IEEE Technical Workshop 2024",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Premier University Auditorium",
      category: "workshop",
      status: "upcoming",
      description:
        "Join us for an intensive technical workshop covering the latest advancements in AI and Machine Learning.",
      image: eventImages[0],
      attendees: 150,
      isFeatured: true,
    },
    {
      id: 2,
      title: "Innovation Summit 2024",
      date: "April 20, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Main Campus",
      category: "summit",
      status: "upcoming",
      description:
        "A flagship event bringing together industry leaders, researchers, and students to discuss emerging technologies.",
      image: eventImages[1],
      attendees: 300,
      isFeatured: true,
    },
    {
      id: 3,
      title: "Robotics Competition",
      date: "May 10, 2024",
      time: "8:00 AM - 5:00 PM",
      location: "Engineering Lab",
      category: "competition",
      status: "upcoming",
      description:
        "Annual robotics competition challenging students to design and build autonomous robots.",
      image: eventImages[2],
      attendees: 80,
      isFeatured: true,
    },
  ];

  const recentEvents = [
    {
      id: 4,
      title: "IEEE Day Celebration",
      date: "October 6, 2023",
      time: "2:00 PM - 6:00 PM",
      location: "Student Center",
      category: "celebration",
      status: "completed",
      description:
        "Annual IEEE Day celebration with networking sessions and technical presentations.",
      image: eventImages[3],
      attendees: 200,
      isFeatured: false,
    },
    {
      id: 5,
      title: "Code Sprint Challenge",
      date: "November 18, 2023",
      time: "10:00 AM - 8:00 PM",
      location: "Computer Lab",
      category: "competition",
      status: "completed",
      description:
        "24-hour coding competition testing programming skills and problem-solving abilities.",
      image: eventImages[4],
      attendees: 120,
      isFeatured: false,
    },
    {
      id: 6,
      title: "Industry Connect Session",
      date: "December 5, 2023",
      time: "3:00 PM - 5:00 PM",
      location: "Conference Hall",
      category: "networking",
      status: "completed",
      description:
        "Networking session connecting students with industry professionals and alumni.",
      image: eventImages[5],
      attendees: 180,
      isFeatured: false,
    },
  ];

  const allEvents = [...featuredEvents, ...recentEvents];

  const filteredEvents =
    activeFilter === "all"
      ? allEvents
      : allEvents.filter((event) => event.category === activeFilter);

  const categories = [
    { id: "all", name: "All Events", icon: "fas fa-calendar-alt" },
    { id: "workshop", name: "Workshops", icon: "fas fa-tools" },
    { id: "summit", name: "Summits", icon: "fas fa-mountain" },
    { id: "competition", name: "Competitions", icon: "fas fa-trophy" },
    { id: "networking", name: "Networking", icon: "fas fa-users" },
    { id: "celebration", name: "Celebrations", icon: "fas fa-star" },
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
        <section className="eventpage-event-page-hero">
          <div className="eventpage-event-page-hero-background">
            <div className="eventpage-event-page-hero-pattern"></div>
            <div className="eventpage-event-page-hero-overlay"></div>
          </div>
          <div className="eventpage-event-page-container eventpage-event-page-hero-content">
            <h1 className="eventpage-event-page-hero-title">
              Inspiring Events &
              <span className="eventpage-event-page-highlight-text">
                Tech Gatherings
              </span>
            </h1>
            <p className="eventpage-event-page-hero-subtitle">
              Discover our exciting lineup of technical workshops, innovative
              summits, competitive programming challenges, and networking
              opportunities that shape the future of technology and engineering
              excellence.
            </p>
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
                Featured Events
              </h2>
              <p className="eventpage-event-page-section-subtitle">
                Don't miss these upcoming flagship events designed to elevate
                your technical skills
              </p>
            </div>
            <div className="eventpage-event-page-featured-events-grid">
              {featuredEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`eventpage-event-page-featured-event-card ${
                    index === 1 ? "eventpage-event-page-featured-large" : ""
                  }`}
                >
                  <div className="eventpage-event-page-event-image">
                    <img src={event.image} alt={event.title} />
                    <div className="eventpage-event-page-event-status">
                      <span
                        className={`eventpage-event-page-status-badge ${event.status}`}
                      >
                        {event.status === "upcoming" ? "Upcoming" : "Completed"}
                      </span>
                    </div>
                  </div>
                  <div className="eventpage-event-page-event-content">
                    <div className="eventpage-event-page-event-meta">
                      <span className="eventpage-event-page-event-date">
                        <i className="fas fa-calendar"></i>
                        {event.date}
                      </span>
                      <span className="eventpage-event-page-event-time">
                        <i className="fas fa-clock"></i>
                        {event.time}
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
                        {event.location}
                      </span>
                      <span className="eventpage-event-page-event-attendees">
                        <i className="fas fa-users"></i>
                        {event.attendees} attendees
                      </span>
                    </div>
                    <button className="eventpage-event-page-event-btn">
                      <i className="fas fa-arrow-right"></i>
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
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
                  onClick={() => setActiveFilter(category.id)}
                >
                  <i className={category.icon}></i>
                  {category.name}
                </button>
              ))}
            </div>
            <div className="eventpage-event-page-events-grid">
              {filteredEvents.map((event) => (
                <div key={event.id} className="eventpage-event-page-event-card">
                  <div className="eventpage-event-page-event-image">
                    <img src={event.image} alt={event.title} />
                    <div className="eventpage-event-page-event-overlay">
                      <button className="eventpage-event-page-overlay-btn">
                        <i className="fas fa-eye"></i>
                      </button>
                    </div>
                  </div>
                  <div className="eventpage-event-content">
                    <div className="eventpage-event-meta">
                      <span className="eventpage-event-category">
                        {event.category}
                      </span>
                      <span
                        className={`eventpage-event-status ${event.status}`}
                      >
                        {event.status}
                      </span>
                    </div>
                    <h3 className="eventpage-event-title">{event.title}</h3>
                    <p className="eventpage-event-description">
                      {event.description}
                    </p>
                    <div className="eventpage-event-footer">
                      <div className="eventpage-event-info">
                        <span className="eventpage-event-date">
                          <i className="fas fa-calendar"></i>
                          {event.date}
                        </span>
                        <span className="eventpage-event-location">
                          <i className="fas fa-map-marker-alt"></i>
                          {event.location}
                        </span>
                      </div>
                      <button className="eventpage-event-btn-small">
                        <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                <button className="eventpage-btn-primary">
                  <i className="fas fa-bell"></i>
                  Subscribe to Updates
                </button>
                <button className="eventpage-btn-secondary">
                  <i className="fas fa-envelope"></i>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default EventPage;
