import { useEffect, useRef } from "react";

const CTASection = () => {
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
        threshold: 0.2,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="rtx-cta-wrapper u-section"
      ref={sectionRef}
    >
      <div
        className="rtx-cta-box u-drop"
        style={{ "--delay": "0.2s" }}
      >
        <h2 className="rtx-cta-title">
          Ready to Start Your <span>Next Project?</span>
        </h2>

        <p className="rtx-cta-sub">
          Let’s work together to build innovative, scalable, and future-ready digital solutions.
        </p>

        <button className="btn btn-primary btn-lg">
          Get Started 🚀
        </button>
      </div>
    </section>
  );
};

export default CTASection;
