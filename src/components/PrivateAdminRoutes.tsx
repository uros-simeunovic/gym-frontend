import { useAuth } from "@/Providers/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";

const PrivateAdminRoutes = ({}) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    toast.error("Niste ulogovani!");
    return <Navigate to="/auth/login" />;
  }

  // if (!currentUser.isAdmin) {
  //   toast.error("Korisnik nije admin!");
  //   return <Navigate to="/" />;
  // }

  return <Outlet />;
};

export default PrivateAdminRoutes;
