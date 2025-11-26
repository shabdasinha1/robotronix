// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Header } from "../Navigation/Header";
// import Footer from "../Navigation/Footer";
// import ScrollToTop from "../Navigation/ScrollToTop";
// import { Home } from "../screen/Home";
// import MeanDev from "../screen/Web Development Sections/MeanDev";
// import AndriodAppDev from "../screen/AndriodAppDev";
// import Contact from "../screen/NewContact";
// import WebDevelopment from "../screen/Web Development Sections/WebDevelopment";
// import MobileAppDevelopment from "../screen/MobileAppDevelopment";
// import AboutCompany from "../screen/AboutCompany";
// import Culture from "../screen/Culture";
// import Career from "../screen/Career";
// import ClientTestimonials from "../screen/ClientTestimonials";
// import Portfolio from "../screen/Portfolio";
// import HealthCarePage from "../screen/Industries/HealthCarePage";
// import JobDetails from "../screen/JobDetails";
// import IotDev from "../screen/IotDev";
// import DigitalEvolution from "../screen/DigitalEvolution";
// import ProductPage from "../screen/ProductPage";
// import OnlineLearning from "../screen/OnlineLearning";

// const AllRoutes = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Header />
//         <main>
//           <ScrollToTop />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<ProductPage />} />
//             <Route path="/about" element={<AboutCompany />} />
//             <Route path="/career" element={<Career />} />
//             <Route path="/careers/:_id" element={<JobDetails />} />
//             <Route path="/leadership" element={<LeaderShip />} />
//             <Route path="/clients" element={<ClientTestimonials />} />
//             <Route path="/culture" element={<Culture />} />
//             <Route path="/portfolio" element={<Portfolio />} />
//             <Route path="/industries/:industry" element={<HealthCarePage />} />

//             <Route path="/web-development" element={<WebDevelopment />} />
//             <Route path="/web-development/:type" element={<MeanDev />} />

//             <Route
//               path="/mobile-app-development"
//               element={<MobileAppDevelopment />}
//             />
//             <Route
//               path="/mobile-app-development/:appType"
//               element={<AndriodAppDev />}
//             />
//             <Route path="/digital-evolution" element={<DigitalEvolution />} />

//             <Route
//               path="/digital-evolution/:digitalType"
//               element={<IotDev />}
//             />

//             <Route path="/contact-us" element={<Contact />}></Route>
//             <Route path="/blogs" element={<Blog />} />
//             <Route path="/Learning-Platform" element={<OnlineLearning />} />
//           </Routes>
//         </main>
//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// };

// export default AllRoutes;

import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../Navigation/Header";
import Footer from "../Navigation/Footer";
import ScrollToTop from "../Navigation/ScrollToTop";
import GenerativeAI from "../screen/Gen AI Page/GenerativeAI";
import AIML from "../screen/AI ML Page/AIML";
import AgentsAI from "../screen/AgentsAl Page/AgentsAI";
import EmbeddedIoT from "../screen/Embedded Iot Page/EmbeddedIoT";
import DataScience from "../screen/Data Science Page/DataScience";
import MobileApplicationDev from "../screen/Mobile Application Page/MobileApplicationDevelopment";
import WebDev from "../screen/Web Development Page/WebDev";

// Lazy Loaded Pages
const Home = lazy(() => import("../screen/Home"));
const MeanDev = lazy(() =>
  import("../screen/Web Development Sections/MeanDev")
);
const AndriodAppDev = lazy(() => import("../screen/AndriodAppDev"));
const Contact = lazy(() => import("../screen/NewContact"));
const WebDevelopment = lazy(() =>
  import("../screen/Web Development Sections/WebDevelopment")
);
const MobileAppDevelopment = lazy(() =>
  import("../screen/MobileAppDevelopment")
);
const AboutCompany = lazy(() => import("../screen/AboutCompany"));
const Culture = lazy(() => import("../screen/Culture"));
const Career = lazy(() => import("../screen/Career"));
const ClientTestimonials = lazy(() => import("../screen/ClientTestimonials"));
const Portfolio = lazy(() => import("../screen/Portfolio"));
const HealthCarePage = lazy(() =>
  import("../screen/Industries/HealthCarePage")
);
const JobDetails = lazy(() => import("../screen/JobDetails"));
const IotDev = lazy(() => import("../screen/IotDev"));
const DigitalEvolution = lazy(() => import("../screen/DigitalEvolution"));
const ProductPage = lazy(() => import("../screen/ProductPage"));
const OnlineLearning = lazy(() => import("../screen/OnlineLearning"));

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Header />
        <main>
          <ScrollToTop />

          {/* Suspense loader for lazy components */}

          <Routes>
            <Route path="/" element={<Home />} />
            
            
            {/* Our Services */}
            <Route path="/web-development/:type" element={<MeanDev />} />

            
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
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default AllRoutes;
