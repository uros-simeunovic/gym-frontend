import { ArrowLeft, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTitle } from "./ui/sheet";
import { Sidebar } from "./Sidebar";
import { useState } from "react";

export const TrainingNavbar = () => {
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

      <div onClick={() => setOpen(true)} className="cursor-pointer md:hidden">
        <Menu />
      </div>
      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <SheetTitle hidden>Menu</SheetTitle>
        <SheetContent side={"right"} className="w-full">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};
