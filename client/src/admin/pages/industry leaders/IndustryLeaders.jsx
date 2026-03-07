import React, { useEffect, useState } from "react";
import Card from "../../../components/common/Card";
import Button from "../../../components/common/Button";
import Modal from "../../../components/common/Modal";
import adminDashboardServices from "../../services/admin-dashboard-services";
import { useToast } from "../../../components/common/ToastContext";
import { GetApiErrorMessage } from "../../../utils/ErrorHandler";

const IndustryLeaders = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDeleted, setShowDeleted] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [formData, setFormData] = useState({
    leaderName: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const { showToast } = useToast();

  /* ================= FETCH ================= */
  useEffect(() => {
    fetchLeaders(showDeleted);
  }, [showDeleted]);

  const fetchLeaders = async (deleted = false) => {
    try {
      setLoading(true);

      const res = await adminDashboardServices.getIndustryLeaders({
        isActive: deleted ? false : true,
      });

      setLeaders(res.data || res);
    } catch (err) {
      showToast(GetApiErrorMessage(err), "error");
    } finally {
      setLoading(false);
    }
  };

  /* ================= OPEN ADD ================= */
  const handleOpenAdd = () => {
    setEditingItem(null);
    setFormData({ leaderName: "" });
    setImageFile(null);
    setImagePreview(null);
    setIsModalOpen(true);
  };

  /* ================= EDIT ================= */
  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({ leaderName: item.leaderName });
    setImagePreview(
      item.image?.startsWith("http")
        ? item.image
        : `${process.env.REACT_APP_API_BASE_URL}/${item.image}`,
    );
    setIsModalOpen(true);
  };

  /* ================= FILE HANDLER ================= */
  const handleImageChange = (file) => {
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Move this leader to deleted list?")) return;

    try {
      await adminDashboardServices.updateIndustryLeader(id, {
        isActive: false,
      });

      setLeaders((prev) => prev.filter((item) => item._id !== id));

      showToast("Leader moved to deleted list", "success");
    } catch (err) {
      showToast(GetApiErrorMessage(err), "error");
    }
  };

  /* ================= RESTORE ================= */
  const handleRestore = async (id) => {
    try {
      await adminDashboardServices.updateIndustryLeader(id, {
        isActive: true,
      });

      setLeaders((prev) => prev.filter((item) => item._id !== id));

      showToast("Leader restored successfully", "success");
    } catch (err) {
      showToast(GetApiErrorMessage(err), "error");
    }
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formPayload = new FormData();
      formPayload.append("leaderName", formData.leaderName);

      if (imageFile) {
        formPayload.append("image", imageFile);
      }

      if (editingItem) {
        const res = await adminDashboardServices.updateIndustryLeader(
          editingItem._id,
          formPayload,
        );

        setLeaders((prev) =>
          prev.map((item) =>
            item._id === editingItem._id ? res.data || res : item,
          ),
        );

        showToast("Leader updated successfully", "success");
      } else {
        const res =
          await adminDashboardServices.createIndustryLeader(formPayload);

        setLeaders((prev) => [...prev, res.data || res]);

        showToast("Leader added successfully", "success");
      }

      setIsModalOpen(false);
      setImageFile(null);
      setImagePreview(null);
    } catch (err) {
      showToast(GetApiErrorMessage(err), "error");
    }
  };

  return (
    <div className="rtx-admin-industry">
      <div className="rtx-admin-page-header rtx-admin-industry-header">
        <div>
          <h2 className="u-title">
            Industry <span>Leaders</span>
          </h2>
          <p className="u-subtext">
            Manage industry leader logos displayed on website
          </p>
        </div>

        <div className="rtx-industry-header-actions">
          <button
            className="rtx-filter-btn rtx-application-filter"
            onClick={() => setShowDeleted((prev) => !prev)}
          >
            {showDeleted ? "Show Active" : "Show Deleted"}
          </button>

          <button className="rtx-filter-btn rtx-application-filter" onClick={handleOpenAdd}>
            + Add Leader
          </button>
        </div>
      </div>

      {loading && <p>Loading leaders...</p>}

      {!loading && leaders.length === 0 && (
        <p className="rtx-empty-state">No leaders found.</p>
      )}

      <div className="rtx-admin-industry-grid">
        {leaders.map((item) => (
          <Card key={item._id} className="rtx-admin-industry-card">
            <div className="rtx-leader-card-content flex-column-card">
              <img
                src={
                  item.image?.startsWith("http")
                    ? item.image
                    : `${process.env.REACT_APP_API_BASE_URL}/${item.image}`
                }
                alt={item.leaderName}
                className="rtx-leader-image"
              />

              <h4 className="rtx-leader-title">{item.leaderName}</h4>

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

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingItem ? "Edit Leader" : "Add Leader"}
      >
        <form onSubmit={handleSubmit} className="rtx-modal-body">
          <div className="rtx-modal-image-wrapper">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="rtx-image-preview rtx-image-preview-leaders"
              />
            )}
          </div>
          <div className="rtx-form-group">
            <label>Leader Name</label>
            <input
              required
              value={formData.leaderName}
              onChange={(e) =>
                setFormData({ ...formData, leaderName: e.target.value })
              }
            />
          </div>

          <div className="rtx-form-group">
            <label>Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e.target.files[0])}
            />
          </div>

          <div className="rtx-modal-actions">
            <button type="submit" className="btn btn-primary">
              {editingItem ? "Update" : "Add"} Leader
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default IndustryLeaders;
