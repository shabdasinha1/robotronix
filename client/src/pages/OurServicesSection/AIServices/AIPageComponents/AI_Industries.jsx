import { useEffect, useRef } from "react";

const AI_Industries = ({ 
  title,
  accent,
  subtitle,
  industries = []
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
      className="rtx-aiindustries-section u-section"
      ref={sectionRef}
    >
      <div className="rtx-aiindustries-container u-container">

        {/* HEADER */}
        <div
          className="rtx-aiindustries-header u-drop"
          style={{ "--delay": "0.2s" }}
        >
          <h2 className="rtx-aiindustries-title u-title">
            {title} <span>{accent}</span>
          </h2>
          <p className="rtx-aiindustries-subtext u-subtext">
            {subtitle}
          </p>
        </div>

        {/* GRID */}
        <div className="rtx-aiindustries-grid u-grid-auto">
          {industries.map((item, index) => (
            <div
              key={index}
              className="card card-glass u-drop"
              style={{ "--delay": `${0.4 + index * 0.2}s` }}
            >
              <div className="rtx-aiindustries-icon">
                {item.icon}
              </div>

              <h3 className="text-accent">{item.title}</h3>
              <p className="text-muted">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AI_Industries;
