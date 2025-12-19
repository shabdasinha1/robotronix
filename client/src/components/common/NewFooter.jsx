import useRevealOnScroll from "../../hooks/useRevealOnScroll";

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
              <li>AI and ML</li>
              <li>Cyber Security Services</li>
              <li>Cloud Application Development</li>
              <li>Digital Marketing</li>
              <li>Digital Transformation</li>
              <li>IoT Development</li>
              <li>Low Code Development</li>
              <li>Mobile App Development</li>
            </ul>
          </div>

          {/* SOLUTIONS */}
          <div className="rtx-footer-col">
            <h4>Solutions</h4>
            <ul>
              <li>B2B Online Ordering App</li>
              <li>Costing Automation and Control</li>
            </ul>

            <h4 className="rtx-footer-subtitle">Industries</h4>
            <ul>
              <li>Healthcare</li>
              <li>Automotive</li>
              <li>Education</li>
              <li>Transportation & Logistics</li>
              <li>Banking</li>
            </ul>
          </div>

          {/* ABOUT */}
          <div className="rtx-footer-col">
            <h4>About Us</h4>
            <ul>
              <li>About Robotronix</li>
              <li>Culture</li>
              <li>Leadership</li>
              <li>Career</li>
            </ul>

            <h4 className="rtx-footer-subtitle">Quick Connect</h4>
            <ul>
              <li>Contact Us</li>
              <li>Blogs</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="rtx-footer-contact">
            <h4>India</h4>

            <p>+91 9993150998</p>
            <p>77248 52726</p>
            <p>0731-2970998</p>

            <p className="rtx-footer-mail">
              info@robotronix.co.in
            </p>

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
