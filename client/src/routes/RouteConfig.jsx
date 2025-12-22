import { lazy } from "react";

export const routesConfig = [
  // ===== HOME =====
  {
    path: "/",
    component: lazy(() => import("../pages/home/Home")),
    label: "Home",
    nav: "main",
  },

  // ===== SERVICES =====
  {
    path: "/ai-ml",
    component: lazy(() => import("../pages/services/ai/AIML")),
    label: "AI & Machine Learning Solutions",
    nav: "services",
  },
  {
    path: "/generative-ai",
    component: lazy(() => import("../pages/services/ai/GenerativeAI")),
    label: "Generative AI (Gen AI) Solutions",
    nav: "services",
  },
  {
    path: "/agents-ai",
    component: lazy(() => import("../pages/services/ai/AgentsAI")),
    label: "Agents & Agentic AI",
    nav: "services",
  },
  {
    path: "/embedded-iot",
    component: lazy(() =>
      import("../pages/services/embedded-Iot/EmbeddedIoT")
    ),
    label: "Embedded System & IoT Solutions",
    nav: "services",
  },
  {
    path: "/data-science",
    component: lazy(() =>
      import("../pages/services/data-science/DataScience")
    ),
    label: "Data Science & Data Analytics",
    nav: "services",
  },
  {
    path: "/mobile-application-development",
    component: lazy(() =>
      import("../pages/services/mobile-app-development/MobileAppDev")
    ),
    label: "Mobile Application Development",
    nav: "services",
  },
  {
    path: "/web-development",
    component: lazy(() =>
      import("../pages/services/web-development/WebDev")
    ),
    label: "Web Development & Digital Solutions",
    nav: "services",
  },
  {
    path: "/on-demand-software-development",
    component: lazy(() =>
      import("../pages/services/on-demand-software-dev/OnDemandSoftwareDev")
    ),
    label: "On Demand Software Development",
    nav: "services",
  },
  // ===== ABOUT US ===== 
  {
    path: "/about-us",
    component: lazy(() =>
      import("../pages/about-us/company-overview/CompanyOverview")
    ),
    label: "Company Overview",
    nav: "about",
  },
  {
    path: "/culture",
    component: lazy(() =>
      import("../pages/about-us/culture/Culture")
    ),
    label: "Culture",
    nav: "about",
  },
  {
    path: "/vision-mission",
    component: lazy(() =>
      import("../pages/about-us/vision-mission/VisionMission")
    ),
    label: "Vision & Mission",
    nav: "about",
  },

  // ===== MAIN NAV =====
  {
    path: "/products",
    label: "Products",
    nav: "main",
  },
  {
    path: "/portfolio",
    component: lazy(() => import("../pages/portfolio/Portfolio")),
    label: "Portfolio",
    nav: "main",
  },
  {
    path: "/contact-us",
    component: lazy(() => import("../pages/contact/ContactUs")),
    label: "Contact Us",
    nav: "main",
  },

  // ===== 404 =====
  {
    path: "*",
    component: lazy(() => import("../pages/not-found/NotFound")),
    hidden: true,
  },
];
