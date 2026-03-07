import { useEffect, useRef, useState } from "react";
import useRevealOnScroll from "../../../hooks/useRevealOnScroll";
import adminDashboardServices from "../../services/admin-dashboard-services";
import Modal from "../../../components/common/Modal";
import { GetApiErrorMessage } from "../../../utils/ErrorHandler";
import { useToast } from "../../../components/common/ToastContext";
import { FiEye, FiFileText, FiSliders } from "react-icons/fi";
import { BiSortAlt2 } from "react-icons/bi";
import Dropdown from "../../../components/common/Dropdown";

const UserApplications = () => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.1,
    once: true,
  });

  const [applications, setApplications] = useState([]);
  const [activeApplication, setActiveApplication] = useState(null);
  const [loading, setLoading] = useState(false);

  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const [filters, setFilters] = useState({
    status: "",
    category: "",
    name: "",
    dateFrom: "",
    dateTo: "",
  });

  const [sort, setSort] = useState({
    field: "",
    order: "",
  });
  const sortRef = useRef(null);

  const { showToast } = useToast();
  /* ================= FETCH APPLICATIONS ================= */
  const fetchApplications = async (filterParams = {}, sortParams = {}) => {
    try {
      setLoading(true);

      const res = await adminDashboardServices.getApplications({
        ...filterParams,
        ...sortParams,
      });

      setApplications(res.applications || []);
    } catch (err) {
      const error = GetApiErrorMessage(err);
      showToast(error, "error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchApplications();
  }, []);

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const applyFilters = () => {
    const params = {
      status: filters.status,
      category: filters.category,
      name: filters.name,
      dateFrom: filters.dateFrom,
      dateTo: filters.dateTo,
    };

    // fetchApplications(params);
    fetchApplications(params, sort);

    setFilterOpen(false);
  };
  const handleSort = (field, order) => {
    const newSort = {
      sortBy: field,
      order: order,
    };

    setSort(newSort);

    fetchApplications(filters, newSort);

    setSortOpen(false);
  };
  const clearFilters = () => {
    const empty = {
      status: "",
      category: "",
      name: "",
      dateFrom: "",
      dateTo: "",
    };

    setFilters(empty);
    fetchApplications();
  };
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
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`rtx-admin-applications ${visible ? "u-drop-visible" : ""}`}
    >
      {/* ================= HEADER ================= */}
      <div className="rtx-admin-page-header u-drop rtx-header-flex">
        <div>
          <h2 className="u-title">
            Applications <span>Management</span>
          </h2>
          <p className="u-subtext">
            Job and internship applications received from the website
          </p>
        </div>

        <div className="filter-btn-wrapper">
          {/* SORT BY BUTTON */}
          <div className="ui-dropdown rtx-sort-dropdown" ref={sortRef}>
            <button
              className="rtx-filter-btn rtx-application-filter"
              onClick={() => setSortOpen(!sortOpen)}
            >
              <BiSortAlt2 />
              Sort By
            </button>

            {sortOpen && (
              <div className="ui-dropdown-menu rtx-sort-menu">
                <button
                  className={`ui-dropdown-item ${
                    sort.sortBy === "fullName" && sort.order === "asc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("fullName", "asc")}
                >
                  Name A-Z
                </button>

                <button
                  className={`ui-dropdown-item ${
                    sort.sortBy === "fullName" && sort.order === "desc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("fullName", "desc")}
                >
                  Name Z-A
                </button>

                <button
                  className={`ui-dropdown-item ${
                    sort.sortBy === "createdAt" && sort.order === "desc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("createdAt", "desc")}
                >
                  Latest
                </button>

                <button
                  className={`ui-dropdown-item ${
                    sort.sortBy === "createdAt" && sort.order === "asc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("createdAt", "asc")}
                >
                  Oldest
                </button>
              </div>
            )}
          </div>
          {/* FILTER BUTTON */}
          <button
            className="rtx-filter-btn rtx-application-filter"
            onClick={() => setFilterOpen(true)}
          >
            <FiSliders />
            Filters
          </button>
        </div>
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

      {/* ================= FILTER MODAL ================= */}
      <Modal
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        className="rtx-filter-modal"
      >
        <div className="rtx-modal-header">
          <h3>Filter Applications</h3>
        </div>

        <div className="rtx-modal-body">
          <div className="rtx-modal-row">
            <span>Status</span>
            {/* <select
              className="rtx-input"
              value={filters.status}
              onChange={(e) => handleFilterChange("status", e.target.value)}
            >
              <option value="">All</option>
              <option value="pending">Pending</option>
              <option value="reviewed">Reviewed</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="rejected">Rejected</option>
            </select> */}
            <Dropdown
              value={filters.status}
              placeholder="All Status"
              options={[
                { label: "All", value: "" },
                { label: "Pending", value: "pending" },
                { label: "Reviewed", value: "reviewed" },
                { label: "Shortlisted", value: "shortlisted" },
                { label: "Rejected", value: "rejected" },
              ]}
              onChange={(value) => handleFilterChange("status", value)}
            />
          </div>

          <div className="rtx-modal-row">
            <span>Category</span>
            {/* <select
              className="rtx-input"
              value={filters.category}
              onChange={(e) => handleFilterChange("category", e.target.value)}
            >
              <option value="">All</option>
              <option value="job">Job</option>
              <option value="internship">Internship</option>
            </select> */}
            <Dropdown
              value={filters.category}
              placeholder="All Categories"
              options={[
                { label: "All", value: "" },
                { label: "Job", value: "job" },
                { label: "Internship", value: "internship" },
              ]}
              onChange={(value) => handleFilterChange("category", value)}
            />
          </div>

          <div className="rtx-modal-row">
            <span>Name</span>
            <input
              type="text"
              placeholder="Search by name"
              className="rtx-input"
              value={filters.name}
              onChange={(e) => handleFilterChange("name", e.target.value)}
            />
          </div>

          <div className="rtx-modal-row">
            <span>Date From</span>
            <input
              type="date"
              className="rtx-input"
              value={filters.dateFrom}
              onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
            />
          </div>

          <div className="rtx-modal-row">
            <span>Date To</span>
            <input
              type="date"
              className="rtx-input"
              value={filters.dateTo}
              onChange={(e) => handleFilterChange("dateTo", e.target.value)}
            />
          </div>

          <div className="rtx-modal-filter-btn ">
            <button
              className="rtx-filter-btn rtx-application-filter"
              onClick={applyFilters}
            >
              Apply Filters
            </button>
            <button
              className="rtx-filter-btn rtx-application-filter"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </Modal>

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
