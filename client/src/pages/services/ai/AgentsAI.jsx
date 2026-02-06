import React, { lazy, Suspense } from "react";
import ServicesHero from "../../../components/services/ServicesHero";

/* ===============================
   STATIC DATA (MOVED OUT)
=============================== */

const steps = [
  {
    title: "Agentic Workflow Design",
    desc: "We convert real human workflows into autonomous, goal-driven agent logic for end-to-end automation.",
  },
  {
    title: "Tool & API Integration",
    desc: "Connecting agents to CRMs, ERPs, IoT systems, browsers, and enterprise tools for real work execution.",
  },
  {
    title: "Multi-Agent Orchestration",
    desc: "Deploying collaborative agent teams that coordinate and solve complex multi-step business problems.",
  },
  {
    title: "Guardrails & Security",
    desc: "Strict boundaries, permissions, and human-in-loop controls ensure safe and ethical autonomous operations.",
  },
];

const industries = [
  {
    icon: "🏭",
    title: "Manufacturing",
    desc: "Autonomous supply chain agents handle inventory, negotiate re-orders, and schedule maintenance using sensor data.",
  },
  {
    icon: "🏦",
    title: "Finance & Banking",
    desc: "AI agents manage compliance, assist in wealth planning, process loans, and automate financial workflows.",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    desc: "Administrative agents automate scheduling, insurance claim processing, and patient follow-up coordination.",
  },
  {
    icon: "🛒",
    title: <>Retail & <br /> E-commerce</>,
    desc: "Shopping assistants execute purchases, process returns, and autonomously resolve customer inquiries.",
  },
  {
    icon: "👔",
    title: "Human Resources",
    desc: "Recruitment agents source talent, screen candidates, manage documents, and streamline onboarding.",
  },
  {
    icon: "✈️",
    title: "Travel & Hospitality",
    desc: "Autonomous agents manage bookings, handle customer requests, personalize travel experiences, and optimize operations.",
  },
  {
    icon: "📦",
    title: "Supply Chain & Procurement",
    desc: "Agents forecast demand, automate vendor interactions, optimize procurement, and manage inventory workflows.",
  },
  {
    icon: "🎓",
    title: <>Education & <br /> E-Learning</>,
    desc: "Intelligent agents personalize learning paths, automate assessments, support students, and manage academic workflows.",
  },
];

const points = [
  {
    title: "Expertise in Agentic Frameworks",
    desc: "Specialists in LangChain, AutoGPT, LlamaIndex, ReAct, and structured reasoning frameworks.",
  },
  {
    title: "Enterprise Tool Integration",
    desc: "We connect AI Agents with CRMs, ERPs, APIs, IoT devices, and internal enterprise tools.",
  },
  {
    title: "Real-World Automation Experience",
    desc: "Deep experience in deploying AI-driven automation that delivers measurable business value.",
  },
  {
    title: "Enterprise-Grade Security",
    desc: "Strict guardrails, protected memory layers, and fine-grained permission controls.",
  },
  {
    title: "Human-in-the-loop Control",
    desc: "Oversight and manual checkpoints ensure agents act responsibly and safely.",
  },
  {
    title: "Explainability & Observability",
    desc: "Full audit logs for every autonomous decision made by your AI agents.",
  },
];

const infoCards = [
  {
    title: "Autonomous Execution",
    desc: "Agents plan, decide, and complete tasks without human supervision.",
  },
  {
    title: "Goal-Oriented Reasoning",
    desc: "Agents break down objectives and execute multi-step actions.",
  },
  {
    title: "Tool & API Interaction",
    desc: "Agents operate CRMs, ERPs, APIs, browsers, and databases.",
  },
];

/* ===============================
   LAZY SECTIONS
=============================== */

