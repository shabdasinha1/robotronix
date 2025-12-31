import React from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const PartnersSection = React.memo(() => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.15,
    rootMargin: "0px 0px -120px 0px",
    once: true,
  });

  return (
    <section
      ref={ref}
      className={`rtx-partners-wrapper u-section ${
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

        {/* ROW 1 */}
        <div
          className="rtx-marquee-row u-drop"
          style={{ "--delay": "0.6s" }}
        >
          <div className="rtx-marquee-track">
            {[...Array(2)].map((_, i) => (
              <div className="rtx-marquee-set" key={i}>
                <img src="https://dummyimage.com/180x60/0af/fff&text=Company+1" alt="" />
                <img src="https://dummyimage.com/180x60/09f/fff&text=Company+2" alt="" />
                <img src="https://dummyimage.com/180x60/08e/fff&text=Company+3" alt="" />
                <img src="https://dummyimage.com/180x60/07d/fff&text=Company+4" alt="" />
                <img src="https://dummyimage.com/180x60/06c/fff&text=Company+5" alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2 */}
        <div
          className="rtx-marquee-row rtx-marquee-reverse u-drop"
          style={{ "--delay": "0.8s" }}
        >
          <div className="rtx-marquee-track">
            {[...Array(2)].map((_, i) => (
              <div className="rtx-marquee-set" key={i}>
                <img src="https://dummyimage.com/180x60/0af/fff&text=Partner+A" alt="" />
                <img src="https://dummyimage.com/180x60/09f/fff&text=Partner+B" alt="" />
                <img src="https://dummyimage.com/180x60/08e/fff&text=Partner+C" alt="" />
                <img src="https://dummyimage.com/180x60/07d/fff&text=Partner+D" alt="" />
                <img src="https://dummyimage.com/180x60/06c/fff&text=Partner+E" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default PartnersSection;
