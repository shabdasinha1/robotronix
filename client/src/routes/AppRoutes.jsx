import { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

const PageFallback = () => null;

const AppRoutes = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

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
              localStorage.getItem("admin_auth") === "true"
                ? <Navigate to="/admin/dashboard" replace />
                : (() => {
                    const LoginComp =
                      adminRoutesConfig.find(r => r.path === "login")?.component;
                    return LoginComp ? <LoginComp /> : null;
                  })()
            }
          />

          {/* ================= PROTECTED ADMIN ================= */}
          <Route element={<AdminProtectedRoute />}>
            <Route path="/admin/*" element={<AdminLayout />}>
              {adminRoutesConfig
                .filter(r => r.path !== "login")
                .map(({ path, component: Component }) => (
                  <Route key={path} path={path} element={<Component />} />
                ))}
            </Route>
          </Route>

          {/* ================= PUBLIC ================= */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <main>
                  <Routes>
                    {routesConfig.map(
                      ({ path, component: Component }) =>
                        Component && (
                          <Route key={path} path={path} element={<Component />} />
                        )
                    )}
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
