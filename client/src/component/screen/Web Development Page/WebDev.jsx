import React from "react";
import { FiGlobe, FiCode, FiServer, FiTrendingUp, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import webHero from "../../../assets/img/new/webdev-banner.webp"; // Replace
import "./WebDev.css";

const SERVICES = [
  {
    icon: <FiCode />,
    title: "Custom Web Application Development",
    desc: "High-performance, scalable web apps built using React, Node.js, Next.js, and modern development standards.",
  },
  {
    icon: <FiGlobe />,
    title: "Business Websites & Corporate Portals",
    desc: "SEO-optimized, visually appealing and fully responsive websites designed to boost brand identity and engagement.",
  },
  {
    icon: <FiServer />,
    title: "API & Backend Engineering",
    desc: "Secure and efficient backend systems, REST/GraphQL APIs, cloud deployment pipelines, and optimized databases.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Digital Transformation & Automation",
    desc: "Advanced dashboards, workflow automation, CRM systems, and enterprise-level digital modernization.",
  },
];

const WHY = [
  "Full-stack expertise across all major modern web technologies",
  "Business-centric approach with measurable outcomes",
  "SEO, performance, security, and scalability built from day one",
  "Complete product lifecycle support — design to deployment",
  "Agile development with transparent communication and timelines",
];

const INDUSTRIES = [
  "E-commerce & Online Retail",
  "Healthcare & Telemedicine Platforms",
  "Education Technology & LMS Solutions",
  "SaaS Startups & Enterprise Applications",
  "Manufacturing Automation & IoT Dashboards",
  "Travel, Tourism & Service Aggregators",
  "Finance, Banking & Insurance",
  "Real Estate Portals & CRM Solutions",
];

export default function WebDev() {
  return (
    <>
      {/* HERO */}
      <section className="wd-hero">
        <div className="container wd-hero-container">
          <div className="wd-hero-text">
            <h1>Web Development & Digital Solutions</h1>
            <p>
              We build fast, scalable, and intelligent digital experiences that help businesses grow in today’s connected world.
            </p>
            <NavLink to="/contact-us" className="wd-hero-btn">
              Start Your Project <FiArrowRight />
            </NavLink>
          </div>

          <div className="wd-hero-img-wrapper">
            <img src={webHero} alt="Web Development" className="wd-hero-img" />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="wd-section container">
        <h2 className="wd-heading">Building the Future of Digital Experiences</h2>
        <p className="wd-text">
          At Robotronix Engineering Tech Pvt. Ltd., we empower businesses with innovative web solutions engineered for performance,
          reliability and long-term success. From visually stunning websites to robust enterprise systems, we combine creative design with strong engineering to deliver platforms that are fast, responsive, and future-ready.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="wd-section light-bg">
        <div className="container">
          <h2 className="wd-heading">Our Web Development Expertise</h2>

          <div className="wd-grid">
            {SERVICES.map((item, i) => (
              <div key={i} className="wd-card">
                <div className="wd-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="wd-section">
        <div className="container">
          <h2 className="wd-heading">Our Development Process</h2>

          <div className="wd-process-grid">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                text: "We begin by understanding your goals, target users, and technical requirements to create a clear product roadmap.",
              },
              {
                step: "02",
                title: "UI/UX Design",
                text: "Designing intuitive, user-friendly interfaces with modern aesthetics and seamless user journeys.",
              },
              {
                step: "03",
                title: "Development",
                text: "We build robust frontends and backends with clean, scalable, and optimized code architectures.",
              },
              {
                step: "04",
                title: "Testing & QA",
                text: "Thorough testing across devices and environments ensures performance, security, and stability.",
              },
              {
                step: "05",
                title: "Launch & Support",
                text: "Smooth deployment, monitoring, ongoing support, and scalability enhancements as your business grows.",
              },
            ].map((item, i) => (
              <div key={i} className="wd-process-card">
                <h3>{item.step}</h3>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="wd-section  light-bg">
        <div className="container">
          <h2 className="wd-heading">Technologies We Use</h2>
          <p className="wd-text">
            Our tech stack is built around reliability, performance, and scalability — enabling us to deliver world-class solutions.
          </p>

          <div className="wd-tech-grid">
            {[
              "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL",
              "AWS", "Firebase", "Docker", "Python", "TypeScript", "GraphQL"
            ].map((tech, i) => (
              <div key={i} className="wd-tech-item">
                <FiCheckCircle className="wd-tech-icon" />
                <p>{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE & SECURITY */}
      <section className="wd-section">
        <div className="container">
          <h2 className="wd-heading">Performance & Security Focused</h2>

          <div className="wd-perf-grid">
            {[
              "Optimized for lightning-fast performance",
              "Cloud deployment with zero downtime",
              "Secure authentication & role-based access",
              "Fully encrypted API communication",
              "Scalable microservices architecture",
              "Routine security checks and vulnerability audits"
            ].map((item, i) => (
              <div key={i} className="wd-perf-card">
                <FiCheckCircle className="wd-perf-icon" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="wd-section gradient-bg">
        <div className="container">
          <h2 className="wd-heading white">Industries We Serve</h2>

          <div className="wd-industries-grid">
            {INDUSTRIES.map((item, i) => (
              <div key={i} className="wd-industry-card">
                <FiCheckCircle className="wd-industry-icon" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="wd-section dark-bg">
        <div className="container">
          <h2 className="wd-heading white">Why Choose Robotronix?</h2>

          <div className="wd-why-grid">
            {WHY.map((item, i) => (
              <div key={i} className="wd-why-card">
                <FiCheckCircle className="wd-why-icon" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wd-final-cta">
        <div className="container">
          <h2>Accelerate Your Digital Journey</h2>
          <p>
            From concept to launch — we help you build powerful digital solutions that deliver real business results.
          </p>
          <NavLink to="/contact-us" className="wd-final-btn">
            Let’s Work Together <FiArrowRight />
          </NavLink>
        </div>
      </section>
    </>
  );
}
