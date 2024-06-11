import { useAuth } from "@/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";

const PrivateAdminRoutes = ({}) => {
  const { user, loading, error } = useAuth();

  if (error) {
    toast.error("dasads");
    console.log(error);
    return <Navigate to="/" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    toast.error("Niste ulogovani!");
    return <Navigate to="/auth/login" />;
  }

  if (!user.isAdmin) {
    toast.error("Korisnik nije admin!");
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateAdminRoutes;
