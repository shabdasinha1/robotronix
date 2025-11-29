// src/components/Embedded_IoT_Expertise.jsx
import React, { useEffect, useRef } from "react";
import "./Embedded_IoT_Expertise.css";

const Embedded_IoT_Expertise = ({
  title = "Microcontroller & Microprocessor Expertise",
  subtitle = "We build high-performance embedded systems using industry-leading controllers and processors.",

  microcontrollers = [
    "ATmega Controllers",
    "Espressif ESP Series (ESP8266, ESP32)",
    "RF & GPS Modules, BLE",
    "Nordic NRF52",
  ],

  microprocessors = [
    "Broadcom (Raspberry Pi)",
    "NVIDIA Jetson Orin Series",
  ],

  resultText = "High-performance embedded and IoT systems tailored for real-world applications.",
}) => {
  const expRef = useRef(null);

  useEffect(() => {
    const sec = expRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) sec.classList.add("rtx-iotexp-visible");
      },
      { threshold: 0.2 }
    );
    observer.observe(sec);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-iotexp-wrapper" ref={expRef}>
      <div className="rtx-iotexp-container">

        {/* HEADER */}
        <div
          className="rtx-iotexp-header rtx-iotexp-drop"
          style={{ "--expDelay": "0.2s" }}
        >
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        {/* CARDS SECTION */}
        <div className="rtx-iotexp-grid">

          {/* MICROCONTROLLER CARD */}
          <div
            className="rtx-iotexp-card rtx-iotexp-drop"
            style={{ "--expDelay": "0.4s" }}
          >
            <h3>Microcontrollers</h3>
            <ul>
              {microcontrollers.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* MICROPROCESSOR CARD */}
          <div
            className="rtx-iotexp-card rtx-iotexp-drop"
            style={{ "--expDelay": "0.6s" }}
          >
            <h3>Microprocessors</h3>
            <ul>
              {microprocessors.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* RESULT LINE */}
        <p
          className="rtx-iotexp-result rtx-iotexp-drop"
          style={{ "--expDelay": "0.8s" }}
        >
          ➤ {resultText}
        </p>

      </div>
    </section>
  );
};

export default Embedded_IoT_Expertise;
