import React, { useState, useMemo, useCallback } from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { NavLink } from "react-router-dom";

// import atulya1 from "../../assets/images/atulya1.webp";
import atulya1 from "../../assets/images/atulya2.webp";
import { Mail, Phone, MapPin, User, MessageSquare, Star } from "lucide-react";
import messagesApi from "../../api/messages.api";
import { useToast } from "../../components/common/ToastContext";
import { GiDiscussion } from "react-icons/gi";
import { IoDocumentTextOutline } from "react-icons/io5";

const ContactUs = React.memo(() => {
  /* ===============================
     SHARED REVEAL CONFIG
  =============================== */
  const revealConfig = useMemo(() => ({ once: true }), []);

  const hero = useRevealOnScroll(revealConfig);
  const infoGrid = useRevealOnScroll(revealConfig);
  const office = useRevealOnScroll(revealConfig);
  const form = useRevealOnScroll(revealConfig);
  const map = useRevealOnScroll(revealConfig);

  /* ===============================
     STATE
  =============================== */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  /* =======================================================================
      STATE AND ENVENT HANDLER FOR EXPANDABLE IMAGE
   ======================================================================= */
  const [previewImg, setPreviewImg] = useState(null);
  const openPreview = (src) => setPreviewImg(src);
  const closePreview = () => setPreviewImg(null);

  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  /* ===============================
     STATIC INFO DATA (MEMOIZED)
  =============================== */
  const info = useMemo(
    () => [
      {
        icon: <MapPin />,
        title: "Office Address",
        desc: " 402, Atulya IT PARK, MPIDC, Khandwa Rd, Opposite Indian Coffee House, Indore, Madhya Pradesh - 452001",
      },
      {
        icon: <Mail/>,
        title: "Email",
        desc: "info@robotronix.co.in",
        link: "mailto:info@robotronix.co.in",
      },
      {
        icon: <Phone/>,
        title: "Phone",
        desc: (
          <span style={{lineHeight:"30px"}}>
            +91 99931 50998 <br /> +91 77248 52726 <br/> 0731-2970998
          </span>
        ),
        link: "tel:+919993150998",
      },
      {
        icon: <Star/>,
        title: "Why Choose Us",
        desc: (
          <>
            🤝 Expert Engineering Team <br />
            🔐 Secure & Confidential <br />
            💡 Free Initial Consultation
          </>
        ),
      },
    ],
    [],
  );

  /* ===============================
     HANDLERS (MEMOIZED)
  =============================== */
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
  async (e) => {
    e.preventDefault();
    if (loading) return;

    // ✅ CHARACTER VALIDATION (MIN 40 INCLUDING SPACES)
    const messageLength = formData.message.trim().length;

    if (messageLength < 40) {
      showToast(
        "Your message must contain at least 40 characters.",
        "error"
      );
      return;
    }

    try {
      setLoading(true);

      await messagesApi.createMessage(formData);

      showToast("Message sent successfully!", "success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      showToast("Failed to send message", "error");
    } finally {
      setLoading(false);
    }
  },
  [formData, loading, showToast],
);

  const scrollToContactForm = useCallback(() => {
    const el = document.getElementById("contact-form");
    el?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        ref={hero.ref}
        className={`rtx-cpage-hero-wrapper u-section u-section-lg ${
          hero.visible ? "u-drop-visible" : ""
        }`}
      >
        <div className="rtx-cpage-hero-particles"></div>

        <div className="u-container-center">
          <span className="rtx-cpage-hero-badge u-drop">
            We’re Here to Help
          </span>

          <h1 className="rtx-cpage-hero-title u-drop">
            Get in Touch with <br />
            <span className="rtx-cpage-hero-accent">
              Robotronix Engineering Tech Pvt. Ltd.
            </span>
          </h1>

          <p className="rtx-cpage-hero-subtext u-drop">
           Whether you need support, collaboration, or a custom solution — our team is ready to assist you.
          </p>

          <div className="rtx-contact-hero-btn-group u-drop">
            <button
              className="btn btn-primary btn-lg"
              onClick={scrollToContactForm}
            >
              Contact Our Team →
            </button>

            <NavLink to="tel:+919993150998" className="btn btn-outline btn-lg">
              Call Us
            </NavLink>
          </div>

          {/* <div className="rtx-cpage-quick">
            <a href="mailto:info@robotronix.co.in">📧 info@robotronix.co.in</a>

            <span className="divider">•</span>

            <a href="tel:+919993150998">📞 +91 9993150998, +91 77248 52726</a>
          </div> */}
        </div>
      </section>

      {/* ================= INFO GRID ================= */}
      <section
        ref={infoGrid.ref}
        className={`u-section ${infoGrid.visible ? "u-drop-visible" : ""}`}
      >
        <div className="u-container u-grid-auto">
          {info.map((item, i) => (
            <div
              key={i}
              className="card card-glass rtx-contact-info-card u-drop"
            >
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
        className={`u-section ${office.visible ? "u-drop-visible" : ""}`}
      >
        <div className="u-container rtx-cpage-office-container">
          <div className="rtx-cpage-office-image u-drop">
            <img
              src={atulya1}
              alt="Robotronix Office"
              onClick={() => openPreview(atulya1)}
            />
          </div>

          <div className="rtx-office-content u-drop">
            <h2 className="u-title">
              Visit Our <span>Office</span>
            </h2>

            <p className="rtx-cpage-office-text">
              ✔ Product & service-based organization <br />
              ✔ Exceeding client expectations <br />✔ Driving tech innovation
            </p>

            <button
              className="btn btn-primary btn-lg"
              onClick={scrollToContactForm}
            >
              Schedule a Visit →
            </button>
          </div>
        </div>
      </section>

      {/*
       ================================================================================================
                  EXPANDABLE OFFICE IMAGE (ATULYA IT PARK)
       ================================================================================================
       */}
      {previewImg && (
        <div className="rtx-image-preview-overlay" onClick={closePreview}>
          <button
            className="rtx-image-preview-close"
            onClick={closePreview}
            aria-label="Close preview"
          >
            ✕
          </button>

          <img
            src={previewImg}
            alt="Preview"
            className="rtx-image-preview-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      {/* ================= FORM ================= */}
      <section
        id="contact-form"
        ref={form.ref}
        className={`u-section ${form.visible ? "u-drop-visible" : ""}`}
      >
        <div className="u-container rtx-cpage-contact-container">
          <div className="rtx-cpage-form card card-glass u-drop">
            <h2 className="u-title">
              Contact <span>Our Team</span>
            </h2>

            <p className="u-subtext">
              Let’s discuss how we can help your business.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="rtx-cpage-input-group">
                <User className="rtx-cpage-input-icon" />
                <input
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="rtx-cpage-input-group">
                <Mail className="rtx-cpage-input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="rtx-cpage-input-group">
                <Phone className="rtx-cpage-input-icon" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="rtx-cpage-input-group rtx-cpage-textarea-group">
                <MessageSquare className="rtx-cpage-input-icon" />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                className="btn btn-primary w-100 btn-lg"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>

          <div className="rtx-cpage-contact-info card card-glass u-drop">
            <h3 className="text-accent">What Happens Next?</h3>
            <div className="rtx-cpage-info-box">
              <Mail /> We review your message
            </div>
            <div className="rtx-cpage-info-box">
              <Phone /> Our team contacts you
            </div>
            <div className="rtx-cpage-info-box">
              <GiDiscussion />
              Requirement discussion
            </div>
            <div className="rtx-cpage-info-box">
              <IoDocumentTextOutline />
              Proposal & roadmap
            </div>
            <p className="rtx-cpage-info-text">We respond within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section
        ref={map.ref}
        className={`u-section ${map.visible ? "u-drop-visible" : ""}`}
      >
        <div className="u-container-center">
          <h2 className="u-title u-drop">
            Our <span>Office Location</span>
          </h2>

          <p className="u-subtext u-drop">
            Come visit us — we’re happy to help.
          </p>

          <div className="rtx-cpage-map-box u-drop">
            <iframe
              title="Robotronix Office"
              src="https://www.google.com/maps?q=ROBOTRONIX+ENGINEERING+TECH+PVT.+LTD.&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
});

export default ContactUs;
