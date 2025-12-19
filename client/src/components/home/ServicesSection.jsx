import { NavLink } from "react-router-dom";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const servicesList = [
  {
    title: "Artificial Intelligence & Machine Learning Solutions",
    desc: "Advanced AI & ML systems that automate processes, optimize operations, and deliver predictive analytics.",
    icon: "🤖",
    path: "/ai-ml",
  },
  {
    title: "Generative AI (Gen AI) Solutions",
    desc: "Build cutting-edge GenAI applications such as chatbots, content generators, and intelligent automation tools.",
    icon: "✨",
    path: "/generative-ai",
  },
  {
    title: "Agents & Agentic AI",
    desc: "Autonomous AI agents that can plan, reason, and execute workflows with minimal human input.",
    icon: "🧠",
    path: "/agents-ai",
  },
  {
    title: "Embedded System & IoT Solutions",
    desc: "Smart embedded systems, IoT-connected devices, and real-time monitoring solutions.",
    icon: "📡",
    path: "/embedded-iot",
  },
  {
    title: "Data Science & Data Analytics",
    desc: "Insights-driven data pipelines, dashboards, and analytical models for data-driven decisions.",
    icon: "📊",
    path: "/data-science",
  },
  {
    title: "Mobile Application Development",
    desc: "High-performance Android & iOS apps built with modern scalable architectures.",
    icon: "📱",
    path: "/mobile-application-development",
  },
  {
    title: "Web Development & Digital Solutions",
    desc: "Full-stack web applications, business automation portals, and enterprise software platforms.",
    icon: "🌐",
    path: "/web-development",
  },
  {
    title: "On-Demand Software Development",
    desc: "Custom solutions tailored to your business needs—fast, scalable, and future-ready.",
    icon: "⚙️",
    path: "/on-demand-software-development",
  },
];

const ServicesSection = () => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.15,
    rootMargin: "0px 0px -120px 0px",
    once: true,
  });

  return (
    <section
      ref={ref}
      className={`rtx-services-wrapper u-section ${
        visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="rtx-services-container u-container-center">

        {/* TITLE */}
        <h2
          className="rtx-services-title u-drop"
          style={{ "--delay": "0.2s" }}
        >
          Our <span>Services</span>
        </h2>

        {/* SUBTEXT */}
        <p
          className="rtx-services-subtext u-drop"
          style={{ "--delay": "0.4s" }}
        >
          Comprehensive technology solutions designed to accelerate your digital
          transformation journey.
        </p>

        {/* SERVICE CARDS */}
        <div className="rtx-services-grid u-grid-auto">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="card card-md card-hover rtx-service-card u-drop"
              style={{ "--delay": `${0.6 + index * 0.15}s` }}
            >
              <div className="rtx-service-icon">{service.icon}</div>

              <h3 className="rtx-service-title">
                {service.title}
              </h3>

              <p className="rtx-service-desc">
                {service.desc}
              </p>

              <NavLink
                to={service.path}
                className="rtx-service-link"
              >
                Learn more →
              </NavLink>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
