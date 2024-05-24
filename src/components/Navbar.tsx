import { Link } from "react-router-dom";
import logo from "../assets/Logo7.png";

export const Navbar = () => {
  return (
    <div className="h-full p-2 pt-6 bg-white">
      <div className="h-full md:max-w-[1600px] mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-[120px] md:w-[160px]" />
        </Link>
        <div>Korisnik</div>
      </div>
    </div>
  );
};
