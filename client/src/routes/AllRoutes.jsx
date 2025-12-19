import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Common
import ScrollToTop from "../components/common/ScrollToTop/ScrollToTop";
import Header from "../components/common/Header/Header";
import NewFooter from "../components/common/Footer/NewFooter";

// Home
import Home from "../pages/home/Home";

// Our Services
import GenerativeAI from "../pages/services/ai/GenerativeAI";
import AIML from "../pages/services/ai/AIML";
import AgentsAI from "../pages/services/ai/AgentsAI";
import EmbeddedIoT from "../pages/services/embedded-Iot/EmbeddedIoT";
import DataScience from "../pages/services/data-science/DataScience";
import MobileApplicationDev from "../pages/services/mobile-application/MobileApplicationDevelopment";


// Contact (lazy)
const Contact = lazy(() => import("../pages/Contact/NewContact"));

const AllRoutes = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    setTimeout(() => window.scrollTo(0, 0), 0);
  }, []);

  return (
    <BrowserRouter>
      <Suspense>
        <Header />

        <main>
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Home />} />

            {/* Our Services */}
            <Route path="/generative-ai" element={<GenerativeAI />} />
            <Route path="/ai-ml" element={<AIML />} />
            <Route path="/agents-ai" element={<AgentsAI />} />
            <Route path="/embedded-iot" element={<EmbeddedIoT />} />
            <Route path="/data-science" element={<DataScience />} />
            <Route path="/mobile-application-development" element={<MobileApplicationDev />} />
            <Route path="/" element={<Home/>}/>

            {/* Contact */}
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </main>

        <NewFooter />
      </Suspense>
    </BrowserRouter>
  );
};

export default AllRoutes;
