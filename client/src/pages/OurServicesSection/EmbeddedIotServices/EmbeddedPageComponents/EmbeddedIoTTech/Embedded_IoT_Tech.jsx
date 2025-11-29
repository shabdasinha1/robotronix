// src/components/Embedded_IoT_Tech.jsx
import React, { useEffect, useRef } from "react";
import "./Embedded_IoT_Tech.css";

const Embedded_IoT_Tech = ({
  techTitle = "Technologies & Tools We Work With",
  techSubtitle = "We use modern tools, languages, and cloud platforms to deliver reliable and scalable Embedded & IoT solutions.",

  firmwareTools = ["C", "C++", "Lua Scripting", "Python"],
  designTools = [
    "Arduino IDE",
    "Atmel Studio (Microchip)",
    "VS Code Editor",
    "DipTrace",
    "EAGLE",
    "KiCAD",
    "SmowCode (Simulation)",
  ],
  iotPlatforms = [
    "AWS IoT Core",
    "AWS Greengrass",
    "Zoho IoT",
    "MQTT Brokers: Mosquitto, MQTTx, EMQX",
  ],
}) => {
  const techRef = useRef(null);

  useEffect(() => {
    const sec = techRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) sec.classList.add("rtx-iottech-visible");
      },
      { threshold: 0.2 }
    );

    observer.observe(sec);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-iottech-wrapper" ref={techRef}>
      <div className="rtx-iottech-container">

        {/* HEADER */}
        <div
          className="rtx-iottech-header rtx-iottech-drop"
          style={{ "--ttDelay": "0.2s" }}
        >
          <h2>{techTitle}</h2>
          <p>{techSubtitle}</p>
        </div>

        {/* GRID SECTION */}
        <div className="rtx-iottech-grid">

          {/* Firmware */}
          <div
            className="rtx-iottech-card rtx-iottech-drop"
            style={{ "--ttDelay": "0.4s" }}
          >
            <h3>Firmware Development</h3>
            <ul>
              {firmwareTools.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>

          {/* PCB Design */}
          <div
            className="rtx-iottech-card rtx-iottech-drop"
            style={{ "--ttDelay": "0.6s" }}
          >
            <h3>Design & Development Tools</h3>
            <ul>
              {designTools.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>

          {/* IoT Cloud Platforms */}
          <div
            className="rtx-iottech-card rtx-iottech-drop"
            style={{ "--ttDelay": "0.8s" }}
          >
            <h3>IoT Platforms & Cloud</h3>
            <ul>
              {iotPlatforms.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Embedded_IoT_Tech;
