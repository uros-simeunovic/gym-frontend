import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

const TrainingsLayout = () => {
  return (
    <main className="relative h-[100vh] overflow-x-hidden">
      <div className="h-[80px] w-full z-50 inset-y-0 relative">
        <Navbar />
      </div>
      {/* <Overlay /> */}
      <div className="md:mx-28">
        <Outlet />
      </div>
    </main>
  );
};

export default TrainingsLayout;
