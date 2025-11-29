// src/components/Embedded_IoT_Process.jsx
import React, { useEffect, useRef } from "react";
import "./Embedded_IoT_Process.css";

const Embedded_IoT_Process = ({
  processTitle = "Our Development Process",
  processSubtitle = "We follow a structured and research-driven approach to deliver reliable Embedded & IoT Solutions.",

  steps = [
    {
      title: "Research & Development",
      desc: "In-depth R&D to identify hardware requirements, system architecture, and communication protocols.",
      impact: "Strong foundation for innovation and scalability.",
      tools: "Protocols, architecture planning, system modelling",
    },
    {
      title: "Hardware Development & Circuit Design",
      desc: "Designing efficient 2-layer and multi-layer PCBs ensuring long-lasting hardware performance.",
      impact: "Compact, efficient and durable hardware.",
      tools: "DipTrace, EAGLE, KiCAD",
    },
    {
      title: "Firmware Development",
      desc: "Optimized and secure firmware creation for microcontrollers and processors.",
      impact: "Real-time response, reliability and low-power performance.",
      tools: "C, C++, Lua, Python",
    },
    {
      title: "IoT Integration & Edge Computing",
      desc: "Connecting devices with cloud platforms for real-time analytics and automation.",
      impact: "Seamless cloud connectivity and smart decision-making.",
      tools: "AWS IoT Core, MQTT Brokers",
    },
  ],
}) => {
  const procRef = useRef(null);

  useEffect(() => {
    const sec = procRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sec.classList.add("rtx-iotproc-visible");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sec);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-iotproc-wrapper" ref={procRef}>
      <div className="rtx-iotproc-container">

        {/* TITLE AREA */}
        <div
          className="rtx-iotproc-header rtx-iotproc-drop"
          style={{ "--procDelay": "0.2s" }}
        >
          <h2>{processTitle}</h2>
          <p>{processSubtitle}</p>
        </div>

        {/* PROCESS CARDS */}
        <div className="rtx-iotproc-steps">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rtx-iotproc-card rtx-iotproc-drop"
              style={{ "--procDelay": `${0.4 + index * 0.2}s` }}
            >
              <h3>{step.title}</h3>
              <p className="rtx-iotproc-desc">{step.desc}</p>

              {step.impact && (
                <p className="rtx-iotproc-impact">
                  <strong>Impact:</strong> {step.impact}
                </p>
              )}

              {step.tools && (
                <p className="rtx-iotproc-tools">
                  <strong>Tools:</strong> {step.tools}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Embedded_IoT_Process;
