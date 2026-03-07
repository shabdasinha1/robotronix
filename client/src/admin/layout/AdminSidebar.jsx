import { NavLink } from "react-router-dom";
import RoboImg from "../../assets/images/compony-logo.png";
import { FiX } from "react-icons/fi";
import { FiFileText,FiBriefcase  } from "react-icons/fi";
const AdminSidebar = ({ isMobile, closeSidebar }) => {
  return (
    <nav className="rtx-admin-sidebar-inner">
      {/* ================= BRAND / LOGO ================= */}
      <div className="rtx-admin-brand u-drop">
        <div className="rtx-admin-brand-left">
          <img src={RoboImg} alt="Robotronix" className="rtx-admin-logo-img" />

          <h2 className="rtx-admin-logo-text">
            Robotronix <span>Admin</span>
          </h2>
        </div>

        {/* ✅ MOBILE CLOSE BUTTON */}
        {isMobile && (
          <button
            className="rtx-admin-sidebar-close rtx-admin-sidebar-toggle"
            onClick={closeSidebar}
            aria-label="Close sidebar"
            type="button"
          >
            <FiX size={20} />
          </button>
        )}
      </div>

      {/* ================= NAV SECTIONS ================= */}
      <ul className="rtx-admin-nav">
        {/* DASHBOARD */}
        <li className="u-drop" style={{ "--delay": "0.1s" }}>
          <NavLink to="/admin/dashboard">
            <span className="rtx-admin-nav-icon">📊</span>
            <span className="rtx-admin-nav-text">Dashboard</span>
          </NavLink>
        </li>

        {/* LEADS */}
        <li className="u-drop" style={{ "--delay": "0.2s" }}>
          <NavLink to="/admin/leads">
            <span className="rtx-admin-nav-icon">📩</span>
            <span className="rtx-admin-nav-text">Leads</span>
          </NavLink>
        </li>

        {/* MESSAGES (NEW) */}
        <li className="u-drop" style={{ "--delay": "0.25s" }}>
          <NavLink to="/admin/messages">
            <span className="rtx-admin-nav-icon">💬</span>
            <span className="rtx-admin-nav-text">Messages</span>
          </NavLink>
        </li>

        {/* CONTENT MANAGEMENT */}
        <li
          className="rtx-admin-nav-section u-drop"
          style={{ "--delay": "0.3s" }}
        >
          <span className="rtx-admin-nav-section-title">Content</span>
        </li>

        <li className="u-drop" style={{ "--delay": "0.35s" }}>
          <NavLink to="/admin/content/services">
            <span className="rtx-admin-nav-icon">🧠</span>
            <span className="rtx-admin-nav-text">Services</span>
          </NavLink>
        </li>

        <li className="u-drop" style={{ "--delay": "0.4s" }}>
          <NavLink to="/admin/content/testimonials">
            <span className="rtx-admin-nav-icon">💬</span>
            <span className="rtx-admin-nav-text">Testimonials</span>
          </NavLink>
        </li>

        <li className="u-drop" style={{ "--delay": "0.45s" }}>
          <NavLink to="/admin/content/partners">
            <span className="rtx-admin-nav-icon">🤝</span>
            <span className="rtx-admin-nav-text">Partners</span>
          </NavLink>
        </li>
        <li className="u-drop" style={{ "--delay": "0.45s" }}>
          <NavLink to="/admin/content/applications">
            <span className="rtx-admin-nav-icon">
              <FiFileText size={16} />
            </span>
            <span className="rtx-admin-nav-text">Application</span>
          </NavLink>
        </li>
        <li className="u-drop" style={{ "--delay": "0.45s" }}>
          <NavLink to="/admin/content/opportunities">
            <span className="rtx-admin-nav-icon">
              <FiBriefcase size={16} />
            </span>
            <span className="rtx-admin-nav-text">Opportunities</span>
          </NavLink>
        </li>

        {/* SETTINGS */}
        <li
          className="rtx-admin-nav-section u-drop"
          style={{ "--delay": "0.5s" }}
        >
          <span className="rtx-admin-nav-section-title">Settings</span>
        </li>

        <li className="u-drop" style={{ "--delay": "0.55s" }}>
          <NavLink to="/admin/settings">
            <span className="rtx-admin-nav-icon">⚙️</span>
            <span className="rtx-admin-nav-text">Site Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminSidebar;
