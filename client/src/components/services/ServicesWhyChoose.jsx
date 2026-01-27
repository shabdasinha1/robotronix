import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const ServicesWhyChoose = ({
  title,
  accent,
  subtitle,
  points = [],
}) => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.15,
    rootMargin: "0px 0px -120px 0px",
    once: true,
  });

  return (
   <section
  ref={ref}
  className={`rtx-service-why-section u-section u-section-sm ${
    visible ? "u-drop-visible" : ""
  }`}
>

      <div className="u-container">

        {/* HEADER */}
        <div
          className="rtx-service-why-header u-drop"
          style={{ "--delay": "0.2s" }}
        >
          <h2 className="u-title">
            {title} <span>{accent}</span>
          </h2>
          <p className="u-subtext">{subtitle}</p>
        </div>

        {/* NEURAL LIST */}
        <div className="rtx-neural-list">
          {points.map((item, index) => (
            <div
              key={index}
              className="rtx-neural-item u-drop"
              style={{ "--delay": `${0.4 + index * 0.2}s` }}
            >
              <span className="rtx-neural-dot" />

              <div className="rtx-neural-content">
                <h3 className="text-accent">{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesWhyChoose;
