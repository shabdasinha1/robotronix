import React, { useEffect, useRef } from "react";
import "./AI_Industries.css";

const AI_Industries = ({ 
  title,
  accent,
  subtitle,
  industries = []
}) => {

  const sectionRef = useRef(null);

  // Scroll-based reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const items = sectionRef.current.querySelectorAll(".rtx-aiindustries-drop");
          items.forEach((el) => el.classList.add("rtx-aiindustries-visible"));
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-aiindustries-section" ref={sectionRef}>
      <div className="rtx-aiindustries-container">

        {/* HEADER */}
        <div className="rtx-aiindustries-header rtx-aiindustries-drop" style={{ "--delay": "0.2s" }}>
          <h2 className="rtx-aiindustries-title">
            {title} <span>{accent}</span>
          </h2>
          <p className="rtx-aiindustries-subtext">{subtitle}</p>
        </div>

        {/* GRID BLOCK */}
        <div className="rtx-aiindustries-grid">
          {industries.map((item, index) => (
            <div
              key={index}
              className="rtx-aiindustries-card rtx-aiindustries-drop"
              style={{ "--delay": `${0.4 + index * 0.2}s` }}
            >
              <div className="rtx-aiindustries-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AI_Industries;
