import { useAuth } from "@/Providers/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({}) => {
  const { currentUser } = useAuth();

  return <>{currentUser ? <Outlet /> : <Navigate to="/auth/login" />}</>;
};

export default PrivateRoutes;
