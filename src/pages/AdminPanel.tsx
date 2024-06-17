import { useAuth } from "@/Providers/AuthProvider";
// import { DataTable } from "@/components/DataTable";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import axios from "axios";

const AdminPanel = () => {
  const { currentUser } = useAuth();

  const callBackend = async () => {
    const token = await currentUser?.getIdToken();
    const response = await axios.get("http://localhost:8080/api/whoami", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
  };

  return (
    <div className="flex flex-col">
      <div className="h-[80px] w-full z-50 inset-y-0 mb-10">
        <Navbar />
      </div>
      <div className="md:max-w-[1600px] mx-auto w-full p-2">
        {/* <DataTable /> */}
        <Button onClick={callBackend}>Click</Button>
      </div>
    </div>
  );
};

export default AdminPanel;
