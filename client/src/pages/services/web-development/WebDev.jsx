import React, { lazy, Suspense } from "react";
import ServicesHero from "../../../components/services/ServicesHero";

/* ===============================
   STATIC DATA (HOISTED)
=============================== */

const steps = [
  {
    title: "Business Requirement Analysis",
    desc: "We understand your business processes, goals, and digital challenges before designing the solution.",
  },
  {
    title: "MERN Architecture Design",
    desc: "Scalable system architecture using MongoDB, Express, React, and Node.js.",
  },
  {
    title: "Frontend Development (React)",
    desc: "High-performance, responsive, and interactive UI built with React.",
  },
  {
    title: "Backend & API Development",
    desc: "Secure REST APIs, authentication, and business logic using Node.js and Express.",
  },
  {
    title: "Deployment, Optimization & Scaling",
    desc: "Cloud deployment, performance tuning, monitoring, and long-term scalability.",
  },
];

const industries = [
  {
    icon: "🏢",
    title: "Enterprise Digital Platforms",
    desc: "Internal tools, admin dashboards, CRMs, and workflow automation systems.",
  },
  {
    icon: "📊",
    title: "Business Analytics & Dashboards",
    desc: "Data-driven dashboards and reporting platforms for decision-makers.",
  },
  {
    icon: "🛒",
    title: "E-Commerce Solutions",
    desc: "Custom MERN-based e-commerce platforms with payments and inventory.",
  },
  {
    icon: "📦",
    title: "SaaS Applications",
    desc: "Subscription-based digital products with role-based access and billing.",
  },
  {
    icon: "🎓",
    title: "EdTech Platforms",
    desc: "Learning management systems, assessments, and digital classrooms.",
  },
  {
    icon: "🏥",
    title: "Healthcare Digital Solutions",
    desc: "Patient portals, admin systems, and secure healthcare platforms.",
  },
];

const points = [
  {
    title: "MERN Stack Only",
    desc: "We specialize exclusively in MongoDB, Express, React, and Node.js.",
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
    title: "Full-Stack JavaScript",
    desc: "Single-language development for faster delivery and easier maintenance.",
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

const ServicesOverview = lazy(() => import("../../../components/services/ServicesOverview"));
const ServicesApproach = lazy(() => import("../../../components/services/ServicesApproach"));
const ServicesIndustries = lazy(() => import("../../../components/services/ServicesIndustries"));
const ServicesWhyChoose = lazy(() => import("../../../components/services/ServicesWhyChoose"));
const ServicesImpact = lazy(() => import("../../../components/services/ServicesImpact"));
const ServicesCTA = lazy(() => import("../../../components/services/ServicesCTA"));

const WebDev = () => {
  return (
    <>
      {/* HERO (EAGER) */}
      <ServicesHero
        badge="Web Development & Digital Solutions"
        title="Build Powerful"
        accent="Digital Platforms"
        subtitle="We design and develop scalable web applications and digital solutions using the MERN stack — tailored to streamline operations and accelerate business growth."
        primaryText="Start Your Digital Journey →"
        primaryLink="/contact-us"
        secondaryText="Explore Services"
        secondaryLink="/services"
        stats={[
          { value: "MERN", label: "Core Stack" },
          { value: "React", label: "Modern UI" },
          { value: "Node.js", label: "Scalable Backend" },
          { value: "MongoDB", label: "Flexible Data Layer" },
        ]}
      />

      {/* BELOW THE FOLD */}
      <Suspense fallback={<></>}>
        <ServicesOverview
          title="Web Development &"
          accent="Digital Solutions"
          paragraphs={[
            "Robotronix Engineering Tech Pvt. Ltd. delivers modern web development and digital solutions built exclusively on the MERN stack. Our solutions are designed to automate processes, improve efficiency, and deliver exceptional user experiences.",
            "From enterprise dashboards to SaaS platforms, we build scalable and secure digital systems that adapt as your business evolves.",
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
          subtitle="We build MERN-based digital platforms for diverse industries and use cases."
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
          subtitle="Our MERN-based digital solutions streamline operations, improve visibility, and enable faster decision-making."
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
