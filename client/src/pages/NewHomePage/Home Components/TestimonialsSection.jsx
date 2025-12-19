import { useEffect, useState } from "react";
import useRevealOnScroll from "../../../hooks/useRevealOnScroll";

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
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.15,
    rootMargin: "0px 0px -120px 0px",
    once: true,
  });

  const [active, setActive] = useState(0);

  /* Auto slider */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      className={`rtx-test-wrapper u-section ${
        visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="rtx-test-container u-container-center">

        {/* TITLE */}
        <h2
          className="rtx-test-title u-drop"
          style={{ "--delay": "0.2s" }}
        >
          Client <span>Testimonials</span>
        </h2>

        <p
          className="rtx-test-subtext u-drop"
          style={{ "--delay": "0.4s" }}
        >
          Hear what our clients have to say about working with us.
        </p>

        {/* MAIN SLIDER */}
        <div
          className="rtx-test-slider u-drop"
          style={{ "--delay": "0.6s" }}
        >
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
        <div
          className="rtx-test-dots u-drop"
          style={{ "--delay": "0.8s" }}
        >
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`rtx-test-dot ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>

        {/* BOTTOM CARDS */}
        <div className="rtx-test-grid">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="card card-sm card-hover rtx-test-card u-drop"
              style={{ "--delay": `${1 + index * 0.15}s` }}
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
