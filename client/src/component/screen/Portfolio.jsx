import React, { useEffect, useState } from "react";
import portfolioImage from "./../../assets/img/freepik__background__90937.png";
import healthcare from "./../../assets/img/medical-banner-with-doctor-holding-stethoscope.jpg";
import automotive from "./../../assets/img/person-using-ar-technology-their-daily-occupation.jpg";
import banking from "./../../assets/img/banking-financial-technology-with-currency-symbols-background.jpg";
import education from "./../../assets/img/young-students-learning-library-bookshelves.jpg";
import { BiSolidContact } from "react-icons/bi";
import { MdAttachEmail } from "react-icons/md";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

const Portfolio = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    project: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const validateForm = () => {
  let newErrors = {};

  if (!formData.fullName.trim()) {
    newErrors.fullName = "Name is required";
  }

  if (!formData.email) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Invalid email format";
  }

  if (!formData.contact) {
    newErrors.contact = "Phone number is required";
  } else if (!/^\d{10}$/.test(formData.contact)) {
    newErrors.contact = "Phone must be 10 digits";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
  }

  // ✅ Project validation (now required)
  if (!formData.project.trim()) {
    newErrors.project = "Project is required";
  } else if (formData.project.trim().length < 3) {
    newErrors.project = "Project name must be at least 3 characters";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setStatus("Sending...");

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          project: "",
          contact: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus("❌ Failed to send. Try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("❌ Something went wrong.");
    }
  };

  useEffect(() => {
    const portfolioItems = document.querySelectorAll(".portfolio__item");
    const portfolioContents = document.querySelectorAll(".portfolio__content");

    portfolioItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Remove active class from all items
        portfolioItems.forEach((i) => i.classList.remove("active--portfolio"));

        // Add active class to clicked item
        this.classList.add("active--portfolio");

        const filter = this.getAttribute("data-filter");

        portfolioContents.forEach((content) => {
          if (
            filter === "all" ||
            content.classList.contains(filter.substring(1))
          ) {
            content.style.display = "block";
          } else {
            content.style.display = "none";
          }
        });
      });
    });
  }, []);
  return (
    <>
      <section className="home" id="home">
        <div className="home__container bd-container bd-grid">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                {" "}
                <div className="home__data">
                  <span className="home__greeting">Portfolio</span>
                  <h1 className="home__name">Robotronix</h1>
                  <span className="home__professional">DEVELOPMENT</span>
                  {/* <a
                  download=" "
                  href="pdf/cv.pdf"
                  className="button button-light home__button"
                >
                  Download Cv
                </NavLink> */}
                </div>
                <div className="home__social">
                  <NavLink to="#" className="home__social-icon">
                    <i className="bx bxl-facebook" />
                  </NavLink>
                  <NavLink href="#" className="home__social-icon">
                    <i className="bx bxl-instagram" />
                  </NavLink>
                  <NavLink href="#" className="home__social-icon">
                    <i className="bx bxl-twitter" />
                  </NavLink>
                </div>
              </div>
              <div className="col-md-6">
                {" "}
                <div className="home__img">
                  <img src={portfolioImage} alt="" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===== PORTFOLIO =====*/}
      <section className="portfolio section bd-container" id="portfolio">
        <header className="section-header wow fadeInUp">
          <h3>Portfolio</h3>
        </header>
        <div className="portfolio__nav">
          <span className="portfolio__item active--portfolio" data-filter="all">
            All
          </span>
          <span className="portfolio__item" data-filter=".healthcare">
            Healthcare
          </span>
          <span className="portfolio__item" data-filter=".automotive">
            Automotive
          </span>
          <span className="portfolio__item" data-filter=".education">
            Education
          </span>
          <span className="portfolio__item" data-filter=".banking">
            Banking
          </span>
        </div>

        <div className="portfolio__container bd-grid">
          <div className="portfolio__content mix healthcare">
            <NavLink href="#">
              <img src={healthcare} alt="" className="portfolio__img" />
            </NavLink>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">Healthcare</span>
              <NavLink href="#">
                <h2 className="portfolio__title">Healthcare Project</h2>
              </NavLink>
              <NavLink to="/industries/healthCare" className="button">
                View Details
              </NavLink>
            </div>
          </div>{" "}
          <div className="portfolio__content mix automotive">
            <NavLink href="#">
              <img src={automotive} alt="" className="portfolio__img" />
            </NavLink>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">Automotive</span>
              <NavLink href="#">
                <h2 className="portfolio__title">Automotive Project</h2>
              </NavLink>
              <NavLink to="/industries/healthCare" className="button">
                View Details
              </NavLink>
            </div>
          </div>
          <div className="portfolio__content mix education">
            <NavLink href="#">
              <img src={education} alt="" className="portfolio__img" />
            </NavLink>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">Education</span>
              <NavLink href="#">
                <h2 className="portfolio__title">Education Project</h2>
              </NavLink>
              <NavLink to="/industries/healthCare" className="button">
                View Details
              </NavLink>
            </div>
          </div>
          <div className="portfolio__content mix banking">
            <NavLink href="#">
              <img src={banking} alt="" className="portfolio__img" />
            </NavLink>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">Banking</span>
              <NavLink href="#">
                <h2 className="portfolio__title">Banking Project</h2>
              </NavLink>
              <NavLink to="/industries/healthCare" className="button">
                View Details
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid p-0" id="projects">
        <div className="project__container bd-grid">
          <div className="project__data">
            <i className="bx bxs-chat project__icon" />
            <div>
              <h2 className="project__title project-tile">Project in Mind</h2>
              <p className="project__desc">
                Let's build your project and give it a life.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      {/*===== CONTACTME =====*/}
      <section className="contact section bd-container" id="contact">
        <div className="container d-flex flex-column align-items-center text-center">
          <h2 className="content-subtitle mb-2 ">Contact Me</h2>
          <p className="content-para mb-5">Let's help you in your projects</p>
        </div>
        <div className="contact__container bd-grid">
          <div className="contact__content bd-grid">
            <div className="contact__box">
              <FaMapLocationDot className="social-logo" />

              <h3 className="contact__title">Locations</h3>
              <h6>
                {" "}
                <FaMapMarkerAlt
                  style={{
                    color: "red",
                    fontSize: "12px",
                    margin: "0 5px 5px",
                  }}
                />
                India
              </h6>
            </div>
            <div className="contact__box">
              <BiSolidContact className="social-logo" />
              <h3 className="contact__title">Phone</h3>
              <h6 className="contact__desc">+91731-2970998</h6>
              <h6>+919993150998</h6>
            </div>
            <div className="contact__box">
              <MdAttachEmail className="social-logo" />

              <h3 className="contact__title">E-mail</h3>
              <span className="contact__desc">info@robotronix.co.in</span>
            </div>
            <div className="contact__box">
              <BsFillChatLeftTextFill className="social-logo" />

              <h3 className="contact__title">Chat</h3>
              <NavLink
                to="https://www.linkedin.com/in/robotronix-india-a7795a68/"
                target="_blank"
              >
                <CiLinkedin className="social-logo" />
              </NavLink>
              <NavLink
                to="https://www.instagram.com/robotronixindia/"
                target="_blank"
              >
                <CiInstagram className="social-logo" />
              </NavLink>
              <NavLink to="https://www.facebook.com/inbho/" target="_blank">
                <CiFacebook className="social-logo" />
              </NavLink>
            </div>
          </div>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__inputs">
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Name"
                  className="contact__input"
                />
                {errors.fullName && (
                  <p className="error-text">{errors.fullName}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="contact__input"
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
            </div>
            <div className="contact__inputs">
              <div>
                <input
                  type="text"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  placeholder="Project"
                  className="contact__input"
                />
                {errors.project && (
                  <p className="error-text">{errors.project}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Phone-number"
                  className="contact__input"
                />
                {errors.contact && (
                  <p className="error-text">{errors.contact}</p>
                )}
              </div>
            </div>
            <div>
              <textarea
                className="contact__input"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={7}
              />
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>
            <div className="send__button">
              <button type="submit" className="button contact__button">
                Send
              </button>
            </div>
            {status && <p style={{ marginTop: "10px" }}>{status}</p>}
          </form>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
