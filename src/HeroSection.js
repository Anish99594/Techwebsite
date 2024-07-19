// src/HeroSection.js
import React from "react";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <nav>
        <div className="logo">K</div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li><button className="book-call-btn">Book a call</button></li>
        </ul>
      </nav>
      <div className="hero-content">
        <h1>Empowering Lives Through Innovative <span className="highlight">AI Technologies.</span></h1>
        <p>Finding new horizons for visionaries to accelerate their innovation and progress.</p>
        <div className="hero-buttons">
          <button className="explore-btn">Explore Our Services</button>
          <button className="learn-more-btn">Learn more</button>
        </div>
      </div>
      <div className="scrolling-text">
      </div>
    </div>
  );
};

export default HeroSection;
