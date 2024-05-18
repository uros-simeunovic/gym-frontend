import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <main>
      <div className="h-[80px] w-full z-50 inset-y-0">
        <Navbar />
      </div>
      <Outlet />
    </main>
  );
};

export default HomeLayout;
