import React, { useEffect, useRef, useState } from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import Card from "../../components/common/Card";

const stats = [
  { icon: "👥", value: 500, label: "Happy Clients" },
  { icon: "💻", value: 1200, label: "Projects Completed" },
  { icon: "🏅", value: 50, label: "Industry Awards" },
  { icon: "🌍", value: 35, label: "Countries Served" },
];

const ChooseUsSection = React.memo(() => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.15,
    rootMargin: "0px 0px -120px 0px",
    once: true,
  });

  const [counts, setCounts] = useState(stats.map(() => 0));
  const intervalsRef = useRef([]);

  /* Counter Animation — starts only once when visible */
  useEffect(() => {
    if (!visible) return;

    const duration = 1200;
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
          if (prev[idx] === Math.floor(current)) return prev;
          const updated = [...prev];
          updated[idx] = Math.floor(current);
          return updated;
        });
      }, incrementTime);

      intervalsRef.current.push(counter);
    });

    return () => {
      intervalsRef.current.forEach(clearInterval);
      intervalsRef.current = [];
    };
  }, [visible]);

  return (
    <section
      ref={ref}
      className={`rtx-choose-wrapper u-section ${
        visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="rtx-choose-container u-container-center">
        {/* TITLE */}
        <h2
          className="rtx-choose-title u-drop"
          style={{ "--delay": "0.2s" }}
        >
          Why <span>Choose Us</span>
        </h2>

        <p
          className="rtx-choose-subtext u-drop"
          style={{ "--delay": "0.4s" }}
        >
          Numbers that speak for our commitment to excellence and innovation.
        </p>

        {/* STATS */}
        <div className="rtx-choose-grid">
          {stats.map((item, index) => (
            <Card
              key={item.label}
              size="md"
              variant="hover"
              className="rtx-choose-card u-drop-scale"
              style={{ "--delay": `${0.6 + index * 0.15}s` }}
            >
              <div className="rtx-choose-icon">{item.icon}</div>
              <h3 className="rtx-choose-value">{counts[index]}+</h3>
              <p className="rtx-choose-label">{item.label}</p>
            </Card>
          ))}
        </div>

        {/* BOTTOM BOX */}
        <div
          className="rtx-choose-bottom u-drop"
          style={{ "--delay": "1.4s" }}
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
});

export default ChooseUsSection;
