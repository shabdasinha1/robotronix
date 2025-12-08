import React, { useState, useEffect } from "react";
import { NavLink,useLocation } from "react-router-dom";
import { FiMenu, FiX,FiSun,FiMoon } from "react-icons/fi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import logo from "../../../assets/img/logo_c1.png";
import "./Header.css";


const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [headerSolid, setHeaderSolid] = useState(false);
    const { pathname } = useLocation();
    
    // THEME STATE
const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
);
const handleLogoClick = (e) => {
    if (pathname === "/") {
        e.preventDefault(); // prevent React Router from reloading '/'
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
};
// APPLY THEME ON LOAD
useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
}, [theme]);

// HANDLE TOGGLE
const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
};


    // toggle mobile panel
    const toggleMobile = () => setMobileOpen((p) => !p);

    // scroll listener: toggle solid header after 40px
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 40) setHeaderSolid(true);
            else setHeaderSolid(false);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden"; // prevent background scroll
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }
    }, [mobileOpen]);

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
                    <div className="rtx-header-logo">
                        <NavLink to="/" onClick={handleLogoClick}>
                            <img src={logo} alt="Robotronix Logo" />
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="rtx-header-menu" aria-label="Primary Navigation">
                        <ul>
                            {/* SERVICES */}
                            <li
                                className="rtx-has-dropdown"
                                onMouseEnter={() => setServiceOpen(true)}
                                onMouseLeave={(e) => {
                                    // FIX: only close if mouse actually leaves the whole block including dropdown
                                    if (!e.currentTarget.contains(e.relatedTarget)) {
                                        setServiceOpen(false);
                                    }
                                }}
                            >
                                <button aria-haspopup="true" aria-expanded={serviceOpen}>
                                    Our Services{" "}
                                    {serviceOpen ? <FaAngleUp className="rtx-icon" /> : <FaAngleDown className="rtx-icon" />}
                                </button>

                                <div className={`rtx-dropdown ${serviceOpen ? "rtx-open" : ""}`}>
                                    <NavItem title="AI & Machine Learning Solutions" to="/ai-ml" />
                                    <NavItem title="Generative AI (Gen AI) Solutions" to="/generative-ai" />
                                    <NavItem title="Agents & Agentic AI" to="/agents-ai" />
                                    <NavItem title="Embedded System & IoT Solutions" to="/embedded-iot" />
                                    <NavItem title="Data Science & Data Analytics" to="/data-science" />
                                    <NavItem title="Mobile Application Development" to="/mobile-application-development" />
                                </div>
                            </li>

                            {/* PRODUCTS */}
                            <li>
                                <NavLink to="/products">
                                    <button>Products</button>
                                </NavLink>
                            </li>

                            {/* ABOUT */}
                            <li
                                className="rtx-has-dropdown"
                                onMouseEnter={() => setAboutOpen(true)}
                                onMouseLeave={() => setAboutOpen(false)}
                            >
                                <button aria-haspopup="true" aria-expanded={aboutOpen}>
                                    About Us{" "}
                                    {aboutOpen ? <FaAngleUp className="rtx-icon" /> : <FaAngleDown className="rtx-icon" />}
                                </button>

                                <div className={`rtx-dropdown rtx-small ${aboutOpen ? "rtx-open" : ""}`}>
                                    <NavItem title="Company Overview" to="/about" />
                                    <NavItem title="Leadership Team" to="/culture" />
                                    <NavItem title="Vision & Mission" to="/vision" />
                                </div>
                            </li>

                            {/* PORTFOLIO */}
                            <li>
                                <NavLink to="/portfolio">
                                    <button>Portfolio</button>
                                </NavLink>
                            </li>

                            {/* CONTACT */}
                            <li>
                                <NavLink to="/contact-us">
                                    <button>Contact Us</button>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="rtx-header-right">
                    {/* THEME TOGGLE BUTTON */}
