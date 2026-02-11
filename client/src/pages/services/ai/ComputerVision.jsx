import React, { lazy, Suspense } from "react";
import ServicesHero from "../../../components/services/ServicesHero";

/* ===============================
   STATIC DATA
=============================== */

const steps = [
  {
    title: "Vision Strategy & Use Case Definition",
    desc: "We identify high-impact visual intelligence use cases aligned with your operational and business goals.",
  },
  {
    title: "Data Preparation & Annotation",
    desc: "Curating, cleaning, and labeling image and video datasets for high-accuracy vision models.",
  },
  {
    title: "Model Training & Optimization",
    desc: "Training deep learning models using CNNs and vision transformers optimized for real-world performance.",
  },
  {
    title: "Deployment & Monitoring",
    desc: "Deploying vision systems on edge devices or cloud with continuous monitoring and optimization.",
  },
];

const industries = [
  {
    icon: "🏭",
    title: "Manufacturing",
    desc: "Automated quality inspection, defect detection, and production line monitoring using vision systems.",
  },
  {
    icon: "🚗",
    title: "Automotive",
    desc: "Driver assistance, vehicle detection, lane monitoring, and autonomous vision capabilities.",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    desc: "Medical image analysis, diagnostics support, and real-time patient monitoring systems.",
  },
  {
    icon: "🛒",
    title: <>Retail & <br /> E-commerce</>,
    desc: "Customer behavior analysis, shelf monitoring, theft detection, and visual search solutions.",
  },
  {
    icon: "📦",
    title: "Logistics & Warehousing",
    desc: "Package detection, barcode recognition, inventory tracking, and warehouse automation.",
  },
  {
    icon: "🏙️",
    title: "Smart Cities & Surveillance",
    desc: "Traffic monitoring, crowd analytics, anomaly detection, and public safety systems.",
  },
  {
    icon: "🌾",
    title: "Agriculture",
    desc: "Crop monitoring, disease detection, yield analysis, and smart farming solutions.",
  },
  {
    icon: "⚡",
    title: "Energy & Utilities",
    desc: "Infrastructure inspection, fault detection, and predictive maintenance using visual data.",
  },
];

const points = [
  {
    title: "Advanced Computer Vision Expertise",
    desc: "Deep expertise in OpenCV, YOLO, Detectron, Vision Transformers, and CNN architectures.",
  },
  {
    title: "Edge & Embedded Vision",
    desc: "Optimized vision models for NVIDIA Jetson, ARM, and low-latency edge devices.",
  },
  {
    title: "High Accuracy & Performance",
    desc: "Computer vision systems built for precision, speed, and real-world reliability.",
  },
  {
    title: "Scalable Deployment",
    desc: "Seamless deployment across cloud, edge, and hybrid environments.",
  },
  {
    title: "Enterprise Integration",
    desc: "Vision systems integrated with ERP, IoT, analytics, and automation platforms.",
  },
  {
    title: "Secure & Compliant Systems",
    desc: "Enterprise-grade security, access control, and data privacy built-in.",
  },
];

const infoCards = [
  {
    title: "Image & Video Analysis",
    desc: "Extract actionable insights from images and live video streams.",
  },
  {
    title: "Object Detection & Tracking",
    desc: "Identify, classify, and track objects in real time.",
  },
  {
    title: "Edge & Cloud Deployment",
    desc: "Run vision models efficiently on devices or scalable cloud systems.",
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
   FALLBACK
=============================== */

const SectionFallback = () => (
  <div style={{ minHeight: "120px" }} />
);

/* ===============================
   PAGE
=============================== */

const ComputerVision = React.memo(() => {
  return (
    <>
      {/* HERO */}
      <ServicesHero
        badge="AI-Powered Vision Systems"
        title="AI-Driven Image &"
        accent="Video Analysis"
        subtitle="From real-time image analysis to automated visual intelligence — Robotronix delivers enterprise-grade Computer Vision solutions that see, understand, and act on visual data."
        primaryText="Get Started →"
        primaryLink="/contact-us"
        secondaryText="Explore Work"
        secondaryLink="/portfolio"
        stats={[
          { value: "Real-Time", label: "Visual Processing" },
          { value: "95%+", label: "Detection Accuracy" },
          { value: "Edge + Cloud", label: "Deployment Ready" },
          { value: "AI Vision", label: "Automation Driven" },
        ]}
      />

      {/* OVERVIEW */}
      <Suspense fallback={<SectionFallback />}>
        <ServicesOverview
          title="What Is"
          accent="Computer Vision?"
          paragraphs={[
            "Computer Vision enables machines to interpret and understand visual data from the real world—images, videos, cameras, and sensors. These systems perceive environments visually and take intelligent actions based on what they see.",
            "Robotronix builds high-performance Computer Vision solutions for detection, inspection, monitoring, and automation. Our systems operate in real time, integrate seamlessly with existing workflows, and deliver scalable visual intelligence.",
            "From smart factories and healthcare imaging to retail analytics and surveillance, our vision solutions drive efficiency, safety, and data-driven decision-making.",
          ]}
          infoCards={infoCards}
        />
      </Suspense>

      {/* APPROACH */}
      <Suspense fallback={<SectionFallback />}>
        <ServicesApproach
          title="Our"
          accent="Computer Vision Approach"
          subtitle="We engineer intelligent vision systems designed for accuracy, speed, and real-world deployment."
          steps={steps}
        />
      </Suspense>

      {/* INDUSTRIES */}
      <Suspense fallback={<SectionFallback />}>
        <ServicesIndustries
          title="Computer Vision"
          accent="Industry Applications"
          subtitle="Visual intelligence transforms industries by automating inspection, monitoring, and decision-making."
          industries={industries}
        />
      </Suspense>

      {/* WHY CHOOSE */}
      <Suspense fallback={<SectionFallback />}>
        <ServicesWhyChoose
          title="Why Choose"
          accent="Robotronix for Computer Vision?"
          subtitle="We build enterprise-ready vision systems that deliver accuracy, scalability, and measurable impact."
          points={points}
        />
      </Suspense>

      {/* IMPACT */}
      <Suspense fallback={<SectionFallback />}>
        <ServicesImpact
          title="The Power of Visual Intelligence"
          subtitle="Computer Vision transforms visual data into real-time insights—automating inspection, improving safety, and enabling smarter decisions at scale."
        />
      </Suspense>

      {/* CTA */}
      <Suspense fallback={<SectionFallback />}>
        <ServicesCTA
          title="Ready to Build Computer Vision Solutions?"
          subtitle="Deploy intelligent vision systems that automate processes, enhance accuracy, and unlock powerful visual insights."
          buttonText="Talk to Our Experts →"
          buttonLink="/contact-us"
        />
      </Suspense>
    </>
  );
});

export default ComputerVision;