const ServicesOverview = lazy(() =>
  import("../../../components/services/ServicesOverview")
);
const ServicesApproach = lazy(() =>
  import("../../../components/services/ServicesApproach")
);
const ServicesIndustries = lazy(() =>
  import("../../../components/services/ServicesIndustries")
);
const ServicesWhyChoose = lazy(() =>
  import("../../../components/services/ServicesWhyChoose")
);
const ServicesImpact = lazy(() =>
  import("../../../components/services/ServicesImpact")
);
const ServicesCTA = lazy(() =>
  import("../../../components/services/ServicesCTA")
);

/* ===============================
   LIGHTWEIGHT FALLBACK
=============================== */

const SectionFallback = () => (
  <div style={{ minHeight: "120px" }} />
);

const AgentsAI = React.memo(() => {
  return (
    <>
      {/* HERO */}
      <ServicesHero
        badge="Autonomous AI Workforce"
        title="Build Intelligent"
        accent="AI Agents"
        subtitle="From task automation to fully autonomous decision-making — Robotronix delivers next-generation AI Agents that think, plan, and execute like digital employees."
        primaryText="Get Started →"
        primaryLink="/contact-us"
        secondaryText="Explore Work"
        secondaryLink="/portfolio"
        stats={[
          { value: "24/7", label: "Autonomous Execution" },
          { value: "100%", label: "Task Automation" },
          { value: "50+", label: "Enterprise Integrations" },
          { value: "Multi-Agent", label: "Collaboration Ready" },
        ]}
      />

      {/* OVERVIEW */}
      <Suspense fallback={<SectionFallback />}>
        <ServicesOverview
          title="What Are"
          accent="AI Agents?"
          paragraphs={[
            "AI Agents are autonomous systems capable of perceiving their environment, reasoning through steps, and executing tasks independently. Unlike traditional AI that only provides insights, agents take real actions—browsing the web, interacting with APIs, managing workflows, and performing end-to-end tasks like a digital employee.",
            "Robotronix builds reliable, secure, and intelligent AI agents that integrate seamlessly into your business processes, automating workflows, improving operational efficiency, and delivering measurable productivity gains.",
            "Robotronix builds cutting-edge Gen AI solutions that streamline workflows, boost productivity, and deliver scalable, real-world impact across business operations.",
          ]}
          infoCards={infoCards}
        />
      </Suspense>

      {/* APPROACH */}
      <Suspense fallback={<SectionFallback />}>
        <ServicesApproach
          title="Our"
          accent="AI Agent Approach"
          subtitle="We engineer intelligent, autonomous agents designed to take action—not just provide insights."
          steps={steps}
        />
      </Suspense>

      {/* INDUSTRIES */}
      <Suspense fallback={<SectionFallback />}>
        <ServicesIndustries
          title="AI Agent"
          accent="Industry Applications"
          subtitle="AI Agents transform industries by autonomously performing tasks, handling operations, and executing complex workflows."
          industries={industries}
        />
      </Suspense>

      {/* WHY CHOOSE */}
      <Suspense fallback={<SectionFallback />}>
        <ServicesWhyChoose
          title="Why Choose"
          accent="Robotronix for AI Agents?"
          subtitle="We help enterprises build action-driven digital workers powered by advanced agentic AI—designed for autonomy, reliability, and security."
          points={points}
        />
      </Suspense>

      {/* IMPACT */}
      <Suspense fallback={<SectionFallback />}>
        <ServicesImpact
          title="The Future of Workforce Automation"
          subtitle="AI Agents enable 24/7 autonomous productivity—eliminating repetitive work, scaling operations instantly, and improving efficiency across the enterprise."
        />
      </Suspense>

      {/* CTA */}
      <Suspense fallback={<SectionFallback />}>
        <ServicesCTA
          title="Ready to Deploy Your AI Agents?"
          subtitle="Build intelligent digital workers that transform productivity, optimize workflows, and enhance your business performance."
          buttonText="Talk to Our Experts →"
          buttonLink="/contact-us"
        />
      </Suspense>
    </>
  );
});

export default AgentsAI;
