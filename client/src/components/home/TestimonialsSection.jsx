import React, { useEffect, useMemo, useRef, useState } from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const testimonials = [
  {
    text: `Bhupendra Singh and the Robotronix team were extremely professional and collaborative throughout the project. Communication was consistent and proactive, with daily updates and regular feedback loops to ensure alignment. They were flexible and readily available for impromptu calls whenever clarifications were needed. The team stayed closely engaged while completing each milestone, actively seeking approvals to ensure we were always on the same page. The final MVP delivered met all expectations outlined at the start of the contract and provided a strong, reliable foundation for our product.`,
    name: "Client Review",
    role: "Engineer for LLM Integration and Backend Development",
    company: "Upwork Client",
    rating: 5,
  },
  {
    text: `Overall experience with them was good.`,
    name: "Client Review",
    role: "AI/ML Engineer – Short-Term Contract",
    company: "Upwork Client",
    rating: 5,
  },
  {
    text: `They are good at what they do and were quick to understand the terminologies and were able to turn around a quick V1 for us. Hoping to work with them soon.`,
    name: "Client Review",
    role: "LLM Specialist – Manufacturing Query Tool",
    company: "Upwork Client",
    rating: 5,
  },
  {
    text: `Their dedication and proper allocation of resources were good.`,
    name: "Client Review",
    role: "AI Development Project",
    company: "Software Development Company",
    rating: 5,
  },
  {
    text: `Their proactive communication, commitment to quality, and ability to adapt to our evolving needs are truly impressive.`,
    name: "Client Review",
    role: "AI Development Project",
    company: "Logistics Company",
    rating: 5,
  },
  {
    text: `The whole process amazed us.`,
    name: "Client Review",
    role: "Rotor Blade Inspection Bot Development",
    company: "Renewable Energy Company",
    rating: 5,
  },
  {
    text: `Robotronix showed great project management skills.`,
    name: "Client Review",
    role: "AI & Robotics Process Automation",
    company: "Development Corporation",
    rating: 5,
  },
  {
    text: `Their crystal-clear communication and strong commitment stood out the most.`,
    name: "Client Review",
    role: "Web Dev & SEO Project",
    company: "Graphic Design Company",
    rating: 5,
  },
  {
    text: `Robotronix excels in providing innovative, reliable, and customized technology solutions to businesses of all sizes.`,
    name: "Client Review",
    role: "Web Design, Development & Deployment",
    company: "IT Consulting Company",
    rating: 5,
  },
  {
    text: `Their ability to tackle complex challenges with a structured and solution-oriented approach was impressive.`,
    name: "Client Review",
    role: "Object Detection Model Development",
    company: "Baggage Scanner Manufacturer",
    rating: 5,
  },
];

const TestimonialsSection = React.memo(() => {
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

  /* ===============================
     SLIDER STATE
  =============================== */

  const [active, setActive] = useState(0);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(0);

  /* ===============================
     AUTO SLIDER (OPTIMIZED)
  =============================== */

  useEffect(() => {
    if (!visible) return;

    const interval = 4000;

    const loop = (time) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }

      if (time - lastTimeRef.current >= interval) {
        setActive((prev) => (prev + 1) % testimonials.length);
        lastTimeRef.current = time;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = null;
      lastTimeRef.current = 0;
    };
  }, [visible]);

  return (
    <section
      ref={ref}
      className={`rtx-test-wrapper u-section u-section-md ${
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
              key={`${item.role}-${index}`}
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
              className={`rtx-test-dot ${
                active === index ? "active" : ""
              }`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default TestimonialsSection;
