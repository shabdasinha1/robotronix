import { Outlet } from "react-router-dom";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import "../styles/admin-layout.css";
import "../styles/admin-sidebar.css";
import "../styles/admin-topbar.css";
import "../styles/admin-dashboard.css";
import "../styles/admin-leads.css";
import "../styles/admin-auth.css";
import "../styles/admin-messages.css";
import "../styles/admin-testimonials.css";
import "../styles/industry-leaders.css";
import "../styles/opportunities.css";
import "../styles/portfolio.css";
import "../styles/career.css";

// Layout components (to be created next)
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import { useEffect, useState } from "react";

const AdminLayout = () => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.1,
    once: true,
  });

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarOpen((prev) => !prev);
    } else {
      setSidebarCollapsed((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      // Close mobile sidebar when switching to desktop
      if (!mobile) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sidebarOpen]);
  useEffect(() => {
  const link = document.querySelector("link[rel~='icon']");
  if (link) {
    link.href = "/compony-logo.png"; // or user-logo.png
  }
}, []);

  return (
    <div
      ref={ref}
      className={`rtx-admin-layout
    ${visible ? "u-drop-visible" : ""}
    ${!isMobile && sidebarCollapsed ? "rtx-sidebar-collapsed" : ""}
    ${isMobile ? "rtx-mobile" : ""}
    ${isMobile && sidebarOpen ? "rtx-sidebar-open" : ""}
  `}
    >
      {/* MOBILE OVERLAY */}
      {isMobile && sidebarOpen && (
        <div
          className="rtx-mobile-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* SIDEBAR */}
      <aside className="rtx-admin-sidebar u-drop-left">
        {/* <AdminSidebar /> */}
        <AdminSidebar
          isMobile={isMobile}
          closeSidebar={() => setSidebarOpen(false)}
        />
      </aside>

      {/* MAIN */}
      <div className="rtx-admin-main">
        <header className="rtx-admin-topbar u-drop">
          <AdminTopbar toggleSidebar={toggleSidebar} />
        </header>

        <section className="rtx-admin-content u-section-sm">
          <div className="u-container">
            <Outlet />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminLayout;
