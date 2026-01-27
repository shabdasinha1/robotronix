import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import Button from "../../components/common/Button";

const ServicesCTA = ({ title, subtitle, buttonText, buttonLink }) => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.2,
    rootMargin: "0px 0px -120px 0px",
    once: true,
  });

  return (
  <section
  ref={ref}
  className={`rtx-cta-wrapper u-section u-section-lg ${
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

        {/* BUTTON (replaces <a>) */}
        <Button
          to={buttonLink}
          variant="primary"
          size="lg"
        >
          {buttonText}
        </Button>

      </div>
    </section>
  );
};

export default ServicesCTA;
