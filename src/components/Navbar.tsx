import { Link } from "react-router-dom";
import logo from "../assets/Logo7.png";

export const Navbar = () => {
  return (
    <div className="h-full p-2 md:w-[1400px] mx-auto pt-6 flex items-center justify-between bg-white">
      <Link to={"/"} className="w-[120px] md:w-[160px]">
        <img src={logo} alt="logo" />
      </Link>
      <div></div>
    </div>
  );
};
