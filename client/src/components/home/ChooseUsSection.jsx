import React, { useEffect, useMemo, useRef, useState } from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import Card from "../../components/common/Card";

const stats = [
  { icon: "👥", value: 1000, suffix: "+", label: "Happy Clients" },
  { icon: "💻", value: 2000, suffix: "+", label: "Projects Completed" },
  { icon: "🏅", value: 10, suffix: "+ yrs", label: "Delivery Excellence" },
  { icon: "🌍", value: 10, suffix: "+", label: "Countries Served" },
];

const ChooseUsSection = React.memo(() => {
  /* ===============================
     OBSERVER OPTIONS (MEMOIZED)
  =============================== */

  const revealOptions = useMemo(
    () => ({
      threshold: 0.15,
      rootMargin: "0px 0px -120px 0px",
      once: true,
    }),
    []
  );

  const { ref, visible } = useRevealOnScroll(revealOptions);

  /* ===============================
     COUNTER STATE
  =============================== */

  const [counts, setCounts] = useState(() => stats.map(() => 0));
  const rafRef = useRef(null);

  /* ===============================
     COUNTER ANIMATION (OPTIMIZED)
  =============================== */

  useEffect(() => {
    if (!visible) return;

    const duration = 1200;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);

      setCounts((prev) =>
        prev.map((_, idx) =>
          Math.floor(stats[idx].value * progress)
        )
      );

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [visible]);

  return (
    <section
      ref={ref}
      className={`rtx-choose-wrapper u-section u-section-md ${
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
          {stats.map((item, index) => {
            const delay = `${0.6 + index * 0.15}s`;

            return (
              <Card
                key={item.label}
                size="md"
                variant="hover"
                className="rtx-choose-card u-drop-scale"
                style={{ "--delay": delay }}
              >
                <div className="rtx-choose-icon">{item.icon}</div>
                <h3 className="rtx-choose-value">
  {counts[index]}
  {stats[index].suffix}
</h3>
                <p className="rtx-choose-label">{item.label}</p>
              </Card>
            );
          })}
        </div>

        {/* BOTTOM BOX */}
        {/* <div
          className="rtx-choose-bottom u-drop"
          style={{ "--delay": "1.4s" }}
        >
          <h3>Trusted by Industry Leaders</h3>
          <p>
            We've partnered with Fortune 500 companies, startups, and enterprises
            to deliver cutting-edge technology solutions that drive real results.
          </p>
        </div> */}
      </div>
    </section>
  );
});

export default ChooseUsSection;
