import React from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import Button from "../../components/common/Button";

const AboutSection = React.memo(() => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.15,
    rootMargin: "0px 0px -120px 0px",
    once: true,
  });

  return (
   <section
  ref={ref}
  className={`rtx-about-wrapper u-section u-section-lg ${
    visible ? "u-drop-visible" : ""
  }`}
>

      <div className="rtx-about-container u-container">
        {/* LEFT IMAGE */}
        <div className="rtx-about-left u-drop-left">
          <img
            src="https://nexus-glow-prime.lovable.app/assets/about-illustration-OLpSSyJv.png"
            alt="About RoboTronix"
            className="rtx-about-img"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="rtx-about-right u-drop-right">
          <span className="rtx-about-badge">About RoboTronix</span>

          <h2 className="rtx-about-title">
            Innovating the Future of <span>Technology</span>
          </h2>

          <p className="rtx-about-text">
            We are a leading IT solutions provider committed to transforming
            businesses through innovative technology. Our team of experts
            delivers cutting-edge solutions that drive digital transformation
            and sustainable growth.
          </p>

          <p className="rtx-about-text">
            From cloud infrastructure to AI-powered applications, we partner
            with enterprises worldwide to build scalable, secure, and
            future-ready technology ecosystems.
          </p>

          <div className="rtx-about-points">
            <div>✔ 15+ years of industry expertise</div>
            <div>✔ Agile development methodology</div>
            <div>✔ 24/7 technical support</div>
            <div>✔ Certified technology partners</div>
            <div>✔ End-to-end project management</div>
            <div>✔ Global delivery capabilities</div>
          </div>

          {/* BUTTON */}
          <Button to="/about-us" variant="primary" size="lg">
            Discover Our Story
          </Button>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
