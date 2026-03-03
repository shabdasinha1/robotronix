import { useEffect, useState } from "react";
import useRevealOnScroll from "../../../hooks/useRevealOnScroll";
import adminDashboardServices from "../../services/admin-dashboard-services";
import Modal from "../../../components/common/Modal";
import { GetApiErrorMessage } from "../../../utils/ErrorHandler";
import { useToast } from "../../../components/common/ToastContext";
import { FiEye, FiFileText } from "react-icons/fi";

const UserApplications = () => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.1,
    once: true,
  });

  const [applications, setApplications] = useState([]);
  const [activeApplication, setActiveApplication] = useState(null);
  const [loading, setLoading] = useState(false);

  const { showToast } = useToast();
  /* ================= FETCH APPLICATIONS ================= */
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true);
        const res = await adminDashboardServices.getApplications();
        setApplications(res.applications || []);
      } catch (err) {
        const error = GetApiErrorMessage(err);
        showToast(error, "error");
        // console.error("Failed to fetch applications", err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  /* ================= RESUME URL FIX ================= */
  const getResumeUrl = (resumePath) => {
    if (!resumePath) return "";
    return `${process.env.REACT_APP_API_BASE_URL}/${resumePath.replace(
      /\\/g,
      "/",
    )}`;
  };
  const handleStatusChange = async (id, status) => {
    try {
      await adminDashboardServices.updateApplicationStatus(id, { status });

      setApplications((prev) =>
        prev.map((app) => (app._id === id ? { ...app, status } : app)),
      );

      showToast("Status updated successfully", "success");
    } catch (err) {
      const error = GetApiErrorMessage(err);
      showToast(error, "error");
    }
  };

  return (
    <div
      ref={ref}
      className={`rtx-admin-applications ${visible ? "u-drop-visible" : ""}`}
    >
      {/* ================= HEADER ================= */}
      <div className="rtx-admin-page-header u-drop">
        <h2 className="u-title">
          Applications <span>Management</span>
        </h2>
        <p className="u-subtext">
          Job and internship applications received from the website
        </p>
      </div>

      {/* ================= TABLE ================= */}
      <div
        className="rtx-admin-table-wrapper u-drop"
        style={{ "--delay": "0.2s" }}
      >
        <table className="rtx-admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Category</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {!loading && applications.length === 0 && (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No applications found
                </td>
              </tr>
            )}

            {applications.map((app) => (
              <tr key={app._id}>
                <td>{app.fullName}</td>
                <td>{app.email}</td>
                <td>{app.phone || "-"}</td>
                <td>{app.category}</td>
                {/* ✅ DATE COLUMN */}
                <td>
                  {new Date(app.createdAt).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td>
                  <span className={`rtx-status ${app.status}`}>
                    {app.status}
                  </span>
                </td>
                <td className="rtx-action-buttons">
                  <button
                    className="btn-primary rtx-btn-view rtx-icon-btn"
                    onClick={() => setActiveApplication(app)}
                    title="View Application"
                    type="button"
                  >
                    <FiEye size={18} />
                  </button>

                  {app.resume && (
                    <button
                      className="btn-primary rtx-btn-view rtx-icon-btn "
                      onClick={() =>
                        window.open(getResumeUrl(app.resume), "_blank")
                      }
                      title="View Resume"
                      type="button"
                    >
                      <FiFileText size={18} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MODAL ================= */}
      {activeApplication && (
        <Modal
          isOpen={!!activeApplication}
          onClose={() => setActiveApplication(null)}
          className="rtx-user-application-modal"
        >
          <div className="rtx-modal-header">
            <h3>Application Details</h3>
          </div>

          <div className="rtx-modal-body">
            <div className="rtx-modal-row">
              <span>Name</span>
              <p>{activeApplication.fullName}</p>
            </div>

            <div className="rtx-modal-row">
              <span>Email</span>
              <p>{activeApplication.email}</p>
            </div>

            <div className="rtx-modal-row">
              <span>Phone</span>
              <p>{activeApplication.phone || "-"}</p>
            </div>

            <div className="rtx-modal-row">
              <span>City</span>
              <p>{activeApplication.city || "-"}</p>
            </div>

            <div className="rtx-modal-row">
              <span>Experience</span>
              <p>{activeApplication.experience || "0"} Years</p>
            </div>

            <div className="rtx-modal-row">
              <span>Current Company</span>
              <p>{activeApplication.currentCompany || "-"}</p>
            </div>

            <div className="rtx-modal-row">
              <span>Category</span>
              <p>{activeApplication.category}</p>
            </div>

            <div className="rtx-modal-row full">
              <span>Cover Letter</span>
              <p>{activeApplication.coverLetter}</p>
            </div>

            {activeApplication.resume && (
              <>
                <div className="rtx-modal-row full">
                  <span>Resume</span>
                  <div className="rtx-resume-actions">
                    <button
                      onClick={() =>
                        window.open(
                          getResumeUrl(activeApplication.resume),
                          "_blank",
                        )
                      }
                      // href={getResumeUrl(activeApplication.resume)}  
                      download
                      className="rtx-btn-resume"
                    >
                      Download
                    </button>
                  </div>
                </div>
                <div className="rtx-modal-row full">
                  <span>Actions</span>
                  <div className="rtx-status-actions">
                    <button
                      className="rtx-accept"
                      onClick={() =>
                        handleStatusChange(activeApplication._id, "shortlisted")
                      }
                    >
                      Accept
                    </button>

                    <button
                      className="rtx-reject"
                      onClick={() =>
                        handleStatusChange(activeApplication._id, "rejected")
                      }
                    >
                      Reject
                    </button>

                    <button
                      className="rtx-pending"
                      onClick={() =>
                        handleStatusChange(activeApplication._id, "pending")
                      }
                    >
                      Pending
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default UserApplications;
