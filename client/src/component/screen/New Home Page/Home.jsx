import React from "react";
import HeroSection from "./Home Components/Hero Section/HeroSection";
import ServicesSection from "./Home Components/Services Section/ServicesSection";
import AboutSection from "./Home Components/About Section/AboutSection";
import TechStack from "./Home Components/Tech Stack/TechStack";
import ChooseUsSection from "./Home Components/Why Choose Us/ChooseUsSection";
import TestimonialsSection from "./Home Components/Testimonials Section/TestimonialsSection";
import ContactSection from "./Home Components/Contact Section/ContactSection";
import PartnersSection from "./Home Components/Partners Section/PartnersSection";
import CTASection from "./Home Components/CTA Section/CTASection";

const Home = () => {
  return (
    <>
     <HeroSection/>
     <ServicesSection/>
     <AboutSection/>
     <TechStack/>
     <ChooseUsSection/>
     <TestimonialsSection/>
     <ContactSection/>
     <PartnersSection/>
     <CTASection/>

    </>
  );
};

export default Home;


