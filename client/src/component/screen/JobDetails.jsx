import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobDetails = () => {
  const { _id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // form submit
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  });
  const [errors, setErrors] = useState({});

  // Validate function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.resume) newErrors.resume = "Resume is required.";
    return newErrors;
  };

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Remove error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Handle file
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, resume: file }));

    // Remove file error if it was previously set
    if (errors.resume) {
      setErrors((prev) => ({ ...prev, resume: "" }));
    }
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Optional: send FormData to backend
    const data = new FormData();
    data.append("jobId", job._id);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("resume", formData.resume);
    data.append("coverLetter", formData.coverLetter);

    // Example POST request (adjust as needed)
    fetch(`${process.env.REACT_APP_API_URL}/api/apply`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          toast.success(res.message || "Application submitted successfully!");
          setTimeout(() => setShowModal(false), 2000);
        } else {
          toast.error(res.message || "Application failed. Please try again.");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error(
          "Something went wrong. Please check your connection and try again."
        );
      });
  };

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/getJob/${_id}`
        );
        console.log(response);

        if (!response.ok) throw new Error("Job not found or server error");

        const data = await response.json();
        setJob(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [_id]);

  if (loading)
    return <div className="text-center mt-5">Loading job details...</div>;
  if (error) return <div className="text-center mt-5 text-danger">{error}</div>;
  if (!job) return <div className="text-center mt-5">No job found</div>;

  return (
    <>
      <section className="leadership-section text-white">
        <div className="container">
          <h1>Join Our Team & Shape the Future</h1>
          <p className="lead">
            Discover exciting opportunities to grow, innovate, and make an
            impact. Be a part of a team that values talent, creativity, and
            collaboration.
          </p>
        </div>
      </section>

      <div className="container mt-5 mb-5">
        <h1 className="fw-bold">{job.title}</h1>
        <p>
          <strong>Experience:</strong> {job.experience}
        </p>
        <p>
          <strong>Location:</strong> {job.location}
        </p>

        <section>
          <h3 className="mt-4 fw-bold">Job Summary</h3>
          <p>{job.jobSummary}</p>
        </section>

        <section>
          <h3 className="mt-4 fw-bold">Key Responsibilities</h3>
          <ul className="list-unstyled ps-3">
            {job.keyResponsibilities.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="bullet me-2 fw-bold">•</span> {item}
              </li>
            ))}
          </ul>
        </section>

        <h3 className="mt-4 fw-bold">Required Skills & Qualifications</h3>
        <ul>
          {job.requiredSkillsQualifications.map((skill, index) => (
            <li key={index}>
              <span className="bullet me-2 fw-bold">•</span>
              <strong>{skill}</strong>
            </li>
          ))}
        </ul>

        {/* Preferred Qualifications (if any) */}
        {job.preferredQualifications &&
          job.preferredQualifications.length > 0 && (
            <>
              <h3 className="mt-4 fw-bold">Preferred Qualifications</h3>
              <ul>
                {job.preferredQualifications.map((qual, index) => (
                  <li key={index}>
                    <span className="bullet me-2 fw-bold">•</span>{" "}
                    <strong>{qual}</strong>
                  </li>
                ))}
              </ul>
            </>
          )}
        <section>
          <h3 className="mt-4 fw-bold">Required Skills & Qualifications</h3>
          <ul>
            {job.requiredSkillsQualifications.map((item, index) => (
              <li key={index}>
                <strong>{item}</strong>
              </li>
            ))}
          </ul>
        </section>

        {job.preferredQualifications?.length > 0 && (
          <section>
            <h3 className="mt-4 fw-bold">Preferred Qualifications</h3>
            <ul>
              {job.preferredQualifications.map((item, index) => (
                <li key={index}>
                  <strong>{item}</strong>
                </li>
              ))}
            </ul>
          </section>
        )}

        <p>
          <strong>Job Type:</strong> {job.jobType}
        </p>
        <p>
          <strong>Salary:</strong> {job.salary}
        </p>

        <button
          className="btn mt-3 fw-bold"
          style={{ border: "#37333330 solid 1px|" }}
          onClick={() => navigate(-1)}
        >
          Back to Careers
        </button>
        <span> </span>
        <button
          className="btn btn-primary mt-3 fw-bold"
          onClick={() => setShowModal(true)}
        >
          Apply Now
        </button>
      </div>

      {/* popup model */}
      {showModal && (
        <div
          className="modal d-block"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Apply for {job.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="mb-3">
                    <label className="form-label">Position</label>
                    <input
                      type="text"
                      className="form-control"
                      value={job.title}
                      readOnly
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <div className="text-danger">{errors.name}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      maxLength={10}
                      className="form-control"
                      value={formData.phone}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (/^\d*$/.test(val)) handleChange(e); // allow only digits
                      }}
                      required
                    />

                    {errors.phone && (
                      <small className="text-danger">{errors.phone}</small>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Resume (PDF only)</label>
                    <input
                      type="file"
                      name="resume"
                      className="form-control"
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                    {errors.resume && (
                      <div className="text-danger">{errors.resume}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Cover Letter (optional)
                    </label>
                    <textarea
                      className="form-control"
                      name="coverLetter"
                      rows="3"
                      value={formData.coverLetter}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Submit Application
                    </button>
                  </div>
                  <ToastContainer position="top-right" autoClose={3000} />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobDetails;
