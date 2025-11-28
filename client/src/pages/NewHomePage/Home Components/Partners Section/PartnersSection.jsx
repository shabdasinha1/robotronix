import React, { useEffect, useRef, useState } from "react";
import "./PartnersSection.css";

const PartnersSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-partners-wrapper" ref={sectionRef}>
      <div className="rtx-partners-container">

        {/* TITLE */}
        <h2 className={`rtx-partners-title ${visible ? "rtx-drop-visible" : ""}`}>
          Trusted By <span>Industry Leaders</span>
        </h2>

        <p className={`rtx-partners-sub ${visible ? "rtx-drop-visible" : ""}`}>
          Companies around the world rely on us for cutting-edge solutions.
        </p>

        {/* LOGO MARQUEE */}
        <div className={`rtx-marquee-row ${visible ? "rtx-marquee-start" : ""}`}>
          <div className="rtx-marquee-track">
            {/* duplicate set to create seamless loop */}
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <img src="https://dummyimage.com/180x60/0af/fff&text=Company+1" alt="" />
                <img src="https://dummyimage.com/180x60/09f/fff&text=Company+2" alt="" />
                <img src="https://dummyimage.com/180x60/08e/fff&text=Company+3" alt="" />
                <img src="https://dummyimage.com/180x60/07d/fff&text=Company+4" alt="" />
                <img src="https://dummyimage.com/180x60/06c/fff&text=Company+5" alt="" />
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* SECOND ROW — opposite direction */}
        <div className={`rtx-marquee-row rtx-marquee-reverse ${visible ? "rtx-marquee-start" : ""}`}>
          <div className="rtx-marquee-track">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <img src="https://dummyimage.com/180x60/0af/fff&text=Partner+A" alt="" />
                <img src="https://dummyimage.com/180x60/09f/fff&text=Partner+B" alt="" />
                <img src="https://dummyimage.com/180x60/08e/fff&text=Partner+C" alt="" />
                <img src="https://dummyimage.com/180x60/07d/fff&text=Partner+D" alt="" />
                <img src="https://dummyimage.com/180x60/06c/fff&text=Partner+E" alt="" />
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
