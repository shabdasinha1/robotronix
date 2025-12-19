// src/components/Embedded_IoT_Industries.jsx
import React, { useEffect, useRef } from "react";
import "./Embedded_IoT_Industries.css";

const Embedded_IoT_Industries = ({
  industriesTitle = "Industry Applications",
  industriesSubtitle = "Our Embedded & IoT solutions empower industries with automation, intelligence, and smart connectivity.",

  industriesList = [
    "Industrial Automation",
    "Healthcare",
    "Agriculture",
    "Automotive",
    "Smart Cities",
    "Home Automation",
    "Retail & Supply Chain",
    "Energy & Utilities",
    "Education & Research",
  ],
}) => {
  const indRef = useRef(null);

  useEffect(() => {
    const sec = indRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) sec.classList.add("rtx-iotind-visible");
      },
      { threshold: 0.2 }
    );
    observer.observe(sec);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-iotind-wrapper" ref={indRef}>
      <div className="rtx-iotind-container">

        {/* HEADER */}
        <div
          className="rtx-iotind-header rtx-iotind-drop"
          style={{ "--indDelay": "0.2s" }}
        >
          <h2>{industriesTitle}</h2>
          <p>{industriesSubtitle}</p>
        </div>

        {/* GRID */}
        <div className="rtx-iotind-grid">
          {industriesList.map((item, index) => (
            <div
              key={index}
              className="rtx-iotind-card rtx-iotind-drop"
              style={{ "--indDelay": `${0.4 + index * 0.1}s` }}
            >
              <span className="rtx-iotind-dot"></span>
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Embedded_IoT_Industries;
