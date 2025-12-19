import useRevealOnScroll from "../../../hooks/useRevealOnScroll";

const ServicesWhyChoose = ({ 
  title,
  accent,
  subtitle,
  points = [] 
}) => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.15,
    rootMargin: "0px 0px -120px 0px",
    once: true,
  });

  return (
    <section
      ref={ref}
      className={`rtx-service-why-section u-section ${
        visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="rtx-service-why-container u-container">

        {/* HEADER */}
        <div
          className="rtx-service-why-header u-drop"
          style={{ "--delay": "0.2s" }}
        >
          <h2 className="rtx-service-why-title u-title">
            {title} <span>{accent}</span>
          </h2>
          <p className="rtx-service-why-subtext u-subtext">
            {subtitle}
          </p>
        </div>

        {/* GRID */}
        <div className="rtx-service-why-grid u-grid-auto">
          {points.map((item, index) => (
            <div
              key={index}
              className="card card-glass u-drop"
              style={{ "--delay": `${0.4 + index * 0.2}s` }}
            >
              <div className="rtx-service-why-check">✔</div>

              <h3 className="text-accent">{item.title}</h3>
              <p className="text-muted">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesWhyChoose;
