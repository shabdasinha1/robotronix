import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import Card from "../../components/common/Card";

const ServicesIndustries = ({ 
  title,
  accent,
  subtitle,
  industries = [],
}) => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.15,
    rootMargin: "0px 0px -120px 0px",
    once: true,
  });

  return (
  <section
  ref={ref}
  className={`rtx-service-industries-section u-section u-section-sm ${
    visible ? "u-drop-visible" : ""
  }`}
>

      <div className="rtx-service-industries-container u-container">

        {/* HEADER */}
        <div
          className="rtx-service-industries-header u-drop"
          style={{ "--delay": "0.2s" }}
        >
          <h2 className="rtx-service-industries-title u-title">
            {title} <span>{accent}</span>
          </h2>
          <p className="rtx-service-industries-subtext u-subtext">
            {subtitle}
          </p>
        </div>

        {/* GRID */}
        <div className="rtx-service-industries-grid u-grid-auto">
          {industries.map((item, index) => (
            <Card
              key={index}
              variant="glass"
              className="u-drop"
              style={{ "--delay": `${0.4 + index * 0.2}s` }}
            >
              <div className="rtx-service-industries-icon">
                {item.icon}
              </div>

              <h3 className="text-accent">{item.title}</h3>
              <p className="text-muted">{item.desc}</p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesIndustries;
