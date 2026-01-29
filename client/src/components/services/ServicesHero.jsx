import React, { useMemo } from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";

const ServicesHero = React.memo(
  ({
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
    /* ===============================
       OBSERVER OPTIONS (MEMOIZED)
    =============================== */

    const revealOptions = useMemo(
      () => ({
        threshold: 0.2,
        once: true,
      }),
      []
    );

    const { ref, visible } = useRevealOnScroll(revealOptions);

    return (
      <section
        ref={ref}
        className={`rtx-service-hero-wrapper u-section u-section-lg ${
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
            <Button to={primaryLink} variant="primary" size="lg">
              {primaryText}
            </Button>

            {secondaryText && (
              <Button to={secondaryLink} variant="outline" size="lg">
                {secondaryText}
              </Button>
            )}
          </div>

          {/* GLOBAL CARD SYSTEM */}
          {stats.length > 0 && (
            <div className="rtx-service-hero-stats">
              {stats.map((item, index) => {
                const delay = `${1 + index * 0.2}s`;

                return (
                  <Card
                    key={item.label}
                    variant="glass"
                    className="u-drop"
                    style={{ "--delay": delay }}
                  >
                    <h3 className="text-accent">{item.value}</h3>
                    <p className="text-muted">{item.label}</p>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>
    );
  }
);

export default ServicesHero;
