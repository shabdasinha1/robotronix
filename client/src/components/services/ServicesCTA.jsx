import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const ServicesCTA = ({ title, subtitle, buttonText, buttonLink }) => {
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
          {title}
        </h2>

        <p className="rtx-cta-sub">
          {subtitle}
        </p>

        <a href={buttonLink} className="btn btn-primary btn-lg">
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default ServicesCTA;
