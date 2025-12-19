import useRevealOnScroll from "../../../hooks/useRevealOnScroll";

const ServicesImpact = ({ title, subtitle }) => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.15,
    rootMargin: "0px 0px -120px 0px",
    once: true,
  });

  return (
    <section
      ref={ref}
      className={`rtx-service-impact-section u-section u-section-sm ${
        visible ? "u-drop-visible" : ""
      }`}
    >
      <div
        className="rtx-service-impact-container u-drop"
        style={{ "--delay": "0.2s" }}
      >
        <h2 className="rtx-service-impact-title">{title}</h2>
        <p className="rtx-service-impact-subtext">{subtitle}</p>
      </div>
    </section>
  );
};

export default ServicesImpact;
