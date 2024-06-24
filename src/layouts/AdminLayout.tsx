import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <div className="h-[80px] w-full z-50 inset-y-0">
        <Navbar />
      </div>
      <div className="flex flex-row mt-28">
        <Sidebar />
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
