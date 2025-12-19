import { useEffect, useRef } from "react";

const AI_Approach = ({ 
  title, 
  accent, 
  subtitle, 
  steps = [] 
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
      className="rtx-aiapproach-section u-section"
      ref={sectionRef}
    >
      <div className="rtx-aiapproach-container u-container">

        {/* HEADER */}
        <div
          className="rtx-aiapproach-header u-drop"
          style={{ "--delay": "0.2s" }}
        >
          <h2 className="rtx-aiapproach-title u-title">
            {title} <span>{accent}</span>
          </h2>
          <p className="rtx-aiapproach-subtext u-subtext">
            {subtitle}
          </p>
        </div>

        {/* GRID */}
        <div className="rtx-aiapproach-grid u-grid-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card card-glass u-drop"
              style={{ "--delay": `${0.4 + index * 0.2}s` }}
            >
              <h3 className="text-accent">{step.title}</h3>
              <p className="text-muted">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AI_Approach;
