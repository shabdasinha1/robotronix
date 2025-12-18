import React, { useEffect, useRef, useState } from "react";


const CTASection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Scroll trigger animation
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
    <section className="rtx-cta-wrapper" ref={sectionRef}>
      <div className={`rtx-cta-box ${visible ? "rtx-cta-visible" : ""}`}>
        
        <h2 className="rtx-cta-title">
          Ready to Start Your <span>Next Project?</span>
        </h2>

        <p className="rtx-cta-sub">
          Let’s work together to build innovative, scalable, and future-ready digital solutions.
        </p>

       <button className="btn btn-primary btn-lg">
  Get Started 🚀
</button>


      </div>
    </section>
  );
};

export default CTASection;
