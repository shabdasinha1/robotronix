import React, { useState } from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import atulya1 from "../../assets/img/atulya1.jpg";
import { Mail, Phone, MapPin, User, MessageSquare } from "lucide-react";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";

const ContactUs = () => {

  const hero = useRevealOnScroll({ once: true });
  const infoGrid = useRevealOnScroll({ once: true });
  const office = useRevealOnScroll({ once: true });
  const form = useRevealOnScroll({ once: true });
  const map = useRevealOnScroll({ once: true });
  const details = useRevealOnScroll({ once: true });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const info = [
    {
      icon: "📍",
      title: "Office Address",
      desc: "402 Atulya IT Park, Khandwa Road, Indore (M.P.)",
    },
    {
      icon: "✉️",
      title: "Email",
      desc: "info@robotronix.co.in",
      link: "mailto:info@robotronix.co.in",
    },
    {
      icon: "📞",
      title: "Phone",
      desc: "+91 99931 50998",
      link: "tel:+919993150998",
    },
    {
      icon: "🕒",
      title: "Working Hours",
      desc: "Mon – Sat: 10 AM – 7 PM",
    },
  ];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <>

      {/* ================= HERO ================= */}
      <section
        ref={hero.ref}
        className={`rtx-contact-hero-wrapper u-section ${
          hero.visible ? "u-drop-visible" : ""
        }`}
      >
        <div className="rtx-contact-hero-particles"></div>

        <div className="u-container-center">

          <span className="rtx-contact-hero-badge u-drop">
            We’re Here to Help
          </span>

          <h1 className="rtx-contact-hero-title u-drop">
            Get in Touch with <br />
            <span className="rtx-contact-hero-accent">
              Robotronix Engineering Tech Pvt. Ltd.
            </span>
          </h1>

          <p className="rtx-contact-hero-subtext u-drop">
            Whether you want support, collaboration, or a custom project —
            our team is ready to assist you 24/7.
          </p>

          <div className="rtx-contact-hero-btn-group u-drop">
            <a href="/contact" className="btn btn-primary btn-lg">
              Contact Our Team →
            </a>
            <a href="tel:+919999999999" className="btn btn-outline btn-lg">
              Call Us
            </a>
          </div>

          <div className="rtx-contact-quick">
            <a href="mailto:info@robotronix.co.in">📧 info@robotronix.co.in</a>
            <span>•</span>
            <span>📞 0731-2970998, 9993150998</span>
          </div>

        </div>
      </section>

      {/* ================= INFO GRID ================= */}
      <section
        ref={infoGrid.ref}
        className={`u-section ${
          infoGrid.visible ? "u-drop-visible" : ""
        }`}
      >
        <div className="u-container u-grid-auto">

          {info.map((item, i) => (
            <div key={i} className="card card-glass u-drop">
              <div className="rtx-contact-info-icon">{item.icon}</div>
              <h3 className="text-accent">{item.title}</h3>
              {item.link ? (
                <a href={item.link} className="text-muted">
                  {item.desc}
                </a>
              ) : (
                <p className="text-muted">{item.desc}</p>
              )}
            </div>
          ))}

        </div>
      </section>

      {/* ================= OFFICE ================= */}
      <section
        ref={office.ref}
        className={`u-section ${
          office.visible ? "u-drop-visible" : ""
        }`}
      >
        <div className="u-container rtx-office-container">

          <div className="rtx-office-image u-drop">
            <img src={atulya1} alt="Robotronix Office" />
          </div>

          <div className="rtx-office-content u-drop">
            <h2 className="u-title">
              Visit Our <span>Office</span>
            </h2>

            <p className="rtx-office-text">
              ✔ Product & service-based organization <br />
              ✔ Exceeding client expectations <br />
              ✔ Driving tech innovation
            </p>

            <a href="/contact" className="btn btn-primary">
              Schedule a Visit →
            </a>
          </div>

        </div>
      </section>

      {/* ================= FORM ================= */}
      <section
        ref={form.ref}
        className={`u-section ${
          form.visible ? "u-drop-visible" : ""
        }`}
      >
        <div className="u-container rtx-contact-container">

          <div className="rtx-contact-form card card-glass u-drop">
            <h2 className="u-title">
              Contact <span>Our Team</span>
            </h2>

            <p className="u-subtext">
              Let’s discuss how we can help your business.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="rtx-input-group">
                <User className="rtx-input-icon" />
                <input name="name" placeholder="Your Name" required onChange={handleChange} />
              </div>

              <div className="rtx-input-group">
                <Mail className="rtx-input-icon" />
                <input name="email" placeholder="Your Email" required onChange={handleChange} />
              </div>

              <div className="rtx-input-group">
                <Phone className="rtx-input-icon" />
                <input name="phone" placeholder="Phone Number" required onChange={handleChange} />
              </div>

              <div className="rtx-input-group rtx-textarea-group">
                <MessageSquare className="rtx-input-icon" />
                <textarea name="message" rows="5" placeholder="Your Message" required onChange={handleChange} />
              </div>

              <button className="btn btn-primary w-100 btn-lg">
                Send Message →
              </button>
            </form>
          </div>

          <div className="rtx-contact-info card card-glass u-drop">
            <h3 className="text-accent">Quick Contact</h3>

            <div className="rtx-info-box"><Mail /> info@robotronix.co.in</div>
            <div className="rtx-info-box"><Phone /> 0731-2970998</div>
            <div className="rtx-info-box"><MapPin /> Atulya IT Park, Indore</div>

            <p className="rtx-info-text">
              We respond within 24 hours.
            </p>
          </div>

        </div>
      </section>

      {/* ================= MAP ================= */}
      <section
        ref={map.ref}
        className={`u-section ${
          map.visible ? "u-drop-visible" : ""
        }`}
      >
        <div className="u-container-center">

          <h2 className="u-title u-drop">
            Our <span>Office Location</span>
          </h2>

          <p className="u-subtext u-drop">
            Come visit us — we’re happy to help.
          </p>

          <div className="cb-office-map-box u-drop">
            <iframe
              title="Robotronix Office"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* ================= DETAILS ================= */}
      <section
        ref={details.ref}
        className={`u-section ${
          details.visible ? "u-drop-visible" : ""
        }`}
      >
        <div className="u-container-center">

          <h2 className="u-title u-drop">
            Contact <span>Information</span>
          </h2>

          <p className="u-subtext u-drop">
            Reach out through any channel below.
          </p>

          <div className="u-grid-auto">
            <div className="card card-glass u-drop">
              <FiMapPin />
              <h3 className="text-accent">Office</h3>
              <p className="text-muted">Atulya IT Park, Indore</p>
            </div>

            <div className="card card-glass u-drop">
              <FiMail />
              <h3 className="text-accent">Email</h3>
              <p className="text-muted">info@robotronix.co.in</p>
            </div>

            <div className="card card-glass u-drop">
              <FiPhoneCall />
              <h3 className="text-accent">Call</h3>
              <p className="text-muted">0731-2970998</p>
            </div>
          </div>

        </div>
      </section>

    </>
  );
};

export default ContactUs;
