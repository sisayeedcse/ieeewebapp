import React from "react";

const event1 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691563/event_img_1_boqokz.png",
  event2 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691562/event_img_2_afxz21.png",
  event3 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691561/event_img_3_uyjcvj.png",
  event4 =
    "https://res.cloudinary.com/dknflcbt1/image/upload/v1752691553/event_img_4_lggcqm.png";

const eventImages = [event1, event2, event3, event4, event1, event2];

const Events = () => {
  return (
    <section className="events-section py-5 bg-light">
      <div className="container">
        <div className="section-title event-header text-center mb-5">
          <h2 className="event-title">
            Recent <span>Events</span>
          </h2>
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
