import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { NavLink } from "react-router-dom";


import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const NewFooter = () => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.2,
  });

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
  <li><NavLink to="/ai-ml">AI and ML</NavLink></li>
  <li><NavLink to="/generative-ai">Generative AI</NavLink></li>
  <li><NavLink to="/agents-ai">Agents AI</NavLink></li>
  <li><NavLink to="/embedded-iot">IoT Development</NavLink></li>
  <li><NavLink to="/data-science">Data Science</NavLink></li>
  <li><NavLink to="/mobile-application-development">Mobile App Development</NavLink></li>
  <li><NavLink to="/web-development">Web Development</NavLink></li>
  <li><NavLink to="/on-demand-software-development">On Demand Software</NavLink></li>
</ul>

  </div>

  {/* ABOUT */}
  <div className="rtx-footer-col">
    <h4>About Us</h4>
    <ul>
  <li><NavLink to="/about-us">About Robotronix</NavLink></li>
  <li><NavLink to="/culture">Culture</NavLink></li>
  <li><NavLink to="/leadership">Leadership</NavLink></li>
  <li><NavLink to="/career">Career</NavLink></li>
</ul>


    <h4 className="rtx-footer-subtitle">Quick Connect</h4>
    <ul>
  <li><NavLink to="/contact-us">Contact Us</NavLink></li>
  <li><NavLink to="/blogs">Blogs</NavLink></li>
</ul>

  </div>

  {/* CONTACT */}
  <div className="rtx-footer-contact">
    <h4>India</h4>

    <p>+91 9993150998</p>
    <p>77248 52726</p>
    <p>0731-2970998</p>

    <p className="rtx-footer-mail">info@robotronix.co.in</p>

    <p className="rtx-footer-address">
      402, Atulya IT PARK, MPIDC, Khandwa Rd,<br />
      Opposite Indian Coffee House,<br />
      Indore, Madhya Pradesh 452001
    </p>

    <div className="rtx-footer-social">
      <FaLinkedinIn />
      <FaInstagram />
      <FaFacebookF />
      <FaWhatsapp />
      <FaYoutube />
    </div>

    <div className="rtx-footer-ratings">
      ⭐⭐⭐⭐⭐ 5.0 — Based on Clutch Reviews
    </div>
  </div>
</div>

        {/* COPYRIGHT */}
        <div className="rtx-footer-bottom">
          © 2025 ROBOTRONIX ENGINEERING TECH PVT. LTD. — All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
