import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import company from "../../assets/img/who-we-are.jpg";
import navratri from "../../assets/img/navratri.jpg";
import diwali from "../../assets/OfficeActivity/diwali.JPG";
import holiy from "../../assets/OfficeActivity/holi.jpg";
import { useNavigate } from "react-router-dom";
import atulya1 from "../../assets/img/atulya1.jpg";
import { MapPin, Phone, Mail } from "lucide-react"; // lucide-react se
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeTestimonials from "./Home Page/HomeTestimonials";
const AboutCompany = () => {
  const navigate = useNavigate();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState("");

  const openLightbox = (imgSrc) => {
    setLightboxImg(`${imgSrc}`);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const galleryImg = [
    {
      img: navratri,
    },
    {
      img: diwali,
    },
    {
      img: holiy,
    },
  ];
  
  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section className="about-hero-section d-flex align-items-center text-center text-white">
        <div className="container">
          <h1 className="fw-bold">
            Innovating the future with cutting-edge technology solutions.
          </h1>
          {/* <p className="lead">
            We leverage trend-leading technology to provide the most impacting digital solutions for your business.
          </p> */}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={company}
                alt="Company"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold" style={{ marginLeft: "10px" }}>
                Who We Are
              </h2>
              <p>
                Robotronix Engineering Tech. Private Limited is a client-serving
                company based in Indore. The main objective of our organization
                is to evolve the innovative world of Automation services. Since
                our establishment in 2010, our vision has transformed into
                reality. We provide business-centric, innovative frameworks, and
                perfect solutions to help clients achieve unprecedented
                performance and revenue growth at optimized costs. Recognized as
                one of India's fastest-growing I.T. and Electronics services
                providers, Robotronix has complemented its robust organic growth
                with strategic acquisitions.
              </p>
              <div className="mad-hero-cta">
                <button
                  className="mean-button primary large"
                  onClick={() => navigate("/contact-us")}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="robotronix-section py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="mission-card p-4 h-100">
                <div className="icon-container mb-4">
                  <i className="bi bi-rocket-takeoff"></i>
                </div>
                <h1 className="fw-bold text-center mb-4 mission-vision">
                  Our Mission
                </h1>
                <p className="text-center">
                  Our mission is to provide cutting-edge, client-centric
                  technology solutions that enhance efficiency, inspire
                  innovation, and promote sustainable growth. We are
                  committed to bridging the digital divide by empowering
                  both urban and rural communities through practical
                  education and skill development, creating more
                  employment opportunities, and contributing to the
                  creation of a self-reliant, . Through our
                  efforts, we aim to inspire and enable every individual and
                  community to reach their full potential, paving the way
                  for a brighter and more inclusive future for all.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="vision-card p-4 h-100">
                <div className="icon-container mb-4">
                  <i className="bi bi-globe"></i>
                </div>
                <h1 className="fw-bold text-center mb-4 mission-vision">
                  Our Vision
                </h1>
                <p className="text-center">
                  Our vision is to be a global leader in technological
                  innovation, delivering intelligent and integrated
                  solutions that transform industries, enrich lives, and lead
                  society toward a better future. We aspire to create a
                  world where every individual has equal opportunities for
                  progress and development, fostering a prosperous and
                  inclusive society where everyone moves forward
                  together.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery-section py-5">
        <div className="container text-center">
          <h2 className="content-subtitle mb-5 ">Our Office Activities</h2>
          <div className="row g-4">
            {galleryImg.map((item) => (
              <div key={item} className="col-md-4 col-sm-6">
                <div className="gallery-item">
                  <img
                    src={`${item.img}`} // Replace with your image URLs
                    alt={`Office Activity ${item}`}
                    className="img-fluid"
                  />
                  <div className="overlay">
                    <button
                      className="btn btn-light"
                      onClick={() => openLightbox(item.img)}
                    >
                      <i className="bi bi-zoom-in"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <div className={`lightbox-modal ${lightboxOpen ? "open" : ""}`}>
          <span className="close-btn" onClick={closeLightbox}>
            &times;
          </span>
          <img
            id="lightbox-img"
            src={lightboxImg}
            alt="Lightbox"
            className="lightbox-content"
          />
        </div>
      </section>

      {/* <section className="core-values">
        <div className="container">
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🌟</div>
              <h3 className="value-title">Integrity</h3>
              <p className="value-description">
                We uphold the highest standards of honesty and ethics in all our
                actions.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🚀</div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-description">
                We embrace creativity and continuously seek new ways to improve.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h3 className="value-title">Collaboration</h3>
              <p className="value-description">
                We believe in the power of teamwork and mutual respect.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">💡</div>
              <h3 className="value-title">Excellence</h3>
              <p className="value-description">
                We strive for the highest quality in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section> */}

     

      <HomeTestimonials />

      {/* <div className="container">
        <h2 className="content-subtitle text-center mb-5">Our Locations</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <div className="projcard projcard-blue">
              <div className="projcard-innerbox">
                <div className="projcardImage">
                  <img
                    className="projcard-img img-fluid" // Make image responsive
                    src={address_1}
                    alt="Indore Location"
                  />
                </div>

                <div className="projcard-textbox">
                  <div className="projcard-subtitle">Indore</div>
                  <div className="projcard-bar" />
                  <div className="projcard-description">
                    <FaMapMarkerAlt
                      style={{ color: "red", marginRight: "5px" }}
                    />
                    <a
                      href="https://maps.app.goo.gl/PsGWnBajXbs2FK9a9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark"
                    >
                      402, Atulya IT PARK,<br></br> MPIDC, Khandwa Rd, opposite to Indian
                      Coffee House, Indore, Madhya Pradesh 452001
                    </a>
                  </div>
                  <h6 className="mb-2">+919993150998</h6>
                  <h6 className="mb-2">77248 52726</h6>
                  <h6 className="mb-2">0731-2970998</h6>
                  <h6>info@robotronix.co.in</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <section class="history-area">
        <div class="container px-0">
          <div class="row">
            <div class="col-lg-12 px-0">
              <div id="history-slid">
                <div class="carousel-item row active px-0">
                  <div class="col-lg-6 col-md-12 pl-0">
                    <div class="history-img">
                      <img class="img-fluid" src={atulya1} alt="" />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12 pr-0">
                    <div class="history-content">
                      <p
                        class="title-bg-small bg-primary wow fadeInUp"
                        data-wow-duration="1.5s"
                        data-wow-delay="500ms"
                      >
                        Our Office
                      </p>
                      <h6
                        class="column-title wow fadeInUp"
                        data-wow-duration="1.5s"
                        data-wow-delay="700ms"
                      >
                        ROBOTRONIX ENGINEERING TECH PVT. LTD.{" "}
                      </h6>

                      <div className="address">
                        <MapPin className="icon" />
                        <p>
                          402, Atulya IT PARK, MPIDC, Khandwa Rd, opposite to
                          Indian Coffee House, Indore, Madhya Pradesh 452012.
                        </p>
                      </div>

                      <p className="mb-0 p-0">
                        <Phone className="icon-contact-card" />
                        +91 99931 50998
                      </p>

                      <p className="mb-0 p-0">
                        <Phone className="icon-contact-card" />
                        77248 52726
                      </p>

                      <p className="mb-0 p-0">
                        <Phone className="icon-contact-card" />
                        0731-2970998
                      </p>

                      <p className="mb-0 p-0">
                        {" "}
                        <span className="icon-contact-card">
                          <Mail />
                        </span>
                        info@robotronix.co.in
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCompany;
