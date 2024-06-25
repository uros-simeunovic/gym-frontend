import { ArrowLeft, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle } from "./ui/sheet";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AdminSidebar } from "./AdminSidebar";

export const AdminNavbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="p-4 h-full flex justify-between items-center m-2">
      <div
        onClick={() => navigate(-1)}
        className="flex flex-row items-center cursor-pointer hover:scale-105"
      >
        <ArrowLeft className="w-8 h-8" />
      </div>

      <div onClick={() => setOpen(true)}>
        <Menu />
      </div>
      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <SheetTitle hidden>Menu</SheetTitle>
        <SheetContent side={"right"} className="w-full">
          <AdminSidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};
