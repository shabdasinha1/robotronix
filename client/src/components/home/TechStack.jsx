import React, { useMemo } from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";

const techItems = [
  // Frontend
  { name: "React", type: "Frontend" },
  { name: "Angular", type: "Frontend" },

  // Backend
  { name: "Node.js", type: "Backend" },
  { name: "Java (Spring Boot)", type: "Backend" },

  // Backend / AI
  { name: "Python", type: "Backend / AI" },

  // Messaging & Streaming
  { name: "Apache Kafka", type: "Event Streaming" },

  // Databases
  { name: "PostgreSQL", type: "Database" },
  { name: "MongoDB", type: "Database" },

  // Backend as a Service
  { name: "Firebase", type: "Backend as a Service" },

  // Cloud & DevOps
  { name: "AWS", type: "Cloud" },
  { name: "Docker", type: "DevOps" },

  // Automation & Integration
  { name: "N8N", type: "Workflow Automation" },
  
  // AI / ML
  { name: "TensorFlow", type: "AI / ML" },
  { name: "YOLO", type: "Computer Vision" },
  { name: "LangChain", type: "Generative AI" },

  // Mobile
  { name: "Dart", type: "Mobile Apps" },
  { name: "Flutter", type: "Mobile Apps" },

  // Hardware
  { name: "IoT & Embedded", type: "Hardware & Edge Computing" },
];

const TechStack = React.memo(() => {
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
      className={`rtx-tech-wrapper u-section u-section-md ${
        visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="rtx-tech-container u-container-center">
        {/* TITLE */}
        <h2
          className="rtx-tech-title u-drop"
          style={{ "--delay": "0.2s" }}
        >
          Technology <span>Stack</span>
        </h2>

        {/* SUBTEXT */}
        <p
          className="rtx-tech-subtext u-drop"
          style={{ "--delay": "0.4s" }}
        >
          We leverage cutting-edge technologies to build robust, scalable
          solutions.
        </p>

        {/* CARDS */}
        <div className="rtx-tech-grid">
          {techItems.map((item, index) => {
            const delay = `${0.6 + index * 0.08}s`;

            return (
              <Card
                key={item.name}
                size="sm"
                variant="hover"
                className="rtx-tech-card u-drop"
                style={{ "--delay": delay }}
              >
                <h4>{item.name}</h4>
                <span>{item.type}</span>
              </Card>
            );
          })}
        </div>

        <p
          className="rtx-tech-footer u-drop"
          style={{ "--delay": "1.8s" }}
        >
          And many more technologies in our arsenal
        </p>

        <Button
          to="/portfolio"
          state={{ scrollTo: "tech-stack" }}
          variant="outline"
          size="md"
          className="u-drop"
          style={{ "--delay": "2s" }}
        >
          View Full Tech Stack →
        </Button>
      </div>
    </section>
  );
});

export default TechStack;
