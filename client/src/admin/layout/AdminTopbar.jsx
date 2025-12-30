import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import authApi from "../../api/auth.api";

const AdminTopbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

 
const handleLogout = () => {
  authApi.logout();
  navigate("/admin/login", { replace: true });
};

  return (
    <div className="rtx-admin-topbar-inner">

      {/* LEFT */}
      <div className="rtx-admin-topbar-left u-drop">

        {/* ✅ ONLY ONE SIDEBAR TOGGLE */}
        <button
          className="rtx-admin-sidebar-toggle"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
          type="button"
        >
          <span className="rtx-toggle-bar" />
          <span className="rtx-toggle-bar" />
          <span className="rtx-toggle-bar" />
        </button>

        <h1 className="rtx-admin-page-title">
          Admin Dashboard
        </h1>
      </div>

      {/* RIGHT */}
      <div className="rtx-admin-topbar-right">

        {/* THEME TOGGLE (you accidentally removed this earlier) */}
        <button
          className="rtx-admin-theme-toggle u-drop"
          type="button"
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        {/* PROFILE */}
        <div className="rtx-admin-profile u-drop">
          <div className="rtx-admin-avatar">
            <span>A</span>
          </div>

          <div className="rtx-admin-profile-info">
            <span className="rtx-admin-name">Admin</span>
            <span className="rtx-admin-role">Super Admin</span>
          </div>
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="rtx-admin-logout-btn u-drop"
          type="button"
        >
          Logout
        </button>

      </div>
    </div>
  );
};

export default AdminTopbar;
