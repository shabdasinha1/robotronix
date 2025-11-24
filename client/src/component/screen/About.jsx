import React from "react";
import about1 from "../../assets/img/work-team-digital-art.jpg";
import about2 from "../../assets/img/slide2.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title-about">
                  <span className="title">About Robotronix</span>
                  <h2>
                    Innovating the Future of <br />
                    Industrial Automation Since 2010
                  </h2>
                </div>
                <div className="text">
                  Robotronix is a pioneer in smart industrial solutions,
                  specializing in cutting-edge automation, robotics, and IoT
                  technologies. Since our inception in 2010, we have been
                  committed to transforming manufacturing processes, enhancing
                  operational efficiency, and delivering reliable, scalable
                  solutions for industries worldwide. With decades of experience
                  and a forward-thinking approach, we empower businesses to
                  embrace Industry 4.0 and stay ahead of the curve.
                </div>
                <ul className="list-style-one">
                  <li>
                    <span className="dot"></span>Expertise in industrial
                    robotics and automation
                  </li>
                  <li>
                    <span className="dot"></span>Customized smart factory
                    solutions
                  </li>
                  <li>
                    <span className="dot"></span>Trusted by global manufacturing
                    leaders
                  </li>
                </ul>
                <div className="btn-box">
                  <NavLink to="/contact-us" className="theme-btn btn-style-one">
                    Contact Us
                  </NavLink>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <figure className="image-1">
                  <NavLink
                    to="#"
                    className="lightbox-image"
                    data-fancybox="images"
                  >
                    <img src={about1} alt="Robotronix team at work" />
                  </NavLink>
                </figure>
                <figure className="image-2">
                  <NavLink
                    to="#"
                    className="lightbox-image"
                    data-fancybox="images"
                  >
                    <img src={about2} alt="Smart industrial automation" />
                  </NavLink>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
