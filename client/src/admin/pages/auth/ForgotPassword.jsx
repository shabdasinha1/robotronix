import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRevealOnScroll from "../../../hooks/useRevealOnScroll";
import useApi from "../../../hooks/useApi";
import authApi from "../../../api/auth.api";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { ref, visible } = useRevealOnScroll({ threshold: 0.15, once: true });
  const { execute, loading, error } = useApi();

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await execute(
      () => authApi.forgotPasswordOtp(email),
      {
        onSuccess: () => {
          navigate("/admin/reset-password", {
            state: { email },
          });
        },
      }
    );
  };

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
            Forgot <span>Password</span>
          </h2>
          <p className="u-subtext">
            Enter your registered admin email to receive OTP.
          </p>
        </div>

        <div className="rtx-admin-card u-drop">
          <form onSubmit={handleSubmit} className="rtx-admin-form">

            <div className="rtx-admin-form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@robotronix.com"
                required
              />
            </div>

            {error && <p className="rtx-admin-error">{error}</p>}

            <button
              type="submit"
              className="btn btn-primary btn-lg w-100"
              disabled={loading}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ForgotPassword;
