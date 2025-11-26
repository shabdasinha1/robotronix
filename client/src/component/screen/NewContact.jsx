import React from "react";
import "./NewContact.css";
import atulya1 from "../../assets/img/atulya1.jpg";
import { Clock, MapPin } from "lucide-react";

const ContactUs = () => {
  const indiaTime = new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      {/* ===================== HERO SECTION ===================== */}
      <section className="contact-hero">
        <div className="container hero-container">
          <div className="hero-text">
            <h1>We’re Here to Assist You</h1>
            <p>
              Connect with our team for project discussions, partnerships, or support.
              We respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT FORM SECTION ===================== */}
      <section className="contact-section">
        <div className="container">

          <div className="contact-header">
            <h2>Get In Touch</h2>
            <p>
              Fill out the form below and one of our experts will reach out to you shortly.
            </p>
          </div>

          <div className="contact-form-card">
            <form className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" required />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea style={{resize: "none",msOverflowY:"auto"}} placeholder="Write your message..." rows="5" required></textarea>
              </div>

              <button type="submit" className="contact-btn">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ===================== CTA SECTION ===================== */}
      <section className="contact-cta">
        <div className="container">
          <div className="contact-cta-card">
            <h2>Let’s Build Something Incredible Together</h2>
            <p>
              Ready to bring your ideas to life?  
              We combine engineering expertise with AI-powered innovation to help
              you scale smarter and faster.
            </p>

            <button className="contact-cta-btn">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* ===================== OFFICE SECTION ===================== */}
      <section className="office-section">
        <div className="container px-0">
          <div className="row">
            <div className="col-lg-12 px-0">
              <div id="history-slid">
                <div className="carousel-item row active px-0">

                  {/* IMAGE */}
                  <div className="col-lg-6 col-md-12 pl-0">
                    <div className="history-img">
                      <img className="img-fluid" src={atulya1} alt="Office" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="col-lg-6 col-md-12 pr-0">
                    <div className="history-content">
                      <p className="title-bg-small bg-primary">Our Office</p>

                      <h6 className="column-title">
                        ROBOTRONIX ENGINEERING TECH PVT. LTD.
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
    </>
  );
};

export default ContactUs;
