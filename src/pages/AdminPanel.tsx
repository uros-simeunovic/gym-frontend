import { DataTable } from "@/components/DataTable";
import { Navbar } from "@/components/Navbar";

const AdminPanel = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[80px] w-full z-50 inset-y-0 mb-10">
        <Navbar />
      </div>
      <div>
        <DataTable />
      </div>
    </div>
  );
};

export default AdminPanel;
