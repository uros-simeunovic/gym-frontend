import { Link } from "react-router-dom";
import { SidebarRoutes } from "./SidebarRoutes";
import logo from "../assets/Logo7.png";

export const Sidebar = () => {
  return (
    <div className="h-full flex flex-col overflow-y-auto bg-white p-4 md:border-r">
      <Link to={"/"} className="w-[120px] md:w-[160px]">
        <img src={logo} alt="logo" />
      </Link>
      <div className="relative mt-[80px] font-bold text-6xl flex flex-row items-center">
        <h1 className="z-10">Treninzi</h1>
        <span className="absolute -left-[3px] top-[3px] text-pink-500">
          Treninzi
        </span>
      </div>
      <div className="mt-8">
        <SidebarRoutes />
      </div>
    </div>
  );
};
