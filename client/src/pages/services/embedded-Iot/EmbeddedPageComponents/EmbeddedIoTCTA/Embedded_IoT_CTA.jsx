// src/components/Embedded_IoT_CTA.jsx
import React, { useEffect, useRef } from "react";
import "./Embedded_IoT_CTA.css";

const Embedded_IoT_CTA = ({
  ctaTitle = "Innovating the Future of Smart Connectivity",
  ctaSubtitle = `At Robotronix Engineering Tech Pvt. Ltd., we bridge the gap 
  between the physical and digital worlds — creating smart, connected, 
  and efficient embedded systems that power the future of automation 
  and IoT-driven enterprises.`,
  ctaButtonText = "Let’s Connect Your IoT Vision",
  ctaButtonLink = "#contact",
}) => {
  const ctaRef = useRef(null);

  useEffect(() => {
    const sec = ctaRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) sec.classList.add("rtx-iotcta-visible");
      },
      { threshold: 0.2 }
    );

    observer.observe(sec);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-iotcta-wrapper" ref={ctaRef}>
      <div className="rtx-iotcta-overlay"></div>

      <div className="rtx-iotcta-container">
        
        {/* TITLE */}
        <h2
          className="rtx-iotcta-title rtx-iotcta-drop"
          style={{ "--ctaDelay": "0.2s" }}
        >
          {ctaTitle}
        </h2>

        {/* SUBTITLE */}
        <p
          className="rtx-iotcta-subtext rtx-iotcta-drop"
          style={{ "--ctaDelay": "0.4s" }}
        >
          {ctaSubtitle}
        </p>

        {/* BUTTON */}
        <a
          href={ctaButtonLink}
          className="rtx-iotcta-button rtx-iotcta-drop"
          style={{ "--ctaDelay": "0.6s" }}
        >
          {ctaButtonText}
        </a>

      </div>
    </section>
  );
};

export default Embedded_IoT_CTA;
