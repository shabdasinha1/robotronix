import useRevealOnScroll from "../../../hooks/useRevealOnScroll";
import { NavLink } from "react-router-dom";

const LeadsList = () => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.15,
    once: true,
  });

  return (
    <section
      ref={ref}
      className={`rtx-admin-leads ${
        visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container">

        {/* ================= HEADER ================= */}
        <div className="rtx-admin-page-header u-drop">
          <h2 className="u-title">
            Leads <span>Management</span>
          </h2>
          <p className="u-subtext">
            View and manage contact requests and inquiries.
          </p>
        </div>

        {/* ================= TABLE CARD ================= */}
        <div className="rtx-admin-card u-drop">

          {/* TABLE HEADER */}
          <div className="rtx-admin-card-header">
            <h3 className="rtx-admin-card-title">
              All Leads
            </h3>
          </div>

          {/* TABLE */}
          <div className="rtx-admin-table-wrapper">
            <table className="rtx-admin-table w-100">

              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {/* PLACEHOLDER ROW */}
                <tr>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                  <td>
                    <span className="rtx-admin-status">
                      New
                    </span>
                  </td>
                  <td>—</td>
                  <td>
                    <NavLink
                      to="/admin/leads/1"
                      className="rtx-admin-link"
                    >
                      View
                    </NavLink>
                  </td>
                </tr>

                {/* EMPTY STATE */}
                <tr>
                  <td colSpan="6">
                    <p className="rtx-admin-placeholder">
                      Leads will appear here once users submit the contact form.
                    </p>
                  </td>
                </tr>
              </tbody>

            </table>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LeadsList;
