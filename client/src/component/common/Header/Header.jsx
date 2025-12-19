import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import logo from "../../../assets/img/logo_c1.png";
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();

  /* ===============================
     STATE
  =============================== */
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(null); // "services" | "about"
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [headerSolid, setHeaderSolid] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  /* ===============================
     EFFECTS
  =============================== */

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Header solid on scroll
  useEffect(() => {
    const onScroll = () => setHeaderSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll on mobile
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  /* ===============================
     HANDLERS
  =============================== */

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
  };

  const handleLogoClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  /* ===============================
     RENDER
  =============================== */

  return (
    <>
      <header
        className={`rtx-header-wrapper 
          ${headerSolid ? "rtx-solid" : "rtx-glass"} 
          ${mobileOpen ? "rtx-no-blur" : ""}
        `}
      >
        <div className="rtx-header-container">

          {/* LOGO */}
          <NavLink to="/" className="rtx-header-logo" onClick={handleLogoClick}>
            <img src={logo} alt="Robotronix Logo" />
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="rtx-header-menu">
            <ul>
              <DesktopDropdown
                label="Our Services"
                open={desktopDropdown === "services"}
                onOpen={() => setDesktopDropdown("services")}
                onClose={() => setDesktopDropdown(null)}
              >
                <NavItem title="AI & Machine Learning Solutions" to="/ai-ml" />
                <NavItem title="Generative AI (Gen AI) Solutions" to="/generative-ai" />
                <NavItem title="Agents & Agentic AI" to="/agents-ai" />
                <NavItem title="Embedded System & IoT Solutions" to="/embedded-iot" />
                <NavItem title="Data Science & Data Analytics" to="/data-science" />
                <NavItem title="Mobile Application Development" to="/mobile-application-development" />
                <NavItem title="Web Development & Digital Solutions" to="/" />
                <NavItem title="On Demand Software Development" to="/" />
              </DesktopDropdown>

              <NavButton to="/products" label="Products" />

              <DesktopDropdown
                label="About Us"
                open={desktopDropdown === "about"}
                onOpen={() => setDesktopDropdown("about")}
                onClose={() => setDesktopDropdown(null)}
                small
              >
                <NavItem title="Company Overview" to="/about" />
                <NavItem title="Leadership Team" to="/culture" />
                <NavItem title="Vision & Mission" to="/vision" />
              </DesktopDropdown>

              <NavButton to="/portfolio" label="Portfolio" />
              <NavButton to="/contact-us" label="Contact Us" />
            </ul>
          </nav>

          {/* RIGHT */}
          <div className="rtx-header-right">
            <button className="rtx-theme-toggle" onClick={toggleTheme}>
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>

            <div
              className="rtx-mobile-menu-icon"
              onClick={() => setMobileOpen((p) => !p)}
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE PANEL */}
      <aside className={`rtx-mobile-panel ${mobileOpen ? "rtx-open" : ""}`}>
        <ul className="rtx-mobile-ul">

          <MobileDropdown
            label="Our Services"
            open={mobileDropdown === "services"}
            onToggle={() =>
              setMobileDropdown(mobileDropdown === "services" ? null : "services")
            }
          >
            <NavItem mobile title="AI & Machine Learning Solutions" to="/ai-ml" onClick={() => setMobileOpen(false)} />
            <NavItem mobile title="Generative AI (Gen AI) Solutions" to="/generative-ai" onClick={() => setMobileOpen(false)} />
            <NavItem mobile title="Agents & Agentic AI" to="/agents-ai" onClick={() => setMobileOpen(false)} />
            <NavItem mobile title="Embedded System & IoT Solutions" to="/embedded-iot" onClick={() => setMobileOpen(false)} />
            <NavItem mobile title="Data Science & Data Analytics" to="/data-science" onClick={() => setMobileOpen(false)} />
            <NavItem mobile title="Mobile Application Development" to="/mobile-application-development" onClick={() => setMobileOpen(false)} />
            <NavItem mobile title="Web Development & Digital Solutions" to="/" onClick={() => setMobileOpen(false)} />
  <NavItem mobile title="On Demand Software Development" to="/" onClick={() => setMobileOpen(false)} />
          </MobileDropdown>

          <NavButton to="/products" label="Products" mobile onClick={() => setMobileOpen(false)} />

          <MobileDropdown
            label="About Us"
            open={mobileDropdown === "about"}
            onToggle={() =>
              setMobileDropdown(mobileDropdown === "about" ? null : "about")
            }
          >
            <NavItem mobile title="Company Overview" to="/about" onClick={() => setMobileOpen(false)} />
            <NavItem mobile title="Leadership Team" to="/culture" onClick={() => setMobileOpen(false)} />
            <NavItem mobile title="Vision & Mission" to="/vision" onClick={() => setMobileOpen(false)} />
          </MobileDropdown>

          <NavButton to="/portfolio" label="Portfolio" mobile onClick={() => setMobileOpen(false)} />
          <NavButton to="/contact-us" label="Contact Us" mobile onClick={() => setMobileOpen(false)} />
        </ul>
      </aside>

      {mobileOpen && <div className="rtx-mobile-backdrop" onClick={() => setMobileOpen(false)} />}
    </>
  );
};

/* ===============================
   HELPERS
=============================== */

const DesktopDropdown = ({ label, open, onOpen, onClose, small, children }) => (
  <li
    className="rtx-has-dropdown"
    onMouseEnter={onOpen}
    onMouseLeave={onClose}
  >
    <button>
      {label}
      {open ? <FaAngleUp /> : <FaAngleDown />}
    </button>

    <div className={`rtx-dropdown ${small ? "rtx-small" : ""} ${open ? "rtx-open" : ""}`}>
      {children}
    </div>
  </li>
);

const MobileDropdown = ({ label, open, onToggle, children }) => (
  <li className="rtx-mobile-dropdown">
    <div className="rtx-mobile-title" onClick={onToggle}>
      <span>{label}</span>
      {open ? <FaAngleUp /> : <FaAngleDown />}
    </div>
    <div className={`rtx-mobile-dropdown-list ${open ? "rtx-show" : ""}`}>
      {children}
    </div>
  </li>
);

const NavButton = ({ to, label, mobile, onClick }) => (
  <li>
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        mobile
          ? "rtx-mobile-link"
          : `rtx-nav-btn ${isActive ? "rtx-active" : ""}`
      }
    >
      {label}
    </NavLink>
  </li>
);


const NavItem = ({ title, to, mobile, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={mobile ? "rtx-mobile-subitem-link" : "rtx-dropdown-item-link"}
  >
    <div className={mobile ? "rtx-mobile-subitem" : "rtx-dropdown-item"}>
      {title}
    </div>
  </NavLink>
);

export default Header;
