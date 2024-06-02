import { Link } from "react-router-dom";
import logo from "../assets/logoGG1.png";

export const NavmenuSidebar = () => {
  return (
    <div className="h-full flex flex-col overflow-y-auto bg-white p-4 md:border-r">
      <Link to={"/"} className="w-[100px] md:w-[140px]">
        <img src={logo} alt="logo" />
      </Link>
      <div className="mt-8">
        <Link to={"/"}>Pocetna</Link>
        <Link to={"/trainings/trening1"}>Planovi</Link>
        <Link to={"/"}>O meni</Link>
      </div>
    </div>
  );
};
