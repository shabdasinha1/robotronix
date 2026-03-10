import React, { useEffect, useState } from "react";
import Card from "../../../components/common/Card";
import Button from "../../../components/common/Button";
import Modal from "../../../components/common/Modal";
import adminDashboardServices from "../../services/admin-dashboard-services";
import { GetApiErrorMessage } from "../../../utils/ErrorHandler";
import { useToast } from "../../../components/common/ToastContext";
import { FiEye, FiEdit, FiPlus, FiFilter } from "react-icons/fi";
import Dropdown from "../../../components/common/Dropdown";

const Opportunities = () => {
  const { showToast } = useToast();

  const [opportunities, setOpportunities] = useState([]);
  const [showClosed, setShowClosed] = useState(false);

  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [selectedOpportunity, setSelectedOpportunity] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    type: "job",
    location: "",
    description: "",
    experience: "",
    duration: "",
    employmentType: "Full Time",
    category: "",
  });
  const [filterType, setFilterType] = useState("all");

  const typeFilterOptions = [
    { label: "All", value: "all" },
    { label: "Jobs", value: "job" },
    { label: "Internships", value: "internship" },
  ];

  const opportunityTypeOptions = [
    { label: "Job", value: "job" },
    { label: "Internship", value: "internship" },
  ];
  const employmentTypeOptions = [
    { label: "Full Time", value: "Full Time" },
    { label: "Part Time", value: "Part Time" },
    { label: "Remote", value: "Remote" },
    { label: "Contract", value: "Contract" },
  ];
  /* =================================
        FETCH OPPORTUNITIES
  ================================= */

  const fetchOpportunities = async () => {
    try {
      const params = {
        isActive: showClosed ? false : true,
      };

      if (filterType !== "all") {
        params.type = filterType;
      }
      const res = await adminDashboardServices.getAllOpportunities({
        isActive: showClosed ? false : true,
        type: filterType !== "all" ? filterType : undefined,
      });

      setOpportunities(res.data || []);
    } catch (err) {
      const error = GetApiErrorMessage(err);
      showToast(error, "error");
    }
  };

  useEffect(() => {
    fetchOpportunities();
  }, [showClosed, filterType]);

  /* =================================
          HANDLE VIEW
  ================================= */

  const handleView = (item) => {
    setSelectedOpportunity(item);
    setIsViewModalOpen(true);
  };

  /* =================================
          HANDLE EDIT
  ================================= */

  const handleEdit = (item) => {
    setSelectedOpportunity(item);

    setFormData({
      title: item.title || "",
      type: item.type || "job",
      location: item.location || "",
      description: item.description || "",
      experience: item.experience || "",
      duration: item.duration || "",
      employmentType: item.employmentType || "Full Time",
      category: item.category || "",
    });

    setIsEditModalOpen(true);
  };

  /* =================================
        UPDATE OPPORTUNITY
  ================================= */

  const handleUpdate = async () => {
    try {
      const res = await adminDashboardServices.updateOpportunity(
        selectedOpportunity._id,
        formData,
      );

      setOpportunities((prev) =>
        prev.map((item) =>
          item._id === selectedOpportunity._id ? res.data : item,
        ),
      );

      showToast("Opportunity updated", "success");
      setIsEditModalOpen(false);
    } catch (err) {
      const error = GetApiErrorMessage(err);
      showToast(error, "error");
    }
  };

  /* =================================
        DELETE (SOFT DELETE)
  ================================= */

  const handleDelete = async (projectId) => {
    try {
      await adminDashboardServices.deleteOpportunity(projectId);

      // setOpportunities((prev) =>
      //   prev.map((item) =>
      //     item._id === projectId ? { ...item, isActive: false } : item,
      //   ),
      // );
      fetchOpportunities();

      showToast("Opportunity removed", "success");
    } catch (err) {
      const error = GetApiErrorMessage(err);
      showToast(error, "error");
    }
  };
  const handleOpenAdd = () => {
    setSelectedOpportunity(null);

    setFormData({
      title: "",
      type: "job",
      location: "",
      description: "",
      experience: "",
      duration: "",
      employmentType: "Full Time",
      category: "",
    });

    setIsEditModalOpen(true);
  };

  /* =================================
        FORM CHANGE
  ================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedOpportunity) {
        const res = await adminDashboardServices.updateOpportunity(
          selectedOpportunity._id,
          formData,
        );

        setOpportunities((prev) =>
          prev.map((item) =>
            item._id === selectedOpportunity._id ? res.data || res : item,
          ),
        );

        showToast("Opportunity updated", "success");
      } else {
        const res = await adminDashboardServices.createOpportunity(formData);

        setOpportunities((prev) => [...prev, res.data || res]);

        showToast("Opportunity created", "success");
      }

      setIsEditModalOpen(false);
    } catch (err) {
      const error = GetApiErrorMessage(err);
      showToast(error, "error");
    }
  };

  const handleRestore = async (item) => {
    try {
      await adminDashboardServices.updateOpportunity(item._id, {
        isActive: true,
      });

      showToast("Opportunity restored", "success");

      fetchOpportunities(); // refresh list
    } catch (err) {
      const error = GetApiErrorMessage(err);
      showToast(error, "error");
    }
  };
  return (
    <div className="tp-admin-section">
      {/* ================= HEADER ================= */}

      <div className="tp-admin-header">
        <div>
          <h2 className="u-title tp-admin-title">
            Current <span>Opportunities</span>
          </h2>
          <p className="u-subtext tp-admin-subtitle">
            Manage current job and internship openings
          </p>
        </div>

        <div className="tp-admin-actions">
          <button
            onClick={handleOpenAdd}
            className="rtx-filter-btn rtx-application-filter"
          >
            <FiPlus /> Add Opening
          </button>

          <button
            className="rtx-filter-btn rtx-application-filter"
            onClick={() => setShowClosed((prev) => !prev)}
          >
            {showClosed ? "Show Active" : "Show Closed"}
          </button>

          {/* <select
            className="rtx-filter-btn rtx-application-filter"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="job">Jobs</option>
            <option value="internship">Internships</option>
          </select> */}

          {/* <div className="rtx-filter-btn rtx-application-filter rtx-opportunity-filter-btn"> */}
          <div className="rtx-filter-btn-wrapper">
            <Dropdown
              className="rtx-filter-btn rtx-application-filter rtx-opportunity-filter-btn"
              value={filterType}
              placeholder="Filter Type"
              options={typeFilterOptions}
              onChange={(value) => setFilterType(value)}
            />
          </div>
        </div>
      </div>

      {/* ================= CARD GRID ================= */}

      <div className="tp-grid tp-grid-3">
        {opportunities.map((item) => (
          <Card key={item._id} className="rtx-admin-testimonials-card">
            <div className="rtx-card-content flex-column-card opportunity-card">
              {!item.isActive && <span className="deleted-badge">Closed</span>}
              <h4>{item.title}</h4>

              <p className="opportunity-type">
                <b>Type: </b>
                {item.type === "job" ? "Job" : "Internship"}
              </p>

              <p className="opportunity-location">
                <b>Location: </b> {item.location}
              </p>
              <p className="opportunity-location">
                {item.type === "job" ? (
                  <>
                    <b>Employment Type :</b> {item.employmentType}
                  </>
                ) : (
                  <>
                    <b>Duration :</b> {item.duration}
                  </>
                )}
              </p>

              <div className="opportunity-actions rtx-card-actions">
                <button
                  onClick={() => handleView(item)}
                  className="btn btn-primary"
                >
                  View
                </button>

                {item.isActive && (
                  <button
                    type="button"
                    className="btn btn-primary rtx-btn-danger"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                )}
                {item.isActive ? (
                  <button
                    onClick={() => handleEdit(item)}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    onClick={() => handleRestore(item)}
                    className="btn btn-primary"
                  >
                    Restore
                  </button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* ================= VIEW MODAL ================= */}

      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title="Opportunity Details"
      >
        {selectedOpportunity && (
          <div className="tp-modal-content">
            <h4>{selectedOpportunity.title}</h4>

            <p>
              <b>Type:</b> {selectedOpportunity.type}
            </p>
            <p>
              <b>Location:</b> {selectedOpportunity.location}
            </p>
            <p>
              <b>Description:</b> {selectedOpportunity.description}
            </p>

            {selectedOpportunity.experience && (
              <p>
                <b>Experience:</b> {selectedOpportunity.experience}
              </p>
            )}

            {selectedOpportunity.duration && (
              <p>
                <b>Duration:</b> {selectedOpportunity.duration}
              </p>
            )}
            {selectedOpportunity.employmentType && (
              <p>
                <b>Employment Type:</b> {selectedOpportunity.employmentType}
              </p>
            )}
          </div>
        )}
      </Modal>

      {/* ================= EDIT MODAL ================= */}

      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={selectedOpportunity ? "Edit Opportunity" : "Add Opportunity"}
      >
        <form className="rtx-modal-body" onSubmit={handleSubmit}>
          <div className="rtx-form-group">
            <label>
              Title<span className="rtx-required-start">*</span>
            </label>
            <input
              placeholder="Enter Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="rtx-form-group">
            <label>
              Type<span className="rtx-required-start">*</span>
            </label>
            {/* <select name="type" value={formData.type} onChange={handleChange}>
              <option value="job">Job</option>
              <option value="internship">Internship</option>
            </select> */}
            <Dropdown
              value={formData.type}
              placeholder="Select Type"
              options={opportunityTypeOptions}
              onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  type: value,
                  duration: "",
                  experience: "",
                }))
              }
            />
          </div>

          <div className="rtx-form-group">
            <label>
              Location<span className="rtx-required-start">*</span>
            </label>
            <input
              placeholder="Enter Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          {formData.type === "job" && (
            <div className="rtx-form-group">
              <label>
                Employment Type<span className="rtx-required-start">*</span>
              </label>
              <Dropdown
                value={formData.employmentType}
                placeholder="Select Employment Type"
                options={employmentTypeOptions}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    employmentType: value,
                  }))
                }
              />
            </div>
          )}
          <div className="rtx-form-group">
            <label>
              Description<span className="rtx-required-start">*</span>
            </label>
            <textarea
              placeholder="Enter Full Job Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {formData.type === "job" && (
            <>
              <div className="rtx-form-group">
                <label>
                  Experience<span className="rtx-required-start">*</span>
                </label>
                <input
                  placeholder="Enter Experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          {formData.type === "internship" && (
            <>
              <div className="rtx-form-group">
                <label>Duration</label>
                <input
                  placeholder="Enter Duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                />
              </div>
              <div className="rtx-form-group">
                <label>Category</label>
                <input
                  placeholder="Enter Category"
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          <div className="rtx-modal-actions">
            <button type="submit" className="btn btn-primary">
              {selectedOpportunity ? "Update" : "Add"} Opportunity
            </button>

            {/* {selectedOpportunity && (
              <button
                type="button"
                className="btn btn-primary rtx-btn-danger"
                onClick={handleDelete}
              >
                Delete
              </button>
            )} */}
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Opportunities;
