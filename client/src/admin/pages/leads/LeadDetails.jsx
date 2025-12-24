import useRevealOnScroll from "../../../hooks/useRevealOnScroll";
import { NavLink, useParams } from "react-router-dom";

const LeadDetails = () => {
  const { id } = useParams();

  const { ref, visible } = useRevealOnScroll({
    threshold: 0.15,
    once: true,
  });

  return (
    <section
      ref={ref}
      className={`rtx-admin-lead-details u-section ${
        visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container">

        {/* ================= HEADER ================= */}
        <div className="rtx-admin-page-header u-drop">
          <h2 className="u-title">
            Lead <span>Details</span>
          </h2>
          <p className="u-subtext">
            View complete information submitted by the user.
          </p>
        </div>

        {/* ================= ACTION BAR ================= */}
        <div className="rtx-admin-actions u-drop">
          <NavLink
            to="/admin/leads"
            className="rtx-admin-link"
          >
            ← Back to Leads
          </NavLink>
        </div>

        {/* ================= DETAILS CARD ================= */}
        <div className="rtx-admin-card u-drop">

          <div className="rtx-admin-card-header">
            <h3 className="rtx-admin-card-title">
              Lead ID: {id}
            </h3>
            <span className="rtx-admin-status">
              New
            </span>
          </div>

          <div className="rtx-admin-card-body">

            {/* INFO GRID */}
            <div className="u-grid-auto">

              <div className="rtx-admin-info-block">
                <h4>Name</h4>
                <p>—</p>
              </div>

              <div className="rtx-admin-info-block">
                <h4>Email</h4>
                <p>—</p>
              </div>

              <div className="rtx-admin-info-block">
                <h4>Phone</h4>
                <p>—</p>
              </div>

              <div className="rtx-admin-info-block">
                <h4>Submitted On</h4>
                <p>—</p>
              </div>

            </div>

            {/* MESSAGE */}
            <div className="rtx-admin-message-block">
              <h4>Message</h4>
              <p className="rtx-admin-placeholder">
                User message content will appear here.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LeadDetails;
