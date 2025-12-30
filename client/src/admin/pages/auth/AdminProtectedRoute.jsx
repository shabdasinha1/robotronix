import { Navigate, Outlet } from "react-router-dom";

/* ===============================
   JWT AUTH CHECK
================================ */
const isAdminAuthenticated = () => {
  return !!localStorage.getItem("admin_token");
};

const AdminProtectedRoute = () => {
  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
};

export default AdminProtectedRoute;
