import React, { useRef, useEffect, useState } from "react";
import "./NewContact.css";
import atulya1 from "../../assets/img/atulya1.jpg";
import { Mail, Phone, MapPin, User, MessageSquare } from "lucide-react";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";


const ContactUs = () => {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const officeRef = useRef(null);
  const formRef = useRef(null);
  const officeBlockRef = useRef(null);
  const infoRef = useRef(null);

  // ❇️ Common animation handler
  const useAnimateOnView = (ref, dropClass, visibleClass, threshold = 0.25) => {
    useEffect(() => {
      if (!ref.current) return; 

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            const elements = ref.current.querySelectorAll(`.${dropClass}`);
            elements.forEach((el) => el.classList.add(visibleClass));
          }
        },
        { threshold }
      );

      observer.observe(ref.current);
      return () => observer.disconnect();
    }, [ref, dropClass, visibleClass, threshold]);
  };

  // 🔥 Trigger animations for each block
  useAnimateOnView(heroRef, "rtx-contact-drop", "rtx-contact-visible");
  useAnimateOnView(gridRef, "rtx-contact-info-drop", "rtx-contact-info-visible");
  useAnimateOnView(officeRef, "rtx-office-drop", "rtx-office-visible");
  useAnimateOnView(formRef, "rtx-contact-drop", "rtx-contact-visible");
  useAnimateOnView(officeBlockRef, "cb-office-drop", "cb-office-visible");
  useAnimateOnView(infoRef, "cg-info-drop", "cg-info-visible");


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
      desc: "402 “📍 Atulya IT Park”, Madhya Pradesh Industrial Development Corporation, Khandwa Road, Indore (M.P.)",
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted! (integration can be added)");
  };

  return (
    <>

      {/*------------- Hero Section ------------------- */}
      <section className="rtx-contact-hero-wrapper" ref={heroRef}>
        {/* Particles */}
        <div className="rtx-contact-hero-particles"></div>

        <div className="rtx-contact-hero-container">

          <span
            className="rtx-contact-hero-badge rtx-contact-drop"
            style={{ "--delay": "0.2s" }}
          >
            We’re Here to Help
          </span>

          <h1
            className="rtx-contact-hero-title rtx-contact-drop"
            style={{ "--delay": "0.4s" }}
          >
            Get in Touch with <br />
            <span className="rtx-contact-hero-accent">
              Robotronix Engineering Tech Pvt. Ltd.
            </span>
          </h1>

          <p
            className="rtx-contact-hero-subtext rtx-contact-drop"
            style={{ "--delay": "0.6s" }}
          >
            Whether you want support, collaboration, or a custom project — our team
            is ready to assist you 24/7.
          </p>

          {/* Buttons */}
          <div
            className="rtx-contact-hero-btn-group rtx-contact-drop"
            style={{ "--delay": "0.8s" }}
          >
            <button className="rtx-contact-btn-primary">
              Contact Our Team →
            </button>

            <a href="tel:+919999999999" className="rtx-contact-btn-secondary">
              Call Us
            </a>
          </div>

          {/* Quick Info */}
          <div className="rtx-contact-quick">
            <a href="mailto:info@robotronix.co.in">📧 info@robotronix.co.in</a>
            <span>•</span>
            <span>📞 0731-2970998, 9993150998</span>
          </div>

        </div>
      </section>


      {/* ------------ Contact_InfoGrid  ------------------*/}

      <section className="rtx-contact-info-section" ref={gridRef}>
        <div className="rtx-contact-info-container">

          {info.map((item, index) => (
            <div
              key={index}
              className="rtx-contact-info-card rtx-contact-info-drop"
              style={{ "--delay": `${0.2 + index * 0.2}s` }}
            >
              <div className="rtx-contact-info-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              {item.link ? (
                <a href={item.link} className="rtx-contact-info-link">
                  {item.desc}
                </a>
              ) : (
                <p>{item.desc}</p>
              )}
            </div>
          ))}

        </div>
      </section>

      {/*------------ Contact Office Showcase -----------------------*/}
      <section className="rtx-office-section" ref={officeRef}>
        <div className="rtx-office-container">

          {/* IMAGE */}
          <div
            className="rtx-office-image rtx-office-drop"
            style={{ "--delay": "0.2s" }}
          >
            <img src={atulya1} alt="Robotronix Office" />
          </div>

          {/* TEXT BLOCK */}
          <div
            className="rtx-office-content rtx-office-drop"
            style={{ "--delay": "0.4s" }}
          >
            <h2 className="rtx-office-title">
              Visit Our <span>Office</span>
            </h2>

            <p className="rtx-office-text">
              ✔ Pioneering product development & service-based organization<br />
              ✔ Known for exceeding client expectations<br />
              ✔ Vision for tech innovation & empowering communities
            </p>

            <a href="/contact" className="rtx-office-btn">
              Schedule a Visit →
            </a>
          </div>

        </div>
      </section>

      {/*---------------- Contact_Form ------------------- */}
      <section className="rtx-contact-section" ref={formRef}>
        <div className="rtx-contact-container">

          {/* LEFT FORM */}
          <div className="rtx-contact-form rtx-contact-drop" style={{ "--delay": "0.2s" }}>
            <h2 className="rtx-contact-title">
              Contact <span>Our Team</span>
            </h2>

            <p className="rtx-contact-subtext">
              Let’s discuss how we can help you build AI-driven solutions that transform your business.
            </p>

            <form onSubmit={handleSubmit}>

              {/* NAME */}
              <div className="rtx-input-group">
                <User className="rtx-input-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* EMAIL */}
              <div className="rtx-input-group">
                <Mail className="rtx-input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* PHONE */}
              <div className="rtx-input-group">
                <Phone className="rtx-input-icon" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* MESSAGE */}
              <div className="rtx-input-group rtx-textarea-group">
                <MessageSquare className="rtx-input-icon" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="rtx-contact-btn">
                Send Message →
              </button>
            </form>
          </div>

          {/* RIGHT INFO */}
          <div className="rtx-contact-info rtx-contact-drop" style={{ "--delay": "0.4s" }}>
            <h3>Quick Contact</h3>

            <div className="rtx-info-box">
              <Mail /> <span>info@robotronix.co.in</span>
            </div>

            <div className="rtx-info-box">
              <Phone /> <span>0731-2970998 / 9993150998</span>
            </div>

            <div className="rtx-info-box">
              <MapPin /> <span>Atulya IT Park, Indore (M.P.)</span>
            </div>

            <div className="rtx-info-divider"></div>

            <p className="rtx-info-text">
              Our team responds within 24 hours — faster for urgent project inquiries.
            </p>
          </div>

        </div>
      </section>
      {/*----------------- Contact_OfficeBlock -----------------*/}
      <section className="cb-office-wrapper" ref={officeBlockRef}>
        <div className="cb-office-inner">

          {/* HEADING */}
          <h2 className="cb-office-heading cb-office-drop" style={{ "--delay": "0.2s" }}>
            Our <span>Office Location</span>
          </h2>

          <p className="cb-office-description cb-office-drop" style={{ "--delay": "0.4s" }}>
            Come visit us — here’s our office location. Reach out if you need directions or help finding us.
          </p>

          {/* GOOGLE MAP IFRAME */}
          <div className="cb-office-map-box cb-office-drop" style={{ "--delay": "0.6s" }}>
            <iframe
              title="Robotronix Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.820496464278!2d77.3053525754953!3d28.635304075636794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb3fccf1895e43036!2sROBOTRONIX%20ENGINEERING%20TECH%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1700400000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "16px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>


        </div>
      </section>
      {/*----------------- Contact Details ----------------*/}
      <section className="cg-info-wrapper" ref={infoRef}>
        <div className="cg-info-container">

          {/* HEADER */}
          <h2 className="cg-info-title cg-info-drop" style={{ "--delay": "0.2s" }}>
            Contact <span>Information</span>
          </h2>

          <p className="cg-info-subtext cg-info-drop" style={{ "--delay": "0.35s" }}>
            Reach out to our team through any of the channels below.
            We're always here to help!
          </p>

          {/* GRID */}
          <div className="cg-info-grid">

            {/* ADDRESS */}
            <div className="cg-info-card cg-info-drop" style={{ "--delay": "0.5s" }}>
              <div className="cg-info-icon">
                <FiMapPin />
              </div>
              <h3>Our Office</h3>
              <p>Atulya IT Park, Indore, Madhya Pradesh</p>
            </div>

            {/* EMAIL */}
            <div className="cg-info-card cg-info-drop" style={{ "--delay": "0.7s" }}>
              <div className="cg-info-icon">
                <FiMail />
              </div>
              <h3>Email Us</h3>
              <p>info@robotronix.co.in</p>
            </div>

            {/* PHONE */}
            <div className="cg-info-card cg-info-drop" style={{ "--delay": "0.9s" }}>
              <div className="cg-info-icon">
                <FiPhoneCall />
              </div>
              <h3>Call Us</h3>
              <p>0731-2970998 / 9993150998</p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default ContactUs;
