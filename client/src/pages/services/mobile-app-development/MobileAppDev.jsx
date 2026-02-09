import React, { lazy, Suspense } from "react";
import ServicesHero from "../../../components/services/ServicesHero";

/* ===============================
   STATIC DATA (STABLE)
=============================== */

const steps = [
  {
    title: "Discovery & UI/UX",
    desc: "Aligning business goals with user journeys to design intuitive, Flutter-first digital experiences that engage users effectively.",
  },
  {
    title: "Flutter Architecture",
    desc: "Building scalable, clean Flutter apps with a single high-performance codebase for Android & iOS platforms at scale.",
  },
  {
    title: "Backend & Cloud",
    desc: "Integrating secure APIs, Firebase, and cloud services for real-time, scalable application connectivity and data flow.",
  },
  {
    title: "Testing & Launch",
    desc: "Ensuring quality through testing, store deployment, CI/CD, and continuous performance optimization for production readiness.",
  },
];

const industries = [
  {
    icon: "🛒",
    title: "E-Commerce",
    desc: "High-performance Flutter apps for shopping, payments, order tracking, and customer engagement.",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    desc: "Secure medical apps for patient management, telemedicine, and health monitoring.",
  },
  {
    icon: "🏦",
    title: "FinTech",
    desc: "Flutter apps for digital wallets, banking, payments, and financial dashboards.",
  },
  {
    icon: "🚚",
    title: "Logistics & Transportation",
    desc: "Real-time tracking, fleet management, and delivery optimization apps.",
  },
  {
    icon: "🎓",
    title: "EdTech",
    desc: "Learning platforms, course apps, live classes, and student engagement solutions.",
  },
  {
  icon: "🏠",
  title: "Real Estate",
  desc: "Property listing apps, virtual tours, CRM integration, and lead management.",
},
{
  icon: "🍔",
  title: "Food & Restaurant",
  desc: "Food delivery apps, online ordering, table booking, and restaurant management.",
},
{
  icon: "🏢",
  title: "Enterprise & Business Apps",
  desc: "Enterprise apps, workflow automation, internal dashboards, and business management.",
},

];

const points = [
  {
    title: "Flutter Specialists",
    desc: "Dedicated Flutter developers with deep expertise in Dart and cross-platform app development.",
  },
  {
    title: "Single Codebase Advantage",
    desc: "One Flutter codebase for Android & iOS — faster delivery and lower development cost.",
  },
  {
    title: "High-Performance Apps",
    desc: "Smooth UI, fast rendering, and near-native performance using Flutter’s rendering engine.",
  },
  {
    title: "Scalable App Architecture",
    desc: "Clean, modular, and scalable Flutter architecture built for long-term growth.",
  },
  {
    title: "Secure & Reliable",
    desc: "Secure authentication, encrypted storage, and best practices for mobile security.",
  },
  {
    title: "End-to-End Delivery",
    desc: "From idea and design to deployment, support, and future enhancements.",
  },
];

const infoCards = [
  {
    title: "Cross-Platform Excellence",
    desc: "One Flutter app that runs flawlessly on both Android and iOS.",
  },
  {
    title: "Beautiful UI & Animations",
    desc: "Pixel-perfect UI with smooth animations and responsive layouts.",
  },
  {
    title: "Scalable & Maintainable",
    desc: "Clean Flutter architecture designed for future scalability.",
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

const MobileAppDev = () => {
  return (
    <>
      {/* HERO (EAGER) */}
      <ServicesHero
        badge="Flutter App Development Experts"
        title="Build Powerful"
        accent="Flutter Apps"
        subtitle="We build high-performance, scalable, and visually stunning mobile applications using Flutter — delivering a single codebase solution for both Android and iOS."
        primaryText="Build Your App →"
        primaryLink="/contact-us"
        secondaryText="Explore Work"
        secondaryLink="/portfolio?category=mobile-app"
        stats={[
          { value: "Flutter", label: "Only Focus" },
          { value: "Android + iOS", label: "Single Codebase" },
          { value: "Fast", label: "Development Cycle" },
          { value: "Scalable", label: "App Architecture" },
        ]}
      />

      {/* BELOW THE FOLD */}
      <Suspense fallback={<></>}>
        <ServicesOverview
          title="Flutter"
          accent="Mobile App Development"
          paragraphs={[
            "At Robotronix Engineering Tech Pvt. Ltd., we specialize exclusively in Flutter mobile application development. Our focus allows us to build faster, more reliable, and cost-effective mobile apps without compromising on performance or user experience.",
            "Using Flutter, we create cross-platform applications with native-like performance, beautiful UI, and seamless user interactions — all from a single, maintainable codebase.",
            "Our expertise goes beyond front-end development into scalable system integration and advanced features. We build applications with real-time data, APIs, cloud services, offline support, and modular architectures. Using modern workflows, CI/CD pipelines, and rigorous testing, we ensure stability, quality, and faster releases.",
          ]}
          infoCards={infoCards}
        />

        <ServicesApproach
          title="Our"
          accent="Flutter Development Process"
          subtitle="A streamlined process designed to deliver fast, scalable, and reliable Flutter applications."
          steps={steps}
        />

        <ServicesIndustries
          title="Flutter App"
          accent="Industry Solutions"
          subtitle="We build Flutter applications tailored for diverse industries and business needs."
          industries={industries}
        />

        <ServicesWhyChoose
          title="Why Choose"
          accent="Robotronix for Flutter?"
          subtitle="We focus only on Flutter — ensuring deep expertise, better quality, and faster delivery."
          points={points}
        />

        <ServicesImpact
          title="One Codebase. Unlimited Possibilities."
          subtitle="Flutter enables faster development, consistent UI, and scalable mobile apps that grow with your business."
        />

        <ServicesCTA
          title="Ready to Build Your Flutter App?"
          subtitle="Let’s turn your idea into a high-performance Flutter app for Android and iOS."
          buttonText="Talk to Flutter Experts →"
          buttonLink="/contact-us"
        />
      </Suspense>
    </>
  );
};

export default React.memo(MobileAppDev);