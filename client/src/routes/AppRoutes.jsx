import { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Common
import ScrollToTop from "../components/common/ScrollToTop";
import Header from "../components/common/Header";
import NewFooter from "../components/common/Footer";

// Routes config
import { routesConfig } from "./RouteConfig";

/**
 * Lightweight fallback
 * Avoids layout shift & improves perceived performance
 */
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
      <Header />

      <main>
        <ScrollToTop />

        <Suspense fallback={<PageFallback />}>
          <Routes>
            {routesConfig.map(
              ({ path, component: Component, hidden }) =>
                Component && (
                  <Route
                    key={path}
                    path={path}
                    element={<Component />}
                  />
                )
            )}
          </Routes>
        </Suspense>
      </main>

      <NewFooter />
    </BrowserRouter>
  );
};

export default AppRoutes;
