import { DataTable } from "@/components/DataTable";

const AdminPanel = () => {
  return (
    <div className="flex flex-col">
      <div className="md:max-w-[1600px] mx-auto w-full p-2 space-y-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">Korisnici</h1>
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
