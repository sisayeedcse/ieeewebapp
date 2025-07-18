import React from "react";

const event1 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691563/event_img_1_boqokz.png",
  event2 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691562/event_img_2_afxz21.png",
  event3 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691561/event_img_3_uyjcvj.png",
  event4 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/q_auto/v1752691553/event_img_4_lggcqm.png";

const eventImages = [event1, event2, event3, event4, event1, event2];

const Events = () => {
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
        </div>

        <div className="events-gallery">
          {eventImages.map((img, idx) => (
            <div className={`event-card event-card-${(idx % 3) + 1}`} key={idx}>
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
                    <a href={`#event${idx + 1}`} className="event-btn">
                      <span>View Event</span>
                      <i className="fas fa-arrow-right"></i>
                    </a>
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
