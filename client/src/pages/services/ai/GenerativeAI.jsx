import React, { lazy, Suspense } from "react";
import ServicesHero from "../../../components/services/ServicesHero";

/* ===============================
   STATIC DATA (STABLE)
=============================== */

const steps = [
  {
    title: "Gen AI Model Development",
    desc: "Fine-tuning GPT, diffusion models, and transformers for domain-specific content generation.",
  },
  {
    title: "AI-Powered Content Generation",
    desc: "Automating creative processes with accurate and high-quality text, image, and multimedia generation.",
  },
  {
    title: "Conversational AI & Chatbots",
    desc: "Building intelligent assistants that understand natural language and interact naturally.",
  },
  {
    title: "Design & Innovation Tools",
    desc: "Smart tools for product design, UI/UX prototyping, media creation, and marketing workflows.",
  },
];

const industries = [
  { icon: "🏢", title: "Corporate & Business", desc: "AI-powered documents, presentations, automation, and enterprise content generation." },
  { icon: "🎨", title: "Media & Entertainment", desc: "Scripts, visuals, VFX, content creation, and creative ideation." },
  { icon: "🏬", title: "Retail & E-commerce", desc: "Product descriptions, ads, personalization engines, and automation tools." },
  { icon: "🏫", title: "Education & Training", desc: "AI tutors, course generation, assessments, and learning personalization." },
  { icon: "🏥", title: "Healthcare", desc: "AI-generated clinical documents, reports, and patient interaction automation." },
  { icon: "💻", title: "Technology & Software", desc: "Code generation, debugging, documentation, and UX design support." },
  { icon: "📈", title: "Marketing & Branding", desc: "Campaign ideas, brand content, sentiment analysis, and creative automation." },
  { icon: "🚀", title: "Innovation & R&D", desc: "Rapid ideation, prototyping, design models, and creative experimentation." },
];

const points = [
  {
    title: "Expertise in Large Language Models",
    desc: "Specialized in GPT, diffusion models, transformers, and advanced Gen AI stacks.",
  },
  {
    title: "Custom Gen AI Tools",
    desc: "Tailor-made AI tools engineered for industry-specific creativity and automation.",
  },
  {
    title: "Enterprise Scalability",
    desc: "High-performance and secure Gen AI architecture built for large-scale use.",
  },
  {
    title: "Ethical & Responsible AI",
    desc: "Strict compliance with transparency, privacy, and safety guidelines.",
  },
  {
    title: "Proven R&D Innovation",
    desc: "Continuous fine-tuning, experimentation, and next-generation AI advancements.",
  },
  {
    title: "Business-Centric Outcomes",
    desc: "Focused on measurable ROI with automation, speed, and intelligent content generation.",
  },
];

const infoCards = [
  { title: "Content Creation", desc: "AI-generated text, images, video, 3D assets, and more." },
  { title: "Code & Automation", desc: "Automated development, documentation, workflow pipelines." },
  { title: "Design & Innovation", desc: "Creative tools for product design, UI/UX, and media generation." },
];

/* ===============================
   LAZY SECTIONS
=============================== */

const ServicesOverview = lazy(() => import("../../../components/services/ServicesOverview"));
const ServicesApproach = lazy(() => import("../../../components/services/ServicesApproach"));
const ServicesIndustries = lazy(() => import("../../../components/services/ServicesIndustries"));
const ServicesWhyChoose = lazy(() => import("../../../components/services/ServicesWhyChoose"));
const ServicesImpact = lazy(() => import("../../../components/services/ServicesImpact"));
const ServicesCTA = lazy(() => import("../../../components/services/ServicesCTA"));

const GenerativeAI = () => {
  return (
    <>
      {/* HERO (EAGER) */}
      <ServicesHero
        badge="Transforming Creativity with AI"
        title="Generative AI"
        accent="Solutions"
        subtitle="Empowering businesses to innovate, design, automate, and create with advanced Generative AI technologies."
        primaryText="Get Started →"
        primaryLink="/contact-us"
        secondaryText="Explore Work"
        secondaryLink="/portfolio"
        stats={[
          { value: "30+", label: "Gen AI Tools Built" },
          { value: "10k+", label: "Automated Content Hours" },
          { value: "15+", label: "Industries Served" },
          { value: "R&D", label: "On Next-Gen AI Models" },
        ]}
      />

      {/* BELOW THE FOLD */}
      <Suspense fallback={<></>}>
        <ServicesOverview
          title="What is"
          accent="Generative AI?"
          paragraphs={[
            "Generative AI (Gen AI) enables machines to create original content — including text, images, video, code, and designs using deep learning and LLMs.",
            "Robotronix builds cutting-edge Gen AI tools that accelerate creativity, enhance workflows, and deliver high-impact automation.",
          ]}
          infoCards={infoCards}
        />

        <ServicesApproach
          title="Our"
          accent="Generative AI Approach"
          subtitle="We combine creativity with engineering excellence to develop scalable, adaptive, and powerful Gen AI systems."
          steps={steps}
        />

        <ServicesIndustries
          title="Generative AI"
          accent="Industry Applications"
          subtitle="Gen AI is transforming industries by accelerating creativity, automating workflows, and unlocking innovation."
          industries={industries}
        />

        <ServicesWhyChoose
          title="Why Choose"
          accent="Robotronix for Gen AI?"
          subtitle="We build powerful, scalable, and intelligent Generative AI systems designed to transform your workflows and creativity."
          points={points}
        />

        <ServicesImpact
          title="Shaping the Future with Generative AI"
          subtitle="Robotronix enables enterprises to unlock the full power of Generative AI — delivering creativity, automation, and intelligent transformation."
        />

        <ServicesCTA
          title="Ready to Build Your Generative AI Solution?"
          subtitle="From creative automation to AI content engines — Robotronix helps you innovate with Gen AI and lead the future."
          buttonText="Talk to Our Experts →"
          buttonLink="/contact-us"
        />
      </Suspense>
    </>
  );
};

export default React.memo(GenerativeAI);
