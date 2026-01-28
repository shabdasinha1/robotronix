import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
  const isAuth =
    sessionStorage.getItem("admin_auth") === "true" &&
    sessionStorage.getItem("admin_token");

  if (!isAuth) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
};

export default AdminProtectedRoute;
