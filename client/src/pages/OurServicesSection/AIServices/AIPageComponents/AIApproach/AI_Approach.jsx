import React, { useEffect, useRef } from "react";


const AI_Approach = ({ 
  title, 
  accent, 
  subtitle, 
  steps = [] 
}) => {

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const anim = sectionRef.current.querySelectorAll(".rtx-aiapproach-drop");
          anim.forEach((el) => el.classList.add("rtx-aiapproach-visible"));
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-aiapproach-section" ref={sectionRef}>
      <div className="rtx-aiapproach-container">

        {/* HEADER */}
        <div className="rtx-aiapproach-header rtx-aiapproach-drop" style={{ "--delay": "0.2s" }}>
          <h2 className="rtx-aiapproach-title">
            {title} <span>{accent}</span>
          </h2>
          <p className="rtx-aiapproach-subtext">{subtitle}</p>
        </div>

        {/* GRID OF CARDS */}
        <div className="rtx-aiapproach-grid">
  {steps.map((step, index) => (
    <div
      key={index}
      className="card card-glass rtx-aiapproach-drop"
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
