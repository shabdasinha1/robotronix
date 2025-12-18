import React from "react";
import HeroSection from "./Home Components/HeroSection";
import ServicesSection from "./Home Components/ServicesSection";
import AboutSection from "./Home Components/AboutSection";
import TechStack from "./Home Components/TechStack";
import ChooseUsSection from "./Home Components/ChooseUsSection";
import TestimonialsSection from "./Home Components/TestimonialsSection";
import ContactSection from "./Home Components/ContactSection";
import PartnersSection from "./Home Components/PartnersSection";
import CTASection from "./Home Components/CTASection";

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


