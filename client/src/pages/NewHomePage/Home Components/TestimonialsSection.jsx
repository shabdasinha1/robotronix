import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    text: `NexaTech transformed our entire infrastructure. Their cloud migration expertise saved us 40% in operational costs while improving performance by 300%. Absolutely phenomenal team!`,
    name: "Sarah Johnson",
    role: "CTO, TechCorp Global",
    company: "TechCorp",
    rating: 5,
  },
  {
    text: `The AI-powered analytics platform NexaTech built revolutionized our decision-making process. We now process data 10x faster with far greater accuracy.`,
    name: "Michael Chen",
    role: "CEO, FinanceHub",
    company: "FinanceHub",
    rating: 5,
  },
  {
    text: `Their dedication to security and compliance was outstanding. NexaTech delivered a HIPAA-compliant platform that exceeded our expectations.`,
    name: "Emma Rodriguez",
    role: "Head of IT, HealthCare Pro",
    company: "HealthCare Pro",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  // Scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0, rootMargin: "0px 0px -40% 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="rtx-test-wrapper" ref={sectionRef}>
      <div className="rtx-test-container">

        {/* TITLE */}
        <h2 className={`rtx-test-title ${visible ? "rtx-drop-visible" : ""}`}>
          Client <span>Testimonials</span>
        </h2>

        <p className={`rtx-test-subtext ${visible ? "rtx-drop-visible" : ""}`}>
          Hear what our clients have to say about working with us.
        </p>

        {/* MAIN SLIDER */}
        <div className="rtx-test-slider">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`rtx-test-slide ${
                index === active ? "rtx-slide-active" : ""
              }`}
            >
              <div className="rtx-test-rating">
                {"★".repeat(item.rating)}
              </div>

              <p className="rtx-test-text">"{item.text}"</p>

              <h4 className="rtx-test-name">{item.name}</h4>
              <p className="rtx-test-role">{item.role}</p>
              <p className="rtx-test-company">{item.company}</p>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="rtx-test-dots">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`rtx-test-dot ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            ></div>
          ))}
        </div>

        {/* BOTTOM SMALL CARDS */}
        <div className="rtx-test-grid">
          {testimonials.map((item, index) => (
            <div
  key={index}
  className={`card card-sm card-hover rtx-test-card ${
    visible ? `rtx-card-visible rtx-card-delay-${index + 1}` : ""
  }`}
>

              <div className="rtx-test-rating-small">
                {"★".repeat(item.rating)}
              </div>

              <p className="rtx-test-card-text">
                {item.text.substring(0, 140)}...
              </p>

              <h4 className="rtx-test-card-name">{item.name}</h4>
              <p className="rtx-test-card-company">{item.company}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
