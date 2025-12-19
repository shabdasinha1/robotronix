import React from "react";
import ServicesHero from "../../../components/services/ServicesHero";
import ServicesOverview from "../../../components/services/ServicesOverview";
import ServicesApproach from "../../../components/services/ServicesApproach";
import ServicesIndustries from "../../../components/services/ServicesIndustries";
import ServicesWhyChoose from "../../../components/services/ServicesWhyChoose";
import ServicesImpact from "../../../components/services/ServicesImpact";
import ServicesCTA from "../../../components/services/ServicesCTA";

const EmbeddedIoT = () => {
  const steps = [
    {
      title: "Research & System Architecture",
      desc: "In-depth R&D to define hardware requirements, system architecture, and communication protocols for scalable embedded and IoT systems.",
    },
    {
      title: "Hardware Development & PCB Design",
      desc: "Design and development of reliable 2-layer and multilayer PCBs using DipTrace, EAGLE, and KiCAD.",
    },
    {
      title: "Firmware Development",
      desc: "Optimized and secure firmware development for microcontrollers and processors using C/C++, Lua, and Python.",
    },
    {
      title: "IoT Integration & Edge Computing",
      desc: "Connecting devices, sensors, and cloud platforms using MQTT, AWS IoT Core, and AWS Greengrass for real-time intelligence.",
    },
    {
      title: "Testing, Deployment & Optimization",
      desc: "Simulation, testing, and optimization to ensure reliability, performance, and long-term scalability.",
    },
  ];

  const industries = [
    {
      icon: "🏭",
      title: "Industrial Automation",
      desc: "Smart sensors, PLC integration, predictive maintenance, and automated monitoring systems.",
    },
    {
      icon: "🏥",
      title: "Healthcare",
      desc: "Remote patient monitoring, IoT-enabled medical devices, and real-time health data systems.",
    },
    {
      icon: "🌱",
      title: "Agriculture",
      desc: "Smart irrigation, soil monitoring, crop analytics, and precision farming solutions.",
    },
    {
      icon: "🚗",
      title: "Automotive",
      desc: "Connected vehicles, GPS tracking, telematics, and real-time vehicle diagnostics.",
    },
    {
      icon: "🏙️",
      title: "Smart Cities",
      desc: "Intelligent lighting, waste management, surveillance, and urban infrastructure automation.",
    },
    {
      icon: "🏠",
      title: "Home Automation",
      desc: "Smart appliances, security systems, energy management, and IoT-enabled living spaces.",
    },
    {
      icon: "📦",
      title: "Retail & Supply Chain",
      desc: "RFID tracking, inventory automation, and real-time supply chain visibility.",
    },
    {
      icon: "⚡",
      title: "Energy & Utilities",
      desc: "Smart grids, power monitoring, and intelligent energy management systems.",
    },
  ];

  const points = [
    {
      title: "Hardware + Software Expertise",
      desc: "Strong expertise in integrating hardware design, firmware development, and cloud-based IoT platforms.",
    },
    {
      title: "Proven Firmware & PCB Design",
      desc: "Hands-on experience with microcontrollers, processors, and high-quality PCB design.",
    },
    {
      title: "Cloud-Connected IoT Systems",
      desc: "Real-time device connectivity using AWS IoT Core, MQTT brokers, and secure cloud platforms.",
    },
    {
      title: "Edge IoT Processing",
      desc: "Faster on-device processing using edge computing with AWS Greengrass and local intelligence.",
    },
    {
      title: "End-to-End Development",
      desc: "Complete lifecycle support — from concept and R&D to deployment and optimization.",
    },
    {
      title: "Scalable & Secure Solutions",
      desc: "Built for performance, scalability, and long-term operational reliability.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <ServicesHero
        badge="Smart Embedded & IoT Solutions"
        title="Embedded Systems &"
        accent="IoT Development"
        subtitle="We design intelligent embedded systems and IoT solutions that connect hardware, software, and cloud — enabling real-time automation, data-driven decisions, and smart connectivity."
        primaryText="Start Your IoT Project →"
        primaryLink="/contact-us"
        secondaryText="Explore Services"
        secondaryLink="/services"
        stats={[
          { value: "End-to-End", label: "Embedded Solutions" },
          { value: "Real-Time", label: "IoT Intelligence" },
          { value: "Edge + Cloud", label: "Processing Power" },
          { value: "Secure", label: "Connected Systems" },
        ]}
      />

      {/* OVERVIEW */}
      <ServicesOverview
        title="Embedded Systems &"
        accent="IoT Solutions"
        paragraphs={[
          "At Robotronix Engineering Tech Pvt. Ltd., we specialize in Embedded Systems and Internet of Things (IoT) development — creating intelligent, connected, and high-performance solutions for modern industries.",
          "Our expertise spans hardware design, firmware development, edge computing, and IoT integration, enabling smarter automation, operational efficiency, and real-time insights across industries.",
        ]}
        infoCards={[
          {
            title: "Embedded System Design",
            desc: "Custom hardware and firmware development tailored to real-world applications.",
          },
          {
            title: "IoT & Edge Integration",
            desc: "Connecting devices, sensors, and cloud platforms for real-time intelligence.",
          },
          {
            title: "Predictive & Automated Control",
            desc: "Data-driven automation for smarter, more efficient operations.",
          },
        ]}
      />

      {/* APPROACH */}
      <ServicesApproach
        title="Our"
        accent="Development Process"
        subtitle="A structured, research-driven approach to building reliable and scalable embedded & IoT systems."
        steps={steps}
      />

      {/* INDUSTRIES */}
      <ServicesIndustries
        title="Embedded & IoT"
        accent="Industry Applications"
        subtitle="Our embedded and IoT solutions power smart automation across multiple industries."
        industries={industries}
      />

      {/* WHY CHOOSE */}
      <ServicesWhyChoose
        title="Why Choose"
        accent="Robotronix?"
        subtitle="We bridge hardware, software, and cloud to build intelligent embedded and IoT ecosystems."
        points={points}
      />

      {/* IMPACT */}
      <ServicesImpact
        title="Innovating the Future of Smart Connectivity"
        subtitle="We connect the physical and digital worlds through intelligent embedded systems and IoT solutions that drive automation, efficiency, and innovation."
      />

      {/* CTA */}
      <ServicesCTA
        title="Ready to Build Smart Embedded & IoT Solutions?"
        subtitle="Let’s transform your ideas into intelligent, connected systems that power the future of automation."
        buttonText="Talk to Our Experts →"
        buttonLink="/contact-us"
      />
    </>
  );
};

export default React.memo(EmbeddedIoT);
