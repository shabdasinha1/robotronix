import { useState } from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { Link } from "react-router-dom";


const Portfolio = () => {
     const [active, setActive] = useState("All");
       const [activeCategory, setActiveCategory] = useState("All");
  const hero = useRevealOnScroll({
    threshold: 0.2,
    once: true,
  });
   const filterSec = useRevealOnScroll({
    threshold: 0.2,
    once: true,
  });
  const gridSec = useRevealOnScroll({
    threshold: 0.15,
    once: true,
  });
   const industriesSec = useRevealOnScroll({
    threshold: 0.2,
    once: true,
  });
  
  const techSec = useRevealOnScroll({
    threshold: 0.2,
    once: true,
  });

  const ctaSec = useRevealOnScroll({
    threshold: 0.2,
    once: true,
  });

//   For Section 2 PortfolioFilters 
  const categories = [
  "All",
  "AI & Machine Learning",
  "Generative AI",
  "Web & Enterprise Applications",
  "Mobile App Development",
  "Embedded Systems & IoT",
  "Data & Analytics"
];

//For Section 3 Portfolio Projects
const projects = [
  {
    title: "AI-Based Smart Surveillance System",
    category: "AI & Machine Learning",
    industry: "Smart Cities / Security",
    description:
      "An intelligent video analytics platform leveraging computer vision and deep learning for real-time surveillance, anomaly detection, and demographic insights.",
    tech: ["Python", "OpenCV", "YOLO", "AWS", "React"],
  },
  {
    title: "Enterprise Web Management Platform",
    category: "Web & Enterprise Applications",
    industry: "Enterprise IT",
    description:
      "A scalable, secure web application designed to streamline enterprise workflows, data management, and reporting with role-based access control.",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    title: "IoT-Based Industrial Monitoring System",
    category: "Embedded Systems & IoT",
    industry: "Manufacturing",
    description:
      "Real-time IoT solution for equipment monitoring, data collection, and predictive maintenance using edge devices and cloud integration.",
    tech: ["ESP32", "MQTT", "AWS IoT", "Node.js"],
  },
  {
    title: "AI-Powered Data Analytics Dashboard",
    category: "Data & Analytics",
    industry: "Business Intelligence",
    description:
      "An analytics platform providing actionable insights through machine learning models, real-time dashboards, and automated reporting.",
    tech: ["Python", "Pandas", "Power BI", "PostgreSQL"],
  },
];

// For section 4
const industries = [
  {
    title: "Healthcare & MedTech",
    desc: "Secure, scalable IT solutions for healthcare platforms, data analytics, and intelligent systems that improve operational efficiency and patient outcomes.",
  },
  {
    title: "Manufacturing & Industrial",
    desc: "IoT-enabled monitoring, embedded systems, and predictive analytics solutions designed to optimize industrial operations and equipment performance.",
  },
  {
    title: "Enterprise & Corporate IT",
    desc: "Robust enterprise applications, workflow automation, and data-driven platforms built for scalability, security, and performance.",
  },
  {
    title: "Education & Skill Development",
    desc: "Digital learning platforms and technology solutions that enable skill development, accessibility, and scalable education delivery.",
  },
  {
    title: "Smart Cities & Infrastructure",
    desc: "AI-powered surveillance, data analytics, and connected systems supporting smarter, safer, and more efficient urban environments.",
  },
  {
    title: "Retail & Logistics",
    desc: "Technology solutions that enhance supply chain visibility, customer engagement, and operational decision-making through data insights.",
  },
];

// For section 5 Technology Stack
const techStack = [
  {
    group: "Frontend Engineering",
    items: ["React", "Angular", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    group: "Backend & APIs",
    items: [
      "Node.js",
      "Python (Django, Flask)",
      "Java (Spring Boot)",
      "PHP (Laravel)",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    group: "AI, ML & Data",
    items: [
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "YOLO",
      "Pandas",
      "Scikit-learn",
      "Power BI",
    ],
  },
  {
    group: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, Lambda, RDS)",
      "Docker",
      "CI/CD Pipelines",
      "GitHub",
      "GitLab",
    ],
  },
  {
    group: "Embedded Systems & IoT",
    items: [
      "ESP32",
      "Raspberry Pi",
      "Jetson Orin",
      "MQTT",
      "AWS IoT Core",
      "Edge IoT",
    ],
  },
];


const filteredProjects =
  activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);


  const handleClick = (cat) => {
    setActive(cat);
    // (cat) => setActiveCategory(cat)?.(cat);
  };

  return (
    <>
    <section
      ref={hero.ref}
      className={`u-section rtx-portfolio-hero ${
        hero.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container-center">

        {/* EYEBROW */}
        <span
          className="rtx-portfolio-eyebrow u-drop"
          style={{ "--delay": "0.1s" }}
        >
          Our Portfolio
        </span>

        {/* MAIN TITLE */}
        <h1
          className="rtx-portfolio-title u-drop"
          style={{ "--delay": "0.3s" }}
        >
          Engineering <span>Real-World IT Solutions</span>
          <br />
          That Drive Business Impact
        </h1>

        {/* SUBTEXT */}
        <p
          className="rtx-portfolio-subtext u-drop"
          style={{ "--delay": "0.5s" }}
        >
          Explore our portfolio of software engineering, AI & machine learning,
          embedded systems, IoT, and full-stack product development projects.
          Each solution is designed to solve complex challenges, improve
          efficiency, and deliver scalable, future-ready technology outcomes.
        </p>

        {/* HIGHLIGHTS */}
        <div
          className="rtx-portfolio-highlights u-drop"
          style={{ "--delay": "0.7s" }}
        >
          <span>Founded 2010</span>
          <span>IT & Product Development</span>
          <span>AI, ML & Data-Driven Solutions</span>
          <span>Embedded Systems & IoT</span>
          <span>Enterprise-Grade Engineering</span>
        </div>

      </div>
    </section>

    {/*---------------- PortfolioFilters ------------ */}
      <section
      ref={filterSec.ref}
      className={`u-section rtx-portfolio-filters ${
        filterSec.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container-center">

        {/* HEADER */}
        <div className="u-section-header u-drop">
          <h2 className="u-title">
            Explore Our <span>Technology Work</span>
          </h2>
          <p className="u-subtext">
            Browse our portfolio by technology domain, solution type, and
            engineering focus. Each project reflects our commitment to scalable,
            secure, and impact-driven IT solutions.
          </p>
        </div>

        {/* FILTER TABS */}
        <div className="rtx-portfolio-filter-tabs u-drop">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`rtx-filter-btn ${
                active === cat ? "rtx-active" : ""
              }`}
              onClick={() => handleClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>
    </section>

    {/*-------------- Portfolio Projects ------------ */}
      <section
      ref={gridSec.ref}
      className={`u-section rtx-portfolio-grid ${
        gridSec.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container">

        {/* HEADER */}
        <div className="u-section-header u-drop">
          <h2 className="u-title">
            Featured <span>Projects</span>
          </h2>
          <p className="u-subtext">
            A selection of our real-world IT projects showcasing software
            engineering excellence, AI-driven innovation, and scalable
            technology solutions.
          </p>
        </div>

        {/* GRID */}
        <div className="rtx-projects-grid">
          {projects.map((item, i) => (
            <article
              key={i}
              className="rtx-project-card u-drop-scale"
              style={{ "--delay": `${0.15 + i * 0.1}s` }}
            >
              <span className="rtx-project-category">
                {item.category}
              </span>

              <h3>{item.title}</h3>

              <p className="rtx-project-desc">
                {item.description}
              </p>

              <div className="rtx-project-meta">
                <span>{item.industry}</span>
              </div>

              <div className="rtx-project-tech">
                {item.tech.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>

    {/*------------------ Industries We Serve ------------- */}
      <section
      ref={industriesSec.ref}
      className={`u-section rtx-portfolio-industries ${
        industriesSec.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container">

        {/* HEADER */}
        <div className="u-section-header u-drop">
          <h2 className="u-title">
            Industries <span>We Serve</span>
          </h2>
          <p className="u-subtext">
            Our IT solutions are built to address real-world challenges across
            diverse industries, combining engineering excellence with deep
            domain understanding.
          </p>
        </div>

        {/* GRID */}
        <div className="rtx-industries-grid">
          {industries.map((item, i) => (
            <div
              key={i}
              className="rtx-industry-card u-drop-scale"
              style={{ "--delay": `${0.15 + i * 0.1}s` }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/*------------------ Technology Stack --------------- */}
       <section
      ref={techSec.ref}
      className={`u-section rtx-portfolio-tech ${
        techSec.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container">

        {/* HEADER */}
        <div className="u-section-header u-drop">
          <h2 className="u-title">
            Technology <span>Stack</span>
          </h2>
          <p className="u-subtext">
            Our solutions are powered by a modern, scalable, and battle-tested
            technology stack — carefully selected to deliver performance,
            security, and long-term reliability.
          </p>
        </div>

        {/* STACK GROUPS */}
        <div className="rtx-tech-groups">
          {techStack.map((group, i) => (
            <div
              key={i}
              className="rtx-tech-group u-drop-scale"
              style={{ "--delay": `${0.15 + i * 0.1}s` }}
            >
              <h3>{group.group}</h3>
              <div className="rtx-tech-items">
                {group.items.map((item, idx) => (
                  <span key={idx}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/*-------------- Portfolio Call To Action (CTA) ------------- */}
     <section
      ref={ctaSec.ref}
      className={`u-section rtx-portfolio-cta ${
        ctaSec.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container-center">

        {/* TITLE */}
        <h2
          className="rtx-portfolio-cta-title u-drop"
          style={{ "--delay": "0.2s" }}
        >
          Ready to Build Your Next <span>Intelligent IT Solution</span>?
        </h2>

        {/* TEXT */}
        <p
          className="rtx-portfolio-cta-text u-drop"
          style={{ "--delay": "0.4s" }}
        >
          Whether you are planning a new digital product, scaling an existing
          platform, or exploring AI, IoT, or enterprise software solutions,
          Robotronix Engineering Tech Pvt. Ltd. is ready to partner with you and
          deliver secure, scalable, and future-ready technology.
        </p>

        {/* ACTIONS */}
        <div
          className="rtx-portfolio-cta-actions u-drop"
          style={{ "--delay": "0.6s" }}
        >
          <Link to="/contact-us" className="btn btn-primary btn-lg">
            Start a Conversation
          </Link>

          <Link to="/services" className="btn btn-outline btn-lg">
            View Our Services
          </Link>
        </div>

      </div>
    </section>
    </>
  );
};

export default Portfolio;
