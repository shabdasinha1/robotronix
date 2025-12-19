
import React, { useEffect, useRef } from "react";
import "./Embedded_IoT_Overview.css";

const Embedded_IoT_Overview = ({
  overviewTitle = "Embedded Systems & IoT",
  overviewHighlight = "Overview",
  overviewDescription = `We bring together hardware and software 
  innovation to design end-to-end embedded and IoT ecosystems 
  that help businesses automate processes, collect data, and 
  make intelligent decisions.`,
  
  card1Title = "What is Embedded Engineering?",
  card1Desc = `Embedded engineering focuses on designing hardware systems, 
  PCB development, and firmware programming that powers 
  intelligent devices with real-time performance.`,
  
  card2Title = "What is IoT?",
  card2Desc = `IoT connects devices, sensors, and machines to the internet — 
  enabling automation, analytics, and smart decision-making 
  using cloud platforms and protocols like MQTT.`,
}) => {

  const overviewRef = useRef(null);

  useEffect(() => {
    const sec = overviewRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sec.classList.add("rtx-iotover-visible");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sec);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-iotover-wrapper" ref={overviewRef}>
      <div className="rtx-iotover-container">

        {/* LEFT TEXT */}
        <div
          className="rtx-iotover-text rtx-iotover-drop"
          style={{ "--overDelay": "0.2s" }}
        >
          <h2 className="rtx-iotover-title">
            {overviewTitle} <span>{overviewHighlight}</span>
          </h2>

          <p className="rtx-iotover-para">{overviewDescription}</p>
        </div>

        {/* RIGHT CARDS */}
        <div className="rtx-iotover-cards">

          <div
            className="rtx-iotover-card rtx-iotover-drop"
            style={{ "--overDelay": "0.4s" }}
          >
            <h3>{card1Title}</h3>
            <p>{card1Desc}</p>
          </div>

          <div
            className="rtx-iotover-card rtx-iotover-drop"
            style={{ "--overDelay": "0.6s" }}
          >
            <h3>{card2Title}</h3>
            <p>{card2Desc}</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Embedded_IoT_Overview;
