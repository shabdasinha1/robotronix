import React, { useEffect, useRef } from "react";
import "./AI_CTA.css";

const AI_CTA = ({ title, subtitle, buttonText, buttonLink }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const box = sectionRef.current.querySelectorAll(".rtx-aicta-drop");
          box.forEach((el) => el.classList.add("rtx-aicta-visible"));
        }
      },
      { threshold: 0.25 }
    );

    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="rtx-aicta-section" ref={sectionRef}>
      <div
        className="rtx-aicta-container rtx-aicta-drop"
        style={{ "--delay": "0.25s" }}
      >
        <h2 className="rtx-aicta-title">{title}</h2>
        <p className="rtx-aicta-subtext">{subtitle}</p>

        <a href={buttonLink} className="rtx-aicta-btn">
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default AI_CTA;
