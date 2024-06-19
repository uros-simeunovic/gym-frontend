import { Navbar } from "@/components/Navbar";
import { DataTable } from "@/components/DataTable";

const AdminPanel = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[80px] w-full z-50 inset-y-0 mb-10">
        <Navbar />
      </div>
      <div className="md:max-w-[1600px] mx-auto w-full p-2">
        <DataTable />
      </div>
    </div>
  );
};

export default AdminPanel;
