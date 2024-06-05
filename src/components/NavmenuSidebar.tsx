import { Link } from "react-router-dom";
import logo from "../assets/logoGG1.png";
import { useMainSidebarMobile } from "@/hooks/useMainSidebarMobile";

export const NavmenuSidebar = () => {
  const { onClose } = useMainSidebarMobile();

  const onClick = () => {
    onClose();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="h-full flex flex-col overflow-y-auto bg-white p-4 md:border-r">
      <Link to={"/"} className="w-[100px] md:w-[140px]">
        <img src={logo} alt="logo" />
      </Link>
      <div className="mt-24 text-5xl font-light flex flex-col items-center space-y-12">
        <div onClick={onClick}>Početna</div>
        <Link to={"/trainings"}>Planovi</Link>
        <Link to={"/"}>O meni</Link>
      </div>
    </div>
  );
};
