// src/components/Embedded_IoT_Why.jsx
import React, { useEffect, useRef } from "react";
import "./Embedded_IoT_Why.css";

const Embedded_IoT_Why = ({
  whyTitle = "Why Choose Robotronix for Embedded & IoT Development",
  whySubtitle = "We deliver end-to-end IoT and embedded engineering with performance, reliability, and scalability.",

  reasons = [
    "Expertise in Hardware + Software Integration",
    "Proven experience in Firmware & PCB Design",
    "Cloud-connected IoT for Real-Time Intelligence",
    "Edge IoT for Faster On-Device Processing",
    "Complete End-to-End Development Support",
  ],
}) => {
  const whyRef = useRef(null);

  useEffect(() => {
    const sec = whyRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) sec.classList.add("rtx-iotwhy-visible");
      },
      { threshold: 0.2 }
    );

    observer.observe(sec);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-iotwhy-wrapper" ref={whyRef}>
      <div className="rtx-iotwhy-container">

        {/* HEADER */}
        <div
          className="rtx-iotwhy-header rtx-iotwhy-drop"
          style={{ "--whyDelay": "0.2s" }}
        >
          <h2>{whyTitle}</h2>
          <p>{whySubtitle}</p>
        </div>

        {/* GRID OF REASONS */}
        <div className="rtx-iotwhy-grid">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="rtx-iotwhy-card rtx-iotwhy-drop"
              style={{ "--whyDelay": `${0.4 + index * 0.15}s` }}
            >
              <span className="rtx-iotwhy-icon">✔</span>
              <p>{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Embedded_IoT_Why;
