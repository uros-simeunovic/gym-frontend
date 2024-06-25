import { AdminNavbar } from "@/components/AdminNavbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <div className="h-[80px] w-full z-50 inset-y-0">
        <AdminNavbar />
      </div>
      <Outlet />
    </>
  );
};

export default AdminLayout;
