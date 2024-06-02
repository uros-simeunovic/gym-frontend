import { Link } from "react-router-dom";
import logo from "../assets/LogoGG.png";

export const Navbar = () => {
  return (
    <div className="h-full p-2 pt-6 bg-white">
      <div className="h-full md:max-w-[1600px] mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-[120px] md:w-[160px]" />
        </Link>
        <div className="flex flex-row gap-4 font-medium text-3xl">
          <Link to="/" className="h-full">
            <h1>Početna</h1>
          </Link>
          <Link to="/about">O meni</Link>
          <div>Korisnik</div>
        </div>
      </div>
    </div>
  );
};
