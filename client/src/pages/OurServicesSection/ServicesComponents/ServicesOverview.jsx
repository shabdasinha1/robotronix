import useRevealOnScroll from "../../../hooks/useRevealOnScroll";

const ServicesOverview = ({
  title,
  accent,
  paragraphs = [],
  infoCards = [],
  btnText,
  btnLink = "#",
}) => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.15,
    rootMargin: "0px 0px -120px 0px",
    once: true,
  });

  return (
    <section
      ref={ref}
      className={`rtx-service-overview-section u-section u-section-sm ${
        visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="rtx-service-overview-container u-container">

        {/* LEFT */}
        <div
          className="rtx-service-overview-left u-drop"
          style={{ "--delay": "0.2s" }}
        >
          <h2 className="rtx-service-overview-title u-title">
            {title} <span>{accent}</span>
          </h2>

          {paragraphs.map((text, idx) => (
            <p
              key={idx}
              className="rtx-service-overview-text u-subtext"
            >
              {text}
            </p>
          ))}

          {btnText && (
            <a href={btnLink} className="btn btn-outline">
              {btnText} →
            </a>
          )}
        </div>

        {/* RIGHT */}
        <div className="rtx-service-overview-right">
          {infoCards.map((card, idx) => (
            <div
              key={idx}
              className="card card-glass u-drop"
              style={{ "--delay": `${0.4 + idx * 0.2}s` }}
            >
              <h3 className="text-accent">{card.title}</h3>
              <p className="text-muted">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;
