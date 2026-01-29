import React, { useMemo } from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import Button from "../../components/common/Button";

const ServicesCTA = React.memo(
  ({ title, subtitle, buttonText, buttonLink }) => {
    /* ===============================
       OBSERVER OPTIONS (MEMOIZED)
    =============================== */

    const revealOptions = useMemo(
      () => ({
        threshold: 0.2,
        rootMargin: "0px 0px -120px 0px",
        once: true,
      }),
      []
    );

    const { ref, visible } = useRevealOnScroll(revealOptions);

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
          <h2 className="rtx-cta-title">{title}</h2>

          <p className="rtx-cta-sub">{subtitle}</p>

          {/* BUTTON */}
          <Button to={buttonLink} variant="primary" size="lg">
            {buttonText}
          </Button>
        </div>
      </section>
    );
  }
);

export default ServicesCTA;
