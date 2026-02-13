import React, { useCallback, useMemo, useState } from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import Button from "../../components/common/Button";
import messagesApi from "../../api/messages.api";
import { useToast } from "../common/ToastContext";
import { Mail, Phone, MapPin } from "lucide-react";
const ContactSection = React.memo(() => {
  const { showToast } = useToast();
  /* ===============================
     OBSERVER OPTIONS (MEMOIZED)
  =============================== */

  const revealOptions = useMemo(
    () => ({
      threshold: 0.15,
      rootMargin: "0px 0px -120px 0px",
      once: true,
    }),
    [],
  );

  const { ref, visible } = useRevealOnScroll(revealOptions);

  /* ===============================
     FORM STATE
  =============================== */

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  /* ===============================
     HANDLERS (MEMOIZED)
  =============================== */

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

 const handleSubmit = useCallback(
  async (e) => {
    e.preventDefault();
    if (loading) return;

    // ✅ CHARACTER VALIDATION (MIN 40 INCLUDING SPACES)
    const messageLength = formData.message.trim().length;

    if (messageLength < 40) {
      showToast(
        "Project details must contain at least 40 characters.",
        "error"
      );
      return;
    }

    setLoading(true);

    try {
      await messagesApi.createMessage(formData);

      showToast("Message sent successfully!", "success");

      setFormData({
        name: "",
        phone: "",
        email: "",
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


  return (
    <section
      ref={ref}
      className={`rtx-contact-wrapper u-section u-section-lg ${
        visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="rtx-contact-container u-container-center">
        {/* TITLE */}
        <h2 className="rtx-contact-title u-drop" style={{ "--delay": "0.2s" }}>
          Let’s Build Something <span>Amazing Together</span>
        </h2>

        <p className="rtx-contact-sub u-drop" style={{ "--delay": "0.4s" }}>
          Ready to transform your business? Get in touch and let's discuss your
          next project.
        </p>

        {/* GRID */}
        <div className="rtx-contact-grid">
          {/* LEFT — FORM */}
          <form
            className="rtx-contact-left u-drop"
            style={{ "--delay": "0.6s" }}
            onSubmit={handleSubmit}
          >
            <h3>Send us a message</h3>

            <div className="rtx-form-row">
              <div className="rtx-form-field">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="rtx-form-field">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="rtx-form-field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="rtx-form-field">
              <label>Project Details</label>
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-100"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message ✈"}
            </Button>
          </form>

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
              <p className="d-flex">
                <Mail /> <p> info@robotronix.co.in</p>
              </p>
            </div>

            <div className="rtx-info-card">
              <h4>Call Us</h4>
              <p className="d-flex">
                <Phone /> <p>+91 99931 50998, +91 77248 52726</p>
              </p>
            </div>

            <div className="rtx-info-card">
              <h4>Visit Us</h4>
              <p className="d-flex">
                <MapPin />
                <p>
                  402, Atulya IT PARK, MPIDC, Khandwa Rd,
                  <br />
                  Opposite Indian Coffee House,
                  <br />
                  Indore, Madhya Pradesh - 452001
                </p>
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BANNER */}
        <div className="rtx-contact-banner u-drop" style={{ "--delay": "1s" }}>
          <h4>⚡ Quick Response</h4>
          <p>We typically respond within 24 hours during business days.</p>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
