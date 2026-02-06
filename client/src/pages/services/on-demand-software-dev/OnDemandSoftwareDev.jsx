import React, { lazy, Suspense } from "react";
import ServicesHero from "../../../components/services/ServicesHero";

/* ===============================
   STATIC DATA (STABLE)
=============================== */

const steps = [
  {
    title: "Requirement Discovery & Scoping",
    desc: "We analyze your business challenges, workflows, users, and goals to define clear requirements and the right software scope.",
  },
  {
    title: "Architecture & Technology Planning",
    desc: "We design scalable, secure system architecture and select the right technologies for performance and future growth.",
  },
  {
    title: "Development, Testing & QA",
    desc: "End-to-end software development with rigorous functional, performance, and security testing to ensure production-ready quality.",
  },
  {
    title: "Deployment & Continuous Support",
    desc: "Production deployment, monitoring, enhancements, and long-term support to ensure stability and continuous improvement.",
  },
];

const industries = [
  {
    icon: "🏢",
    title: "Enterprises",
    desc: "Custom internal tools, workflow automation systems, and enterprise platforms.",
  },
  {
    icon: "🚀",
    title: "Startups",
    desc: "MVPs, rapid product development, and scalable startup-ready software.",
  },
  {
    icon: "🏦",
    title: "Finance & Banking",
    desc: "Secure financial systems, dashboards, automation, and compliance platforms.",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    desc: "Patient management systems, admin platforms, and healthcare software solutions.",
  },
  {
    icon: "🛒",
    title: "Retail & E-commerce",
    desc: "Custom commerce platforms, inventory systems, and order management software.",
  },
  {
    icon: "🏭",
    title: "Manufacturing & Logistics",
    desc: "ERP modules, tracking systems, and operational automation tools.",
  },
  {
    icon: "🎓",
    title: "Education & EdTech",
    desc: "Learning management systems, student portals, and digital learning solutions.",
  },
  {
    icon: "📡",
    title: "Telecom & Media",
    desc: "Billing systems, customer portals, network management tools, and analytics solutions.",
  },
];

const points = [
  {
    title: "Fully Custom-Built Solutions",
    desc: "Every software solution is engineered specifically for your business requirements.",
  },
  {
    title: "Scalable & Future-Ready",
    desc: "Architected to evolve with your business growth and changing needs.",
  },
  {
    title: "Secure by Design",
    desc: "Enterprise-grade security, role-based access, and data protection practices.",
  },
  {
    title: "Agile Development Process",
    desc: "Fast iterations, transparent progress, and continuous collaboration.",
  },
  {
    title: "Dedicated Engineering Team",
    desc: "Experienced developers, architects, and QA specialists working on your product.",
  },
  {
    title: "Long-Term Partnership",
    desc: "Beyond delivery — we support, maintain, and enhance your software.",
  },
];

const infoCards = [
  {
    title: "Custom Business Logic",
    desc: "Software designed around your processes — not the other way around.",
  },
  {
    title: "Flexible & Scalable",
    desc: "Easily extend features as your business grows.",
  },
  {
    title: "Full Ownership",
    desc: "You own the software, data, and roadmap completely.",
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

const OnDemandSoftwareDev = () => {
  return (
    <>
      {/* HERO (EAGER) */}
      <ServicesHero
        badge="Custom Software Solutions"
        title="On-Demand"
        accent="Software Development"
        subtitle="We design and build tailor-made software solutions that solve real business challenges — scalable, secure, and engineered for long-term success."
        primaryText="Build Your Software →"
        primaryLink="/contact-us"
        secondaryText="Explore Work"
        secondaryLink="/portfolio"
        stats={[
          { value: "100%", label: "Custom Built" },
          { value: "Scalable", label: "Architecture" },
          { value: "Secure", label: "By Design" },
          { value: "End-to-End", label: "Delivery" },
        ]}
      />

      {/* BELOW THE FOLD */}
      <Suspense fallback={<></>}>
        <ServicesOverview
          title="What Is"
          accent="On-Demand Software Development?"
          paragraphs={[
            "On-Demand Software Development focuses on building custom software solutions tailored precisely to your business requirements. Unlike off-the-shelf products, custom software adapts to your workflows, users, and long-term goals.",
            "Robotronix Engineering Tech Pvt. Ltd. partners with organizations to design, develop, and maintain software that improves efficiency, reduces operational friction, and enables digital transformation.",
            "Robotronix delivers end-to-end custom software solutions designed to scale with your business, integrate seamlessly with existing systems, and drive long-term operational efficiency and growth.",
          ]}
          infoCards={infoCards}
        />

        <ServicesApproach
          title="Our"
          accent="Development Process"
          subtitle="A structured, transparent approach to building reliable software."
          steps={steps}
        />

        <ServicesIndustries
          title="Custom"
          accent="Software for Industries"
          subtitle="We deliver on-demand software solutions across industries and business models."
          industries={industries}
        />

        <ServicesWhyChoose
          title="Why Choose"
          accent="Robotronix?"
          subtitle="We engineer software with precision, scalability, and long-term value in mind."
          points={points}
        />

        <ServicesImpact
          title="Software That Works the Way Your Business Does"
          subtitle="Custom-built software removes limitations, improves efficiency, and gives you full control over your digital systems."
        />

        <ServicesCTA
          title="Have a Software Idea or Challenge?"
          subtitle="Let’s build a custom solution that fits your business perfectly."
          buttonText="Discuss Your Project →"
          buttonLink="/contact-us"
        />
      </Suspense>
    </>
  );
};

export default React.memo(OnDemandSoftwareDev);
