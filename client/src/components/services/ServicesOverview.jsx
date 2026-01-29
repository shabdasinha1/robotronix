import React, { useMemo } from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import Card from "../../components/common/Card";

const ServicesOverview = React.memo(
  ({
    title,
    accent,
    paragraphs = [],
    infoCards = [],
    btnText,
    btnLink = "#",
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

            {/* BUTTON — UNCHANGED */}
            {btnText && (
              <a href={btnLink} className="btn btn-outline">
                {btnText} →
              </a>
            )}
          </div>

          {/* RIGHT */}
          <div className="rtx-service-overview-right">
            {infoCards.map((card, idx) => {
              const delay = `${0.4 + idx * 0.2}s`;

              return (
                <Card
                  key={card.title}
                  variant="glass"
                  className="u-drop"
                  style={{ "--delay": delay }}
                >
                  <h3 className="text-accent">{card.title}</h3>
                  <p className="text-muted">{card.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
);

export default ServicesOverview;
