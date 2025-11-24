import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import industryData from "./IndustryData";

const HealthCarePage = () => {
  const { industry } = useParams();
  const industryInfo = industryData[industry] || industryData.healthcare;

  return (
    <>
      <section className="industries-section text-white">
        <div className="container">
          <h1>{industryInfo.bannerTitle}</h1>
          <p className="lead">{industryInfo.bannerDescription}</p>
        </div>
      </section>
      {/* End first section */}
      <div className="section-full industryPageBg p-t120 p-b90">
        <div className="container">
          <div className="section-head center wt-small-separator-outer">
            <div className="wt-small-separator site-text-primary">
              <div className="sep-leaf-left" />
              <div>{industryInfo.title}</div>
            </div>
            {/* <h2 className="wt-title">{industryInfo.description}</h2> */}
          </div>
          <div className="s-section">
            <div className="row">
              {/* Telemedicine Services */}
              {industryInfo.services.map((industryData, indexedDB) => (
                <div className="col-lg-4 col-md-6 m-b30" key={indexedDB}>
                  <div className="service-icon-box-two">
                    <div className="wt-icon-box-wraper">
                      <div className="icon-xl inline-icon">
                        <span className="icon-cell site-text-primary">
                          {industryData.icon}
                        </span>
                      </div>
                    </div>
                    <div className="service-icon-box-title">
                      <h4 className="wt-title">
                        <NavLink to="service-detail.html">{industryData.title}</NavLink>
                      </h4>
                    </div>
                    <div className="service-icon-box-content">
                      <p>{industryData.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* explore our solutions */}

      <section id="about">
        <div className="container" data-aos="fade-up">
          <div className="section-head center wt-small-separator-outer">
            <div className="wt-small-separator site-text-primary"></div>
            <h2 className="wt-title">{industryInfo.ExploreTitle}</h2>
          </div>
          <div className="row about-cols">
            {industryInfo.solutions.map((industryData, index) => (
              <div
                className="col-md-4"
                data-aos="fade-up"
                data-aos-delay={100}
                key={index}
              >
                <div className="about-col">
                  <div className="img">
                    <img
                      src={industryData.image}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="icon">
                      <i className="bi bi-bar-chart" />
                    </div>
                  </div>
                  <h2 className="title">
                    <NavLink to="#">{industryData.title}</NavLink>
                  </h2>
                  <p>{industryData.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* why choose robotronix start*/}
      <section id="services">
        <div className="container" data-aos="fade-up">
          <header className="section-header wow fadeInUp">
            <h3>Why Choose Robotronix</h3>
            <p>
              At Robotronix, we specialize in cutting-edge IT solutions, helping
              businesses transform with technology. Our expertise in software
              development, cybersecurity, and AI-driven innovations ensures your
              success in the digital era.
            </p>
          </header>

          <div className="row">
            <div
              className="col-lg-4 col-md-6 box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <h4 className="title">
                <NavLink to="">Innovative Solutions</NavLink>
              </h4>
              <p className="description">
                We provide cutting-edge technology solutions tailored to meet
                the evolving demands of businesses, ensuring efficiency and
                scalability.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon">
                <i className="bi bi-card-checklist"></i>
              </div>
              <h4 className="title">
                <NavLink to="">Expert Team</NavLink>
              </h4>
              <p className="description">
                Our team of IT professionals brings extensive experience and
                technical expertise to deliver high-quality solutions with
                precision.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon">
                <i className="bi bi-bar-chart"></i>
              </div>
              <h4 className="title">
                <NavLink to="">Data-Driven Approach</NavLink>
              </h4>
              <p className="description">
                We leverage big data analytics and AI to drive smarter business
                decisions and optimize operational performance.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon">
                <i className="bi bi-binoculars"></i>
              </div>
              <h4 className="title">
                <NavLink to="">Cybersecurity Excellence</NavLink>
              </h4>
              <p className="description">
                We prioritize security with advanced cybersecurity solutions to
                safeguard your data and protect against cyber threats.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon">
                <i className="bi bi-brightness-high"></i>
              </div>
              <h4 className="title">
                <NavLink to="">AI & Automation</NavLink>
              </h4>
              <p className="description">
                Our AI-driven automation solutions streamline operations,
                enhance productivity, and reduce costs for businesses.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="icon">
                <i className="bi bi-calendar4-week"></i>
              </div>
              <h4 className="title">
                <NavLink to="">24/7 Support</NavLink>
              </h4>
              <p className="description">
                Our dedicated support team is available around the clock to
                ensure seamless operation and quick resolution of IT challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* hire me */}
      <section className="container-fluid p-0" id="projects">
        <div className="project__container bd-grid">
          <div className="project__data">
            <i className="bx bxs-chat project__icon" />
            <div>
              <h2 className="project__title project-tile">Talk to expert</h2>
              <p className="project__desc">
                Tell us your business challenges and our Healthcare domain
                consultants will help you find the best approach to address them
              </p>
            </div>
            <div>
              <NavLink to="/contact-us" className="button button-white">
                Connect To Know More
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthCarePage;
