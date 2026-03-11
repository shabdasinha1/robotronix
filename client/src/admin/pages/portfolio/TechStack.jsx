import React, { useEffect, useState, useCallback } from "react";

import Card from "../../../components/common/Card";
import Modal from "../../../components/common/Modal";

import { FiPlus } from "react-icons/fi";

import { useToast } from "../../../components/common/ToastContext";
import { GetApiErrorMessage } from "../../../utils/ErrorHandler";

import adminDashboardServices from "../../services/admin-dashboard-services";

const TechStack = () => {
  const { showToast } = useToast();

  /* ================= STATE ================= */

  const [techStacks, setTechStacks] = useState([]);

  const [selectedTech, setSelectedTech] = useState(null);

  const [showDeleted, setShowDeleted] = useState(false);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    tech: [],
    isActive: true,
  });
  const [techInput, setTechInput] = useState("");

  /* ================= FETCH TECH STACK ================= */

  const fetchTechStack = useCallback(async () => {
    try {
      const res = await adminDashboardServices.getTechStack({
        isActive: !showDeleted,
      });

      setTechStacks(res.data || []);
    } catch (error) {
      showToast(GetApiErrorMessage(error), "error");
    }
  }, [showDeleted, showToast]);

  useEffect(() => {
    fetchTechStack();
  }, [fetchTechStack]);

  /* ================= CREATE / UPDATE ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        group: form.name,
        items: form.tech.map((t) => ({ name: t })),
      };
      if (selectedTech) {
        /* UPDATE */

        const res = await adminDashboardServices.updateTechStack(
          selectedTech._id,
          //   form,
          payload,
        );

        setTechStacks((prev) =>
          prev.map((tech) => (tech._id === selectedTech._id ? res.data : tech)),
        );

        showToast("Tech stack updated successfully", "success");
      } else {
        /* CREATE */

        const res = await adminDashboardServices.createTechStack(payload);

        setTechStacks((prev) => [...prev, res.data]);

        showToast("Tech stack created successfully", "success");
      }

      setIsFormOpen(false);
    } catch (error) {
      showToast(GetApiErrorMessage(error), "error");
    }
  };

  /* ================= DELETE ================= */

  const deleteTechStack = async (techId) => {
    try {
      await adminDashboardServices.deleteTechStack(techId);

      showToast("Tech stack deleted", "success");

      fetchTechStack();
    } catch (error) {
      showToast(GetApiErrorMessage(error), "error");
    }
  };

  /* ================= RESTORE ================= */

  const restoreTechStack = async (techId) => {
    try {
      await adminDashboardServices.restoreTechStack(techId);

      showToast("Tech stack restored", "success");

      fetchTechStack();
    } catch (error) {
      showToast(GetApiErrorMessage(error), "error");
    }
  };

  /* ================= RESET FORM ================= */

  const resetForm = () => {
    setForm({
      name: "",
      tech: [],
      isActive: true,
    });

    setTechInput("");
    setSelectedTech(null);
  };
  //   console.log(techStacks);

  /* ================= COMPONENT ================= */

  return (
    <div className="tp-admin-section">
      {/* ================= HEADER ================= */}

      <div className="tp-admin-header">
        <div>
          <h2 className="u-title tp-admin-title">
            Technology <span>Stack</span>
          </h2>

          <p className="u-subtext tp-admin-subtitle">
            Manage technologies used in your portfolio
          </p>
        </div>

        <div className="tp-admin-actions">
          {/* ADD TECH STACK */}

          <button
            className="rtx-filter-btn rtx-application-filter"
            onClick={() => {
              resetForm();
              setIsFormOpen(true);
            }}
          >
            <FiPlus /> Add Tech
          </button>

          {/* SHOW DELETED */}

          <button
            className="rtx-filter-btn rtx-application-filter"
            onClick={() => setShowDeleted((prev) => !prev)}
          >
            {showDeleted ? "Show Active" : "Show Deleted"}
          </button>
        </div>
      </div>

      {/* ================= TECH GRID ================= */}

      <div className="tp-grid portfolio-grid">
        {techStacks.map((tech) => (
          <Card
            key={tech._id}
            className={`rtx-admin-testimonials-card ${
              !tech.isActive ? "deleted-project" : ""
            }`}
          >
            <div className="rtx-card-content flex-column-card">
              {!tech.isActive && <span className="deleted-badge">Deleted</span>}

              <h3 className="rtx-tech-heading">{tech.group}</h3>
              <div className="rtx-tech-items">
                {tech.items.map((t, idx) => (
                  <span key={idx}>{t.name}</span>
                ))}
              </div>
              <div className="opportunity-actions rtx-card-actions">
                {/* EDIT */}

                {!showDeleted && (
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setSelectedTech(tech);

                      setForm({
                        name: tech.group || "",
                        tech: tech.items?.map((item) => item.name) || [],
                        isActive: tech.isActive,
                      });

                      setIsFormOpen(true);
                    }}
                  >
                    Edit
                  </button>
                )}

                {/* DELETE */}

                {!showDeleted && (
                  <button
                    className="btn btn-primary rtx-btn-danger"
                    onClick={() => deleteTechStack(tech._id)}
                  >
                    Delete
                  </button>
                )}

                {/* RESTORE */}

                {showDeleted && (
                  <button
                    className="btn btn-primary"
                    onClick={() => restoreTechStack(tech._id)}
                  >
                    Restore
                  </button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* ================= FORM MODAL ================= */}

      <Modal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={selectedTech ? "Edit Tech Stack" : "Add Tech Stack"}
      >
        <form className="rtx-modal-body" onSubmit={handleSubmit}>
          {/* TECH NAME */}

          <div className="rtx-form-group">
            <label>
              Technology Name <span className="rtx-required-start">*</span>
            </label>

            <input
              placeholder="Example: React"
              value={form.name}
              required
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          {/* CATEGORY */}

          <div className="rtx-form-group">
            <label>Add Tech Stack</label>
            <input
              placeholder="Add Tech (press Enter)"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();

                  if (
                    techInput.trim() &&
                    !form.tech.includes(techInput.trim())
                  ) {
                    setForm({
                      ...form,
                      tech: [...form.tech, techInput.trim()],
                    });

                    setTechInput("");
                  }
                }
              }}
            />
          </div>
          <div className="tech-tags">
            {form.tech.map((t, i) => (
              <span key={i} className="tech-chip">
                {t}
                <button
                  type="button"
                  onClick={() =>
                    setForm({
                      ...form,
                      tech: form.tech.filter((_, index) => index !== i),
                    })
                  }
                >
                  ×
                </button>
              </span>
            ))}
          </div>

          {/* ACTION BUTTON */}

          <div className="rtx-modal-actions">
            <button type="submit" className="btn btn-primary">
              {selectedTech ? "Update Tech" : "Create Tech"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default TechStack;
