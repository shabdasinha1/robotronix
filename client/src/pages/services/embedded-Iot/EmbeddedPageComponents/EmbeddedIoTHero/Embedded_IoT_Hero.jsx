// src/components/Embedded_IoT_Hero.jsx
import React, { useEffect, useRef } from "react";
import "./Embedded_IoT_Hero.css";

const Embedded_IoT_Hero = ({
  badge = "Embedded Systems & IoT Solutions",
  title = "Connecting Intelligence with",
  accent = "Innovation",
  subtitle = `At Robotronix Engineering Tech Pvt. Ltd., we specialize in Embedded Systems and Internet of Things (IoT) development — creating intelligent, connected, and high-performance solutions for modern industries.`,
  primaryText = "Talk to Our Experts",
  primaryLink = "#contact",
  secondaryText = "See Capabilities",
  secondaryLink = "#overview",
  stats = [
    { value: "20+", label: "Embedded Systems Delivered" },
    { value: "15+", label: "Industries Served" },
    { value: "10+", label: "IoT Platforms Integrated" },
    { value: "End-to-End", label: "Hardware → Cloud" },
  ],
}) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          section.classList.add("rtx-embhero-visible");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-embhero-wrapper" ref={heroRef}>
      <div className="rtx-embhero-particles" />

      <div className="rtx-embhero-container">
        <span
          className="rtx-embhero-badge rtx-embhero-drop"
          style={{ ["--delay"]: "0.2s" }}
        >
          {badge}
        </span>

        <h1
          className="rtx-embhero-title rtx-embhero-drop"
          style={{ ["--delay"]: "0.4s" }}
        >
          {title} <br />
          <span className="rtx-embhero-accent">{accent}</span>
        </h1>

        <p
          className="rtx-embhero-subtext rtx-embhero-drop"
          style={{ ["--delay"]: "0.6s" }}
        >
          {subtitle}
        </p>

        <div
          className="rtx-embhero-btn-group rtx-embhero-drop"
          style={{ ["--delay"]: "0.8s" }}
        >
          <a href={primaryLink} className="rtx-embhero-btn-primary">
            {primaryText}
          </a>

          {secondaryText && (
            <a href={secondaryLink} className="rtx-embhero-btn-secondary">
              {secondaryText}
            </a>
          )}
        </div>

        {stats.length > 0 && (
          <div className="rtx-embhero-stats">
            {stats.map((item, i) => (
              <div
                key={i}
                className="rtx-embhero-stat-card rtx-embhero-drop-stat"
                style={{ ["--delay"]: `${1 + i * 0.18}s` }}
              >
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Embedded_IoT_Hero;