<button className="rtx-theme-toggle" onClick={toggleTheme}>
    {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
</button>

                    {/* Mobile Hamburger */}
                    <div className="rtx-mobile-menu-icon" onClick={toggleMobile} aria-hidden="true">
                        {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                    </div>
                    </div>
                </div>
            </header>

            {/* Mobile Slide Panel */}
            <aside className={`rtx-mobile-panel ${mobileOpen ? "rtx-open" : ""}`} aria-hidden={!mobileOpen}>
              

                <ul className="rtx-mobile-ul">
                    <li className="rtx-mobile-dropdown">
                        <div
                            className="rtx-mobile-title"
                            onClick={() => {
                                if (!serviceOpen) {
                                    setAboutOpen(false);
                                    setTimeout(() => setServiceOpen(true), 100);
                                } else {
                                    setServiceOpen(false);
                                }
                            }}

                        >

                            <span>Our Services</span>
                            {serviceOpen ? <FaAngleUp /> : <FaAngleDown />}
                        </div>

                        <div className={`rtx-mobile-dropdown-list ${serviceOpen ? "rtx-show" : ""}`}>
                            <NavItem title="AI & Machine Learning Solutions" to="/ai-ml" mobile onClick={() => setMobileOpen(false)} />
                            <NavItem title="Generative AI (Gen AI) Solutions" to="/generative-ai" mobile onClick={() => setMobileOpen(false)} />
                            <NavItem title="Agents & Agentic AI" to="/agents-ai" mobile onClick={() => setMobileOpen(false)} />
                            <NavItem title="Embedded System & IoT Solutions" to="/embedded-iot" mobile onClick={() => setMobileOpen(false)} />
                            <NavItem title="Data Science & Data Analytics" to="/data-science" mobile onClick={() => setMobileOpen(false)} />
                            <NavItem title="Mobile Application Development" to="/mobile-application-development" mobile onClick={() => setMobileOpen(false)} />
                        </div>
                    </li>

                    <li>
                        <NavLink to="/products" onClick={() => setMobileOpen(false)}>
                            <span className="rtx-mobile-link">Products</span>
                        </NavLink>
                    </li>

                    <li className="rtx-mobile-dropdown">
                        <div
                            className="rtx-mobile-title"
                            onClick={() => {
                                if (!aboutOpen) {
                                    setServiceOpen(false);
                                    setTimeout(() => setAboutOpen(true), 100);
                                } else {
                                    setAboutOpen(false);
                                }
                            }}

                        >

                            <span>About Us</span>
                            {aboutOpen ? <FaAngleUp /> : <FaAngleDown />}
                        </div>

                        <div className={`rtx-mobile-dropdown-list ${aboutOpen ? "rtx-show" : ""}`}>
                            <NavItem title="Company Overview" to="/about" mobile onClick={() => setMobileOpen(false)} />
                            <NavItem title="Leadership Team" to="/culture" mobile onClick={() => setMobileOpen(false)} />
                            <NavItem title="Vision & Mission" to="/vision" mobile onClick={() => setMobileOpen(false)} />
                        </div>
                    </li>

                    <li>
                        <NavLink to="/portfolio" onClick={() => setMobileOpen(false)}><span className="rtx-mobile-link">Portfolio</span></NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact-us" onClick={() => setMobileOpen(false)}><span className="rtx-mobile-link">Contact Us</span></NavLink>
                    </li>
                </ul>
            </aside>

            {/* Backdrop */}
            {mobileOpen && <div className="rtx-mobile-backdrop" onClick={() => setMobileOpen(false)}></div>}
        </>
    );
};

const NavItem = ({ title, to = "/", mobile = false, onClick = () => { } }) => (
    <NavLink to={to} onClick={onClick} className={mobile ? "rtx-mobile-subitem-link" : "rtx-dropdown-item-link"}>
        <div className={mobile ? "rtx-mobile-subitem" : "rtx-dropdown-item"}>{title}</div>
    </NavLink>
);

export default Header;
