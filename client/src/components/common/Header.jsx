import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import logo from "../../assets/images/logo_c1.png";
import { routesConfig } from "../../routes/RouteConfig";

const Header = () => {
  const { pathname } = useLocation();

  /* ===============================
     ROUTE GROUPING (SAFE)
  =============================== */

  const services = routesConfig.filter((r) => r.nav === "services");

  const aboutRoutes = routesConfig.filter(
    (r) => r.nav === "about" && !r.hidden
  );

  const mainNav = routesConfig.filter(
    (r) =>
      r.nav === "main" &&
      r.path !== "/" &&
      r.path !== "/portfolio" &&
      !r.hidden
  );

  const isServicesActive = services.some(
    (r) => pathname === r.path || pathname.startsWith(r.path + "/")
  );

  const isAboutActive = aboutRoutes.some(
    (r) => pathname === r.path || pathname.startsWith(r.path + "/")
  );

  /* ===============================
     STATE
  =============================== */

  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [headerSolid, setHeaderSolid] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  /* ===============================
     EFFECTS
  =============================== */


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setHeaderSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
  };

  return (
    <>
      <header
        className={`rtx-header-wrapper 
          ${headerSolid ? "rtx-solid" : "rtx-glass"} 
          ${mobileOpen ? "rtx-no-blur" : ""}
        `}
      >
        <div className="rtx-header-container">
          <NavLink to="/" className="rtx-header-logo">
            <img src={logo} alt="Robotronix Logo" />
          </NavLink>

          {/* DESKTOP */}
          <nav className="rtx-header-menu">
            <ul>
              <DesktopDropdown
                label="Our Services"
                open={desktopDropdown === "services"}
                onOpen={() => setDesktopDropdown("services")}
                onClose={() => setDesktopDropdown(null)}
                active={isServicesActive}
              >
                {services.map(({ path, label }) => (
                  <NavItem key={path} to={path} title={label} />
                ))}
              </DesktopDropdown>

              <DesktopDropdown
                label="About Us"
                open={desktopDropdown === "about"}
                onOpen={() => setDesktopDropdown("about")}
                onClose={() => setDesktopDropdown(null)}
                active={isAboutActive}
              >
                {aboutRoutes.map(({ path, label }) => (
                  <NavItem key={path} to={path} title={label} />
                ))}
              </DesktopDropdown>

              {mainNav.map(({ path, label }) => (
                <NavButton key={path} to={path} label={label} />
              ))}

              <NavButton to="/portfolio" label="Portfolio" />
            </ul>
          </nav>

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

      {/* MOBILE */}
      <aside className={`rtx-mobile-panel ${mobileOpen ? "rtx-open" : ""}`}>
        <ul className="rtx-mobile-ul">
          <MobileDropdown
            label="Our Services"
            open={mobileDropdown === "services"}
            onToggle={() =>
              setMobileDropdown(
                mobileDropdown === "services" ? null : "services"
              )
            }
          >
            {services.map(({ path, label }) => (
              <NavItem
                key={path}
                mobile
                to={path}
                title={label}
                onClick={() => setMobileOpen(false)}
              />
            ))}
          </MobileDropdown>

          <MobileDropdown
            label="About Us"
            open={mobileDropdown === "about"}
            onToggle={() =>
              setMobileDropdown(
                mobileDropdown === "about" ? null : "about"
              )
            }
          >
            {aboutRoutes.map(({ path, label }) => (
              <NavItem
                key={path}
                mobile
                to={path}
                title={label}
                onClick={() => setMobileOpen(false)}
              />
            ))}
          </MobileDropdown>

          {mainNav.map(({ path, label }) => (
            <NavButton
              key={path}
              mobile
              to={path}
              label={label}
              onClick={() => setMobileOpen(false)}
            />
          ))}

          <NavButton
            mobile
            to="/portfolio"
            label="Portfolio"
            onClick={() => setMobileOpen(false)}
          />
        </ul>
      </aside>

      {mobileOpen && (
        <div
          className="rtx-mobile-backdrop"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

/* ===============================
   HELPERS
=============================== */

const DesktopDropdown = ({ label, open, onOpen, onClose, active, children }) => (
  <li
    className={`rtx-has-dropdown ${active ? "rtx-active" : ""}`}
    onMouseEnter={onOpen}
    onMouseLeave={onClose}
  >
    <button>
      {label}
      {open ? <FaAngleUp /> : <FaAngleDown />}
    </button>
    <div className={`rtx-dropdown ${open ? "rtx-open" : ""}`}>
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
    className={({ isActive }) =>
      mobile
        ? `rtx-mobile-subitem-link ${isActive ? "rtx-active" : ""}`
        : `rtx-dropdown-item-link ${isActive ? "rtx-active" : ""}`
    }
  >
    <div className={mobile ? "rtx-mobile-subitem" : "rtx-dropdown-item"}>
      {title}
    </div>
  </NavLink>
);

export default Header;
