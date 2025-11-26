import React from "react";
import {
  FiCpu,
  FiLayers,
  FiMessageCircle,
  FiZap,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import agentsHeroImg from "../../../assets/img/new/agentsAI-banner.webp"; // <-- Replace image
import "./AgentsAI.css";

const INDUSTRY_ITEMS = [
  { icon: "🏭", title: "Manufacturing", desc: "Autonomous supply chain tracking, auto re-orders, predictive maintenance" },
  { icon: "🏦", title: "Finance & Banking", desc: "AI wealth assistants, loan processing agents, compliance automation" },
  { icon: "🏥", title: "Healthcare", desc: "Patient scheduling, insurance claim handling, and follow‑up automation" },
  { icon: "🛒", title: "Retail & E-commerce", desc: "Shopping agents for purchases, returns, and customer support" },
  { icon: "👔", title: "Human Resources", desc: "Recruitment agents, applicant screening, and onboarding automation" },
];

const WHY_ITEMS = [
  "Expertise in Agentic Frameworks like LangChain, AutoGPT & LlamaIndex",
  "Deep experience in connecting agents with CRMs, ERPs & enterprise tools",
  "Seamless integration with existing business infrastructure",
  "Enterprise-grade security with strict permission guardrails",
  "Human‑in‑the‑loop oversight to ensure safe, supervised autonomy",
  "Full explainability & audit logs for every autonomous decision",
];

const AgentsAI = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="genai-hero-section">
        <div className="container genai-hero-container">
          <div className="genai-hero-text">
            <span className="genai-tag">AI Agent Solutions</span>

            <h1 className="genai-title">Build Autonomous Digital Workers for Your Business</h1>

            <p className="genai-subtext">
              At Robotronix Engineering Tech Pvt. Ltd., our AI Agent Solutions move beyond basic
              automation into autonomous task execution, workflow orchestration, and goal‑driven
              problem solving—powered by advanced LLMs, RAG systems, and tool-integrated planning
              frameworks.
            </p>

            <div className="genai-buttons">
              <NavLink className="genai-btn-primary" to="/contact-us">
                Talk to Experts <FiArrowRight />
              </NavLink>
            </div>

            <div className="genai-meta">
              <div>
                <h3>Next‑Gen AI</h3>
                <p>Autonomous Digital Agents</p>
              </div>
              <div>
                <h3>Enterprise Ready</h3>
                <p>Secure Agentic Deployments</p>
              </div>
            </div>
          </div>

          <div className="genai-hero-image">
            <img src={agentsHeroImg} alt="AI Agents Illustration" loading="lazy" />
          </div>
        </div>
      </section>

      {/* WHAT ARE AI AGENTS */}
      <section className="genai-section light-grey">
        <div className="container">
          <h2 className="section-heading">What is an AI Agent?</h2>
          <p className="section-text">
            AI Agents are autonomous systems capable of perceiving their environment,
            reasoning through multi‑step tasks, and executing actions to achieve specific goals.
            Unlike traditional AI that delivers insights, an AI Agent performs real work—browsing
            the web, using tools, managing databases, interacting with APIs, and completing
            end‑to‑end processes like a skilled digital employee.
          </p>
        </div>
      </section>

      {/* APPROACH */}
      <section className="genai-section">
        <div className="container">
          <h2 className="section-heading">Our Approach to AI Agents</h2>

          <div className="genai-grid">
            <div className="genai-card">
              <FiCpu className="genai-icon" />
              <h3>Agentic Workflow Design</h3>
              <p>Mapping complex human processes into autonomous, goal‑driven agent logic.</p>
            </div>

            <div className="genai-card">
              <FiLayers className="genai-icon" />
              <h3>RAG‑Enhanced Memory</h3>
              <p>Agents with long‑term context using Retrieval‑Augmented Generation.</p>
            </div>

            <div className="genai-card">
              <FiMessageCircle className="genai-icon" />
              <h3>Tool & API Integration</h3>
              <p>Connecting agents to CRMs, ERPs, IoT devices, and web services for real execution.</p>
            </div>

            <div className="genai-card">
              <FiZap className="genai-icon" />
              <h3>Multi‑Agent Orchestration</h3>
              <p>Teams of agents collaborating to solve complex and multi‑layered problems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="genai-section gradient-bg">
        <div className="container">
          <h2 className="section-heading white">Industry Applications</h2>

          <div className="industry-grid">
            {INDUSTRY_ITEMS.map((item, i) => (
              <div key={i} className="industry-card">
                <span className="industry-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="section-text" style={{ marginTop: "20px" ,color:"black"}}>
            AI Agents enable 24/7 autonomous productivity—reducing operational friction,
            scaling workforce capabilities, and delivering measurable ROI through digital
            workforce augmentation.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="genai-section dark-section">
        <div className="container">
          <h2 className="section-heading white">Why Choose Robotronix?</h2>

          <div className="why-grid">
            {WHY_ITEMS.map((text, i) => (
              <div key={i} className="why-card">
                <FiCheckCircle className="why-icon" />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="genai-cta-new">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Build Autonomous AI Agents?</h2>
            <p>
              Empower your enterprise with next‑generation digital workers capable of executing
              tasks, coordinating workflows, and delivering real‑world business impact.
            </p>

            <NavLink to="/contact-us" className="cta-btn">
              Get Started <FiArrowRight />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(AgentsAI);
