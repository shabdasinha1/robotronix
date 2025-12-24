import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";

const techItems = [
  { name: "React", type: "Frontend" },
  { name: "TypeScript", type: "Language" },
  { name: "Node.js", type: "Backend" },
  { name: "Python", type: "AI/ML" },
  { name: "AWS", type: "Cloud" },
  { name: "Docker", type: "DevOps" },
  { name: "Kubernetes", type: "Orchestration" },
  { name: "PostgreSQL", type: "Database" },
  { name: "MongoDB", type: "Database" },
  { name: "GraphQL", type: "API" },
  { name: "TensorFlow", type: "AI/ML" },
  { name: "Azure", type: "Cloud" },
  { name: "Next.js", type: "Framework" },
  { name: "Tailwind", type: "Styling" },
];

const TechStack = () => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.15,
    rootMargin: "0px 0px -120px 0px",
    once: true,
  });

  return (
    <section
      ref={ref}
      className={`rtx-tech-wrapper u-section ${
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
          We leverage cutting-edge technologies to build robust, scalable solutions.
        </p>

        {/* CARDS */}
        <div className="rtx-tech-grid">
          {techItems.map((item, index) => (
            <Card
              key={index}
              size="sm"
              variant="hover"
              className="rtx-tech-card u-drop"
              style={{ "--delay": `${0.6 + index * 0.08}s` }}
            >
              <h4>{item.name}</h4>
              <span>{item.type}</span>
            </Card>
          ))}
        </div>

        <p
          className="rtx-tech-footer u-drop"
          style={{ "--delay": "1.8s" }}
        >
          And many more technologies in our arsenal
        </p>


        <Button
          to=""
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
};

export default TechStack;
