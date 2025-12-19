import useRevealOnScroll from "../../../hooks/useRevealOnScroll";

const CTASection = () => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.2,
    rootMargin: "0px 0px -120px 0px",
    once: true,
  });

  return (
    <section
      ref={ref}
      className={`rtx-cta-wrapper u-section ${
        visible ? "u-drop-visible" : ""
      }`}
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
