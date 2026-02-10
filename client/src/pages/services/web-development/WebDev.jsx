import React, { lazy, Suspense } from "react";
import ServicesHero from "../../../components/services/ServicesHero";

/* ===============================
   STATIC DATA (HOISTED)
=============================== */

const steps = [
  {
    title: "Requirement Analysis",
    desc: "Understanding business goals, user needs, and technical requirements to define a clear and effective development roadmap.",
  },
  {
    title: "Architecture & Planning",
    desc: "Designing scalable system architecture using the right technology stack for performance, security, and future growth.",
  },
  {
    title: "Development & Testing",
    desc: "Building responsive applications with clean code, while ensuring quality through continuous testing and validation.",
  },
  {
    title: "Deployment & Scaling",
    desc: "Deploying to the cloud with performance optimization, monitoring, security, and long-term scalability support.",
  },
];
const industries = [
  {
    icon: "🏢",
    title: "Enterprise Digital Platforms",
    desc: "Custom internal tools including CRMs, admin dashboards, role-based access systems, workflow automation, and scalable enterprise architectures.",
  },
  {
    icon: "📊",
    title: "Business Analytics & Dashboards",
    desc: "Real-time data dashboards, KPI tracking, data visualization, reporting systems, and integrations with third-party analytics tools.",
  },
  {
    icon: "🛒",
    title: "E-Commerce Solutions",
    desc: "MERN-based e-commerce platforms with secure payments, product catalogs, inventory management, order tracking, and admin control panels.",
  },
  {
    icon: "📦",
    title: "SaaS Applications",
    desc: "Cloud-ready SaaS products with subscription billing, authentication, role-based access, performance optimization, and scalable APIs.",
  },
  {
    icon: "🎓",
    title: "EdTech Platforms",
    desc: "Learning management systems with courses, assessments, student dashboards, instructor panels, progress tracking, and certifications.",
  },
  {
    icon: "🏥",
    title: "Healthcare Digital Solutions",
    desc: "Secure patient portals, appointment management, healthcare admin systems, data privacy compliance, and performance-focused platforms.",
  },
  {
    icon: "💳",
    title: "FinTech Solutions",
    desc: "Digital wallets, payment gateways, financial dashboards, transaction management systems, and secure, compliant fintech platforms.",
  },
  {
    icon: "🚚",
    title: "Supply Chain & Logistics Systems",
    desc: "Inventory management, order fulfillment, shipment tracking, warehouse systems, and real-time logistics monitoring dashboards.",
  },
];

const points = [
  {
    title: "Modern Technology Expertise",
    desc: "Choosing the right tech stack to match your business needs.",
  },
  {
    title: "End-to-End Digital Solutions",
    desc: "From idea to deployment — we build complete digital platforms.",
  },
  {
    title: "Scalable & Secure Systems",
    desc: "Enterprise-grade architecture designed for performance and security.",
  },
  {
    title: "Modern User Experience",
    desc: "Fast, responsive, and intuitive interfaces built with React.",
  },
  {
    title: "API-Driven Architecture",
    desc: "Clean APIs for seamless integration with mobile apps and third-party tools.",
  },
  {
    title: "Long-Term Support & Scaling",
    desc: "We support, optimize, and scale your digital solution as your business grows.",
  },
];

const infoCards = [
  {
    title: "Full-Stack Development",
    desc: "End-to-end development using modern frontend and backend technologies.",
  },
  {
    title: "Scalable Digital Platforms",
    desc: "Designed to handle growth, high traffic, and complex workflows.",
  },
  {
    title: "Secure & Reliable",
    desc: "Industry-standard security practices across the application.",
  },
];

/* ===============================
   LAZY SECTIONS
=============================== */

const ServicesOverview = lazy(
  () => import("../../../components/services/ServicesOverview"),
);
const ServicesApproach = lazy(
  () => import("../../../components/services/ServicesApproach"),
);
const ServicesIndustries = lazy(
  () => import("../../../components/services/ServicesIndustries"),
);
const ServicesWhyChoose = lazy(
  () => import("../../../components/services/ServicesWhyChoose"),
);
const ServicesImpact = lazy(
  () => import("../../../components/services/ServicesImpact"),
);
const ServicesCTA = lazy(
  () => import("../../../components/services/ServicesCTA"),
);

const WebDev = () => {
  return (
    <>
      {/* HERO (EAGER) */}
      <ServicesHero
        badge="Web Development & Digital Solutions"
        title="Build Powerful"
        accent="Digital Platforms"
        subtitle="We design and develop scalable digital platforms tailored to optimize operations, enhance efficiency, and drive sustainable business growth."
        primaryText="Start Your Digital Journey →"
        primaryLink="/contact-us"
        secondaryText="Explore Work"
        secondaryLink="/portfolio?category=web-enterprise"
        stats={[
          { value: "MERN", label: "Core Stack" },
          { value: "Java (Spring Boot)", label: "Enterprise Backend" },
          { value: "Python", label: "APIs & Automation" },
          { value: "PHP", label: "Server-Side Development" },
        ]}
      />

      {/* BELOW THE FOLD */}
      <Suspense fallback={<></>}>
        <ServicesOverview
          title="Web Development &"
          accent="Digital Solutions"
          paragraphs={[
            "Robotronix Engineering Tech Pvt. Ltd. delivers modern web and digital solutions using MERN, Java (Spring Boot), Python, and PostgreSQL. We build high-quality applications that automate processes, improve efficiency, and deliver seamless user experiences.",
            "We combine modern frontend technologies with powerful backend frameworks to create secure, scalable, and high-performance web applications designed for complex business needs and long-term maintainability.",
            "From enterprise dashboards to SaaS platforms, we develop reliable digital systems that scale with your business. By following clean architecture and security best practices, we ensure stability and measurable impact.",
          ]}
          infoCards={infoCards}
        />

        <ServicesApproach
          title="Our"
          accent="Development Approach"
          subtitle="A structured, scalable process to deliver reliable digital solutions."
          steps={steps}
        />

        <ServicesIndustries
          title="Digital"
          accent="Solutions Across Industries"
          subtitle="We build scalable digital platforms using modern, enterprise-ready technologies across industries."
          industries={industries}
        />

        <ServicesWhyChoose
          title="Why Choose"
          accent="Robotronix?"
          subtitle="Focused expertise, scalable systems, and reliable digital delivery."
          points={points}
        />

        <ServicesImpact
          title="Transform Your Business Digitally"
          subtitle="Scalable, secure digital solutions designed to optimize operations and accelerate growth."
        />

        <ServicesCTA
          title="Ready to Build Your Digital Solution?"
          subtitle="Let’s create a scalable, secure, and future-ready web platform."
          buttonText="Talk to Our Experts →"
          buttonLink="/contact-us"
        />
      </Suspense>
    </>
  );
};

export default React.memo(WebDev);
