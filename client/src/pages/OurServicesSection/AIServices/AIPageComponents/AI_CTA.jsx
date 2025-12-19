import { useEffect, useRef } from "react";

const AI_CTA = ({ title, subtitle, buttonText, buttonLink }) => {
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
      className="rtx-service-cta u-section u-section-sm"
      ref={sectionRef}
    >
      <div
        className="rtx-service-cta-box u-drop"
        style={{ "--delay": "0.2s" }}
      >
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
