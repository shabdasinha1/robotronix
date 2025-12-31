import React, { lazy, Suspense } from "react";

/* ===============================
   ABOVE THE FOLD (EAGER)
=============================== */
import HeroSection from "../../components/home/HeroSection";
import ServicesSection from "../../components/home/ServicesSection";
import AboutSection from "../../components/home/AboutSection";

/* ===============================
   BELOW THE FOLD (LAZY)
=============================== */
const TechStack = lazy(() =>
  import("../../components/home/TechStack")
);
const ChooseUsSection = lazy(() =>
  import("../../components/home/ChooseUsSection")
);
const TestimonialsSection = lazy(() =>
  import("../../components/home/TestimonialsSection")
);
const ContactSection = lazy(() =>
  import("../../components/home/ContactSection")
);
const PartnersSection = lazy(() =>
  import("../../components/home/PartnersSection")
);
const CTASection = lazy(() =>
  import("../../components/home/CTASection")
);

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />

      {/* BELOW THE FOLD */}
      <Suspense fallback={null}>
        <TechStack />
        <ChooseUsSection />
        <TestimonialsSection />
        <ContactSection />
        <PartnersSection />
        <CTASection />
      </Suspense>
    </>
  );
};

export default Home;
