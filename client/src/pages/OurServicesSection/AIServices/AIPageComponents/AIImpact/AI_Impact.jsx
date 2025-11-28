import React, { useEffect, useRef } from "react";
import "./AI_Impact.css";

const AI_Impact = ({ title, subtitle }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const items = sectionRef.current.querySelectorAll(".rtx-aiimpact-drop");
          items.forEach((el) => el.classList.add("rtx-aiimpact-visible"));
        }
      },
      { threshold: 0.25 }
    );

    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="rtx-aiimpact-section" ref={sectionRef}>
      <div
        className="rtx-aiimpact-container rtx-aiimpact-drop"
        style={{ "--delay": "0.2s" }}
      >
        <h2 className="rtx-aiimpact-title">{title}</h2>
        <p className="rtx-aiimpact-subtext">{subtitle}</p>
      </div>
    </section>
  );
};

export default AI_Impact;
