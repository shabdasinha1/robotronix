import React, { useEffect, useRef, useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Scroll trigger for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-contact-wrapper" ref={sectionRef}>
      <div className="rtx-contact-container">

        {/* SECTION TITLE */}
        <h2 className={`rtx-contact-title ${visible ? "rtx-drop-visible" : ""}`}>
          Let’s Build Something <span>Amazing Together</span>
        </h2>

        <p className={`rtx-contact-sub ${visible ? "rtx-drop-visible" : ""}`}>
          Ready to transform your business? Get in touch and let's discuss your next project.
        </p>

        <div className="rtx-contact-grid">

          {/* LEFT — FORM */}
          <div
            className={`rtx-contact-left ${
              visible ? "rtx-left-visible" : ""
            }`}
          >
            <h3>Send us a message</h3>

            <div className="rtx-form-row">
              <div className="rtx-form-field">
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>

              <div className="rtx-form-field">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div>
            </div>

            <div className="rtx-form-field">
              <label>Email</label>
              <input type="email" placeholder="john@company.com" />
            </div>

            <div className="rtx-form-field">
              <label>Project Details</label>
              <textarea placeholder="Tell us about your project..." />
            </div>

            <button className="rtx-contact-btn">
              Send Message ✈
            </button>
          </div>

          {/* RIGHT — CONTACT INFO */}
          <div
            className={`rtx-contact-right ${
              visible ? "rtx-right-visible" : ""
            }`}
          >
            <h3>Get in Touch</h3>

            <p className="rtx-right-desc">
              Have a question or ready to start your project?
              Reach out through any of the channels below.
            </p>

            <div className="rtx-info-card">
              <h4>Email Us</h4>
              <p>hello@nexatech.com</p>
            </div>

            <div className="rtx-info-card">
              <h4>Call Us</h4>
              <p>+1 (555) 123-4567</p>
            </div>

            <div className="rtx-info-card">
              <h4>Visit Us</h4>
              <p>123 Tech Plaza, Silicon Valley, CA</p>
            </div>
          </div>
        </div>

        {/* BOTTOM BANNER */}
        <div
          className={`rtx-contact-banner ${
            visible ? "rtx-drop-visible" : ""
          }`}
        >
          <h4>⚡ Quick Response</h4>
          <p>We typically respond within 24 hours during business days.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
