import React, { lazy, Suspense } from "react";
import ServicesHero from "../../../components/services/ServicesHero";

/* ===============================
   STATIC DATA (MOVED OUT)
=============================== */

const steps = [
  {
    title: "Requirement Discovery & Scoping",
    desc: "We analyze your business problem, workflows, users, and goals to define the right software solution.",
  },
  {
    title: "Architecture & Technology Planning",
    desc: "Designing scalable, secure system architecture tailored to performance and future growth.",
  },
  {
    title: "Custom Software Development",
    desc: "End-to-end development of tailored software aligned with your exact business needs.",
  },
  {
    title: "Testing, QA & Validation",
    desc: "Rigorous functional, performance, and security testing before production release.",
  },
  {
    title: "Deployment & Continuous Support",
    desc: "Production deployment, monitoring, enhancements, and long-term support.",
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

const OnDemandSoftwareDev = () => {
  return (
    <>
      {/* HERO */}
      <ServicesHero
        badge="Custom Software Solutions"
        title="On-Demand"
        accent="Software Development"
        subtitle="We design and build tailor-made software solutions that solve real business challenges — scalable, secure, and engineered for long-term success."
        primaryText="Build Your Software →"
        primaryLink="/contact-us"
        secondaryText="Explore Services"
        secondaryLink="/services"
        stats={[
          { value: "100%", label: "Custom Built" },
          { value: "Scalable", label: "Architecture" },
          { value: "Secure", label: "By Design" },
          { value: "End-to-End", label: "Delivery" },
        ]}
      />

      <Suspense fallback={null}>
        {/* OVERVIEW */}
        <ServicesOverview
          title="What Is"
          accent="On-Demand Software Development?"
          paragraphs={[
            "On-Demand Software Development focuses on building custom software solutions tailored precisely to your business requirements. Unlike off-the-shelf products, custom software adapts to your workflows, users, and long-term goals.",
            "Robotronix Engineering Tech Pvt. Ltd. partners with organizations to design, develop, and maintain software that improves efficiency, reduces operational friction, and enables digital transformation.",
          ]}
          infoCards={infoCards}
        />

        {/* APPROACH */}
        <ServicesApproach
          title="Our"
          accent="Development Process"
          subtitle="A structured, transparent approach to building reliable software."
          steps={steps}
        />

        {/* INDUSTRIES */}
        <ServicesIndustries
          title="Custom"
          accent="Software for Industries"
          subtitle="We deliver on-demand software solutions across industries and business models."
          industries={industries}
        />

        {/* WHY CHOOSE */}
        <ServicesWhyChoose
          title="Why Choose"
          accent="Robotronix?"
          subtitle="We engineer software with precision, scalability, and long-term value in mind."
          points={points}
        />

        {/* IMPACT */}
        <ServicesImpact
          title="Software That Works the Way Your Business Does"
          subtitle="Custom-built software removes limitations, improves efficiency, and gives you full control over your digital systems."
        />

        {/* CTA */}
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
