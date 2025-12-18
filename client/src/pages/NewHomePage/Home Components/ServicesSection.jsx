import React, { useEffect, useRef, useState } from "react";


const servicesList = [
  {
    title: "Artificial Intelligence & Machine Learning Solutions",
    desc: "Advanced AI & ML systems that automate processes, optimize operations, and deliver predictive analytics.",
    icon: "🤖",
  },
  {
    title: "Generative AI (Gen AI) Solutions",
    desc: "Build cutting-edge GenAI applications such as chatbots, content generators, and intelligent automation tools.",
    icon: "✨",
  },
  {
    title: "Agents & Agentic AI",
    desc: "Autonomous AI agents that can plan, reason, and execute workflows with minimal human input.",
    icon: "🧠",
  },
  {
    title: "Embedded System & IoT Solutions",
    desc: "Smart embedded systems, IoT-connected devices, and real-time monitoring solutions.",
    icon: "📡",
  },
  {
    title: "Data Science & Data Analytics",
    desc: "Insights-driven data pipelines, dashboards, and analytical models for data-driven decisions.",
    icon: "📊",
  },
  {
    title: "Mobile Application Development",
    desc: "High-performance Android & iOS apps built with modern scalable architectures.",
    icon: "📱",
  },
  {
    title: "Web Development & Digital Solutions",
    desc: "Full-stack web applications, business automation portals, and enterprise software platforms.",
    icon: "🌐",
  },
  {
    title: "On-Demand Software Development",
    desc: "Custom solutions tailored to your business needs—fast, scalable, and future-ready.",
    icon: "⚙️",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);


useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setIsInView(true);
      }
    },
    {
      threshold: 0,
      rootMargin: "0px 0px -40% 0px", 
    }
  );

  if (sectionRef.current) observer.observe(sectionRef.current);

  return () => observer.disconnect();
}, []);


  return (
    <section className="rtx-services-wrapper" ref={sectionRef}>
      <div className="rtx-services-container">

        {/* TITLE */}
        <h2 className={`rtx-services-title ${isInView ? "rtx-title-visible" : ""}`}>
          Our <span>Services</span>
        </h2>

        {/* SUBHEADING */}
        <p className={`rtx-services-subtext ${isInView ? "rtx-sub-visible" : ""}`}>
          Comprehensive technology solutions designed to accelerate your digital transformation journey.
        </p>

        {/* SERVICE CARDS */}
        <div className="rtx-services-grid">
          {servicesList.map((service, index) => (
            <div
  key={index}
  className={`card card-md card-hover rtx-service-card 
    ${isInView ? `rtx-card-visible rtx-card-delay-${index + 1}` : ""}`}
>

              <div className="rtx-service-icon">{service.icon}</div>
              <h3 className="rtx-service-title">{service.title}</h3>
              <p className="rtx-service-desc">{service.desc}</p>
              <a href="/" className="rtx-service-link">Learn more →</a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
