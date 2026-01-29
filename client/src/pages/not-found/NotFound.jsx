import React from "react";
import { Link } from "react-router-dom";

/* ===============================
   STATIC STYLES (IMMUTABLE)
=============================== */

const titleStyle = Object.freeze({
  fontSize: "6.5rem",
  fontWeight: 800,
  color: "var(--clr-blue)",
  textShadow: "0 0 18px var(--blue-06)",
  marginBottom: "10px",
});

const subTextStyle = Object.freeze({
  maxWidth: "520px",
  margin: "14px auto 32px",
});

const NotFound = () => {
  return (
    <section className="u-section">
      <div className="u-container-center">
        {/* Big 404 */}
        <h1 className="rtx-fade-drop-1" style={titleStyle}>
          404
        </h1>

        {/* Title */}
        <h2 className="u-title rtx-fade-drop-2">
          Page <span>Not Found</span>
        </h2>

        {/* Subtext */}
        <p className="u-subtext rtx-fade-drop-3" style={subTextStyle}>
          The page you are trying to access doesn’t exist, has been removed,
          or the URL is incorrect.
        </p>

        {/* CTA */}
        <div className="rtx-fade-drop-4">
          <Link to="/" className="btn btn-primary btn-lg">
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(NotFound);
