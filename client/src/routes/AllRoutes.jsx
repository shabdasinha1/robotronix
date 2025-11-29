import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../component/common/Header/Header";
import NewFooter from "../component/common/Footer/NewFooter";
import ScrollToTop from "../component/common/ScrollToTop/ScrollToTop";

//Home
import Home from "../pages/NewHomePage/Home";

//Our Services 
import GenerativeAI from "../pages/OurServicesSection/AIServices/GenAIPage/GenerativeAI";
import AIML from "../pages/OurServicesSection/AIServices/AIMlPage/AIML";
import AgentsAI from "../pages/OurServicesSection/AIServices/AgentsAlPage/AgentsAI";
import EmbeddedIoT from "../pages/OurServicesSection/EmbeddedIotPage/EmbeddedIoT";
import DataScience from "../pages/OurServicesSection/DataSciencePage/DataScience";
import MobileApplicationDev from "../pages/OurServicesSection/MobileApplicationPage/MobileApplicationDevelopment";
import WebDev from "../pages/OurServicesSection/WebDevelopmentPage/WebDev";



const MeanDev = lazy(() =>
  import("../component/screen/Web Development Sections/MeanDev")
);
const AndriodAppDev = lazy(() => import("../component/screen/AndriodAppDev"));
const Contact = lazy(() => import("../pages/Contact/NewContact"));
const AboutCompany = lazy(() => import("../component/screen/AboutCompany"));
const Culture = lazy(() => import("../component/screen/Culture"));
const Career = lazy(() => import("../component/screen/Career"));
const ClientTestimonials = lazy(() => import("../component/screen/ClientTestimonials"));
const Portfolio = lazy(() => import("../component/screen/Portfolio"));
const HealthCarePage = lazy(() =>
  import("../component/screen/Industries/HealthCarePage")
);
const JobDetails = lazy(() => import("../component/screen/JobDetails"));
const IotDev = lazy(() => import("../component/screen/IotDev"));
const DigitalEvolution = lazy(() => import("../component/screen/DigitalEvolution"));
const ProductPage = lazy(() => import("../component/screen/ProductPage"));
const OnlineLearning = lazy(() => import("../component/screen/OnlineLearning"));

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Header />
        <main>
          <ScrollToTop />

          {/* Suspense loader for lazy components */}

          <Routes>
            <Route path="/" element={<Home/>} />
            
            
            {/* Our Services */}
        
            <Route
              path="/mobile-app-development/:appType"
              element={<AndriodAppDev />}
            />
            <Route path="/digital-evolution" element={<DigitalEvolution />} />
            <Route
              path="/digital-evolution/:digitalType"
              element={<IotDev />}
            />
            <Route path="/Learning-Platform" element={<OnlineLearning />} />
           
            <Route path="/generative-ai" element={<GenerativeAI/>}/>
            <Route path="/ai-ml" element={<AIML/>}/>
            <Route path="/agents-ai" element={<AgentsAI/>}/>
            <Route path="/embedded-iot" element={<EmbeddedIoT/>}/>
            <Route path="/data-science" element={<DataScience/>}/>
            <Route path="/mobile-application-development" element={<MobileApplicationDev/>}/>
            <Route path="/web-development" element={<WebDev/>} />




            {/* Products */}
            <Route path="/products" element={<ProductPage />} />

            {/* About Us */}
            <Route path="/about" element={<AboutCompany />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/clients" element={<ClientTestimonials />} />
            <Route path="/career" element={<Career />} />
            <Route path="/careers/:_id" element={<JobDetails />} />


            {/* Industries */}
            <Route path="/industries/:industry" element={<HealthCarePage />} />

            {/* Portfolio */}
            <Route path="/portfolio" element={<Portfolio />} />
            
            {/* Contact us */}
             <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </main>
        <NewFooter/>
        {/* <Footer /> */}
      </Suspense>
    </BrowserRouter>
  
  );
};

export default AllRoutes;
