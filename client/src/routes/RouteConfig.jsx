import { lazy } from "react";
import { ROUTE_PATHS } from "./RoutePaths";

export const routesConfig = [
  {
    path: ROUTE_PATHS.HOME,
    component: lazy(() => import("../pages/home/Home")),
    label: "Home",
    nav: "main",
  },

  // ===== SERVICES =====
  {
    path: ROUTE_PATHS.AI_ML,
    component: lazy(() => import("../pages/services/ai/AIML")),
    label: "AI & Machine Learning Solutions",
    nav: "services",
  },
  {
    path: ROUTE_PATHS.GENERATIVE_AI,
    component: lazy(() => import("../pages/services/ai/GenerativeAI")),
    label: "Generative AI (Gen AI) Solutions",
    nav: "services",
  },
  {
    path: ROUTE_PATHS.AGENTS_AI,
    component: lazy(() => import("../pages/services/ai/AgentsAI")),
    label: "Agents & Agentic AI",
    nav: "services",
  },
  {
    path: ROUTE_PATHS.EMBEDDED_IOT,
    component: lazy(() =>
      import("../pages/services/embedded-Iot/EmbeddedIoT")
    ),
    label: "Embedded System & IoT Solutions",
    nav: "services",
  },
  {
    path: ROUTE_PATHS.DATA_SCIENCE,
    component: lazy(() =>
      import("../pages/services/data-science/DataScience")
    ),
    label: "Data Science & Data Analytics",
    nav: "services",
  },
  {
    path: ROUTE_PATHS.MOBILE_APP_DEV,
    component: lazy(() =>
      import("../pages/services/mobile-app-development/MobileAppDev")
    ),
    label: "Mobile Application Development",
    nav: "services",
  },
  {
    path: ROUTE_PATHS.WEB_DEV,
    component: lazy(() =>
      import("../pages/services/web-development/WebDev")
    ),
    label: "Web Development & Digital Solutions",
    nav: "services",
  },
  {
    path: ROUTE_PATHS.ON_DEMAND_DEV,
    component: lazy(() =>
      import("../pages/services/on-demand-software-dev/OnDemandSoftwareDev")
    ),
    label: "On Demand Software Development",
    nav: "services",
  },

  // ===== ABOUT =====
  {
    path: ROUTE_PATHS.ABOUT_US,
    component: lazy(() =>
      import("../pages/about-us/company-overview/CompanyOverview")
    ),
    label: "Company Overview",
    nav: "about",
  },
  {
    path: ROUTE_PATHS.CULTURE,
    component: lazy(() =>
      import("../pages/about-us/culture/Culture")
    ),
    label: "Culture",
    nav: "about",
  },
  {
    path: ROUTE_PATHS.VISION_MISSION,
    component: lazy(() =>
      import("../pages/about-us/vision-mission/VisionMission")
    ),
    label: "Vision & Mission",
    nav: "about",
  },

  // ===== MAIN =====
  {
    path: ROUTE_PATHS.CAREER,
    component: lazy(() => import("../pages/career/Career")),
    label: "Career",
    nav: "main",
  },
  {
    path: ROUTE_PATHS.PORTFOLIO,
    component: lazy(() => import("../pages/portfolio/Portfolio")),
    label: "Portfolio",
    nav: "main",
  },
  {
    path: ROUTE_PATHS.CONTACT_US,
    component: lazy(() => import("../pages/contact/ContactUs")),
    label: "Contact Us",
    nav: "main",
  },

  {
    path: "*",
    component: lazy(() => import("../pages/not-found/NotFound")),
    hidden: true,
  },
];



export const adminRoutesConfig = [
  // ===== AUTH =====
  {
    path: "login",
    component: lazy(() =>
      import("../admin/pages/auth/AdminLogin")
    ),
  },

  // ===== DASHBOARD =====
  {
    path: "dashboard",
    component: lazy(() =>
      import("../admin/pages/dashboard/Dashboard")
    ),
  },

  // ===== LEADS =====
  {
    path: "leads",
    component: lazy(() =>
      import("../admin//pages/leads/LeadsList")
    ),
  },

  // ===== LEAD DETAILS (FUTURE-READY) =====
  {
    path: "leads/:id",
    component: lazy(() =>
      import("../admin//pages/leads/LeadDetails")
    ),
  },
  {
    path: "messages",
    component: lazy(() => import("../admin/pages/messages/AdminMessages")),
  },
];
