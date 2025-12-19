import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const ContactSection = () => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.15,
    rootMargin: "0px 0px -120px 0px",
    once: true,
  });

  return (
    <section
      ref={ref}
      className={`rtx-contact-wrapper u-section ${
        visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="rtx-contact-container u-container-center">

        {/* TITLE */}
        <h2
          className="rtx-contact-title u-drop"
          style={{ "--delay": "0.2s" }}
        >
          Let’s Build Something <span>Amazing Together</span>
        </h2>

        <p
          className="rtx-contact-sub u-drop"
          style={{ "--delay": "0.4s" }}
        >
          Ready to transform your business? Get in touch and let's discuss your
          next project.
        </p>

        {/* GRID */}
        <div className="rtx-contact-grid">

          {/* LEFT — FORM */}
          <div
            className="rtx-contact-left u-drop"
            style={{ "--delay": "0.6s" }}
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

            <button className="btn btn-primary btn-lg w-100">
              Send Message ✈
            </button>
          </div>

          {/* RIGHT — INFO */}
          <div
            className="rtx-contact-right u-drop"
            style={{ "--delay": "0.8s" }}
          >
            <h3>Get in Touch</h3>

            <p className="rtx-right-desc">
              Have a question or ready to start your project? Reach out through
              any of the channels below.
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
          className="rtx-contact-banner u-drop"
          style={{ "--delay": "1s" }}
        >
          <h4>⚡ Quick Response</h4>
          <p>We typically respond within 24 hours during business days.</p>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
