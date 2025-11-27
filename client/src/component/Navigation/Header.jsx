import React, { useState, useEffect } from "react";
import logo from "./../../assets/img/logo_c1.png";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { RiBrainFill, RiRobot2Fill } from "react-icons/ri";
import { FaRobot } from "react-icons/fa";
import { MdOutlineDeviceHub } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { HiOutlinePuzzle } from "react-icons/hi";

import { TbDeviceMobileCode } from "react-icons/tb";
import { HiInformationCircle } from "react-icons/hi";
import { FaPeoplePulling } from "react-icons/fa6";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaMedkit } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { FaBus } from "react-icons/fa6";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { BsGraphUpArrow } from "react-icons/bs";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Manages overall menu visibility
  const [submenuOpen, setSubMenuOpen] = useState(false); // Manages overall menu visibility
  const [submenuProduct, setSubMenuProduct] = useState(false); // Manages overall menu visibility
  const [submenuAbout, setSubMenuAbout] = useState(false); // About Us submenu
  const [submenuIndustries, setSubMenuIndustries] = useState(false); // Industries submenu
  const isMobile = window.innerWidth <= 768;
  const location = useLocation();
  // Close all menus whenever the route changesphom
  useEffect(() => {
    setMenuOpen(false);
    setSubMenuOpen(false);
    setSubMenuProduct(false);
    setSubMenuAbout(false);
    setSubMenuIndustries(false);
  }, [location]); // Dependency array ensures this effect runs when location changes


  // Toggles main menu visibility, closes submenus
  const toggleMenu = () => {
    setMenuOpen((prev) => {
      if (!prev) {
        // Close all submenus when main menu is opened
        setSubMenuOpen(false);
        setSubMenuProduct(false);
        setSubMenuAbout(false);
        setSubMenuIndustries(false);
      }
      return !prev;
    });
  };

  // Toggles the Our Services submenu visibility
  const toggleSubMenu = () => {
    if (isMobile) {
      setSubMenuOpen((prev) => {
        if (!prev) {
          setSubMenuProduct(false); // Close Products submenu
          setSubMenuAbout(false);
          setSubMenuIndustries(false);
        }
        return !prev;
      });
    }
  };

  // Toggles the About Us submenu visibility
  const toggleAboutMenu = () => {
    if (isMobile) {
      setSubMenuAbout((prev) => {
        if (!prev) {
          setSubMenuOpen(false); // Close Our Services submenu
          setSubMenuProduct(false); // Close Products submenu
          setSubMenuIndustries(false);
        }
        return !prev;
      });
    }
  };

  // Toggles the Industries submenu visibility
  const toggleIndustriesMenu = () => {
    if (isMobile) {
      setSubMenuIndustries((prev) => {
        if (!prev) {
          setSubMenuOpen(false); // Close Our Services submenu
          setSubMenuProduct(false); // Close Products submenu
          setSubMenuAbout(false);
        }
        return !prev;
      });
    }
  };

  // Close the menu and submenus when a menu item is clicked
  

  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="logo">
            <NavLink to="/" className="d-flex align-items-center">
              <img src={logo} alt="Robotronix"></img>
            </NavLink>
          </div>
          <button className="menu-btn" onClick={toggleMenu}>
            <FiMenu />
          </button>
          <div>
            {menuOpen && (
              <div
                className={`overlay ${menuOpen ? "active" : ""}`}
                onClick={toggleMenu}
              ></div>
            )}

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
              <li>
                <NavLink
                  to=""
                  className="desktop-item"
                  onMouseEnter={() => !isMobile && setSubMenuOpen(true)}
                  onMouseLeave={() => !isMobile && setSubMenuOpen(false)}
                >
                  Our Services{" "}
                  <span>
                    <FaAngleDown className="downArrow" />
                  </span>
                  <span className="upArrow">
                    <FaAngleUp className="uArrow" />
                  </span>
                </NavLink>
                <div className="mobile-item" onClick={toggleSubMenu}>
                  <div className="row">
                    <div className="col-6"> Our Services</div>
                    <div className="col-6 text-right">
                      {submenuOpen ? (
                        <FaAngleDown className="fright" />
                      ) : (
                        <FaAngleRight className="fright" />
                      )}
                    </div>
                  </div>
                </div>
                <div className={`mega-box ${submenuOpen ? "open" : ""}`}>
                  <div className="content">
                    <div className="row">
                      <header>
                        <span>
                          <RiBrainFill />
                        </span>{" "}
                        <NavLink to={"/ai-ml"}>
                          AI & Machine Learning Solutions
                        </NavLink>
                      </header>
                    </div>
                    <div className="row">
                      <header>
                        <span>
                          <RiRobot2Fill />
                        </span>{" "}
                        <NavLink to={"/generative-ai"}>
                          Generative AI (Gen AI) Solutions
                        </NavLink>
                      </header>
                    </div>
                    <div className="row">
                      <header>
                        <span>
                          <FaRobot />
                        </span>{" "}
                        <NavLink to={"/agents-ai"}>
                          Agents & Agentic AI
                        </NavLink>
                      </header>
                    </div>
                  </div>
                  <div className="content">
                    <div className="row">
                      <header>
                        <span>
                          <MdOutlineDeviceHub />
                        </span>{" "}
                        <NavLink to="/embedded-iot">
                          Embedded System & IoT Solutions
                        </NavLink>
                      </header>
                    </div>
                    <div className="row">
                      <header>
                        <span>
                          <TbReportAnalytics />
                        </span>{" "}
                        <NavLink to="/data-science">
                          Data Science & Data Analytics
                        </NavLink>
                      </header>
                    </div>

                    <div className="row">
                      <header>
                        <span>
                          <TbDeviceMobileCode />
                        </span>{" "}
                        <NavLink to="/mobile-application-development">
                          Mobile Application Development
                        </NavLink>
                      </header>
                    </div>
                  </div>
                  <div className="content">
                    <div className="row">
                      <header>
                        <span>
                          <FaLaptopCode />
                        </span>{" "}
                        <NavLink to="/web-development">
                          Web Development & Digital Solutions
                        </NavLink>
                      </header>
                    </div>
                    <div className="row">
                      <header>
                        <span>
                          <HiOutlinePuzzle />
                        </span>{" "}
                        <NavLink to="/digital-evolution">
                          On Demand Software Development
                        </NavLink>
                      </header>
                    </div>
                    <div className="row"></div>
                  </div>
                </div>
              </li>
              <li>
                <NavLink to="/products" className="desktop-item">
                  Products{" "}
                 
                </NavLink>
                <label className="mobile-item">
                  <div className="row">
                    <div className="col-6">Products</div>
                  </div>
                </label>
              </li>
              <li>
                <NavLink to="" className="desktop-item">
                  About Us{" "}
                  <span>
                    <FaAngleDown className="downArrow" />
                  </span>
                  <span className="upArrow">
                    <FaAngleUp className="uArrow" />
                  </span>
                </NavLink>
                {/* Mobile version of About Us */}
                <div className="mobile-item" onClick={toggleAboutMenu}>
                  <div className="row">
                    <div className="col-6">About Us</div>
                    <div className="col-6 text-right">
                      {submenuAbout ? (
                        <FaAngleDown className="fright" />
                      ) : (
                        <FaAngleRight className="fright" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Dropdown menu for About Us */}
                <ul className={`drop-menu ${submenuAbout ? "open" : ""}`}>
                  <li>
                    <NavLink to={"/about"}>
                      <span>
                        <HiInformationCircle />
                      </span>
                      About Robotronix
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/culture"}>
                      <span>
                        <FaPeoplePulling />
                      </span>
                      Culture
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/clients">
                      <span>
                        <PiUsersThreeFill />
                      </span>
                      Client Testimonials
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/career">
                      <span>
                        <BsGraphUpArrow />
                      </span>
                      Career
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/industries/healthCare" className="desktop-item">
                  Industries{" "}
                  <span>
                    <FaAngleDown className="downArrow" />
                  </span>
                  <span className="upArrow">
                    <FaAngleUp className="uArrow" />
                  </span>
                </NavLink>
                <div className="mobile-item" onClick={toggleIndustriesMenu}>
                  <div className="row">
                    <div className="col-6">Industries</div>
                    <div className="col-6 text-right">
                      {submenuIndustries ? (
                        <FaAngleDown className="fright" />
                      ) : (
                        <FaAngleRight className="fright" />
                      )}
                    </div>
                  </div>
                </div>
                <ul className={`drop-menu ${submenuIndustries ? "open" : ""}`}>
                  <li>
                    <NavLink to="/industries/healthCare">
                      <span>
                        <FaMedkit />
                      </span>
                      Healthcare
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/industries/automotive">
                      <span>
                        <FaCogs />
                      </span>
                      Automotive
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/industries/education">
                      <span>
                        <FaUserGraduate />
                      </span>
                      Education
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/industries/transportation">
                      <span>
                        <FaBus />
                      </span>
                      Transportation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/industries/banking">
                      <span>
                        <HiOutlineBanknotes />
                      </span>
                      Banking
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/portfolio" className="desktop-item">
                  Portfolio <span className="down-icon"></span>
                </NavLink>
                {/* <NavLink to="/portfolio" className="mobile-item">
                  Portfolio
                </NavLink> */}
                <div className="mobile-item">
                  <div className="row">
                    <div className="col-12">
                      <NavLink
                        to="/portfolio"
                        style={{
                          color: "var(--nav-color)",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        Portfolio
                      </NavLink>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <NavLink to="contact-us" className="desktop-item">
                  Contact Us
                </NavLink>
                <div className="mobile-item">
                  <div className="row">
                    <div className="col-12">
                      <NavLink
                        to="/contact-us"
                        style={{
                          color: "var(--nav-color)",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        Contact Us
                      </NavLink>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </div>
      </nav>
    </>
  );
};