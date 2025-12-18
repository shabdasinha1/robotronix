import { useEffect, useRef } from "react";


const AI_Impact = ({ title, subtitle }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          section.classList.add("rtx-aiimpact-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-aiimpact-section" ref={sectionRef}>
      <div
        className="rtx-aiimpact-container rtx-aiimpact-drop"
        style={{ "--delay": "0.2s" }}
      >
        <h2 className="rtx-aiimpact-title">{title}</h2>
        <p className="rtx-aiimpact-subtext">{subtitle}</p>
      </div>
    </section>
  );
};

export default AI_Impact;
