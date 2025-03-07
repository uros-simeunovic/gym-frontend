import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

const TrainingsLayout = () => {
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
