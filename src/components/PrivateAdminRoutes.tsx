import { useAuth } from "@/Providers/AuthProvider";
import { Loader2 } from "lucide-react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";

const PrivateAdminRoutes = ({}) => {
  const { currentUser, loading, userDetails } = useAuth();

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center mt-[150px] gap-2">
        <h1>Loading...</h1>
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  if (!currentUser) {
    toast.error("Niste ulogovani!", { duration: 2000 });
    return <Navigate to="/auth/login" />;
  }

  if (!userDetails?.isAdmin) {
    toast.error("Korisnik nije admin!", { duration: 2000 });
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateAdminRoutes;
