import React, { useMemo } from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import Card from "../../components/common/Card";

const ServicesApproach = React.memo(
  ({
    title,
    accent,
    subtitle,
    steps = [],
  }) => {
    /* ===============================
       OBSERVER OPTIONS (MEMOIZED)
    =============================== */

    const revealOptions = useMemo(
      () => ({
        threshold: 0.15,
        rootMargin: "0px 0px -120px 0px",
        once: true,
      }),
      []
    );

    const { ref, visible } = useRevealOnScroll(revealOptions);

    return (
      <section
        ref={ref}
        className={`rtx-service-approach-section u-section u-section-sm ${
          visible ? "u-drop-visible" : ""
        }`}
      >
        <div className="rtx-service-approach-container u-container">
          {/* HEADER */}
          <div
            className="rtx-service-approach-header u-drop"
            style={{ "--delay": "0.2s" }}
          >
            <h2 className="rtx-service-approach-title u-title">
              {title} <span>{accent}</span>
            </h2>

            <p className="rtx-service-approach-subtext u-subtext">
              {subtitle}
            </p>
          </div>

          {/* GRID */}
          <div className="rtx-service-approach-grid u-grid-auto">
            {steps.map((step, index) => {
              const delay = `${0.4 + index * 0.2}s`;

              return (
                <Card
                  key={step.title}
                  variant="glass"
                  className="u-drop"
                  style={{ "--delay": delay }}
                >
                  <h3 className="text-accent">{step.title}</h3>
                  <p className="text-muted">{step.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
);

export default ServicesApproach;
