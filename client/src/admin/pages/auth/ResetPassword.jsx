import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useRevealOnScroll from "../../../hooks/useRevealOnScroll";
import useApi from "../../../hooks/useApi";
import authApi from "../../../api/auth.api";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const { ref, visible } = useRevealOnScroll({ threshold: 0.15, once: true });
  const { execute, loading, error } = useApi();

  const [formData, setFormData] = useState({
    otp: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await execute(
      () =>
        authApi.resetPasswordOtp({
          email,
          otp: formData.otp,
          newPassword: formData.newPassword,
        }),
      {
        onSuccess: () => {
          navigate("/admin/login");
        },
      }
    );
  };

  useEffect(() => {
    if (!email) {
      navigate("/admin/forgot-password");
    }
  }, [email, navigate]);
  return (
    <section
      ref={ref}
      className={`rtx-admin-login u-section ${
        visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container-center">

        <div className="rtx-admin-login-header u-drop">
          <h2 className="u-title">
            Reset <span>Password</span>
          </h2>
          <p className="u-subtext">
            Enter OTP sent to your email and set a new password.
          </p>
        </div>

        <div className="rtx-admin-card u-drop">
          <form onSubmit={handleSubmit} className="rtx-admin-form">

            <div className="rtx-admin-form-group">
              <label>OTP</label>
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                placeholder="6-digit OTP"
                required
              />
            </div>

            <div className="rtx-admin-form-group">
              <label>New Password</label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="New password"
                required
              />
            </div>

            {error && <p className="rtx-admin-error">{error}</p>}

            <button
              type="submit"
              className="btn btn-primary btn-lg w-100"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ResetPassword;
