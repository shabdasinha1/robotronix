import React, { useEffect, useRef } from "react";
import "./AI_Hero.css";

const AI_Hero = ({
  badge,
  title,
  accent,
  subtitle,
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink,
  stats = [],
}) => {

  const heroRef = useRef(null);

  useEffect(() => {
    const section = heroRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          section.classList.add("rtx-aihero-visible");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-aihero-wrapper" ref={heroRef}>

      {/* Background Particles */}
      <div className="rtx-aihero-particles"></div>

      <div className="rtx-aihero-container">

        {/* Badge */}
        <span className="rtx-aihero-badge rtx-aihero-drop" style={{ "--delay": "0.2s" }}>
          {badge}
        </span>

        {/* Title */}
        <h1 className="rtx-aihero-title rtx-aihero-drop" style={{ "--delay": "0.4s" }}>
          {title} <br />
          <span className="rtx-aihero-accent">{accent}</span>
        </h1>

        {/* Subtitle */}
        <p className="rtx-aihero-subtext rtx-aihero-drop" style={{ "--delay": "0.6s" }}>
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="rtx-aihero-btn-group rtx-aihero-drop" style={{ "--delay": "0.8s" }}>
          <a href={primaryLink} className="rtx-aihero-btn-primary">
            {primaryText}
          </a>

          {secondaryText && (
            <a href={secondaryLink} className="rtx-aihero-btn-secondary">
              {secondaryText}
            </a>
          )}
        </div>

        {/* Stats Section */}
        {stats.length > 0 && (
          <div className="rtx-aihero-stats">
            {stats.map((item, i) => (
              <div
                key={i}
                className="rtx-aihero-stat-card rtx-aihero-drop-stat"
                style={{ "--delay": `${1 + i * 0.2}s` }}
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

export default AI_Hero;
