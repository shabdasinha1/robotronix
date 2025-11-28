import React, { useEffect, useRef } from "react";
import "./AI_Overview.css";

const AI_Overview = ({ title, accent, paragraphs = [], infoCards = [] }) => {
  const overviewRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const animated = overviewRef.current.querySelectorAll(".rtx-aioverview-drop");
          animated.forEach((el) => el.classList.add("rtx-aioverview-visible"));
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(overviewRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-aioverview-section" ref={overviewRef}>
      <div className="rtx-aioverview-container">

        {/* LEFT BLOCK */}
        <div className="rtx-aioverview-left rtx-aioverview-drop" style={{ "--delay": "0.2s" }}>
          <h2 className="rtx-aioverview-title">
            {title} <span>{accent}</span>
          </h2>

          {paragraphs.map((text, idx) => (
            <p key={idx} className="rtx-aioverview-text">
              {text}
            </p>
          ))}
        </div>

        {/* RIGHT CARDS */}
        <div className="rtx-aioverview-right">
          {infoCards.map((card, idx) => (
            <div
              key={idx}
              className="rtx-aioverview-card rtx-aioverview-drop"
              style={{ "--delay": `${0.4 + idx * 0.2}s` }}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AI_Overview;
