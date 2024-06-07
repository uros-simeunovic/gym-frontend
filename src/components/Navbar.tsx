import { Link } from "react-router-dom";
import logo from "../assets/logoGG1.png";
import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "./ui/sheet";
import { NavmenuSidebar } from "./NavmenuSidebar";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full p-2 pt-6 bg-white">
      <div className="h-full md:max-w-[1600px] mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-[100px] md:w-[140px]" />
        </Link>
        <div className="hidden md:flex flex-row gap-4 font-thin text-3xl">
          <Link to="/">Početna</Link>
          <Link to="/trainings">Planovi</Link>
          <Link to="/about">O meni</Link>
        </div>
        <div onClick={() => setOpen(true)} className="md:hidden">
          <Menu className="w-10" />
        </div>
        <Sheet open={open} onOpenChange={() => setOpen(false)}>
          <SheetContent side={"right"} className="w-full">
            <NavmenuSidebar />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
