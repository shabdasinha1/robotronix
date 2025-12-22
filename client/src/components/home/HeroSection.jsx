import React from "react";

const HeroSection = () => {
  return (
    <section className="rtx-hero-wrapper u-section">
      <div className="rtx-hero-particles"></div>

      <div className="rtx-hero-container u-container-center">
        <span className="rtx-hero-badge rtx-fade-drop-1">
          Next-Gen IT Solutions
        </span>

        <h1 className="rtx-hero-title rtx-fade-drop-2">
          Transform Your <br />
          <span className="rtx-hero-accent">Digital Future</span>
        </h1>

        <p className="rtx-hero-subtext rtx-fade-drop-3">
          Empowering businesses with cutting-edge technology, AI-driven
          solutions, and seamless cloud infrastructure for the next generation
          of innovation.
        </p>

        <div className="rtx-fade-drop-4 d-flex justify-content-center gap-3">
          <a href="/" className="btn btn-primary btn-lg">
            Get Started →
          </a>
          <a href="/" className="btn btn-outline btn-lg">
            View Portfolio
          </a>
        </div>

        <div className="rtx-hero-stats">
          <div className="rtx-hero-stat-card rtx-stat-drop-1">
            <h3>500+</h3>
            <p>Projects Delivered</p>
          </div>

          <div className="rtx-hero-stat-card rtx-stat-drop-2">
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>

          <div className="rtx-hero-stat-card rtx-stat-drop-3">
            <h3>50+</h3>
            <p>Industry Awards</p>
          </div>

          <div className="rtx-hero-stat-card rtx-stat-drop-4">
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
