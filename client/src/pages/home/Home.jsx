import React from "react";
import HeroSection from "../../components/home/HeroSection";
import ServicesSection from "../../components/home/ServicesSection";
import AboutSection from "../../components/home/AboutSection";
import TechStack from "../../components/home/TechStack";
import ChooseUsSection from "../../components/home/ChooseUsSection";
 import TestimonialsSection from "../../components/home/TestimonialsSection";
 import ContactSection from "../../components/home/ContactSection";
 import PartnersSection from "../../components/home/PartnersSection";
 import CTASection from "../../components/home/CTASection";

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


