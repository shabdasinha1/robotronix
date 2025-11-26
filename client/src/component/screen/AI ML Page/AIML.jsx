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
import aiMlHeroImg from "../../../assets/img/new/aiml-banner.webp"; // <-- Replace with your banner image
import "./AIML.css";

const INDUSTRY_ITEMS = [
  { icon: "🏭", title: "Manufacturing", desc: "Predictive maintenance, defect detection, smart production control" },
  { icon: "🏦", title: "Finance & Banking", desc: "Fraud detection, credit scoring, risk analytics" },
  { icon: "🏥", title: "Healthcare", desc: "Medical imaging, diagnosis prediction, clinical analytics" },
  { icon: "🛒", title: "Retail & E-commerce", desc: "Recommendation engines, demand forecasting" },
  { icon: "🚘", title: "Automotive", desc: "Autonomous systems, sensor data modeling, vehicle monitoring" },
  { icon: "🏫", title: "Education", desc: "AI tutors, personalized learning, performance analytics" },
  { icon: "📊", title: "Business & Marketing", desc: "Forecasting, customer insights, campaign optimization" },
];

const WHY_ITEMS = [
  "Expert Engineers in AI, ML, NLP & Data Science",
  "Custom-built models tailored to your business needs",
  "Scalable deployments using cutting-edge frameworks",
  "Focus on data privacy, ethics & explainability",
  "Continuous innovation via R&D & model optimization",
];

const AIML = () => {
  return (
    <>
      {/* HERO */}
      <section className="genai-hero-section">
        <div className="container genai-hero-container">
          <div className="genai-hero-text">
            <span className="genai-tag">AI & Machine Learning Solutions</span>
            <h1 className="genai-title">Transform Data into Intelligent Outcomes</h1>
            <p className="genai-subtext">
              Robotronix Engineering Tech Pvt. Ltd. delivers end-to-end AI & ML solutions
              that help organizations automate workflows, enhance efficiency, and unlock actionable
              insights using advanced neural models, predictive analytics, and intelligent automation.
            </p>

            <div className="genai-buttons">
              <NavLink className="genai-btn-primary" to="/contact-us">
                Talk to Experts <FiArrowRight />
              </NavLink>
            </div>

            <div className="genai-meta">
              <div>
                <h3>15+ Years</h3>
                <p>Engineering Excellence</p>
              </div>
              <div>
                <h3>Enterprise Ready</h3>
                <p>Secure AI & ML Deployments</p>
              </div>
            </div>
          </div>

          <div className="genai-hero-image">
            <img src={aiMlHeroImg} alt="AI & ML Illustration" loading="lazy" />
          </div>
        </div>
      </section>

      {/* WHAT IS AI & ML */}
      <section className="genai-section light-grey">
        <div className="container">
          <h2 className="section-heading">What is AI & ML?</h2>
          <p className="section-text">
            Artificial Intelligence (AI) and Machine Learning (ML) are transformative technologies
            that enable machines to think, learn, and make intelligent decisions. AI simulates human
            intelligence using cognitive models, while ML empowers systems to learn from data,
            identify patterns, and make predictions without explicit programming.
            Together, AI & ML power modern innovations such as predictive analytics, recommendation engines,
            fraud detection, image recognition, intelligent automation, and natural language systems — helping
            businesses stay agile, competitive, and future-ready.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="genai-section">
        <div className="container">
          <h2 className="section-heading">Our Approach to AI & ML</h2>

          <div className="genai-grid">
            <div className="genai-card">
              <FiCpu className="genai-icon" />
              <h3>Strategic Consulting</h3>
              <p>Identifying high-impact opportunities for AI & ML adoption.</p>
            </div>

            <div className="genai-card">
              <FiLayers className="genai-icon" />
              <h3>Model Development</h3>
              <p>Building custom AI & ML models using neural networks, transformers, and advanced algorithms.</p>
            </div>

            <div className="genai-card">
              <FiMessageCircle className="genai-icon" />
              <h3>Predictive Intelligence</h3>
              <p>Delivering real-time insights for smarter decision-making.</p>
            </div>

            <div className="genai-card">
              <FiZap className="genai-icon" />
              <h3>Intelligent Automation</h3>
              <p>Optimizing workflows using automated, self-learning systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY APPLICATIONS */}
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

          <p className="section-text" style={{ marginTop: "20px" }}>
            AI & ML help industries reduce operational costs, improve efficiency, enhance customer engagement,
            and increase ROI through intelligent automation.
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
            <h2>Ready to Transform Your Business with AI & ML?</h2>
            <p>
              Unlock next-generation intelligence, automation, and data-driven innovation with enterprise-grade
              AI & ML solutions.
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

export default React.memo(AIML);
