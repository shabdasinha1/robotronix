import useRevealOnScroll from "../../../hooks/useRevealOnScroll";

const Dashboard = () => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.15,
    once: true,
  });

  return (
    <section
      ref={ref}
      className={`rtx-admin-dashboard  ${
        visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container">

        {/* ================= HEADER ================= */}
        <div className="rtx-admin-dashboard-header u-drop rtx-admin-page-header">
          <h2 className="u-title">
            Dashboard <span>Overview</span>
          </h2>
          <p className="u-subtext">
            Quick insights and system status at a glance.
          </p>
        </div>

        {/* ================= STATS GRID ================= */}
        <div className="u-grid-auto">

          <div className="rtx-admin-stat-card u-drop-scale">
            <h4>Total Leads</h4>
            <span className="rtx-admin-stat-number">—</span>
          </div>

          <div className="rtx-admin-stat-card u-drop-scale">
            <h4>New Messages</h4>
            <span className="rtx-admin-stat-number">—</span>
          </div>

          <div className="rtx-admin-stat-card u-drop-scale">
            <h4>Services</h4>
            <span className="rtx-admin-stat-number">—</span>
          </div>

          <div className="rtx-admin-stat-card u-drop-scale">
            <h4>System Status</h4>
            <span className="rtx-admin-stat-number">Online</span>
          </div>

        </div>

        {/* ================= ACTIVITY / PLACEHOLDERS ================= */}
        <div className="rtx-admin-dashboard-sections u-grid-auto">

          {/* RECENT LEADS */}
          <div className="rtx-admin-card u-drop">
            <h3 className="rtx-admin-card-title">
              Recent Leads
            </h3>
            <div className="rtx-admin-card-body">
              <p className="rtx-admin-placeholder">
                Recent lead activity will appear here.
              </p>
            </div>
          </div>

          {/* SYSTEM INFO */}
          <div className="rtx-admin-card u-drop">
            <h3 className="rtx-admin-card-title">
              System Info
            </h3>
            <div className="rtx-admin-card-body">
              <p className="rtx-admin-placeholder">
                Backend, API, and service health status.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Dashboard;
