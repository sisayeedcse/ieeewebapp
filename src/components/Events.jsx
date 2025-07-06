import React from "react";
import event1 from "../assets/event_img_1.png";
import event2 from "../assets/event_img_2.png";
import event3 from "../assets/event_img_3.png";
import event4 from "../assets/event_img_4.png";

const eventImages = [event1, event2, event3, event4, event1, event2];

const Events = () => {
  return (
    <section className="events-section py-5 bg-light">
      <div className="container">
        <div className="section-title event-header text-center mb-5">
          <h2 className="event-title">Recent Events</h2>
          <div
            className="event-underline mx-auto mt-2 mb-3"
            style={{ width: "60px", height: "3px", backgroundColor: "#333" }}
          ></div>
        </div>

        <div className="events-grid">
          {eventImages.map((img, idx) => (
            <div className="event-item" key={idx}>
              <img src={img} alt={`Event ${idx + 1}`} className="event-image" />
              <div className="event-overlay">
                <a href={`#event${idx + 1}`} className="event-link">
                  View Event
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
