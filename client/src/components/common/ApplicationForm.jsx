import React, { useEffect, useState } from "react";
import { jobApply } from "../../services/PublicServices";
import { GetApiErrorMessage } from "../../utils/ErrorHandler";
import { useToast } from "./ToastContext";
const ApplicationForm = ({ type = "job", jobData }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    experience: "",
    currentCompany: "",
    college: "",
    degree: "",
    year: "",
    duration: "",
    coverLetter: "",
    resume: null,
  });
  const [category, setCategory] = useState("");
  const { showToast } = useToast();
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // =========================================
      // 🔥 1. Validate Category First
      // =========================================
      if (!category) {
        showToast("Application category is required", "error");
        return;
      }

      // =========================================
      // 🔥 2. Common Required Fields
      // =========================================
      const commonFields = [
        { key: "fullName", label: "Full Name" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone" },
        { key: "city", label: "City" },
      ];

      for (let field of commonFields) {
        if (!formData[field.key]?.trim()) {
          showToast(`${field.label} is required`, "error");
          return;
        }
      }

      // =========================================
      // 🔥 3. Category Specific Validation
      // =========================================

      if (category === "job") {
        const jobFields = [{ key: "experience", label: "Experience" }];

        for (let field of jobFields) {
          if (!formData[field.key]?.trim()) {
            showToast(
              `${field.label} is required for Job application`,
              "error",
            );
            return;
          }
        }
      }

      if (category === "internship") {
        const internshipFields = [
          { key: "college", label: "College Name" },
          { key: "degree", label: "Degree" },
          { key: "year", label: "Current Academic Year" },
          { key: "duration", label: "Internship Duration" },
        ];

        for (let field of internshipFields) {
          if (!formData[field.key]?.trim()) {
            showToast(`${field.label} is required for Internship`, "error");
            return;
          }
        }
      }

      // =========================================
      // 🔥 4. Resume Required for Both
      // =========================================
      if (!formData.resume) {
        showToast("Resume file is required", "error");
        return;
      }

      // =========================================
      // ✅ 5. Create FormData AFTER validation
      // =========================================

      const payload = new FormData();
      payload.append("category", category);
      payload.append("jobId", jobData?._id || "");

      Object.keys(formData).forEach((key) => {
        if (
          formData[key] !== null &&
          formData[key] !== undefined &&
          formData[key] !== ""
        ) {
          payload.append(key, formData[key]);
        }
      });

      const res = await jobApply(payload);

      showToast("Application submitted successfully!", "success");

      // Reset
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        experience: "",
        currentCompany: "",
        college: "",
        degree: "",
        year: "",
        duration: "",
        coverLetter: "",
        resume: null,
      });

      setCategory("");
    } catch (err) {
      const message = GetApiErrorMessage(err);
      setError(message);
      showToast(message, "error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (jobData) {
      setCategory("job");
    }
  }, [jobData]);
  return (
    <form className="rtx-apply-form" onSubmit={handleSubmit}>
      {/* PERSONAL DETAILS */}
      <div className="rtx-form-grid">
        <div className="rtx-form-group">
          <label>Full Name *</label>
          <input name="fullName" onChange={handleChange} />
        </div>

        <div className="rtx-form-group">
          <label>Email *</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>

        <div className="rtx-form-group">
          <label>Phone *</label>
          <input name="phone" onChange={handleChange} />
        </div>

        <div className="rtx-form-group">
          <label>City *</label>
          <input name="city" onChange={handleChange} />
        </div>
      </div>
      <div className="rtx-form-group">
        <label>Application Category *</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="job">Job</option>
          <option value="internship">Internship</option>
        </select>
      </div>

      {/* JOB SPECIFIC */}
      {category === "job" && (
        <div className="rtx-form-grid">
          <div className="rtx-form-group">
            <label>Experience *</label>
            <input name="experience" onChange={handleChange} />
          </div>

          <div className="rtx-form-group">
            <label>Current Company</label>
            <input name="currentCompany" onChange={handleChange} />
          </div>
        </div>
      )}

      {/* INTERNSHIP SPECIFIC */}
      {category === "internship" && (
        <div className="rtx-form-grid">
          <div className="rtx-form-group">
            <label>College Name *</label>
            <input name="college" onChange={handleChange} />
          </div>

          <div className="rtx-form-group">
            <label>Degree *</label>
            <input name="degree" onChange={handleChange} />
          </div>

          <div className="rtx-form-group">
            <label>Current Year *</label>
            <input name="year" onChange={handleChange} />
          </div>

          <div className="rtx-form-group">
            <label>Internship Duration *</label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            >
              <option value="">Select Duration</option>
              <option value="1 month">1 Month</option>
              <option value="3 months">3 Months</option>
              <option value="6 months">6 Months</option>
              <option value="1 year">1 Year</option>
            </select>
          </div>
        </div>
      )}

      {/* Resume */}
      <div className="rtx-form-group">
        <label>Upload Resume *</label>
        <input type="file" name="resume" onChange={handleChange} />
      </div>

      {/* Cover Letter */}
      <div className="rtx-form-group">
        <label>Cover Letter</label>
        <textarea name="coverLetter" rows="4" onChange={handleChange} />
      </div>

      <div className="rtx-form-actions">
        <button
          type="submit"
          className="btn btn-primary btn-md"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </form>
  );
};

export default ApplicationForm;
