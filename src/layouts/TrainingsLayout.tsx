import { Outlet } from "react-router-dom";
import { TrainingNavbar } from "@/components/TrainingNavbar";
import { Overlay } from "@/pages/TrainingPages/Overlay";
// import { Sidebar } from "../components/Sidebar";

const TrainingsLayout = () => {
  return (
    <main className="relative h-[100vh] overflow-x-hidden">
      <div className="h-[80px] w-full z-50 inset-y-0">
        <TrainingNavbar />
      </div>
      <Overlay />
      <Outlet />
      {/* <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div> */}
    </main>
  );
};

export default TrainingsLayout;
