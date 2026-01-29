import { Suspense, useEffect, useMemo } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import ThemeInitializer from "../theme/ThemeInitializer";

// Common
import ScrollToTop from "../components/common/ScrollToTop";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

// Routes
import { routesConfig, adminRoutesConfig } from "./RouteConfig";

// Admin
import AdminLayout from "../admin/layout/AdminLayout";
import AdminProtectedRoute from "../admin/pages/auth/AdminProtectedRoute";

/* ===============================
   FALLBACK (LIGHTWEIGHT)
================================ */
const PageFallback = () => (
  <div style={{ minHeight: "100vh" }} />
);

/* ===============================
   PUBLIC WEBSITE LAYOUT
================================ */
const PublicLayout = () => (
  <>
    <Header />
    <main>
      <Suspense fallback={<PageFallback />}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />
  </>
);

const AppRoutes = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  /* ===============================
     RESOLVE ADMIN PUBLIC COMPONENTS
  =============================== */
  const LoginComp = useMemo(
    () => adminRoutesConfig.find((r) => r.path === "login")?.component,
    []
  );

  const ForgotPasswordComp = useMemo(
    () =>
      adminRoutesConfig.find((r) => r.path === "forgot-password")?.component,
    []
  );

  const ResetPasswordComp = useMemo(
    () =>
      adminRoutesConfig.find((r) => r.path === "reset-password")?.component,
    []
  );

  return (
    <BrowserRouter>
      <ThemeInitializer />
      <ScrollToTop />

      <Suspense fallback={<PageFallback />}>
        <Routes>

          {/* ================= ADMIN LOGIN ================= */}
          <Route
            path="/admin/login"
            element={
              sessionStorage.getItem("admin_auth") === "true" ? (
                <Navigate to="/admin/dashboard" replace />
              ) : LoginComp ? (
                <LoginComp />
              ) : null
            }
          />

          {/* ================= ADMIN PUBLIC ================= */}
          <Route
            path="/admin/forgot-password"
            element={ForgotPasswordComp ? <ForgotPasswordComp /> : null}
          />

          <Route
            path="/admin/reset-password"
            element={ResetPasswordComp ? <ResetPasswordComp /> : null}
          />

          {/* ================= PROTECTED ADMIN ================= */}
          <Route element={<AdminProtectedRoute />}>
            <Route path="/admin/*" element={<AdminLayout />}>
              {adminRoutesConfig
                .filter(
                  (r) =>
                    !["login", "forgot-password", "reset-password"].includes(
                      r.path
                    )
                )
                .map(({ path, component: Component }) => (
                  <Route key={path} path={path} element={<Component />} />
                ))}
            </Route>
          </Route>

          {/* ================= PUBLIC WEBSITE ================= */}
          <Route element={<PublicLayout />}>
            {routesConfig.map(
              ({ path, component: Component }) =>
                Component && (
                  <Route key={path} path={path} element={<Component />} />
                )
            )}
          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
