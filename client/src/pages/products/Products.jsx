import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { Link } from "react-router-dom";

const Products = () => {
  const hero = useRevealOnScroll({
    threshold: 0.2,
    once: true,
  });
  const statsSec = useRevealOnScroll({
    threshold: 0.2,
    once: true,
  });
   const gridSec = useRevealOnScroll({
    threshold: 0.2,
    once: true,
  });   
   const section = useRevealOnScroll({
    threshold: 0.2,
    once: true,
  });
  const product1 = useRevealOnScroll({
    threshold: 0.2,
    once: true,
  });
  const product2 = useRevealOnScroll({
    threshold: 0.2,
    once: true,
  });
  const product3 = useRevealOnScroll({
    threshold: 0.2,
    once: true,
  });
  const product4 = useRevealOnScroll({
    threshold: 0.2,
    once: true,
  });
    const ctaSec = useRevealOnScroll({
    threshold: 0.2,
    once: true,
  });


//   For section 2
    const stats = [
    {
      value: "240+",
      label: "Partners Worldwide",
    },
    {
      value: "92%",
      label: "Faster Technology Delivery",
    },
    {
      value: "Field-Tested",
      label: "Hardware Modules",
    },
    {
      value: "Engineering",
      label: "Driven Design",
    },
  ];

//   For section 3
  const products = [
  {
    id: "l293d",
    name: "L293D Motor Driver Module",
    short:
      "Medium power motor driver module designed for DC motors and stepper motors with built-in protection diodes.",
    highlight: "5V – 36V | 600mA / Channel",
  },
  {
    id: "relay",
    name: "Relay Module",
    short:
      "High-reliability relay modules for controlling high-voltage AC/DC loads using low-voltage controller signals.",
    highlight: "5V | Up to 240V AC, 10A",
  },
  {
    id: "ir-sensor",
    name: "IR Sensor Module",
    short:
      "Infrared obstacle detection module for motion and proximity sensing in robotics and automation projects.",
    highlight: "3.3V – 5V | Up to 80cm",
  },
  {
    id: "rf-module",
    name: "RF Module",
    short:
      "4-channel RF transmitter-receiver module for wireless control applications with long-range communication.",
    highlight: "433 MHz | 60m Range",
  },
];

 const reasons = [
    {
      title: "Engineering-Driven Design",
      desc:
        "Every Robotronix product is designed by engineers with hands-on experience in robotics, automation, and embedded systems — ensuring practical usability, not just specifications on paper.",
    },
    {
      title: "Real-World Tested Modules",
      desc:
        "Our products are tested in real-world scenarios including robotics projects, automation setups, and control systems to ensure consistent performance and long-term reliability.",
    },
    {
      title: "Seamless Compatibility",
      desc:
        "Designed to work smoothly with popular platforms such as Arduino, Raspberry Pi, and microcontroller-based systems, enabling faster development and easy integration.",
    },
    {
      title: "Quality & Reliability Focus",
      desc:
        "From component selection to PCB design, every stage follows strict quality standards to deliver durable, stable, and dependable electronics modules.",
    },
  ];

  return (
    <>
    <section
      ref={hero.ref}
      className={`u-section rtx-products-hero ${
        hero.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container-center">

        {/* EYEBROW */}
        <span
          className="rtx-products-eyebrow u-drop"
          style={{ "--delay": "0.1s" }}
        >
          Our Products
        </span>

        {/* TITLE */}
        <h1
          className="rtx-products-title u-drop"
          style={{ "--delay": "0.3s" }}
        >
          Engineered <span>Electronics & Embedded Modules</span>
          <br />
          Built for Real-World Applications
        </h1>

        {/* DESCRIPTION */}
        <p
          className="rtx-products-subtext u-drop"
          style={{ "--delay": "0.5s" }}
        >
          Our products are designed to deliver reliability, performance, and
          seamless integration for robotics, automation, and embedded system
          applications. From motor drivers and sensor modules to relay boards
          and RF solutions, every product reflects Robotronix’s commitment to
          engineering excellence and practical usability.
        </p>

      </div>
    </section>

    {/*-------------- PRODUCTS — STATS SECTION -------- */}
      <section
      ref={statsSec.ref}
      className={`u-section rtx-products-stats ${
        statsSec.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container">

        <div className="rtx-products-stats-grid">
          {stats.map((item, i) => (
            <div
              key={i}
              className="rtx-products-stat-card u-drop-scale"
              style={{ "--delay": `${0.15 + i * 0.15}s` }}
            >
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/*---------------- Products Grid --------------- */}
     <section
      ref={gridSec.ref}
      className={`u-section rtx-products-grid ${
        gridSec.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container">

        {/* HEADER */}
        <div className="u-section-header u-drop">
          <h2 className="u-title">
            Our <span>Product Range</span>
          </h2>
          <p className="u-subtext">
            Explore our range of electronics and embedded modules designed for
            robotics, automation, and real-world engineering applications.
          </p>
        </div>

        {/* GRID */}
        <div className="rtx-products-card-grid">
          {products.map((item, i) => (
            <div
              key={item.id}
              className="rtx-product-card u-drop-scale"
              style={{ "--delay": `${0.15 + i * 0.15}s` }}
            >
              {/* IMAGE PLACEHOLDER */}
              <div className="rtx-product-image">
                <span>Image</span>
              </div>

              <h3>{item.name}</h3>

              <p className="rtx-product-desc">
                {item.short}
              </p>

              <span className="rtx-product-highlight">
                {item.highlight}
              </span>

              <button className="rtx-product-link">
                View Details →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/*------------ L293D Detail Section ------------- */}
     <section
      ref={product1.ref}
      className={`u-section rtx-product-detail ${
        product1.visible ? "u-drop-visible" : ""
      }`}
      id="l293d"
    >
      <div className="u-container rtx-product-detail-grid">

        {/* LEFT — IMAGE */}
        <div className="rtx-product-detail-image u-drop-left">
          <div className="rtx-product-image-box">
            {/* Replace src when image is provided */}
            <span>Product Image</span>
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div className="rtx-product-detail-content u-drop-right">

          <span className="rtx-product-category">
            Motor Driver Module
          </span>

          <h2 className="u-title">
            L293D <span>Motor Driver Module</span>
          </h2>

          <p className="rtx-product-description">
            The L293D Motor Driver Module is a medium-power motor driver designed
            for driving DC motors and stepper motors in robotics and embedded
            system applications. It is built using the popular L293D motor
            driver IC and provides reliable bidirectional motor control with
            built-in output clamping diodes for enhanced protection.
          </p>

          <p className="rtx-product-description">
            With separate logic and motor power supplies, the module reduces
            power dissipation while ensuring stable operation — making it a
            dependable choice for real-world robotics and automation projects.
          </p>

          {/* SPECIFICATIONS */}
          <div className="rtx-product-specs">
            <h4>Specifications</h4>
            <ul>
              <li><strong>Product Type:</strong> L293D Motor Driver Module</li>
              <li><strong>IC Used:</strong> L293D</li>
              <li><strong>Voltage Range:</strong> 5V – 36V</li>
              <li><strong>Logic Control Input:</strong> Up to 7V DC</li>
              <li><strong>Output Current:</strong> 600 mA per channel</li>
              <li><strong>Interface:</strong> Inbuilt / soldered berg connectors</li>
            </ul>
          </div>

          {/* FEATURES */}
          <div className="rtx-product-features">
            <h4>Key Features</h4>
            <ul>
              <li>Dual DC motor driver or bipolar stepper motor driver</li>
              <li>High noise immunity for stable motor control</li>
              <li>Output current up to 600 mA per channel</li>
              <li>Berg connector accessibility</li>
              <li>Header connectors for motor outputs</li>
              <li>PCB dimensions: 42 mm × 35 mm</li>
              <li>Output clamping diodes included for protection</li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    {/*----------------- DETAIL — RELAY MODULE ------------------------ */}
      <section
      ref={product2.ref}
      className={`u-section rtx-product-detail ${
        product2.visible ? "u-drop-visible" : ""
      }`}
      id="relay-module"
    >
      <div className="u-container rtx-product-detail-grid">

        {/* LEFT — IMAGE */}
        <div className="rtx-product-detail-image u-drop-left">
          <div className="rtx-product-image-box">
            {/* Replace with actual image */}
            <span>Product Image</span>
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div className="rtx-product-detail-content u-drop-right">

          <span className="rtx-product-category">
            Control & Switching Module
          </span>

          <h2 className="u-title">
            Relay <span>Module</span>
          </h2>

          <p className="rtx-product-description">
            The Relay Module is designed to control high-voltage AC and DC
            devices using low-voltage digital signals from microcontrollers and
            processors. It acts as an electrically operated mechanical switch,
            allowing safe and reliable switching of high-current loads.
          </p>

          <p className="rtx-product-description">
            Robotronix relay modules are compatible with Arduino, AVR, PIC, ARM,
            and Raspberry Pi boards, making them ideal for automation systems,
            industrial control circuits, and smart electronics applications.
          </p>

          {/* SPECIFICATIONS */}
          <div className="rtx-product-specs">
            <h4>Specifications</h4>
            <ul>
              <li><strong>Product Type:</strong> Relay Module</li>
              <li><strong>Available Variants:</strong> 1-Channel, 2-Channel, 4-Channel</li>
              <li><strong>Operating Voltage:</strong> 5V DC</li>
              <li><strong>Max Relay Contact Current:</strong> 10A</li>
              <li><strong>High Load Voltage:</strong> Up to 240V AC</li>
              <li><strong>Relay Contacts:</strong> Normally Open (NO) & Normally Closed (NC)</li>
              <li><strong>Indicator:</strong> Power LED (ON when relay is active)</li>
            </ul>
          </div>

          {/* FEATURES */}
          <div className="rtx-product-features">
            <h4>Key Features</h4>
            <ul>
              <li>Controls high-voltage AC/DC devices safely</li>
              <li>Fast and reliable switching performance</li>
              <li>Supports up to 240V AC, 10A loads</li>
              <li>Power LED indicator for relay status</li>
              <li>Normally open and normally closed contacts</li>
              <li>Compatible with popular microcontroller platforms</li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    {/* ---------------- IR Sensor Detail ---------------- */}
     <section
      ref={product3.ref}
      className={`u-section rtx-product-detail ${
        product3.visible ? "u-drop-visible" : ""
      }`}
      id="ir-sensor"
    >
      <div className="u-container rtx-product-detail-grid">

        {/* LEFT — IMAGE */}
        <div className="rtx-product-detail-image u-drop-left">
          <div className="rtx-product-image-box">
            {/* Replace with actual image */}
            <span>Product Image</span>
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div className="rtx-product-detail-content u-drop-right">

          <span className="rtx-product-category">
            Sensor Module
          </span>

          <h2 className="u-title">
            IR <span>Sensor Module</span>
          </h2>

          <p className="rtx-product-description">
            The IR Sensor Module (Infrared Obstacle Detector) is designed to
            detect obstacles and motion by measuring reflected infrared
            radiation. It uses an IR LED as the emitter and an IR photodiode as
            the detector, making it suitable for proximity sensing and obstacle
            detection in robotics applications.
          </p>

          <p className="rtx-product-description">
            An onboard LM358 comparator processes the sensor signal and activates
            an LED indicator when an obstacle is detected. The module offers a
            simple 3-pin interface, ensuring easy integration with
            microcontrollers and embedded platforms.
          </p>

          {/* SPECIFICATIONS */}
          <div className="rtx-product-specs">
            <h4>Specifications</h4>
            <ul>
              <li><strong>Main Chip:</strong> LM358</li>
              <li><strong>Operating Voltage:</strong> 3.3V – 5V DC</li>
              <li><strong>Average Current Consumption:</strong> 0.06 mA</li>
              <li><strong>Detection Angle:</strong> 35°</li>
              <li><strong>Distance Range:</strong> 2.15 – 30 cm</li>
              <li><strong>Dimensions:</strong> 44 mm × 22 mm</li>
              <li><strong>Interface:</strong> VCC, GND, Output</li>
            </ul>
          </div>

          {/* FEATURES */}
          <div className="rtx-product-features">
            <h4>Key Features</h4>
            <ul>
              <li>Easy-to-use infrared obstacle detection</li>
              <li>Onboard detection LED indicator</li>
              <li>Effective detection range from 2 cm to 80 cm</li>
              <li>Adjustable detection distance via potentiometer</li>
              <li>Stable LM358 comparator for reliable operation</li>
              <li>Operates on 3V – 5V DC power supply</li>
              <li>Adjustable threshold voltage</li>
              <li>Obstacle detection LED turns ON when obstacle is present</li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    {/*------------------- DETAIL — RF MODULE --------------- */}
     <section
      ref={product4.ref}
      className={`u-section rtx-product-detail ${
        product4.visible ? "u-drop-visible" : ""
      }`}
      id="rf-module"
    >
      <div className="u-container rtx-product-detail-grid">

        {/* LEFT — IMAGE */}
        <div className="rtx-product-detail-image u-drop-left">
          <div className="rtx-product-image-box">
            {/* Replace with actual image */}
            <span>Product Image</span>
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div className="rtx-product-detail-content u-drop-right">

          <span className="rtx-product-category">
            Wireless Communication Module
          </span>

          <h2 className="u-title">
            RF <span>Module</span>
          </h2>

          <p className="rtx-product-description">
            The RF Module is a 4-channel wireless transmitter and receiver
            system designed for remote control and communication applications.
            It operates using 433 MHz RF technology and supports reliable,
            long-range communication for robotics, automation, and embedded
            projects.
          </p>

          <p className="rtx-product-description">
            Designed for ease of use and compatibility with microcontrollers,
            the module includes onboard regulation and filtering for stable
            performance. The RF transmitter uses a SAW resonator, ensuring low
            cost, compact size, and dependable signal transmission with minimal
            interference.
          </p>

          {/* SPECIFICATIONS */}
          <div className="rtx-product-specs">
            <h4>Specifications</h4>
            <ul>
              <li><strong>Operating Voltage (TX):</strong> 5V – 12V</li>
              <li><strong>Operating Voltage (RX):</strong> 5V – 12V</li>
              <li><strong>Frequency Range:</strong> 433 MHz</li>
              <li><strong>Communication Distance:</strong> Up to 60 m</li>
              <li><strong>Channel Output:</strong> 4 Channels</li>
              <li><strong>Dual Motor Driver:</strong> 2A Onboard</li>
            </ul>
          </div>

          {/* FEATURES */}
          <div className="rtx-product-features">
            <h4>Key Features</h4>
            <ul>
              <li>4-channel remote control with 256 selectable channels</li>
              <li>Onboard voltage regulator with noise filtering</li>
              <li>Compact size and easy breadboard compatibility</li>
              <li>High performance with minimal frequency interference</li>
              <li>Available frequency options: 433 MHz or 315 MHz</li>
              <li>Large control switches for improved usability</li>
              <li>Integrated 2A dual motor driver onboard</li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    {/*--------------- Why Robotronix Products ---------------- */}
      <section
      ref={section.ref}
      className={`u-section rtx-products-why ${
        section.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container">

        {/* HEADER */}
        <div className="u-section-header u-drop">
          <h2 className="u-title">
            Why <span>Robotronix Products</span>
          </h2>
          <p className="u-subtext">
            Our products are built with a strong focus on engineering quality,
            real-world performance, and long-term reliability — making them
            suitable for learning, development, and professional applications.
          </p>
        </div>

        {/* GRID */}
        <div className="rtx-products-why-grid">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="rtx-products-why-card u-drop-scale"
              style={{ "--delay": `${0.15 + i * 0.15}s` }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/*------------------ CTA --------------- */}
     <section
      ref={ctaSec.ref}
      className={`u-section rtx-products-cta ${
        ctaSec.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container-center">

        {/* TITLE */}
        <h2
          className="rtx-products-cta-title u-drop"
          style={{ "--delay": "0.2s" }}
        >
          Need Bulk Orders or <span>Custom Hardware Solutions</span>?
        </h2>

        {/* TEXT */}
        <p
          className="rtx-products-cta-text u-drop"
          style={{ "--delay": "0.4s" }}
        >
          Whether you are sourcing electronics modules in bulk, looking for
          custom modifications, or need engineering guidance for robotics,
          automation, or embedded systems, Robotronix is ready to collaborate
          and deliver dependable, real-world solutions.
        </p>

        {/* ACTIONS */}
        <div
          className="rtx-products-cta-actions u-drop"
          style={{ "--delay": "0.6s" }}
        >
          <Link to="/contact-us" className="btn btn-primary btn-lg">
            Contact Our Team
          </Link>

          <Link to="/services" className="btn btn-outline btn-lg">
            View Our Services
          </Link>
        </div>

      </div>
    </section>
    </>
  );
};

export default Products;
