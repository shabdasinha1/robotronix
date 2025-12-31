import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRevealOnScroll from "../../../hooks/useRevealOnScroll";
import authApi from "../../../api/auth.api";
import useApi from "../../../hooks/useApi";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.15,
    once: true,
  });

  const { execute, loading, error } = useApi();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await execute(
      () => authApi.login(formData),
      {
        onSuccess: (res) => {
          // Store JWT
          localStorage.setItem("admin_token", res.data.token);

          // Redirect
          navigate("/admin/dashboard");
        },
      }
    );
  };

  return (
    <section
      ref={ref}
      className={`rtx-admin-login u-section ${visible ? "u-drop-visible" : ""
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
            {/* FORGOT PASSWORD */}
            <div className="rtx-admin-forgot">
              <button
                type="button"
                className="rtx-admin-forgot-btn"
                onClick={() => navigate("/admin/forgot-password")}
              >
                Forgot password?
              </button>
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
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default AdminLogin;
