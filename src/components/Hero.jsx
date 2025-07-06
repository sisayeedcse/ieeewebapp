// src/Pages/Hero.jsx
import React, { useRef, useState, useEffect } from "react";
import hero1 from "../assets/event_img_1.png";
import hero2 from "../assets/event_img_2.png";
import hero3 from "../assets/event_img_3.png";
import "./Hero.css";

const slides = [
  {
    image: hero1,
    title: "Empowering the Next Generation of Engineers",
    subtitle:
      "Join IEEE PU Student Branch to lead, innovate and connect globally.",
    button: "Join Now",
    link: "#about",
  },
  {
    image: hero2,
    title: "Innovation Meets Collaboration",
    subtitle:
      "Engage with cutting-edge projects, tech talks, and international conferences.",
    button: "Explore More",
    link: "#activities",
  },
  {
    image: hero3,
    title: "Global Network, Local Impact",
    subtitle:
      "Contribute to meaningful projects that impact both industry and society.",
    button: "Our Vision",
    link: "#vision",
  },
  {
    image: hero2,
    title: "Leading Through Technology",
    subtitle: "Empower yourself with opportunities to grow and lead.",
    button: "Leadership",
    link: "#activities",
  },
  {
    image: hero1,
    title: "Transforming Ideas into Reality",
    subtitle: "Join a dynamic community driving real-world innovations.",
    button: "Get Involved",
    link: "#vision",
  },
];

const IEEESlider = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const delay = 6000;
  const timeoutRef = useRef(null);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const setSlide = (i) => setIndex(i);

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, delay);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const deltaX = e.touches[0].clientX - startX.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) prevSlide();
      else nextSlide();
      isDragging.current = false;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <section
      className="ieee-slider"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="ieee-slide-wrapper"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div className="ieee-slide" key={i}>
            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="slide-overlay" />
            <div className="slide-content container">
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-subtitle">{slide.subtitle}</p>
              <a href={slide.link} className="slide-btn">
                {slide.button}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-controls">
        <button className="slider-btn prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="slider-btn next" onClick={nextSlide}>
          ›
        </button>
      </div>

      <div className="slider-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setSlide(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default IEEESlider;
