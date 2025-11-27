import React, { useEffect, useRef, useState } from "react";
import "./AboutSection.css";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -30% 0px",
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-about-wrapper" ref={sectionRef}>
      <div className="rtx-about-container">
        
        {/* LEFT IMAGE */}
        <div className={`rtx-about-left ${isVisible ? "rtx-left-visible" : ""}`}>
          <img 
            src="https://nexus-glow-prime.lovable.app/assets/about-illustration-OLpSSyJv.png" 
            alt="About Section" 
            className="rtx-about-img"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className={`rtx-about-right ${isVisible ? "rtx-right-visible" : ""}`}>
          
          <span className="rtx-about-badge">About RoboTronix</span>

          <h2 className="rtx-about-title">
            Innovating the Future of <span>Technology</span>
          </h2>

          <p className="rtx-about-text">
            We are a leading IT solutions provider committed to transforming 
            businesses through innovative technology. Our team of experts delivers 
            cutting-edge solutions that drive digital transformation and 
            sustainable growth.
          </p>

          <p className="rtx-about-text">
            From cloud infrastructure to AI-powered applications, we partner with 
            enterprises worldwide to build scalable, secure, and future-ready 
            technology ecosystems.
          </p>

          <div className="rtx-about-points">
            <div>✔ 15+ years of industry expertise</div>
            <div>✔ Agile development methodology</div>
            <div>✔ 24/7 technical support</div>
            <div>✔ Certified technology partners</div>
            <div>✔ End-to-end project management</div>
            <div>✔ Global delivery capabilities</div>
          </div>

          <a href="/" className="rtx-about-btn">Discover Our Story</a>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
