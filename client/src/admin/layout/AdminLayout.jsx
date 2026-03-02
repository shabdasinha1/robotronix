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


// Layout components (to be created next)
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import { useState } from "react";


const AdminLayout = () => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.1,
    once: true,
  });

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(prev => !prev);
  };

  return (
    <div
      ref={ref}
      className={`rtx-admin-layout 
        ${visible ? "u-drop-visible" : ""} 
        ${sidebarCollapsed ? "rtx-sidebar-collapsed" : ""}
      `}
    >
      {/* SIDEBAR */}
      <aside className="rtx-admin-sidebar u-drop-left">
        <AdminSidebar />
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