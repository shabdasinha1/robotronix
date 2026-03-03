import React, { useEffect, useState } from "react";
import Card from "../../../components/common/Card";
import adminDashboardServices from "../../services/admin-dashboard-services";
import Button from "../../../components/common/Button";
import { useToast } from "../../../components/common/ToastContext";
import { GetApiErrorMessage } from "../../../utils/ErrorHandler";
import Modal from "../../../components/common/Modal";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [showDeleted, setShowDeleted] = useState(false);
  const [formData, setFormData] = useState({
    clientName: "",
    companyName: "",
    designation: "",
    review: "",
    rating: 5,
    isActive: true,
  });

  const { showToast } = useToast();

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    fetchTestimonials(showDeleted);
  }, [showDeleted]);

  //   const fetchTestimonials = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await adminDashboardServices.getTestimonials();
  //       setTestimonials(res.data || res);
  //     } catch (err) {
  //       const errorMessage = GetApiErrorMessage(err);
  //       showToast(errorMessage, "error");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  const fetchTestimonials = async (deleted = false) => {
    try {
      setLoading(true);

      const res = await adminDashboardServices.getTestimonials({
        isActive: deleted ? false : true,
      });

      setTestimonials(res.data || res);
    } catch (err) {
      const errorMessage = GetApiErrorMessage(err);
      showToast(errorMessage, "error");
    } finally {
      setLoading(false);
    }
  };

  /* ================= OPEN ADD ================= */
  const handleOpenAdd = () => {
    setEditingItem(null);
    setFormData({
      clientName: "",
      companyName: "",
      designation: "",
      review: "",
      rating: 5,
      isActive: true,
    });
    setIsModalOpen(true);
  };

  /* ================= EDIT ================= */
  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData(item);
    setIsModalOpen(true);
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this testimonial?"))
      return;

    try {
      await adminDashboardServices.deleteTestimonial(id);

      setTestimonials((prev) => prev.filter((item) => item._id !== id));

      showToast("Testimonial deleted successfully", "success");
    } catch (err) {
      const errorMessage = GetApiErrorMessage(err);
      showToast(errorMessage, "error");
    }
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingItem) {
        const res = await adminDashboardServices.updateTestimonial(
          editingItem._id,
          formData,
        );

        setTestimonials((prev) =>
          prev.map((item) =>
            item._id === editingItem._id ? res.data || res : item,
          ),
        );

        showToast("Testimonial updated successfully", "success");
      } else {
        const res = await adminDashboardServices.createTestimonial(formData);

        setTestimonials((prev) => [...prev, res.data || res]);

        showToast("Testimonial added successfully", "success");
      }

      setIsModalOpen(false);
    } catch (err) {
      const errorMessage = GetApiErrorMessage(err);
      showToast(errorMessage, "error");
    }
  };
  const handleRestore = async (id) => {
    try {
      const res = await adminDashboardServices.updateTestimonial(id, {
        isActive: true,
      });

      setTestimonials((prev) => prev.filter((item) => item._id !== id));

      showToast("Testimonial restored successfully", "success");
    } catch (err) {
      const errorMessage = GetApiErrorMessage(err);
      showToast(errorMessage, "error");
    }
  };
  /* ================= STAR RENDER ================= */
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`rtx-star ${i < rating ? "active" : ""}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="rtx-admin-testimonials">
      {/* HEADER */}
      <div className="rtx-admin-page-header rtx-admin-testimonials-header">
        <div>
          <h2 className="u-title">
            Client {" "}
            <span>Testimonials</span>
          </h2>
          <p className="u-subtext">
            Manage client testimonials displayed on website
          </p>
        </div>
        <div className="rtx-testimonials-action-wrapper">
          <Button className="rtx-btn-primary" onClick={handleOpenAdd}>
            + Add Testimonial
          </Button>
          <Button
            className="rtx-btn-secondary"
            onClick={() => setShowDeleted((prev) => !prev)}
          >
            {showDeleted ? "Show Active" : "Show Deleted"}
          </Button>
        </div>
      </div>

      {loading && <p>Loading testimonials...</p>}

      <div className="rtx-admin-testimonial-grid">
        {testimonials.map((item) => (
          <Card key={item._id} className="rtx-admin-testimonials-card">
            <div className="rtx-card-content flex-column-card">
              <h4>{item.clientName}</h4>
              <p className="rtx-subtitle">{item.companyName}</p>

              <div className="rtx-rating">{renderStars(item.rating)}</div>

              <p className="rtx-review">{item.review}</p>

              <div className="rtx-card-meta">
                <span>{item.designation}</span>
                <span
                  className={
                    item.isActive ? "rtx-status-active" : "rtx-status-inactive"
                  }
                >
                  {item.isActive ? "Active" : "Inactive"}
                </span>
              </div>

              {/* <div className="rtx-card-actions">
                <button
                  className="btn-primary"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-primary rtx-btn-danger"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </div> */}
              <div className="rtx-card-actions flex-bottom">
                {showDeleted ? (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleRestore(item._id)}
                  >
                    Restore
                  </button>
                ) : (
                  <>
                    <button
                      className="btn-primary"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-primary rtx-btn-danger"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* MODAL */}
      {/* {isModalOpen && (
        <div className="rtx-modal-overlay">
          <div className="rtx-modal">
            <div className="rtx-modal-header">
              <h3>{editingItem ? "Edit Testimonial" : "Add Testimonial"}</h3>
              <button
                className="rtx-modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
            </div>

            <form className="rtx-modal-body" onSubmit={handleSubmit}>
              <div className="rtx-form-group">
                <label>Client Name</label>
                <input
                  required
                  value={formData.clientName}
                  onChange={(e) =>
                    setFormData({ ...formData, clientName: e.target.value })
                  }
                />
              </div>

              <div className="rtx-form-group">
                <label>Company Name</label>
                <input
                  required
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                />
              </div>

              <div className="rtx-form-group">
                <label>Designation / Project</label>
                <input
                  required
                  value={formData.designation}
                  onChange={(e) =>
                    setFormData({ ...formData, designation: e.target.value })
                  }
                />
              </div>

              <div className="rtx-form-group">
                <label>Review</label>
                <textarea
                  required
                  value={formData.review}
                  onChange={(e) =>
                    setFormData({ ...formData, review: e.target.value })
                  }
                />
              </div>

              <div className="rtx-form-group">
                <label>Rating (1-5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      rating: Number(e.target.value),
                    })
                  }
                />
              </div>

              <div className="rtx-form-group rtx-checkbox">
                <label>
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        isActive: e.target.checked,
                      })
                    }
                  />
                  Active
                </label>
              </div>

              <button type="submit" className="btn btn-primary">
                {editingItem ? "Update" : "Add"} Testimonial
              </button>
            </form>
          </div>
        </div>
      )} */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingItem ? "Edit Testimonial" : "Add Testimonial"}
      >
        <form className="rtx-modal-body" onSubmit={handleSubmit}>
          <div className="rtx-form-group">
            <label>Client Name</label>
            <input
              required
              value={formData.clientName}
              onChange={(e) =>
                setFormData({ ...formData, clientName: e.target.value })
              }
            />
          </div>

          <div className="rtx-form-group">
            <label>Company Name</label>
            <input
              required
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
            />
          </div>

          <div className="rtx-form-group">
            <label>Designation / Project</label>
            <input
              required
              value={formData.designation}
              onChange={(e) =>
                setFormData({ ...formData, designation: e.target.value })
              }
            />
          </div>

          <div className="rtx-form-group">
            <label>Review</label>
            <textarea
              required
              value={formData.review}
              onChange={(e) =>
                setFormData({ ...formData, review: e.target.value })
              }
            />
          </div>

          <div className="rtx-form-group">
            <label>Rating (1-5)</label>
            <input
              type="number"
              min="1"
              max="5"
              value={formData.rating}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  rating: Number(e.target.value),
                })
              }
            />
          </div>

          <div className="rtx-form-group rtx-checkbox">
            <label>
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    isActive: e.target.checked,
                  })
                }
              />
              Active
            </label>
          </div>

          <div className="rtx-modal-actions">
            <button type="submit" className="btn btn-primary">
              {editingItem ? "Update" : "Add"} Testimonial
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Testimonials;
