import React from "react";

import AI_Hero from "../AIPageComponents/AI_Hero";
import AI_Overview from "../AIPageComponents/AI_Overview";
import AI_Approach from "../AIPageComponents/AI_Approach";
import AI_Industries from "../AIPageComponents/AI_Industries";
import AI_WhyChoose from "../AIPageComponents/AI_WhyChoose";
import AI_Impact from "../AIPageComponents/AI_Impact";
import AI_CTA from "../AIPageComponents/AI_CTA";


const AgentsAI = () => {
  const steps = [
    {
      title: "Agentic Workflow Design",
      desc: "We convert real human workflows into autonomous, goal-driven agent logic for end-to-end automation.",
    },
    {
      title: "RAG-Enhanced Memory",
      desc: "Agents equipped with Retrieval-Augmented Generation for long-term memory and secure access to your data.",
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
      desc: "Autonomous supply chain agents handle inventory, negotiate re-orders, and schedule maintenance using sensor data."
    },
    {
      icon: "🏦",
      title: "Finance & Banking",
      desc: "AI agents manage compliance, assist in wealth planning, process loans, and automate financial workflows."
    },
    {
      icon: "🏥",
      title: "Healthcare",
      desc: "Administrative agents automate scheduling, insurance claim processing, and patient follow-up coordination."
    },
    {
      icon: "🛒",
      title: "Retail & E-commerce",
      desc: "Shopping assistants execute purchases, process returns, and autonomously resolve customer inquiries."
    },
    {
      icon: "👔",
      title: "Human Resources",
      desc: "Recruitment agents source talent, screen candidates, manage documents, and streamline onboarding."
    }
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

  return (
    <>
      {/* HERO */}
      <AI_Hero
        badge="Autonomous AI Workforce"
        title="Build Intelligent"
        accent="AI Agents"
        subtitle="From task automation to fully autonomous decision-making — Robotronix delivers next-generation AI Agents that think, plan, and execute like digital employees."
        primaryText="Get Started →"
        primaryLink="/contact"
        secondaryText="Explore Services"
        secondaryLink="/services"
        stats={[
          { value: "24/7", label: "Autonomous Execution" },
          { value: "100%", label: "Task Automation" },
          { value: "50+", label: "Enterprise Integrations" },
          { value: "Multi-Agent", label: "Collaboration Ready" }
        ]}
      />

      {/* OVERVIEW */}
      <AI_Overview
        title="What Are"
        accent="AI Agents?"
        paragraphs={[
          "AI Agents are autonomous systems capable of perceiving their environment, reasoning through steps, and executing tasks independently. Unlike traditional AI that only provides insights, agents take real actions—browsing the web, interacting with APIs, managing workflows, and performing end-to-end tasks like a digital employee.",
          "Robotronix builds reliable, secure, and intelligent AI agents that integrate seamlessly into your business processes to transform productivity."
        ]}
        infoCards={[
          {
            title: "Autonomous Execution",
            desc: "Agents plan, decide, and complete tasks without human supervision."
          },
          {
            title: "Goal-Oriented Reasoning",
            desc: "Agents break down objectives and execute multi-step actions."
          },
          {
            title: "Tool & API Interaction",
            desc: "Agents operate CRMs, ERPs, APIs, browsers, and databases."
          }
        ]}
      />

      {/* APPROACH */}
      <AI_Approach
        title="Our"
        accent="AI Agent Approach"
        subtitle="We engineer intelligent, autonomous agents designed to take action—not just provide insights."
        steps={steps}
      />

      {/* INDUSTRIES */}
      <AI_Industries
        title="AI Agent"
        accent="Industry Applications"
        subtitle="AI Agents transform industries by autonomously performing tasks, handling operations, and executing complex workflows."
        industries={industries}
      />

      {/* WHY CHOOSE */}
      <AI_WhyChoose
        title="Why Choose"
        accent="Robotronix for AI Agents?"
        subtitle="We help enterprises build action-driven digital workers powered by advanced agentic AI—designed for autonomy, reliability, and security."
        points={points}
      />

      {/* IMPACT */}
      <AI_Impact
        title="The Future of Workforce Automation"
        subtitle="AI Agents enable 24/7 autonomous productivity—eliminating repetitive work, scaling operations instantly, and improving efficiency across the enterprise."
      />

      {/* CTA */}
      <AI_CTA
        title="Ready to Deploy Your AI Agents?"
        subtitle="Build intelligent digital workers that transform productivity, optimize workflows, and enhance your business performance."
        buttonText="Talk to Our Experts →"
        buttonLink="/contact-us"
      />
    </>
  );
};

export default React.memo(AgentsAI);
