import { ArrowLeftCircle, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent } from "./ui/sheet";
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { useAuth } from "@/AuthProvider";

export const TrainingNavbar = () => {
  const [open, setOpen] = useState(false);

  const { user } = useAuth();

  const navigate = useNavigate();

  return (
    <div className="p-4 h-full flex justify-between items-center bg-white m-2">
      <div onClick={() => navigate("/")} className="flex flex-row items-center">
        <ArrowLeftCircle />
      </div>
      {user ? (
        <>
          <div>Dobrodosao/la {user.name}</div>
          <img className="rounded-full w-14" src={user.picture} />
        </>
      ) : (
        <Link to="/auth/login">Login</Link>
      )}

      <div onClick={() => setOpen(true)} className="md:hidden">
        <Menu />
      </div>
      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <SheetContent side={"right"} className="w-full">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};
