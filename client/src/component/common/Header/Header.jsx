import React, { useState } from "react";
import "./Header.css";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import logo from "../../../assets/img/logo_c1.png";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);

    const toggleMobile = () => setMobileOpen(!mobileOpen);



    return (
        <>
            <header className="rtx-header-wrapper">
                <div className="rtx-header-container">

                    {/* LOGO */}
                    <div className="rtx-header-logo">
                        <img src={logo} alt="Robotronix Logo" />
                    </div>

                    {/* Desktop Menu */}
                    <nav className="rtx-header-menu">
                        <ul>
                            {/* SERVICES DROPDOWN */}
                            <li
                                className="rtx-has-dropdown"
                                onMouseEnter={() => setServiceOpen(true)}
                                onMouseLeave={() => setServiceOpen(false)}
                            >
                                <button>
                                    Our Services{" "}
                                    {serviceOpen ? (
                                        <FaAngleUp className="rtx-icon" />
                                    ) : (
                                        <FaAngleDown className="rtx-icon" />
                                    )}
                                </button>

                                <div className="rtx-dropdown">
                                    <NavItem title="AI & Machine Learning Solutions" />
                                    <NavItem title="Generative AI (Gen AI) Solutions" />
                                    <NavItem title="Agents & Agentic AI" />
                                    <NavItem title="Embedded System & IoT Solutions" />
                                    <NavItem title="Data Science & Data Analytics" />
                                    <NavItem title="Mobile Application Development" />
                                </div>
                            </li>

                            <li><button>Products</button></li>

                            {/* ABOUT DROPDOWN */}
                            <li
                                className="rtx-has-dropdown"
                                onMouseEnter={() => setAboutOpen(true)}
                                onMouseLeave={() => setAboutOpen(false)}
                            >
                                <button>
                                    About Us{" "}
                                    {aboutOpen ? (
                                        <FaAngleUp className="rtx-icon" />
                                    ) : (
                                        <FaAngleDown className="rtx-icon" />
                                    )}
                                </button>

                                <div className="rtx-dropdown">
                                    <NavItem title="Company Overview" />
                                    <NavItem title="Leadership Team" />
                                    <NavItem title="Vision & Mission" />
                                </div>
                            </li>

                            <li><button>Portfolio</button></li>
                            <li><button>Contact Us</button></li>
                        </ul>
                    </nav>


                    {/* Mobile Hamburger */}
                    <div className="rtx-mobile-menu-icon" onClick={toggleMobile}>
                        {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </div>
                </div>

                {/* Mobile Slide Menu */}
                <div className={`rtx-mobile-panel ${mobileOpen ? "rtx-open" : ""}`}>
                    <ul className="rtx-mobile-ul">

                        <li className="rtx-mobile-dropdown">
                            <div
                                className="rtx-mobile-title"
                                onClick={() => setServiceOpen(!serviceOpen)}
                            >
                                <span>Our Services</span>
                                {serviceOpen ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                            <div
                                className={`rtx-mobile-dropdown-list ${serviceOpen ? "rtx-show" : ""
                                    }`}
                            >
                                <NavItem title="AI & Machine Learning Solutions" mobile />
                                <NavItem title="Generative AI (Gen AI) Solutions" mobile />
                                <NavItem title="Agents & Agentic AI" mobile />
                                <NavItem title="Embedded System & IoT Solutions" mobile />
                                <NavItem title="Data Science & Data Analytics" mobile />
                                <NavItem title="Mobile Application Development" mobile />
                            </div>
                        </li>

                        <li><span className="rtx-mobile-link">Products</span></li>

                        <li className="rtx-mobile-dropdown">
                            <div
                                className="rtx-mobile-title"
                                onClick={() => setAboutOpen(!aboutOpen)}
                            >
                                <span>About Us</span>
                                {aboutOpen ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                            <div
                                className={`rtx-mobile-dropdown-list ${aboutOpen ? "rtx-show" : ""
                                    }`}
                            >
                                <NavItem title="Company Overview" mobile />
                                <NavItem title="Leadership Team" mobile />
                                <NavItem title="Vision & Mission" mobile />
                            </div>
                        </li>

                        <li><span className="rtx-mobile-link">Portfolio</span></li>
                        <li><span className="rtx-mobile-link">Contact Us</span></li>
                    </ul>
                </div>


            </header>
            {/* BACKDROP OVERLAY */}
            {mobileOpen && (
                <div
                    className="rtx-mobile-backdrop"
                    onClick={() => setMobileOpen(false)}
                ></div>
            )}
        </>
    );
};

const NavItem = ({ title, mobile }) => (
    <div className={mobile ? "rtx-mobile-subitem" : "rtx-dropdown-item"}>
        {title}
    </div>
);

export default Header;
