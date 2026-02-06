import React, { lazy, Suspense } from "react";
import ServicesHero from "../../../components/services/ServicesHero";

/* ===============================
   STATIC DATA (STABLE)
=============================== */

const steps = [
  {
    title: "Data Collection & Cleaning",
    desc: "Aggregating and refining raw data from multiple sources to ensure accuracy, consistency, and reliability for analytics and modeling.",
  },
  {
    title: "Exploratory Data Analysis (EDA)",
    desc: "Identifying patterns, anomalies, correlations, and KPIs to gain deep understanding of the data and business drivers.",
  },
  {
    title: "Predictive Modeling & Machine Learning",
    desc: "Building intelligent models that forecast trends, automate decisions, and enhance operational efficiency.",
  },
  {
    title: "Deployment & Continuous Optimization",
    desc: "Deploying models into live systems with real-time analytics and continuous performance improvement.",
  },
];

const industries = [
  {
    icon: "🏥",
    title: "Healthcare",
    desc: "Predictive diagnostics, patient data analytics, and operational optimization for better healthcare outcomes.",
  },
  {
    icon: "🏦",
    title: "Finance",
    desc: "Risk modeling, fraud detection, credit scoring, and investment forecasting using advanced analytics.",
  },
  {
    icon: "🛒",
    title: <>Retail & <br /> E-commerce</>,
    desc: "Customer behavior analysis, demand forecasting, and personalized product recommendations.",
  },
  {
    icon: "🏭",
    title: "Manufacturing",
    desc: "Predictive maintenance, quality control analytics, and process optimization using data-driven insights.",
  },
  {
    icon: "🎓",
    title: "Education",
    desc: "Student performance analytics, learning behavior insights, and academic outcome optimization.",
  },
  {
    icon: "📢",
    title: "Marketing",
    desc: "Campaign performance analysis, customer segmentation, and ROI-driven marketing optimization.",
  },
  {
    icon: "🏙️",
    title: "Smart Cities & IoT",
    desc: "Urban analytics, smart device data processing, and intelligent infrastructure planning.",
  },
  {
    icon: "🚚",
    title: <>Logistics & <br /> Supply Chain</>,
    desc: "Demand forecasting, route optimization, and inventory analytics for smarter, cost-efficient supply chains.",
  },
];


const points = [
  {
    title: "Expert Data Scientists",
    desc: "Highly skilled professionals with expertise in Machine Learning, AI, and advanced analytics.",
  },
  {
    title: "End-to-End Data Solutions",
    desc: "From data collection and analysis to deployment and monitoring — all under one roof.",
  },
  {
    title: "Cross-Industry Expertise",
    desc: "Proven experience across healthcare, finance, retail, manufacturing, and more.",
  },
  {
    title: "Business-Driven Insights",
    desc: "We focus on delivering measurable business value, not just building models.",
  },
  {
    title: "Scalable & Secure Architectures",
    desc: "Cloud-ready, enterprise-grade analytics systems designed for performance and security.",
  },
  {
    title: "Continuous Optimization & Support",
    desc: "Ongoing model tuning, performance tracking, and support for evolving business needs.",
  },
];

const infoCards = [
  {
    title: "Predictive Intelligence",
    desc: "Forecast trends and outcomes using advanced statistical and machine learning models.",
  },
  {
    title: "Actionable Insights",
    desc: "Convert raw data into insights that drive strategic and operational decisions.",
  },
  {
    title: "Scalable Analytics",
    desc: "Cloud-based, scalable solutions designed for growing data volumes and complexity.",
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

const DataScience = () => {
  return (
    <>
      {/* HERO (EAGER) */}
      <ServicesHero
        badge="Data-Driven Intelligence"
        title="Transform Data into"
        accent="Business Insights"
        subtitle="Robotronix empowers organizations to unlock the full potential of their data through advanced Data Science solutions that drive smarter decisions, efficiency, and measurable business impact."
        primaryText="Get Started →"
        primaryLink="/contact-us"
        secondaryText="Explore Work"
        secondaryLink="/portfolio"
        stats={[
          { value: "Predictive", label: "Analytics Models" },
          { value: "Real-Time", label: "Data Insights" },
          { value: "ML Powered", label: "Decision Systems" },
          { value: "Enterprise", label: "Grade Solutions" },
        ]}
      />

      {/* BELOW THE FOLD */}
      <Suspense fallback={<></>}>
        <ServicesOverview
          title="What is"
          accent="Data Science?"
          paragraphs={[
            "Data Science is the discipline of extracting meaningful insights and patterns from data using mathematics, statistics, and advanced programming techniques. It combines data analysis, machine learning, and domain expertise to turn raw data into actionable intelligence. By uncovering trends, predicting outcomes, and optimizing decisions, data science helps businesses make smarter, data-driven choices. These insights enable organizations to improve performance, reduce risk, and drive sustainable growth.",
            "By leveraging technologies such as Python, R, SQL, machine learning, and big data frameworks, Data Science enables organizations to predict trends, optimize performance, and innovate with confidence.",
            "At Robotronix, this approach is extended into scalable implementations rather than standalone analysis.",
          ]}
          infoCards={infoCards}
        />

        <ServicesApproach
          title="Our"
          accent="Data Science Approach"
          subtitle="A structured, research-driven, and business-focused methodology that turns data into real-world value."
          steps={steps}
        />

        <ServicesIndustries
          title="Industry"
          accent="Applications"
          subtitle="Our Data Science solutions adapt seamlessly across industries to solve complex business challenges."
          industries={industries}
        />

        <ServicesWhyChoose
          title="Why Choose"
          accent="Robotronix for Data Science?"
          subtitle="We combine deep technical expertise with business understanding to deliver impactful, scalable, and future-ready data solutions."
          points={points}
        />

        <ServicesImpact
          title="Empowering Businesses with Data-Driven Intelligence"
          subtitle="We don’t just analyze data — we transform it into a strategic asset that powers innovation, precision, and sustainable growth."
        />

        <ServicesCTA
          title="Ready to Unlock the Power of Your Data?"
          subtitle="Turn complex data into actionable insights with Robotronix’s advanced Data Science solutions."
          buttonText="Talk to Our Data Experts →"
          buttonLink="/contact-us"
        />
      </Suspense>
    </>
  );
};

export default React.memo(DataScience);
