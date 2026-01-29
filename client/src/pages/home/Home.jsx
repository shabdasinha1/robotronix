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
const PartnersSection = lazy(() =>
  import("../../components/home/PartnersSection")
);
const ContactSection = lazy(() =>
  import("../../components/home/ContactSection")
);
const CTASection = lazy(() =>
  import("../../components/home/CTASection")
);

/* ===============================
   LIGHTWEIGHT FALLBACK
=============================== */
const SectionFallback = () => (
  <div style={{ minHeight: "120px" }} />
);

const Home = React.memo(() => {
  return (
    <>
      {/* ABOVE THE FOLD */}
      <HeroSection />
      <ServicesSection />
      <AboutSection />

      {/* BELOW THE FOLD — PROGRESSIVE LOAD */}
      <Suspense fallback={<SectionFallback />}>
        <TechStack />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ChooseUsSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <PartnersSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ContactSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <CTASection />
      </Suspense>
    </>
  );
});

export default Home;
