import React, { useMemo, useCallback } from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { NavLink, useLocation } from "react-router-dom";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/images/logo_c1.webp";
import { FaXTwitter } from "react-icons/fa6";

/*==================================================================
    SMOOTH SCROLLING TO TOP (OPTIMIZED)
==================================================================*/
const ScrollNavLink = React.memo(({ to, children, ...props }) => {
  const { pathname } = useLocation();

  const handleClick = useCallback(() => {
    if (pathname === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, to]);

  return (
    <NavLink to={to} onClick={handleClick} {...props}>
      {children}
    </NavLink>
  );
});

/*==================================================================
    MAIN FOOTER FUNCTION
==================================================================*/
const Footer = React.memo(() => {
  // Memoized options to prevent observer recreation
  const revealOptions = useMemo(
    () => ({
      threshold: 0.2,
    }),
    []
  );

  const { ref, visible } = useRevealOnScroll(revealOptions);

  return (
    <footer className="rtx-footer-wrapper" ref={ref}>
      <div
        className={`u-container u-drop ${
          visible ? "u-drop-visible" : ""
        }`}
      >
        {/* -------- GRID -------- */}
        <div className="rtx-footer-grid">
          {/* SERVICES */}
          <div className="rtx-footer-col">
            <h4>Services</h4>
            <ul>
              <li><ScrollNavLink to="/ai-ml">AI and ML</ScrollNavLink></li>
              <li><ScrollNavLink to="/generative-ai">Generative AI</ScrollNavLink></li>
              <li><ScrollNavLink to="/agents-ai">Agents AI</ScrollNavLink></li>
              <li><ScrollNavLink to="/embedded-iot">IoT Development</ScrollNavLink></li>
              <li><ScrollNavLink to="/data-science">Data Science</ScrollNavLink></li>
              <li><ScrollNavLink to="/mobile-application-development">Mobile App Development</ScrollNavLink></li>
              <li><ScrollNavLink to="/web-development">Web Development</ScrollNavLink></li>
              <li><ScrollNavLink to="/on-demand-software-development">On Demand Software</ScrollNavLink></li>
            </ul>
          </div>

          {/* ABOUT */}
          <div className="rtx-footer-col">
            <h4>About Us</h4>
            <ul>
              <li><ScrollNavLink to="/about-us">About Robotronix</ScrollNavLink></li>
                <li><ScrollNavLink to="/vision-mission">Vision & Mission</ScrollNavLink></li>
              <li><ScrollNavLink to="/culture">Culture</ScrollNavLink></li>
              <li><ScrollNavLink to="/portfolio">Portfolio</ScrollNavLink></li>
              <li><ScrollNavLink to="/career">Career</ScrollNavLink></li>
            </ul>

            <h4 className="rtx-footer-subtitle">Quick Connect</h4>
            <ul>
              <li><ScrollNavLink to="/contact-us">Contact Us</ScrollNavLink></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="rtx-footer-contact">
            <img src={logo} alt="" loading="lazy" className="rtx-footer-robo-logo"/>

            <p>📞 +91 99931 50998</p>
            <p>📞 +91 77248 52726</p>
            <p>☎️ 0731-2970998</p>

            <p className="rtx-footer-mail">info@robotronix.co.in</p>

            <p className="rtx-footer-address">
              402, Atulya IT PARK, MPIDC, Khandwa Rd,<br />
              Opposite Indian Coffee House,<br />
              Indore, Madhya Pradesh - 452001
            </p>

            <div className="rtx-footer-social">
              <a
                href="https://www.google.com/maps/search/?api=1&query=ROBOTRONIX+ENGINEERING+TECH+PVT.+LTD."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Location on Google Maps"
              >
                <FaMapMarkerAlt />
              </a>

              <a
                href="https://www.linkedin.com/company/robotronixindia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://instagram.com/robotronixindia?igshid=MGNiNDI5ZTU="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/robotronixindiaa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://whatsapp.com/channel/0029Va5MOXS7YScuXQ5pqb3G"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.youtube.com/@robotronixindiaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>

              <a
                href="https://x.com/ROBOTRONiX2010?s=08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <FaXTwitter />
              </a>
            </div>

            <div className="rtx-footer-ratings">
              <a
                href="https://clutch.co/profile/robotronix-engineering-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="rtx-rating-link"
                aria-label="View Clutch Reviews"
              >
                ⭐⭐⭐⭐⭐ <span>5.0 — Clutch Reviews</span>
              </a>

              <a
                href="https://www.upwork.com/freelancers/bhupendrasinghthakur"
                target="_blank"
                rel="noopener noreferrer"
                className="rtx-rating-link"
                aria-label="View Upwork Profile"
              >
                ⭐⭐⭐⭐⭐ <span>Top Rated on Upwork</span>
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="rtx-footer-bottom">
          © 2026 ROBOTRONIX ENGINEERING TECH PVT. LTD. — All Rights Reserved
        </div>
      </div>
    </footer>
  );
});

export default Footer;
