import { Link } from "react-router-dom";
import logo from "../assets/logoGG1.png";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "./ui/sheet";
import { NavmenuSidebar } from "./NavmenuSidebar";
import { Menu } from "lucide-react";
import { useMainSidebarMobile } from "@/hooks/useMainSidebarMobile";

export const Navbar = () => {
  const { onOpen, isOpen, onClose } = useMainSidebarMobile();

  return (
    <div className="h-full p-2 pt-6 bg-background">
      <div className="h-full md:max-w-[1600px] mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-[100px] md:w-[140px]" />
        </Link>
        <div onClick={onOpen} className="md:hidden">
          <Menu className="w-10" />
        </div>
        <Sheet open={isOpen} onOpenChange={onClose}>
          <SheetContent side={"right"} className="w-full">
            <SheetDescription className="hidden">
              Meni za telefone
            </SheetDescription>
            <SheetTitle className="hidden">Naslov</SheetTitle>
            <NavmenuSidebar />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
