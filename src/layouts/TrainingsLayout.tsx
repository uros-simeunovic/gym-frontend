import { Navigate, Outlet, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { useAuth } from "@/Providers/AuthProvider";
import { toast } from "sonner";

const TrainingsLayout = () => {
  const { userDetails, loading } = useAuth()

  const { planId } = useParams()

  if (loading) {
    return <div>Loading</div>;
  }

  if (userDetails?.paidPlan !== planId && userDetails?.isAdmin !== true) {
    toast.warning("Nemate kupljen ovaj plan")
    return <Navigate to={"/"} />
  }

  return (
    <main className="relative h-[100vh] overflow-x-hidden">
      <div className="h-[80px] w-full z-50 inset-y-0 relative">
        <Navbar />
      </div>
      <div className="mx-2 md:mx-[148px]">
        <Outlet />
      </div>
    </main>
  );
};

export default TrainingsLayout;
