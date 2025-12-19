import { useEffect, useRef } from "react";

const AI_WhyChoose = ({ 
  title,
  accent,
  subtitle,
  points = [] 
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          section.classList.add("u-drop-visible");
          observer.disconnect();
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

  return (
    <section
      className="rtx-aiwhy-section u-section"
      ref={sectionRef}
    >
      <div className="rtx-aiwhy-container u-container">

        {/* HEADER */}
        <div
          className="rtx-aiwhy-header u-drop"
          style={{ "--delay": "0.2s" }}
        >
          <h2 className="rtx-aiwhy-title u-title">
            {title} <span>{accent}</span>
          </h2>
          <p className="rtx-aiwhy-subtext u-subtext">
            {subtitle}
          </p>
        </div>

        {/* GRID */}
        <div className="rtx-aiwhy-grid u-grid-auto">
          {points.map((item, index) => (
            <div
              key={index}
              className="card card-glass u-drop"
              style={{ "--delay": `${0.4 + index * 0.2}s` }}
            >
              <div className="rtx-aiwhy-check">✔</div>

              <h3 className="text-accent">{item.title}</h3>
              <p className="text-muted">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AI_WhyChoose;
