import useRevealOnScroll from "../../../../hooks/useRevealOnScroll";

const AI_CTA = ({ title, subtitle, buttonText, buttonLink }) => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.15,
    rootMargin: "0px 0px -120px 0px",
    once: true,
  });

  return (
    <section
      ref={ref}
      className={`rtx-service-cta u-section u-section-sm ${
        visible ? "u-drop-visible" : ""
      }`}
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
