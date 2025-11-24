import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const contentData = {
  
  mean: {
    title: "MEAN Stack Development",
    intro:
      "Build powerful full-stack applications with MongoDB, Express.js, Angular, and Node.js",
    whyTitle: "Why Choose MEAN Stack?",
    whyDesc:
      "Experience the power of JavaScript across your entire application stack",
    ctaTitle: "Ready to Start Your MEAN Project?",
    ctaDesc:
      "Join thousands of developers building scalable applications with the MEAN stack",
    stackDiagram: ["M", "E", "A", "N"],
    features: [
      {
        icon: "JS",
        title: "Single Language",
        desc: "Use JavaScript throughout your entire development stack, from frontend to backend",
      },
      {
        icon: "⚡",
        title: "High Performance",
        desc: "Built for speed with Node.js event-driven architecture and efficient data handling",
      },
      {
        icon: "📈",
        title: "Scalable",
        desc: "Easily scale your applications with cloud-ready architecture and flexible components",
      },
      {
        icon: "👥",
        title: "Strong Community",
        desc: "Benefit from extensive documentation, libraries, and active developer communities",
      },
    ],
    workflow: [
      "Setup & Planning",
      "Backend Development",
      "Frontend Development",
      "Testing & Deployment",
    ],
  },
  node: {
    title: "Node.js Development",
    intro:
      "Create scalable, high-performance backend applications with Node.js",
    whyTitle: "Why Choose Node.js?",
    whyDesc: "Asynchronous, event-driven server-side JavaScript",
    ctaTitle: "Launch Your Node Project",
    ctaDesc: "Use the world's fastest growing backend technology",
    stackDiagram: ["N", "O", "D", "E"],
    features: [
      {
        icon: "⚙️",
        title: "Asynchronous",
        desc: "Handle thousands of connections concurrently",
      },
      {
        icon: "🚀",
        title: "High Speed",
        desc: "Built on Chrome's V8 engine for maximum performance",
      },
      {
        icon: "🔗",
        title: "Fullstack JS",
        desc: "Use JavaScript on both client and server side",
      },
      {
        icon: "🌍",
        title: "Large Ecosystem",
        desc: "Thousands of npm modules available",
      },
    ],
    workflow: [
      "API Design",
      "Database Integration",
      "Authentication",
      "Deployment",
    ],
  },
  pwa: {
    title: "Progressive Web App Development",
    intro:
      "Build installable, offline-first web apps that behave like native apps",
    whyTitle: "Why Choose PWA?",
    whyDesc: "Deliver fast, reliable, and engaging user experiences",
    ctaTitle: "Start Your PWA Project",
    ctaDesc: "Leverage modern web capabilities for enhanced user engagement",
    stackDiagram: ["P", "W", "A"],
    features: [
      {
        icon: "📱",
        title: "App-like",
        desc: "Feels like a native app with full-screen and installable options",
      },
      {
        icon: "📶",
        title: "Offline Ready",
        desc: "Works even with poor or no internet connection",
      },
      {
        icon: "⚡",
        title: "Fast Load",
        desc: "Loads instantly with service workers and caching",
      },
      {
        icon: "🔔",
        title: "Push Notifications",
        desc: "Re-engage users with timely updates",
      },
    ],
    workflow: [
      "PWA Planning",
      "Manifest & Service Worker",
      "Offline Strategy",
      "Testing & Deployment",
    ],
  },
  react: {
    title: "React.js Development",
    intro:
      "Create modern, high-performing front-end applications with React.js",
    whyTitle: "Why Choose React.js?",
    whyDesc: "Efficient, flexible, and component-based UI development",
    ctaTitle: "Kick Off Your React Project",
    ctaDesc: "Develop dynamic, interactive user interfaces using React",
    stackDiagram: ["R", "E", "A", "C", "T"],
    features: [
      {
        icon: "🧩",
        title: "Component Based",
        desc: "Reusable components for efficient development",
      },
      {
        icon: "⚛️",
        title: "Virtual DOM",
        desc: "Improves performance with minimal updates to the DOM",
      },
      {
        icon: "🔁",
        title: "Unidirectional Data Flow",
        desc: "Makes code predictable and easier to debug",
      },
      {
        icon: "🌍",
        title: "Large Community",
        desc: "Extensive libraries, tools, and community support",
      },
    ],
    workflow: [
      "Component Design",
      "State Management",
      "API Integration",
      "Optimization & Deployment",
    ],
  },
};

const MeanDev = () => {
   const navigate = useNavigate();
  const { type } = useParams();

  const selectedKey =
    {
      "mean-development": "mean",
      "nodejs-development": "node",
      "progressive-web-application-development": "pwa",
      "reactjs-development": "react",
    }[type] || "mean";

  const data = contentData[selectedKey];
  // const [selected, setSelected] = useState("mean");
  return (
    <>
      <div className="mean-development-container">
        <section className="mean-intro-section">
          <div className="mean-intro-content">
            <h1 className="me an-main-title">{data.title}</h1>
            <p className="mean-description-text">{data.intro}</p>
            <div className="mean-action-buttons">
              <button
                className="mean-button primary"
                onClick={() => navigate("/contact-us")}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="mean-visual-display">
            <div className="mean-stack-diagram">
              {data.stackDiagram.map((layer, idx) => (
                <div
                  key={idx}
                  className={`mean-stack-layer ${layer.toLowerCase()}`}
                >
                  {layer}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="section-header">
            <h2 className="section-title">{data.whyTitle}</h2>
            <p className="section-description">{data.whyDesc}</p>
          </div>
          <div className="features-grid">
            {data.features.map((f, idx) => (
              <div className="feature-card" key={idx}>
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-description">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="development-process">
          <div className="section-header">
            <h2 className="section-title">Development Workflow</h2>
            <p className="section-description">
              Streamlined development process from concept to deployment
            </p>
          </div>
          <div className="process-timeline1">
            {data.workflow.map((step, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-marker">{idx + 1}</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{step}</h3>
                  <p className="timeline-description">Details about {step}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">{data.ctaTitle}</h2>
            <p className="cta-description">{data.ctaDesc}</p>
            <div className="cta-actions">
              <button
                className="mean-button primary large"
                onClick={() => navigate("/contact-us")}
              >
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MeanDev;
