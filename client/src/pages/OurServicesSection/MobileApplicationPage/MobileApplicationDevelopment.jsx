import React from "react";
import { FiSmartphone, FiCode, FiShield, FiLayers, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";
// import flutterHero from "../../../../assets/img/new/mobileappdev.webp"; // Replace with banner
import "./MobileApplicationDev.css";

const FEATURES = [
  {
    icon: <FiLayers />, 
    title: "Cross-Platform Efficiency",
    desc: "One codebase for Android & iOS — faster builds, lower costs, and quicker market launch.",
    impact: "Up to 40% faster development.",
  },
  {
    icon: <FiShield />, 
    title: "Robust & Secure Architecture",
    desc: "We build high-performance architectures with real‑time databases and strong backend systems.",
    impact: "Scalable, secure, and enterprise‑ready.",
  },
  {
    icon: <FiCode />, 
    title: "Smart Data Management",
    desc: "Firebase, SQLite, and offline sync ensure reliable performance even without internet.",
    impact: "Better usability & retention.",
  },
  {
    icon: <FiSmartphone />, 
    title: "End-to-End Development Support",
    desc: "From UI/UX, APIs, testing to deployment — we deliver fully ready mobile applications.",
    impact: "You focus on your vision. We handle technology.",
  },
];

const WHY = [
  "Faster, cost-effective hybrid app development",
  "Secure, scalable, and high-performance architecture",
  "Dedicated R&D team for continuous innovation",
  "Complete support from concept to maintenance",
];

export default function MobileApplicationDev() {
  return (
    <>
      {/* HERO - Clean Enterprise Style */}
      <section className="fd-hero">
        <div className="container fd-hero-container">
          <div className="fd-hero-text">
            <h1>Flutter App Development</h1>
            <p>
              Empowering businesses with smart, scalable, and high-performance mobile
              applications built using Google’s Flutter framework.
            </p>
            <NavLink to="/contact-us" className="fd-hero-btn">
              Discuss Your App Idea <FiArrowRight />
            </NavLink>
          </div>

          <div className="fd-hero-img-wrapper">
            {/* <img src={flutterHero} alt="Flutter Development" className="fd-hero-img" /> */}
          </div>
        </div>
      </section>

      {/* WHAT IS FLUTTER */}
      <section className="fd-section container">
        <h2 className="fd-heading">What is Flutter?</h2>
        <p className="fd-text">
          Flutter is Google’s modern UI framework for building high‑performance apps from a
          single codebase. It enables fast development, smooth animations, and
          pixel‑perfect UI on both Android and iOS platforms.
        </p>
      </section>

      {/* FEATURES GRID */}
      <section className="fd-section light-bg">
        <div className="container">
          <h2 className="fd-heading">How Flutter Empowers Your Business</h2>

          <div className="fd-grid">
            {FEATURES.map((item, i) => (
              <div key={i} className="fd-card">
                <div className="fd-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="fd-impact">➡ {item.impact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="fd-section dark-bg">
        <div className="container">
          <h2 className="fd-heading white">Why Businesses Choose Robotronix</h2>

          <div className="fd-why-grid">
            {WHY.map((item, i) => (
              <div key={i} className="fd-why-card">
                <FiCheckCircle className="fd-why-icon" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fd-final-cta">
        <div className="container">
          <h2>Your Idea, Our Code — Let’s Build the Future</h2>
          <p>
            Whether you’re a startup or enterprise, we help you create powerful digital
            experiences that scale.
          </p>
          <NavLink to="/contact-us" className="fd-final-btn">
            Start Your Project <FiArrowRight />
          </NavLink>
        </div>
      </section>
    </>
  );
}
