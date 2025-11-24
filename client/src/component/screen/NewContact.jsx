// Contact.jsx

import React, { useState, useEffect } from "react";
import { Send, Clock, MapPin } from "lucide-react";
import "./NewContact.css";
import atulya1 from "../../assets/img/atulya1.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [indiaTime, setIndiaTime] = useState("");

  useEffect(() => {
    const updateTimes = () => {
      const options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };

      const indiaFormatter = new Intl.DateTimeFormat("en-US", {
        ...options,
        timeZone: "Asia/Kolkata",
      });
      setIndiaTime(indiaFormatter.format(new Date()));
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (formData.contact && !/^\+?[0-9\s-()]{8,20}$/.test(formData.contact)) {
      newErrors.contact = "Phone number is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);

      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/contact`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({
            fullName: "",
            email: "",
            contact: "",
            message: "",
          });

          setTimeout(() => setSubmitSuccess(false), 3000);
        } else {
          const errorData = await response.json();
          alert(errorData.error || "Failed to send message.");
        }
      } catch (error) {
        console.error("Error submitting contact form:", error);
        alert("An error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="contact mb-0">
      <div className="hero">
        <div className="hero-content">
          <h1>Get In Touch</h1>
          <p>
            We'd love to hear from you. Reach out to our team and let us know
            how we can help.
          </p>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-container">
          <h2>Contact Us</h2>
          {submitSuccess ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={errors.name ? "error" : ""}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className={errors.contact ? "error" : ""}
                  />
                  {errors.contact && (
                    <span className="error-message">{errors.contact}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  style={{ resize: "none" }}
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className={errors.message ? "error" : ""}
                ></textarea>
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? (
                  <span className="loading">Sending...</span>
                ) : (
                  <>
                    <Send className="icon" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* <div className="offices-section">
        <div className="offices-container">
          <h2>Our Office</h2>
          <p>
            Connect with our teams across the globe. We're here to help, no
            matter where you are.
          </p>

          <div className="office-cards">
            <div className="office-card">
              <div className="office-image">
                <img src={indiagate} alt="India Office" />
                <h3>India</h3>
              </div>
              <div className="office-details">
                <div className="time-display">
                  <Clock className="icon" />
                  <span>{indiaTime}</span>
                  <span className="time-label">Local Time</span>
                </div>
                <div className="address">
                  <MapPin className="icon" />
                  <p>
                    402, Atulya IT PARK, MPIDC, Khandwa Rd, opposite to Indian
                    Coffee House, Indore, Madhya Pradesh 452012.
                  </p>
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
              <div
                id="history-slid"
              >
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
                      <div className="time-display">
                        <Clock className="icon" />
                        <span>{indiaTime}</span>
                        <span className="time-label">Local Time</span>
                      </div>
                      <div className="address">
                        <MapPin className="icon" />
                        <p>
                          402, Atulya IT PARK, MPIDC, Khandwa Rd, opposite to
                          Indian Coffee House, Indore, Madhya Pradesh 452012.
                        </p>
                      </div>
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

export default Contact;
