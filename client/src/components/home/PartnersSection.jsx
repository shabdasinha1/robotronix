import React, { useMemo } from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import logo1 from "../../assets/images/logo/logo1.png";
import logo2 from "../../assets/images/logo/logo2.jpg";
import logo3 from "../../assets/images/logo/logo3.png";
import logo4 from "../../assets/images/logo/logo4.png";
import logo5 from "../../assets/images/logo/logo5.png";
import logo6 from "../../assets/images/logo/logo6.png";
import logo7 from "../../assets/images/logo/logo7.png";
import logo8 from "../../assets/images/logo/logo8.png";
import logo9 from "../../assets/images/logo/logo9.png";
import logo10 from "../../assets/images/logo/logo10.png";

/* ===============================
   STATIC LOGOS (SAFE)
=============================== */

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
];

const marqueeCopies = [0, 1];

const PartnersSection = React.memo(() => {
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
      className={`rtx-partners-wrapper u-section u-section-md ${
        visible ? "u-drop-visible rtx-marquee-active" : ""
      }`}
    >
      <div className="rtx-partners-container u-container-center">
        {/* TITLE */}
        <h2
          className="rtx-partners-title u-drop"
          style={{ "--delay": "0.2s" }}
        >
          Trusted By <span>Industry Leaders</span>
        </h2>

        <p
          className="rtx-partners-sub u-drop"
          style={{ "--delay": "0.4s" }}
        >
          Companies around the world rely on us for cutting-edge solutions.
        </p>

        {/* ROW */}
        <div
          className="rtx-marquee-row u-drop"
          style={{ "--delay": "0.6s" }}
        >
          <div className="rtx-marquee-track">
            {marqueeCopies.map((i) => (
              <div className="rtx-marquee-set" key={i}>
                {logos.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default PartnersSection;
