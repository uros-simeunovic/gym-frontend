import { Outlet } from "react-router-dom";
import { TrainingNavbar } from "@/components/TrainingNavbar";
import { Sidebar } from "../components/Sidebar";

const TrainingsLayout = () => {
  return (
    <main>
      <div className="h-[80px] w-full z-50 inset-y-0">
        <TrainingNavbar />
      </div>
      <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <div className="md:ml-60">
        <Outlet />
      </div>
    </main>
  );
};

export default TrainingsLayout;
