import { useEffect, useRef } from "react";

const AI_CTA = ({ title, subtitle, buttonText, buttonLink }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("rtx-drop-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-service-cta">
      <div className="rtx-service-cta-box" ref={ref}>
        <h2 className="rtx-service-cta-title">{title}</h2>
        <p className="rtx-service-cta-sub">{subtitle}</p>

        <a href={buttonLink} className="btn btn-primary btn-lg">
          {buttonText} 
        </a>
      </div>
    </section>
  );
};

export default AI_CTA;
