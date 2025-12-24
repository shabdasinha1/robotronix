import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRevealOnScroll from "../../../hooks/useRevealOnScroll";


const AdminLogin = () => {
  const navigate = useNavigate();
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.15,
    once: true,
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * TEMP LOGIN HANDLER
   * Replace later with API + JWT
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP credentials
    if (
      formData.email === "admin@robotronix.com" &&
      formData.password === "admin"
    ) {
      localStorage.setItem("admin_auth", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid admin credentials");
    }
  };

  return (
    <section
      ref={ref}
      className={`rtx-admin-login u-section ${
        visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container-center">

        {/* ================= HEADER ================= */}
        <div className="rtx-admin-login-header u-drop">
          <h2 className="u-title">
            Admin <span>Login</span>
          </h2>
          <p className="u-subtext">
            Access the Robotronix administration panel.
          </p>
        </div>

        {/* ================= LOGIN CARD ================= */}
        <div className="rtx-admin-card u-drop">

          <form onSubmit={handleSubmit} className="rtx-admin-form">

            {/* EMAIL */}
            <div className="rtx-admin-form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@robotronix.com"
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="rtx-admin-form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>

            {/* ERROR */}
            {error && (
              <p className="rtx-admin-error">
                {error}
              </p>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              className="btn btn-primary btn-lg w-100"
            >
              Login
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default AdminLogin;
