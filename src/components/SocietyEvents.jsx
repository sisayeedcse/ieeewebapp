import React from "react";
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
  const events = societyEventsData[society] || [];

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

        <div className={getVariantClass("society-events-grid")}>
          {events.map((event, index) => (
            <div
              key={event.id}
              className={getVariantClass("society-event-card")}
            >
              <div className={getVariantClass("society-event-image-wrapper")}>
                <img
                  src={event.image}
                  alt={event.title}
                  className={getVariantClass("society-event-image")}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.backgroundColor = "#e2e8f0";
                    e.target.style.border = "2px dashed #94a3b8";
                  }}
                />
                <div className={getVariantClass("society-event-overlay")}>
                  <div className={getVariantClass("society-event-type")}>
                    {event.type}
                  </div>
                </div>
              </div>

              <div className={getVariantClass("society-event-content")}>
                <div className={getVariantClass("society-event-date")}>
                  {new Date(event.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <h3 className={getVariantClass("society-event-title")}>
                  {event.title}
                </h3>
                <p className={getVariantClass("society-event-description")}>
                  {event.description}
                </p>
                <Link
                  to={`/event/${event.id}`}
                  className={getVariantClass("society-event-btn")}
                >
                  <span>Learn More</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

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
