import React, { useEffect, useState } from "react";
import Card from "../../../components/common/Card";
import Modal from "../../../components/common/Modal";
import Dropdown from "../../../components/common/Dropdown";
import { FiPlus, FiEye, FiEdit, FiTrash } from "react-icons/fi";

import { useToast } from "../../../components/common/ToastContext";
import { GetApiErrorMessage } from "../../../utils/ErrorHandler";
import adminDashboardServices from "../../services/admin-dashboard-services";

const Portfolio = () => {
  const { showToast } = useToast();

  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);

  const [filterCategory, setFilterCategory] = useState("all");
  const [showDeleted, setShowDeleted] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);

  const [techInput, setTechInput] = useState("");

  const [form, setForm] = useState({
    title: "",
    heading: "",
    description: "",
    industry: "",
    category: {
      slug: "",
      label: "",
    },
    tech: [],
    isActive: true,
  });

  /* ================= FETCH DATA ================= */

  //   const fetchProjects = async () => {
  //     try {
  //       const res = await adminDashboardServices.getPortfolioProjects({
  //         category: filterCategory !== "all" ? filterCategory : undefined,
  //         isActive: !showDeleted,
  //       });

  //       setProjects(res.data || []);
  //     } catch (err) {
  //       showToast(GetApiErrorMessage(err), "error");
  //     }
  //   };
  const fetchProjects = React.useCallback(async () => {
    try {
      const res = await adminDashboardServices.getPortfolioProjects({
        category: filterCategory !== "all" ? filterCategory : undefined,
        isActive: !showDeleted,
      });
      setProjects(res.data || []);
    } catch (err) {
      showToast(GetApiErrorMessage(err), "error");
    }
  }, [filterCategory, showDeleted]);

  const fetchCategories = async () => {
    try {
      const res = await adminDashboardServices.getPortfolioCategories();
      setCategories(res.data || []);
    } catch (err) {
      showToast(GetApiErrorMessage(err), "error");
    }
  };

  // Fetch categories once on mount
  useEffect(() => {
    fetchCategories();
  }, []);
  // Fetch projects only when filter or showDeleted changes
  useEffect(() => {
    fetchProjects();
  }, [filterCategory]);

  /* ================= FORM SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedProject) {
        const res = await adminDashboardServices.updatePortfolioProject(
          selectedProject._id,
          form,
        );

        setProjects((prev) =>
          prev.map((p) => (p._id === selectedProject._id ? res.data : p)),
        );

        showToast("Project updated", "success");
      } else {
        const res = await adminDashboardServices.createPortfolioProject(form);

        setProjects((prev) => [...prev, res.data]);

        showToast("Project created", "success");
      }

      setIsFormOpen(false);
    } catch (err) {
      showToast(GetApiErrorMessage(err), "error");
    }
  };

  /* ================= DELETE ================= */

  const deleteProject = async () => {
    try {
      await adminDashboardServices.deletePortfolioProject(selectedProject._id);

      //   setProjects((prev) =>
      //     prev.map((p) =>
      //       p._id === selectedProject._id ? { ...p, isActive: false } : p,
      //     ),
      //   );

      showToast("Project deleted", "success");
      fetchProjects();
      setIsFormOpen(false);
    } catch (err) {
      showToast(GetApiErrorMessage(err), "error");
    }
  };

  /* ================= DROPDOWN OPTIONS ================= */

  const categoryOptions = [
    { label: "All Categories", value: "all" },
    ...categories.map((c) => ({
      label: c.label,
      value: c.slug,
    })),
  ];

  const categorySelectOptions = categories.map((c) => ({
    label: c.label,
    value: c.slug,
  }));

  /* ================= COMPONENT ================= */
  //   console.log(projects);
  return (
    <div className="tp-admin-section">
      {/* HEADER */}

      <div className="tp-admin-header">
        <div>
          <h2 className="u-title tp-admin-title">
            Portfolio <span>Manager</span>
          </h2>

          <p className="u-subtext tp-admin-subtitle">
            Manage portfolio projects and categories
          </p>
        </div>

        <div className="tp-admin-actions">
          <button
            onClick={() => {
              setSelectedProject(null);

              setForm({
                title: "",
                heading: "",
                description: "",
                industry: "",
                category: { slug: "", label: "" },
                tech: [],
                isActive: true,
              });

              setIsFormOpen(true);
            }}
            className="rtx-filter-btn rtx-application-filter"
          >
            <FiPlus /> Add Project
          </button>

          <button
            className="rtx-filter-btn rtx-application-filter"
            onClick={() => {
              setShowDeleted((p) => !p);
              setFilterCategory("all");
            }}
          >
            {showDeleted ? "Show Active" : "Show Deleted"}
          </button>

          <div className="rtx-filter-btn-wrapper">
            <Dropdown
              className="rtx-filter-btn rtx-application-filter"
              value={filterCategory}
              options={categoryOptions}
              onChange={(v) => setFilterCategory(v)}
            />
          </div>
        </div>
      </div>

      {/* PROJECT GRID */}

      <div className="tp-grid portfolio-grid">
        {projects.map((project) => (
          <Card key={project._id} className="rtx-admin-testimonials-card">
            <div className="rtx-card-content flex-column-card opportunity-card">
              <span className="rtx-project-category">
                {project.heading ? project.heading : project.category.slug}
              </span>

              <h3>{project.title}</h3>

              <p className="rtx-project-desc">{project.description}</p>

              <div className="rtx-project-meta">
                <span>{project.industry}</span>
              </div>

              <div className="rtx-project-tech">
                {project.tech.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>
              <div className="opportunity-actions">
                <button
                  className="tp-icon-btn"
                  onClick={() => {
                    setSelectedProject(project);
                    setIsViewOpen(true);
                  }}
                >
                  <FiEye />
                </button>

                <button
                  className="tp-icon-btn"
                  onClick={() => {
                    setSelectedProject(project);

                    setForm({
                      title: project.title,
                      heading: project.heading,
                      description: project.description,
                      industry: project.industry,
                      category: project.category,
                      tech: project.tech || [],
                      isActive: project.isActive,
                    });

                    setIsFormOpen(true);
                  }}
                >
                  <FiEdit />
                </button>
              </div>
            </div>
            <div></div>
          </Card>
        ))}
      </div>

      {/* FORM MODAL */}

      <Modal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={selectedProject ? "Edit Project" : "Add Project"}
      >
        <form className="rtx-modal-body" onSubmit={handleSubmit}>
          <div className="rtx-form-group">
            <label>Project Slug / Title</label>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
          </div>

          <div className="rtx-form-group">
            <label>Project Heading</label>
            <input
              value={form.heading}
              onChange={(e) => setForm({ ...form, heading: e.target.value })}
            />
          </div>

          <div className="rtx-form-group">
            <label>Category</label>

            <Dropdown
              value={form.category.slug}
              options={[
                ...categorySelectOptions,
                { value: "other", label: "Other" },
              ]}
              placeholder="Select Category"
              onChange={(slug) => {
                if (slug === "other") {
                  setForm({
                    ...form,
                    category: { slug: "", label: "" },
                    isAddingNewCategory: true,
                  });
                } else {
                  const selected = categories.find((c) => c.slug === slug);
                  setForm({
                    ...form,
                    category: { slug: selected.slug, label: selected.label },
                    isAddingNewCategory: false,
                  });
                }
              }}
              renderExtraInput={(value) =>
                value === "other" && form.isAddingNewCategory ? (
                  <input
                    type="text"
                    placeholder="Enter new category"
                    className="rtx-input"
                    value={form.category.label}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        category: {
                          slug: e.target.value
                            .toLowerCase()
                            .replace(/\s+/g, "-"),
                          label: e.target.value,
                        },
                      })
                    }
                  />
                ) : null
              }
            />
            {form.isAddingNewCategory && (
              <input
                type="text"
                placeholder="Enter new category"
                value={form.category.label}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category: {
                      slug: e.target.value.toLowerCase().replace(/\s+/g, "-"),
                      label: e.target.value,
                    },
                  })
                }
                required
              />
            )}
          </div>

          <div className="rtx-form-group">
            <label>Industry</label>
            <input
              value={form.industry}
              onChange={(e) => setForm({ ...form, industry: e.target.value })}
            />
          </div>

          <div className="rtx-form-group">
            <label>Description</label>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
            />
          </div>

          <div className="rtx-form-group">
            <label>Add Tech Stack</label>
            <input
              placeholder="Add Tech (press Enter)"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();

                  if (techInput.trim()) {
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

          <div className="rtx-modal-actions">
            <button type="submit" className="btn btn-primary">
              {selectedProject ? "Update" : "Create"} Project
            </button>

            {selectedProject && (
              <button
                type="button"
                className="btn btn-primary rtx-btn-danger"
                onClick={deleteProject}
              >
                <FiTrash /> Delete
              </button>
            )}
          </div>
        </form>
      </Modal>

      {/* VIEW MODAL */}

      <Modal
        isOpen={isViewOpen}
        onClose={() => setIsViewOpen(false)}
        title="Project Details"
      >
        {selectedProject && (
          <div className="rtx-modal-body">
            <span className="rtx-project-category">
              {selectedProject.heading
                ? selectedProject.heading
                : selectedProject.category.slug}
            </span>

            <h3>{selectedProject.title}</h3>

            <p className="rtx-project-desc">{selectedProject.description}</p>

            <div className="rtx-project-meta">
              <span>{selectedProject.industry}</span>
            </div>

            <div className="rtx-project-tech">
              {selectedProject.tech.map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Portfolio;
