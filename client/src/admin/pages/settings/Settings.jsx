import React, { useEffect, useState, useCallback } from "react";

import Card from "../../../components/common/Card";
import Modal from "../../../components/common/Modal";

import { FiEdit, FiExternalLink } from "react-icons/fi";

import { useToast } from "../../../components/common/ToastContext";
import { GetApiErrorMessage } from "../../../utils/ErrorHandler";

import adminDashboardServices from "../../services/admin-dashboard-services";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
const SiteSettings = () => {
  const { showToast } = useToast();

  /* ======================================================
     STATE MANAGEMENT
  ====================================================== */

  const [contact, setContact] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  /* Form state */
  const [form, setForm] = useState({
    phones: [],
    emails: [],
    address: {
      line1: "",
      area: "",
      landmark: "",
      city: "",
      state: "",
      pincode: "",
      country: "",
    },
    socialLinks: {
      linkedin: "",
      instagram: "",
      facebook: "",
      youtube: "",
      twitter: "",
      whatsapp: "",
    },
    mapsLink: "",
  });

  /* Temporary inputs for tag style entry */
  const [phoneInput, setPhoneInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  /* ======================================================
     FETCH CONTACT DETAILS FROM API
  ====================================================== */

  const fetchContact = useCallback(async () => {
    try {
      const res = await adminDashboardServices.getContact();

      const data = res.data;

      setContact(data);

      if (data) {
        setForm({
          phones: data.phones?.map((p) => p.number) || [],
          emails: data.emails?.map((e) => e.email) || [],

          /* Safe initialization to avoid undefined errors */
          address: {
            line1: data.address?.line1 || "",
            area: data.address?.area || "",
            landmark: data.address?.landmark || "",
            city: data.address?.city || "",
            state: data.address?.state || "",
            pincode: data.address?.pincode || "",
            country: data.address?.country || "",
          },

          socialLinks: {
            linkedin: data.socialLinks?.linkedin || "",
            instagram: data.socialLinks?.instagram || "",
            facebook: data.socialLinks?.facebook || "",
            youtube: data.socialLinks?.youtube || "",
            twitter: data.socialLinks?.twitter || "",
            whatsapp: data.socialLinks?.whatsapp || "",
          },

          mapsLink: data.mapsLink || "",
        });
      }
    } catch (error) {
      showToast(GetApiErrorMessage(error), "error");
    }
  }, [showToast]);

  useEffect(() => {
    fetchContact();
  }, [fetchContact]);

  /* ======================================================
     SUBMIT UPDATED CONTACT DETAILS
  ====================================================== */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      /* Convert phones & emails to API structure */
      const payload = {
        phones: form.phones.map((p) => ({
          label: "office",
          number: p,
        })),

        emails: form.emails.map((e) => ({
          label: "general",
          email: e,
        })),

        address: form.address,
        socialLinks: form.socialLinks,
        mapsLink: form.mapsLink,
      };

      const res = await adminDashboardServices.updateContact(payload);

      setContact(res.data);

      showToast("Contact details updated successfully", "success");

      setIsModalOpen(false);
    } catch (error) {
      showToast(GetApiErrorMessage(error), "error");
    }
  };

  /* ======================================================
     COMPONENT UI
  ====================================================== */

  return (
    <div className="rtx-admin-section">
      {/* ======================================================
          PAGE HEADER
      ====================================================== */}

      <div className="rtx-admin-page-header">
        <div>
          <h2 className="u-title rtx-admin-title">
            Site <span>Settings</span>
          </h2>

          <p className="u-subtext rtx-admin-subtitle">
            Manage your website configuration and contact information
          </p>
        </div>
      </div>

      {/* ======================================================
          CONTACT DETAILS CARD
      ====================================================== */}

      {contact && (
        <Card className="rtx-admin-settings-card rtx-admin-testimonials-card">
          <div className="rtx-card-content flex-column-card">
            {/* Card Header */}
            <div className="rtx-admin-header rtx-site-setting-header">
              <div>
                <h4 className="rtx-admin-contact-title">Contact Details</h4>

                <p className="u-subtext rtx-admin-subtitle">
                  Manage phone numbers, emails, address and social media links
                </p>
              </div>

              <div className="rtx-admin-actions">
                <button
                  className="rtx-filter-btn rtx-application-filter"
                  onClick={() => setIsModalOpen(true)}
                >
                  <FiEdit /> Edit Contact
                </button>
              </div>
            </div>

            {/* ================= PHONE NUMBERS ================= */}

            <h3 className="rtx-settings-heading">Phone Numbers</h3>

            <div className="rtx-settings-list">
              {contact.phones?.map((p, i) => (
                <span key={i} className="tech-chip contact-chip">
                  {p.number}
                </span>
              ))}
            </div>

            {/* ================= EMAILS ================= */}

            <h3 className="rtx-settings-heading">Emails</h3>

            <div className="rtx-settings-list">
              {contact.emails?.map((e, i) => (
                <span key={i} className="tech-chip contact-chip">
                  {e.email}
                </span>
              ))}
            </div>

            {/* ================= ADDRESS ================= */}

            <h3 className="rtx-settings-heading">Address</h3>

            <p className="rtx-text-muted">
              {contact.address?.line1}, {contact.address?.area},{" "}
              {contact.address?.city}, {contact.address?.state}{" "}
              {contact.address?.pincode}
            </p>

            {/* ================= SOCIAL LINKS ================= */}
            <h3 className="rtx-settings-heading">Social Links</h3>

            <div className="rtx-footer-social rtx-dashboard-social-icon">
              {/* GOOGLE MAP LOCATION */}

              {contact.mapsLink && (
                <a
                  href={contact.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Location on Google Maps"
                >
                  <FaMapMarkerAlt />
                </a>
              )}

              {/* LINKEDIN */}

              {contact.socialLinks?.linkedin && (
                <a
                  href={contact.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              )}

              {/* INSTAGRAM */}

              {contact.socialLinks?.instagram && (
                <a
                  href={contact.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              )}

              {/* FACEBOOK */}

              {contact.socialLinks?.facebook && (
                <a
                  href={contact.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
              )}

              {/* WHATSAPP */}

              {contact.socialLinks?.whatsapp && (
                <a
                  href={contact.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              )}

              {/* YOUTUBE */}

              {contact.socialLinks?.youtube && (
                <a
                  href={contact.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              )}

              {/* TWITTER / X */}

              {contact.socialLinks?.twitter && (
                <a
                  href={contact.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter />
                </a>
              )}
            </div>
          </div>
        </Card>
      )}

      {/* ======================================================
          UPDATE CONTACT MODAL
      ====================================================== */}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Update Contact Details"
      >
        <form className="rtx-modal-body" onSubmit={handleSubmit}>
          {/* ================= PHONE INPUT ================= */}

          <div className="rtx-form-group">
            <label>Phone Numbers</label>

            <input
              placeholder="Enter phone number and press Enter"
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();

                  if (
                    phoneInput.trim() &&
                    !form.phones.includes(phoneInput.trim())
                  ) {
                    setForm({
                      ...form,
                      phones: [...form.phones, phoneInput.trim()],
                    });

                    setPhoneInput("");
                  }
                }
              }}
            />
          </div>

          {/* Phone tags */}
          <div className="tech-tags">
            {form.phones.map((p, i) => (
              <span key={i} className="tech-chip contact-chip">
                {p}

                <button
                  type="button"
                  onClick={() =>
                    setForm({
                      ...form,
                      phones: form.phones.filter((_, index) => index !== i),
                    })
                  }
                >
                  ×
                </button>
              </span>
            ))}
          </div>

          {/* ================= EMAIL INPUT ================= */}

          <div className="rtx-form-group">
            <label>Emails</label>

            <input
              placeholder="Enter email and press Enter"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();

                  if (
                    emailInput.trim() &&
                    !form.emails.includes(emailInput.trim())
                  ) {
                    setForm({
                      ...form,
                      emails: [...form.emails, emailInput.trim()],
                    });

                    setEmailInput("");
                  }
                }
              }}
            />
          </div>

          {/* Email tags */}
          <div className="tech-tags">
            {form.emails.map((e, i) => (
              <span key={i} className="tech-chip contact-chip">
                {e}

                <button
                  type="button"
                  onClick={() =>
                    setForm({
                      ...form,
                      emails: form.emails.filter((_, index) => index !== i),
                    })
                  }
                >
                  ×
                </button>
              </span>
            ))}
          </div>

          {/* ================= ADDRESS GRID ================= */}

          <div className="rtx-form-grid">
            <div className="rtx-form-group full">
              <label>Address Line 1</label>
              <input
                value={form.address.line1}
                onChange={(e) =>
                  setForm({
                    ...form,
                    address: { ...form.address, line1: e.target.value },
                  })
                }
              />
            </div>

            <div className="rtx-form-group">
              <label>Area</label>
              <input
                value={form.address.area}
                onChange={(e) =>
                  setForm({
                    ...form,
                    address: { ...form.address, area: e.target.value },
                  })
                }
              />
            </div>

            <div className="rtx-form-group">
              <label>Landmark</label>
              <input
                value={form.address.landmark}
                onChange={(e) =>
                  setForm({
                    ...form,
                    address: { ...form.address, landmark: e.target.value },
                  })
                }
              />
            </div>

            <div className="rtx-form-group">
              <label>City</label>
              <input
                value={form.address.city}
                onChange={(e) =>
                  setForm({
                    ...form,
                    address: { ...form.address, city: e.target.value },
                  })
                }
              />
            </div>

            <div className="rtx-form-group">
              <label>State</label>
              <input
                value={form.address.state}
                onChange={(e) =>
                  setForm({
                    ...form,
                    address: { ...form.address, state: e.target.value },
                  })
                }
              />
            </div>

            <div className="rtx-form-group">
              <label>Pincode</label>
              <input
                value={form.address.pincode}
                onChange={(e) =>
                  setForm({
                    ...form,
                    address: { ...form.address, pincode: e.target.value },
                  })
                }
              />
            </div>

            <div className="rtx-form-group">
              <label>Country</label>
              <input
                value={form.address.country}
                onChange={(e) =>
                  setForm({
                    ...form,
                    address: { ...form.address, country: e.target.value },
                  })
                }
              />
            </div>
          </div>

          {/* ================= SOCIAL LINKS ================= */}

          {Object.keys(form.socialLinks).map((key) => (
            <div key={key} className="rtx-form-group">
              <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>

              <input
                value={form.socialLinks[key]}
                onChange={(e) =>
                  setForm({
                    ...form,
                    socialLinks: {
                      ...form.socialLinks,
                      [key]: e.target.value,
                    },
                  })
                }
              />
            </div>
          ))}

          {/* ================= GOOGLE MAP LINK ================= */}

          <div className="rtx-form-group">
            <label>Google Maps Link</label>

            <input
              placeholder="Paste Google Maps location link"
              value={form.mapsLink}
              onChange={(e) =>
                setForm({
                  ...form,
                  mapsLink: e.target.value,
                })
              }
            />
          </div>

          {/* ================= SUBMIT BUTTON ================= */}

          <div className="rtx-modal-actions">
            <button type="submit" className="btn btn-primary">
              Update Contact
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default SiteSettings;
