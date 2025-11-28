import React from "react";
import { FiTrendingUp, FiDatabase, FiPieChart, FiBarChart2, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";
// import dataHero from "../../../../../assets/img/new/datascience-banner.webp"; // Replace with your banner
import "./DataScience.css";

const PROCESS = [
  {
    title: "Data Collection & Cleaning",
    desc: "Aggregating and refining raw data from multiple sources for accuracy and consistency.",
    impact: "Reliable foundation for analytics and modeling.",
  },
  {
    title: "Exploratory Data Analysis (EDA)",
    desc: "Understanding data patterns, anomalies, and KPIs for smarter decisions.",
    impact: "Data clarity for strategic insights.",
  },
  {
    title: "Predictive Modeling & Machine Learning",
    desc: "Building ML models that forecast trends and automate decisions.",
    impact: "Operational foresight and efficiency.",
  },
  {
    title: "Visualization & Reporting",
    desc: "Creating dashboards and reports using BI tools.",
    impact: "Instant insights for stakeholders.",
  },
  {
    title: "Deployment & Optimization",
    desc: "Integrating models into real systems with continuous improvement.",
    impact: "Scalable and future-ready analytics ecosystem.",
  },
];

const INDUSTRIES = [
  "Healthcare: Predictive diagnostics & patient analytics",
  "Finance: Fraud detection, risk modeling, forecasting",
  "Retail: Customer behavior & recommendation systems",
  "Manufacturing: Predictive maintenance & optimization",
  "Education: Student performance & academic insights",
  "Marketing: Customer segmentation & performance analysis",
  "Smart Cities: Urban planning & smart device analytics",
];

const WHY = [
  "Expert Data Scientists skilled in ML, AI & analytics",
  "End-to-End Data Infrastructure & Deployment",
  "Cross-industry experience delivering meaningful insights",
  "Focused on business value, not just models",
  "Continuous optimization & long-term support",
];

export default function DataScience() {
  return (
    <>
      {/* HERO (Unique Diagonal Cut Design) */}
      <section className="ds-hero">
        {/* <img src={dataHero} className="ds-hero-img" alt="Data Science Banner" /> */}
        <div className="ds-hero-overlay"></div>

        <div className="ds-hero-content container">
          <h1>Data Science & Analytics Solutions</h1>
          <p>Turning complex data into intelligent business decisions with predictive and analytical insights.</p>
          <NavLink to="/contact-us" className="ds-hero-btn">
            Consult Our Experts <FiArrowRight />
          </NavLink>
        </div>

        <svg className="ds-hero-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" d="M0,192L1440,64L1440,0L0,0Z"></path></svg>
      </section>

      {/* WHAT IS DATA SCIENCE */}
      <section className="ds-section container">
        <h2 className="ds-heading">What is Data Science?</h2>
        <p className="ds-text">
          Data Science extracts meaningful insights and patterns from data using mathematics, programming,
          and business understanding. With tools like Python, R, SQL, and big data technologies, organizations
          can predict trends, optimize performance, and innovate with confidence.
        </p>
      </section>

      {/* PROCESS CARDS (Horizontal Flow) */}
      <section className="ds-section light-bg">
        <div className="container">
          <h2 className="ds-heading">Our Approach to Data Science</h2>

          <div className="ds-process-grid">
            {PROCESS.map((step, i) => (
              <div key={i} className="ds-process-card">
                <div className="ds-step-number">{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <span className="ds-impact">➡ {step.impact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="ds-section container">
        <h2 className="ds-heading">Technologies & Tools We Use</h2>
        <div className="ds-tech-box">
          <div>
            <h3>Languages</h3>
            <p>Python · R · SQL</p>
          </div>
          <div>
            <h3>Libraries</h3>
            <p>Pandas · NumPy · Scikit-learn · TensorFlow · PyTorch</p>
          </div>
          <div>
            <h3>Visualization Tools</h3>
            <p>Tableau · Power BI · Matplotlib · Seaborn</p>
          </div>
          <div>
            <h3>Databases</h3>
            <p>MySQL · PostgreSQL · MongoDB · BigQuery</p>
          </div>
          <div>
            <h3>Cloud Platforms</h3>
            <p>AWS · Google Cloud · Azure</p>
          </div>
          <div>
            <h3>Big Data</h3>
            <p>Hadoop · Spark</p>
          </div>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="ds-section gradient-bg">
        <div className="container">
          <h2 className="ds-heading white">Industry Applications</h2>

          <div className="ds-industry-grid">
            {INDUSTRIES.map((item, i) => (
              <div key={i} className="ds-industry-card">
                <FiCheckCircle className="ds-industry-icon" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="ds-section dark-bg">
        <div className="container">
          <h2 className="ds-heading white">Why Choose Robotronix?</h2>

          <div className="ds-why-grid">
            {WHY.map((point, i) => (
              <div key={i} className="ds-why-card">
                <FiCheckCircle className="ds-why-icon" />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ds-final-cta">
        <div className="container">
          <h2>Transform Your Business with Data-Driven Intelligence</h2>
          <p>From insight to impact — accelerate growth with predictive and analytical intelligence.</p>
          <NavLink to="/contact-us" className="ds-final-btn">
            Get Started <FiArrowRight />
          </NavLink>
        </div>
      </section>
    </>
  );
}
