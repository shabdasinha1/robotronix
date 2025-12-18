import React, { useEffect, useRef, useState } from "react";


const techItems = [
  { name: "React", type: "Frontend" },
  { name: "TypeScript", type: "Language" },
  { name: "Node.js", type: "Backend" },
  { name: "Python", type: "AI/ML" },
  { name: "AWS", type: "Cloud" },
  { name: "Docker", type: "DevOps" },
  { name: "Kubernetes", type: "Orchestration" },
  { name: "PostgreSQL", type: "Database" },
  { name: "MongoDB", type: "Database" },
  { name: "GraphQL", type: "API" },
  { name: "TensorFlow", type: "AI/ML" },
  { name: "Azure", type: "Cloud" },
  { name: "Next.js", type: "Framework" },
  { name: "Tailwind", type: "Styling" },
];

const TechStack = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -35% 0px",
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-tech-wrapper" ref={sectionRef}>
      <div className="rtx-tech-container">

        {/* TITLE */}
        <h2 className={`rtx-tech-title ${visible ? "rtx-tech-visible" : ""}`}>
          Technology <span>Stack</span>
        </h2>

        {/* SUBTEXT */}
        <p className={`rtx-tech-subtext ${visible ? "rtx-tech-visible" : ""}`}>
          We leverage cutting-edge technologies to build robust, scalable solutions.
        </p>

        {/* CARDS */}
        <div className="rtx-tech-grid">
          {techItems.map((item, index) => (
            <div
  key={index}
  className={`card card-sm card-hover rtx-tech-card 
    ${visible ? `rtx-card-visible rtx-card-delay-${index + 1}` : ""}`}
>

              <h4>{item.name}</h4>
              <span>{item.type}</span>
            </div>
          ))}
        </div>

        <p className={`rtx-tech-footer ${visible ? "rtx-tech-visible" : ""}`}>
          And many more technologies in our arsenal
        </p>

        <a
  href="/"
  className={`btn btn-outline btn-md ${visible ? "rtx-tech-visible" : ""}`}
>
  View Full Tech Stack →
</a>


      </div>
    </section>
  );
};

export default TechStack;
