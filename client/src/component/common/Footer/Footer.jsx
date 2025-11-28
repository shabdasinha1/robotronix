import React, { useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CiLinkedin, CiInstagram, CiFacebook, CiYoutube } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    // Load Clutch widget script
    const clutchScript = document.createElement("script");
    clutchScript.src = "https://widget.clutch.co/static/js/widget.js";
    clutchScript.async = true;
    clutchScript.onload = () => {
      if (window.ClutchWidgets) {
        window.ClutchWidgets.replace();
      }
    };
    document.body.appendChild(clutchScript);

    // Load GoodFirms widget script
    const goodFirmsScript = document.createElement("script");
    goodFirmsScript.src = "https://widget.goodfirms.co/goodfirms-widget.js";
    goodFirmsScript.async = true;
    goodFirmsScript.onload = () => {
      if (window.initGoodfirmsWidget) {
        window.initGoodfirmsWidget();
      }
    };
    document.body.appendChild(goodFirmsScript);
  }, []);

  return (
    <div className="main">
      <footer className="bg-footer">
        <div className="container-fluid">
          <div className="row">
            {/* Services */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <h6 className="footer-heading text-uppercase text-white">
                Services
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li className="footer-listing">AI and ML</li>
                <li className="footer-listing">Cyber Security services</li>
                <li className="footer-listing">
                  Cloud Application Development
                </li>
                <li className="footer-listing">Digital Marketing</li>
                <li className="footer-listing">Digital Transformation</li>
                <li className="footer-listing">IoT Development</li>
                <li className="footer-listing">Low Code Development</li>
                <li className="footer-listing">Mobile App Development</li>
              </ul>
            </div>

            {/* Solutions & Industries */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <h6 className="footer-heading text-uppercase text-white">
                SOLUTIONS
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <NavLink to="">B2B Online Ordering App</NavLink>
                </li>
                <li>
                  <NavLink to="">Costing Automation and Control</NavLink>
                </li>
              </ul>
              <h6 className="footer-heading text-uppercase text-white mt-4">
                INDUSTRIES
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <NavLink to="/industries/healthCare">Healthcare</NavLink>
                </li>
                <li>
                  <NavLink to="/industries/automotive">Automotive</NavLink>
                </li>
                <li>
                  <NavLink to="/industries/education">Education</NavLink>
                </li>
                <li>
                  <NavLink to="/industries/transportation">
                    Transportation and Logistics
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/industries/banking">Banking</NavLink>
                </li>
              </ul>
            </div>

            {/* About Us & Quick Connect */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <h6 className="footer-heading text-uppercase text-white">
                ABOUT US
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <NavLink to="/about">About Robotronix</NavLink>
                </li>
                <li>
                  <NavLink to="/culture">Culture</NavLink>
                </li>
                <li>
                  <NavLink to="/leadership">Leadership</NavLink>
                </li>
                <li>
                  <NavLink to="/career">Career</NavLink>
                </li>
              </ul>
              <h6 className="footer-heading text-uppercase text-white mt-4">
                QUICK CONNECT
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <NavLink to="/contact-us">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="">Blogs</NavLink>
                </li>
              </ul>
            </div>

            {/* Contact Cards & Socials */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              {/* India Office */}
              <div className="card card1 mb-3">
                <div className="card-body">
                  <h6 className="footer-heading text-uppercase text-white">
                    INDIA
                  </h6>
                  <h6 className="mb-2 text-light">+919993150998</h6>
                  <h6 className="mb-2 text-light">77248 52726</h6>
                  <h6 className="mb-2 text-light">0731-2970998</h6>
                  <p className="text-light">
                    <small>info@robotronix.co.in</small>
                  </p>
                  {/* <p className="text-white small-font">
                    <FaMapMarkerAlt style={{ color: "red" }} /> 402, Atulya IT
                    PARK, MPIDC, Khandwa Rd, opposite to Indian Coffee House,
                    Indore, Madhya Pradesh 452012.
                  </p> */}
                  <p className="text-white small-font">
                    <FaMapMarkerAlt
                      style={{ color: "red", marginRight: "5px" }}
                    />
                    <NavLink
                      to="https://maps.app.goo.gl/PsGWnBajXbs2FK9a9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      402, Atulya IT PARK, MPIDC, Khandwa Rd, opposite to Indian
                      Coffee House, Indore, Madhya Pradesh 452001
                    </NavLink>
                  </p>
                </div>
              </div>

              {/* Australia Office */}

              {/* Social Icons */}
              <div className="row mt-4 text-center">
                <div className="col-2">
                  <NavLink
                    to="https://www.linkedin.com/company/robotronix-india/"
                    target="_blank"
                  >
                    <CiLinkedin
                      className="text-white"
                      style={{ fontSize: "30px" }}
                    />
                  </NavLink>
                </div>
                <div className="col-2">
                  <NavLink
                    to="https://instagram.com/robotronixindia?igshid=MGNiNDI5ZTU="
                    target="_blank"
                  >
                    <CiInstagram
                      className="text-white"
                      style={{ fontSize: "30px" }}
                    />
                  </NavLink>
                </div>
                <div className="col-2">
                  <NavLink
                    to="https://www.facebook.com/robotronixindiaa/"
                    target="_blank"
                  >
                    <CiFacebook
                      className="text-white"
                      style={{ fontSize: "30px" }}
                    />
                  </NavLink>
                </div>
                <div className="col-2">
                  <NavLink
                    to="https://whatsapp.com/channel/0029Va5MOXS7YScuXQ5pqb3G"
                    target="_blank"
                  >
                    <FaWhatsapp
                      className="text-white"
                      style={{ fontSize: "30px" }}
                    />
                  </NavLink>
                </div>
                <div className="col-2">
                  <NavLink
                    to="https://www.youtube.com/channel/UCrsYGH36ulMTDbzRhMvLtJg"
                    target="_blank"
                  >
                    <CiYoutube
                      className="text-white"
                      style={{ fontSize: "30px" }}
                    />
                  </NavLink>
                </div>
              </div>

              {/* Clutch Widget */}
              <div className="clutch-details mt-4 text-center">
                <div
                  className="clutch-widget"
                  data-url="https://widget.clutch.co"
                  data-widget-type="14"
                  data-height="50"
                  data-nofollow="true"
                  data-expandifr="true"
                  data-scale="100"
                  data-clutchcompany-id="2066120"
                ></div>
              </div>

              {/* GoodFirms Widget */}
              <div className="goodfirm-details mt-3 text-center">
                <div
                  className="goodfirm-widget"
                  data-widget-type="goodfirms-widget-t8"
                  data-widget-pattern="poweredby-star"
                  data-height="60"
                  data-company-id="164206"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-2">
          <p className="footer-alt mb-0 f-14">
            © 2025 ROBOTRONIX ENGINEERING TECH PVT. LTD.
          </p>
          <p className="footer-alt mb-0 f-14"> All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
