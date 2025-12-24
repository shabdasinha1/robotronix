import { Navigate, Outlet } from "react-router-dom";

/**
 * TEMP AUTH CHECK
 * Later replace with real auth (JWT / API)
 */
const isAdminAuthenticated = () => {
  return localStorage.getItem("admin_auth") === "true";
};

const AdminProtectedRoute = () => {
  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
};

export default AdminProtectedRoute;
