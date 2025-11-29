import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//Common
import ScrollToTop from "../component/common/ScrollToTop/ScrollToTop";
import Header from "../component/common/Header/Header";
import NewFooter from "../component/common/Footer/NewFooter";


//Home
import Home from "../pages/NewHomePage/Home";

//Our Services 
import GenerativeAI from "../pages/OurServicesSection/AIServices/GenAIPage/GenerativeAI";
import AIML from "../pages/OurServicesSection/AIServices/AIMlPage/AIML";
import AgentsAI from "../pages/OurServicesSection/AIServices/AgentsAlPage/AgentsAI";
import EmbeddedIoT from "../pages/OurServicesSection/EmbeddedIotServices/EmbeddedIoT";
import DataScience from "../pages/OurServicesSection/DataSciencePage/DataScience";
import MobileApplicationDev from "../pages/OurServicesSection/MobileApplicationPage/MobileApplicationDevelopment";
import WebDev from "../pages/OurServicesSection/WebDevelopmentPage/WebDev";



const Contact = lazy(() => import("../pages/Contact/NewContact"));
const AboutCompany = lazy(() => import("../component/screen/AboutCompany"));
const Culture = lazy(() => import("../component/screen/Culture"));
const Career = lazy(() => import("../component/screen/Career"));
const ClientTestimonials = lazy(() => import("../component/screen/ClientTestimonials"));
const Portfolio = lazy(() => import("../component/screen/Portfolio"));

const JobDetails = lazy(() => import("../component/screen/JobDetails"));


const ProductPage = lazy(() => import("../component/screen/ProductPage"));


const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Header />
        {/* <NewHeader/> */}
        <main>
          <ScrollToTop />

          {/* Suspense loader for lazy components */}

          <Routes>
            <Route path="/" element={<Home />} />


            {/* Our Services */}
            <Route path="/generative-ai" element={<GenerativeAI />} />
            <Route path="/ai-ml" element={<AIML />} />
            <Route path="/agents-ai" element={<AgentsAI />} />
            <Route path="/embedded-iot" element={<EmbeddedIoT />} />
            <Route path="/data-science" element={<DataScience />} />
            <Route path="/mobile-application-development" element={<MobileApplicationDev />} />
            <Route path="/web-development" element={<WebDev />} />


            {/* Products */}
            <Route path="/products" element={<ProductPage />} />

            {/* About Us */}
            <Route path="/about" element={<AboutCompany />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/clients" element={<ClientTestimonials />} />
            <Route path="/career" element={<Career />} />
            <Route path="/careers/:_id" element={<JobDetails />} />


            {/* Portfolio */}
            <Route path="/portfolio" element={<Portfolio />} />

            {/* Contact us */}
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </main>
        <NewFooter />
      </Suspense>
    </BrowserRouter>

  );
};

export default AllRoutes;
