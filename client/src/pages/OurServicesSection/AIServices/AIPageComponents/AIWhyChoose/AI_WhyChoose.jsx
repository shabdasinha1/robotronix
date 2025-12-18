import React, { useEffect, useRef } from "react";


const AI_WhyChoose = ({ 
  title,
  accent,
  subtitle,
  points = [] 
}) => {

  const sectionRef = useRef(null);

  // Scroll-based animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const items = sectionRef.current.querySelectorAll(".rtx-aiwhy-drop");
          items.forEach((el) => el.classList.add("rtx-aiwhy-visible"));
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-aiwhy-section" ref={sectionRef}>
      <div className="rtx-aiwhy-container">

        {/* Header */}
        <div className="rtx-aiwhy-header rtx-aiwhy-drop" style={{ "--delay": "0.2s" }}>
          <h2 className="rtx-aiwhy-title">
            {title} <span>{accent}</span>
          </h2>
          <p className="rtx-aiwhy-subtext">{subtitle}</p>
        </div>

        {/* Grid of cards */}
       <div className="rtx-aiwhy-grid">
  {points.map((item, index) => (
    <div
      key={index}
      className="card card-glass rtx-aiwhy-drop"
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
