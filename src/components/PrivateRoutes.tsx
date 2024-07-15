import { useAuth } from "@/Providers/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({}) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div>Loading</div>;
  }

  return <>{currentUser ? <Outlet /> : <Navigate to="/auth/login" />}</>;
};

export default PrivateRoutes;
