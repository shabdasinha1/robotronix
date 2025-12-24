import { lazy } from "react";

export const adminRoutesConfig = [
  // ===== AUTH =====
  {
    path: "login",
    component: lazy(() =>
      import("../pages/auth/AdminLogin")
    ),
  },

  // ===== DASHBOARD =====
  {
    path: "dashboard",
    component: lazy(() =>
      import("../pages/dashboard/Dashboard")
    ),
  },

  // ===== LEADS =====
  {
    path: "leads",
    component: lazy(() =>
      import("../pages/leads/LeadsList")
    ),
  },

  // ===== LEAD DETAILS (FUTURE-READY) =====
  {
    path: "leads/:id",
    component: lazy(() =>
      import("../pages/leads/LeadDetails")
    ),
  },
];
