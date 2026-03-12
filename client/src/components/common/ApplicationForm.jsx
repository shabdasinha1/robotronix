import React, { useEffect, useState } from "react";
import { jobApply } from "../../services/PublicServices";
import { GetApiErrorMessage } from "../../utils/ErrorHandler";
import { useToast } from "./ToastContext";
import Dropdown from "./Dropdown";
const ApplicationForm = ({ type = "job", jobData, onSuccess }) => {
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
      if (onSuccess) {
        onSuccess(); // close modal
      }

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
          <label>
            Full Name{" "}
            <span className="rtx-required-star">
              <span className="rtx-required-star">*</span>
            </span>
          </label>
          <input
            name="fullName"
            placeholder="Enter your full name"
            onChange={handleChange}
          />
        </div>

        <div className="rtx-form-group">
          <label>
            Email <span className="rtx-required-star">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            onChange={handleChange}
          />
        </div>

        <div className="rtx-form-group">
          <label>
            Phone <span className="rtx-required-star">*</span>
          </label>
          <input
            name="phone"
            placeholder="Enter your phone number"
            onChange={handleChange}
          />
        </div>

        <div className="rtx-form-group">
          <label>
            City <span className="rtx-required-star">*</span>
          </label>
          <input
            name="city"
            placeholder="Enter your city"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="rtx-form-group">
        <label>
          Application Category <span className="rtx-required-star">*</span>
        </label>
        {/* <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Application Category</option>
          <option value="job">Job</option>
          <option value="internship">Internship</option>
        </select> */}
        <Dropdown
          value={category}
          options={[
            { label: "Select Application Category", value: "" },
            { label: "Job", value: "job" },
            { label: "Internship", value: "internship" },
          ]}
          onChange={(value) => setCategory(value)}
        />
      </div>

      {/* JOB SPECIFIC */}
      {category === "job" && (
        <div className="rtx-form-grid">
          <div className="rtx-form-group">
            <label>
              Experience <span className="rtx-required-star">*</span>
            </label>
            {/* <input
              name="experience"
              placeholder="Enter your total experience (e.g., 2 years)"
              onChange={handleChange}
            /> */}
            <Dropdown
              value={formData.experience}
              options={[
                { label: "Select Experience", value: "" },
                { label: "Fresher", value: "fresher" },
                { label: "0-1 Year", value: "0-1 year" },
                { label: "1-2 Years", value: "1-2 years" },
                { label: "2-3 Years", value: "2-3 years" },
                { label: "3-5 Years", value: "3-5 years" },
                { label: "5+ Years", value: "5+ years" },
              ]}
              onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  experience: value,
                }))
              }
            />
          </div>

          <div className="rtx-form-group">
            <label>Current Company</label>
            <input
              name="currentCompany"
              placeholder="Enter your current company name"
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      {/* INTERNSHIP SPECIFIC */}
      {category === "internship" && (
        <div className="rtx-form-grid">
          <div className="rtx-form-group">
            <label>
              College Name <span className="rtx-required-star">*</span>
            </label>
            <input
              name="college"
              placeholder="Enter your college name"
              onChange={handleChange}
            />
          </div>

          <div className="rtx-form-group">
            <label>
              Degree <span className="rtx-required-star">*</span>
            </label>
            {/* <input
              name="degree"
              placeholder="Enter your degree (e.g., B.Tech, BCA)"
              onChange={handleChange}
            /> */}
            <Dropdown
              value={formData.degree}
              options={[
                { label: "Select Degree", value: "" },
                { label: "B.Tech", value: "B.Tech" },
                { label: "BCA", value: "BCA" },
                { label: "MCA", value: "MCA" },
                { label: "B.Sc", value: "B.Sc" },
                { label: "M.Tech", value: "M.Tech" },
                { label: "Diploma", value: "Diploma" },
                { label: "Other", value: "Other" },
              ]}
              onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  degree: value,
                }))
              }
            />
          </div>

          <div className="rtx-form-group">
            <label>
              Current Year <span className="rtx-required-star">*</span>
            </label>
            {/* <input
              name="year"
              placeholder="Enter your current year (e.g., 3rd Year)"
              onChange={handleChange}
            /> */}
            <Dropdown
              value={formData.year}
              options={[
                { label: "Select Current Year", value: "" },
                { label: "1st Year", value: "1st Year" },
                { label: "2nd Year", value: "2nd Year" },
                { label: "3rd Year", value: "3rd Year" },
                { label: "4th Year", value: "4th Year" },
                { label: "Final Year", value: "Final Year" },
              ]}
              onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  year: value,
                }))
              }
            />
          </div>

          <div className="rtx-form-group">
            <label>
              Internship Duration <span className="rtx-required-star">*</span>
            </label>
            {/* <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            >
              <option value="">Select Internship Duration</option>
              <option value="1 month">1 Month</option>
              <option value="3 months">3 Months</option>
              <option value="6 months">6 Months</option>
              <option value="1 year">1 Year</option>
            </select> */}
            <Dropdown
              value={formData.duration}
              options={[
                { label: "Select Internship Duration", value: "" },
                { label: "1 Month", value: "1 month" },
                { label: "3 Months", value: "3 months" },
                { label: "6 Months", value: "6 months" },
                { label: "1 Year", value: "1 year" },
              ]}
              onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  duration: value,
                }))
              }
            />
          </div>
        </div>
      )}

      {/* Resume */}
      <div className="rtx-form-group">
        <label>
          Upload Resume <span className="rtx-required-star">*</span>
        </label>
        <input type="file" name="resume" onChange={handleChange} />
      </div>

      {/* Cover Letter */}
      <div className="rtx-form-group">
        <label>Cover Letter</label>
        <textarea
          name="coverLetter"
          rows="4"
          placeholder="Write a short cover letter or introduction..."
          onChange={handleChange}
        />
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
