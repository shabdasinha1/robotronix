import React, { useEffect, useRef, useState } from "react";
import "./ChooseUsSection.css";

const stats = [
  { icon: "👥", value: 500, label: "Happy Clients" },
  { icon: "💻", value: 1200, label: "Projects Completed" },
  { icon: "🏅", value: 50, label: "Industry Awards" },
  { icon: "🌍", value: 35, label: "Countries Served" },
];

const ChooseUsSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  // Detect section in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !visible) {
          setVisible(true);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -35% 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [visible]);

  // Number Counter Animation
  useEffect(() => {
    if (!visible) return;

    const duration = 1200; // 1.2s fast count
    const frames = 60;
    const incrementTime = duration / frames;

    stats.forEach((stat, idx) => {
      let current = 0;
      const increment = stat.value / frames;

      const counter = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(counter);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[idx] = Math.floor(current);
          return updated;
        });
      }, incrementTime);
    });
  }, [visible]);

  return (
    <section className="rtx-choose-wrapper" ref={sectionRef}>
      <div className="rtx-choose-container">

        {/* Heading */}
        <h2 className={`rtx-choose-title ${visible ? "rtx-drop-visible" : ""}`}>
          Why <span>Choose Us</span>
        </h2>

        <p className={`rtx-choose-subtext ${visible ? "rtx-drop-visible" : ""}`}>
          Numbers that speak for our commitment to excellence and innovation.
        </p>

        {/* Stats Grid */}
        <div className="rtx-choose-grid">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`rtx-choose-card ${
                visible ? `rtx-card-visible rtx-card-delay-${index + 1}` : ""
              }`}
            >
              <div className="rtx-choose-icon">{item.icon}</div>
              <h3 className="rtx-choose-value">{counts[index]}+</h3>
              <p className="rtx-choose-label">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom Box */}
        <div
          className={`rtx-choose-bottom ${
            visible ? "rtx-bottom-visible" : ""
          }`}
        >
          <h3>Trusted by Industry Leaders</h3>
          <p>
            We've partnered with Fortune 500 companies, startups, and enterprises
            to deliver cutting-edge technology solutions that drive real results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
