import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: "👥", value: 500, label: "Happy Clients" },
  { icon: "💻", value: 1200, label: "Projects Completed" },
  { icon: "🏅", value: 50, label: "Industry Awards" },
  { icon: "🌍", value: 35, label: "Countries Served" },
];

const ChooseUsSection = () => {
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const hasAnimated = useRef(false);

  /* Intersection Observer */
  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          section.classList.add("u-drop-visible");
          hasAnimated.current = true;
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  /* Counter Animation */
  useEffect(() => {
    if (!hasAnimated.current) return;

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
          const updated = [...prev];
          updated[idx] = Math.floor(current);
          return updated;
        });
      }, incrementTime);
    });
  }, []);

  return (
    <section
      className="rtx-choose-wrapper u-section"
      ref={sectionRef}
    >
      <div className="rtx-choose-container u-container-center">

        {/* TITLE */}
        <h2 className="rtx-choose-title u-drop" style={{ "--delay": "0.2s" }}>
          Why <span>Choose Us</span>
        </h2>

        <p className="rtx-choose-subtext u-drop" style={{ "--delay": "0.4s" }}>
          Numbers that speak for our commitment to excellence and innovation.
        </p>

        {/* STATS */}
        <div className="rtx-choose-grid">
          {stats.map((item, index) => (
            <div
              key={index}
              className="card card-md card-hover rtx-choose-card u-drop-scale"
              style={{ "--delay": `${0.6 + index * 0.15}s` }}
            >
              <div className="rtx-choose-icon">{item.icon}</div>
              <h3 className="rtx-choose-value">{counts[index]}+</h3>
              <p className="rtx-choose-label">{item.label}</p>
            </div>
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
};

export default ChooseUsSection;
