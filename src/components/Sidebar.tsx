import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="h-full flex flex-col px-4">
      <h1 className="text-6xl">Meni</h1>
      <div className="flex flex-col gap-8 text-4xl font-light mt-10">
        <Link to={"/admin/dashboard/users"}>Korisnici</Link>
        <Link to={"/admin/dashboard/plans"}>Planovi</Link>
      </div>
    </div>
  );
};
