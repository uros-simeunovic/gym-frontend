import { useAuth } from "@/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({}) => {
  const { user } = useAuth();

  return <>{user ? <Outlet /> : <Navigate to="/auth/login" />}</>;
};

export default PrivateRoutes;
