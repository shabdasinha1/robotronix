import React from "react";
import Button from "../common/Button";
import Card from "../common/Card";

const HeroSection = React.memo(() => {
  return (
    <section className="rtx-hero-wrapper u-section u-section-lg">
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
          <Button to="/contact-us" variant="primary" size="lg">
            Get Started →
          </Button>

          <Button to="/portfolio" variant="outline" size="lg">
            View Portfolio
          </Button>
        </div>

        <div className="rtx-hero-stats">
          <Card
            variant="glass"
            className="rtx-hero-stat-card rtx-stat-drop-1"
          >
            <h3>500+</h3>
            <p>Projects Delivered</p>
          </Card>

          <Card
            variant="glass"
            className="rtx-hero-stat-card rtx-stat-drop-2"
          >
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </Card>

          <Card
            variant="glass"
            className="rtx-hero-stat-card rtx-stat-drop-3"
          >
            <h3>50+</h3>
            <p>Industry Awards</p>
          </Card>

          <Card
            variant="glass"
            className="rtx-hero-stat-card rtx-stat-drop-4"
          >
            <h3>24/7</h3>
            <p>Support Available</p>
          </Card>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
