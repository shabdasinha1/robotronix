import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const ServicesHero = ({
  badge,
  title,
  accent,
  subtitle,
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink,
  stats = [],
}) => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.2,
    once: true,
  });

  return (
    <section
      ref={ref}
      className={`rtx-service-hero-wrapper u-section ${
        visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="rtx-service-hero-particles" />

      <div className="rtx-service-hero-container u-container-center">
        <span
          className="rtx-service-hero-badge u-drop"
          style={{ "--delay": "0.2s" }}
        >
          {badge}
        </span>

        <h1
          className="rtx-service-hero-title u-drop"
          style={{ "--delay": "0.4s" }}
        >
          {title} <br />
          <span className="rtx-service-hero-accent">{accent}</span>
        </h1>

        <p
          className="rtx-service-hero-subtext u-drop"
          style={{ "--delay": "0.6s" }}
        >
          {subtitle}
        </p>

        {/* GLOBAL BUTTON SYSTEM */}
        <div
          className="rtx-service-hero-btn-group u-drop"
          style={{ "--delay": "0.8s" }}
        >
          <a href={primaryLink} className="btn btn-primary">
            {primaryText}
          </a>

          {secondaryText && (
            <a href={secondaryLink} className="btn btn-outline">
              {secondaryText}
            </a>
          )}
        </div>

        {/* GLOBAL CARD SYSTEM */}
        {stats.length > 0 && (
          <div className="rtx-service-hero-stats">
            {stats.map((item, i) => (
              <div
                key={i}
                className="card card-glass u-drop"
                style={{ "--delay": `${1 + i * 0.2}s` }}
              >
                <h3 className="text-accent">{item.value}</h3>
                <p className="text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesHero;
