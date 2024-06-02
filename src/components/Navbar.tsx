import { Link } from "react-router-dom";
import logo from "../assets/logoGG1.png";
import { Menu } from "lucide-react";
import { useSidebarMobile } from "@/hooks/useSidebarMobile";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar = () => {
  const { onOpen } = useSidebarMobile();

  return (
    <div className="h-full p-2 pt-6 bg-white">
      <div className="h-full md:max-w-[1600px] mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-[100px] md:w-[140px]" />
        </Link>
        <div className="hidden md:flex flex-row gap-4 font-medium text-3xl">
          <Link to="/">Pocetna</Link>
          <Link to="/trainings/trening1">Planovi</Link>
          <Link to="/about">O meni</Link>
          <div>Korisnik</div>
        </div>
        <div onClick={onOpen} className="md:hidden">
          <Menu className="w-10" />
        </div>
        <MobileNavbar />
      </div>
    </div>
  );
};
