import React, { lazy, Suspense } from "react";
import ServicesHero from "../../../components/services/ServicesHero";

/* ===============================
   STATIC DATA (MOVED OUT)
=============================== */

const steps = [
  {
    title: "Data Collection & Preparation",
    desc: "We gather, cleanse, and structure raw data to ensure accuracy, reliability, and readiness for model training.",
  },
  {
    title: "Model Design & Development",
    desc: "Our experts design adaptive AI & ML models tailored to your business goals using advanced algorithms.",
  },
  {
    title: "Predictive Insights & Intelligence",
    desc: "We turn data into actionable insights that enable informed decision-making and future forecasting.",
  },
  {
    title: "Automation & Optimization",
    desc: "We automate processes and optimize workflows using intelligent systems built for performance and scalability.",
  },
];

const industries = [
  {
    icon: "🏭",
    title: "Manufacturing",
    desc: "Predictive maintenance, defect detection, and smart production systems.",
  },
  {
    icon: "🏦",
    title: "Finance & Banking",
    desc: "Fraud detection, credit scoring, algorithmic trading, customer analytics.",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    desc: "Medical imaging, diagnosis prediction, patient data analysis.",
  },
  {
    icon: "🛒",
    title: "Retail & E-commerce",
    desc: "Demand forecasting, recommendations, customer behavior intelligence.",
  },
  {
    icon: "🚘",
    title: "Automotive",
    desc: "Autonomous systems, vehicle monitoring, sensor data modeling.",
  },
  {
    icon: "🏫",
    title: "Education",
    desc: "AI tutoring, performance analytics, personalized learning systems.",
  },
  {
    icon: "📊",
    title: "Business & Marketing",
    desc: "Trend forecasting, campaign optimization, engagement analytics.",
  },
  {
    icon: "💬",
    title: "Customer Service",
    desc: "AI chatbots and virtual assistants enabling 24/7 support.",
  },
];

const points = [
  {
    title: "Expert AI & ML Engineers",
    desc: "Highly skilled engineers with experience in AI, NLP, and Data Science delivering enterprise-grade solutions.",
  },
  {
    title: "Custom-Built Intelligent Models",
    desc: "We design and deploy tailored ML and AI models aligned with your unique business goals.",
  },
  {
    title: "Advanced Tools & Frameworks",
    desc: "Our solutions use the latest AI/ML frameworks ensuring performance, scalability, and real-time intelligence.",
  },
  {
    title: "Continuous Research & Optimization",
    desc: "We consistently improve and retrain models to ensure long-term accuracy and adaptability.",
  },
  {
    title: "Scalable & Secure Architecture",
    desc: "Our systems are built with scalable cloud-based infrastructure and enterprise security standards.",
  },
  {
    title: "Ethical & Explainable AI",
    desc: "We follow transparency-focused AI development ensuring reliability, safety, and user trust.",
  },
];

const infoCards = [
  {
    title: "What is AI?",
    desc: "AI enables machines to simulate human intelligence — reasoning, decision-making, automation, vision, and language understanding.",
  },
  {
    title: "What is Machine Learning?",
    desc: "ML allows systems to learn from data, detect patterns, and make predictions without manual programming.",
  },
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

const AIML = () => {
  return (
    <>
      {/* HERO */}
      <ServicesHero
        badge="AI & Machine Learning Solutions"
        title="Powering Intelligent"
        accent="Digital Transformation"
        subtitle="Unlock automation, insights, and innovation with advanced AI & ML systems."
        primaryText="Get a Consultation →"
        primaryLink="/contact"
        secondaryText="Explore Case Studies"
        secondaryLink="/portfolio"
        stats={[
          { value: "30+", label: "Gen AI Tools Built" },
          { value: "10k+", label: "Automated Content Hours" },
          { value: "15+", label: "Industries Served" },
          { value: "R&D", label: "On Next-Gen AI Models" },
        ]}
      />

      <Suspense fallback={null}>
        <ServicesOverview
          title="AI & Machine Learning"
          accent="Overview"
          paragraphs={[
            "Artificial Intelligence and Machine Learning empower modern businesses to automate processes, analyze data intelligently, and unlock predictive insights that accelerate digital transformation.",
            "These technologies help systems learn, evolve, and make smarter decisions — enabling organizations to stay competitive in a rapidly-changing world.",
          ]}
          infoCards={infoCards}
        />

        <ServicesApproach
          title="Our"
          accent="AI & ML Approach"
          subtitle="A research-driven, scalable workflow designed to build future-ready solutions."
          steps={steps}
        />

        <ServicesIndustries
          title="AI & ML"
          accent="Industry Applications"
          subtitle="Our intelligent solutions empower multiple industries with automation and predictive insights."
          industries={industries}
        />

        <ServicesWhyChoose
          title="Why Choose"
          accent="Robotronix?"
          subtitle="We combine deep technical expertise, innovative engineering, and industry-driven intelligence."
          points={points}
        />

        <ServicesImpact
          title="Building Intelligent Ecosystems for a Smarter Tomorrow"
          subtitle="At Robotronix Engineering Tech Pvt. Ltd., we transform ideas into powerful AI & ML solutions that accelerate innovation, intelligence, and business growth."
        />

        <ServicesCTA
          title="Ready to Build the Future with AI & ML?"
          subtitle="Partner with Robotronix Engineering Tech Pvt. Ltd. to transform your ideas into intelligent, high-impact digital solutions."
          buttonText="Talk to Our Experts →"
          buttonLink="/contact-us"
        />
      </Suspense>
    </>
  );
};

export default React.memo(AIML);
