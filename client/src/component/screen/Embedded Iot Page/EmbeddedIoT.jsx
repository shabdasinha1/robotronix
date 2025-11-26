import React from "react";
import { FiCpu, FiGrid, FiRadio, FiCloud, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import embeddedHero from "../../../assets/img/new/embeddedIot-banner.webp"; // Replace
import "./EmbeddedIoT.css";

const CAPABILITIES = [
  { icon: <FiCpu />, title: "Embedded System Design", desc: "End-to-end embedded architecture & system engineering" },
  { icon: <FiGrid />, title: "Hardware & PCB Development", desc: "2-layer & multilayer PCB design for industrial performance" },
  { icon: <FiRadio />, title: "IoT System Integration", desc: "Sensor networks, RF, BLE, GPS & device connectivity" },
  { icon: <FiCloud />, title: "Edge IoT & Cloud Integration", desc: "AWS IoT Core, Greengrass & MQTT-based communication" },
];

const PROCESS = [
  {
    title: "Research & Development",
    desc: "In-depth analysis of hardware needs, architecture & communication protocols.",
    impact: "Strong foundation for innovation & scalability.",
  },
  {
    title: "Hardware Development & Circuit Design",
    desc: "Designing efficient 2-layer & multilayer circuits using DipTrace, EAGLE & KiCAD.",
    impact: "Compact, durable & reliable boards for real-world usage.",
  },
  {
    title: "Firmware Development",
    desc: "Optimized firmware in C/C++, Lua & Python for controllers & processors.",
    impact: "Secure, stable & high-performance device behavior.",
  },
  {
    title: "IoT Integration & Edge Computing",
    desc: "Connecting sensors, devices & cloud platforms using MQTT, AWS IoT & Greengrass.",
    impact: "Real-time analytics, automation & predictive intelligence.",
  },
];

const INDUSTRIES = [
  "Industrial Automation",
  "Healthcare & Medical IoT",
  "Agriculture & Precision Farming",
  "Automotive & Telematics",
  "Smart Cities & Infrastructure",
  "Home Automation & Security",
  "Retail & Supply Chain IoT",
  "Energy & Smart Grid Systems",
];

const WHY = [
  "Expertise in Hardware + Software Integration",
  "Proven Firmware & PCB Engineering Experience",
  "Cloud-Connected IoT for Real-Time Intelligence",
  "Edge IoT Processing for Ultra-Fast Decisions",
  "Complete End-to-End Embedded & IoT Development",
];

export default function EmbeddedIoT() {
  return (
    <>
      {/* HERO - NEW MODERN DESIGN */}
      <section className="emb-hero-wrapper">
        <div className="emb-hero-overlay"></div>
        <img src={embeddedHero} className="emb-hero-img" alt="Embedded IoT Banner" />

        <div className="emb-hero-content container">
          <h1>Embedded Systems & IoT Solutions</h1>
          <p>Connecting intelligence with innovation through hardware, firmware & IoT engineering.</p>
          <NavLink to="/contact-us" className="emb-hero-btn">
            Speak With Experts <FiArrowRight />
          </NavLink>
        </div>
      </section>

      {/* EXPERTISE GRID */}
      <section className="emb-section container">
        <h2 className="emb-heading">Our Expertise in Embedded Systems & IoT</h2>
        <p className="emb-subtext">We design end-to-end embedded & IoT ecosystems that help industries automate, connect & make intelligent decisions.</p>

        <div className="emb-grid">
          {CAPABILITIES.map((item, i) => (
            <div className="emb-card" key={i}>
              <div className="emb-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="emb-section light-bg">
        <div className="container">
          <h2 className="emb-heading">Our Development Process</h2>

          <div className="emb-timeline">
            {PROCESS.map((step, i) => (
              <div key={i} className="emb-timeline-item">
                <div className="emb-timeline-dot"></div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <span className="emb-impact">➡ {step.impact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="emb-section container">
        <h2 className="emb-heading">Technologies & Tools We Work With</h2>

        <div className="emb-tech-box">
          <h3>Firmware Development</h3>
          <p>C / C++ · Lua · Python</p>

          <h3>Development Tools</h3>
          <p>Arduino IDE · Atmel Studio · VS Code · DipTrace · KiCAD · EAGLE · SmowCode</p>

          <h3>IoT Platforms & Cloud</h3>
          <p>AWS IoT Core · AWS Greengrass · Zoho IoT · MQTT (Mosquitto, MQTTx, EMQX)</p>
        </div>
      </section>

      {/* INDUSTRY APPLICATIONS */}
      <section className="emb-section gradient-bg">
        <div className="container">
          <h2 className="emb-heading white">Industry Applications</h2>

          <div className="emb-industry-grid">
            {INDUSTRIES.map((item, i) => (
              <div className="emb-industry-card" key={i}>
                <FiCheckCircle className="emb-industry-icon" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="emb-section dark-bg">
        <div className="container">
          <h2 className="emb-heading white">Why Choose Robotronix?</h2>

          <div className="emb-why-grid">
            {WHY.map((point, i) => (
              <div key={i} className="emb-why-card">
                <FiCheckCircle className="emb-why-icon" />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="emb-final-cta">
        <div className="container">
          <h2>Innovating the Future of Smart Connectivity</h2>
          <p>We bridge the gap between the physical and digital worlds through intelligent embedded & IoT engineering.</p>
          <NavLink to="/contact-us" className="emb-final-btn">
            Let’s Build Your IoT Vision <FiArrowRight />
          </NavLink>
        </div>
      </section>
    </>
  );
}
