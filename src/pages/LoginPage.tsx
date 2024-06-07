import { getGoogleUrl } from "@/lib/utils";
import { Link } from "react-router-dom";
import logo from "../assets/logoGG1.png";
import googleIcon from "../assets/google.png";

export const LoginPage = () => {
  return (
    <div className="border-2 w-[500px] h-[400px] rounded-3xl mx-auto mt-48 flex flex-col gap-20 items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-6 mt-8">
        <h1 className="text-4xl">Ulogujte se na </h1>
        <img src={logo} alt="logo" className="w-28" />
      </div>
      <Link to={getGoogleUrl()}>
        <div className="bg-white text-black flex flex-row items-center justify-center gap-4 border rounded-2xl w-[230px] text-center py-2 hover:bg-[#171717] hover:text-white transition-all duration-200 ease-in">
          <img src={googleIcon} alt="google-icon" className="w-6 h-6" />
          <h1 className="text-xl font-light pb-1">Login with Google</h1>
        </div>
      </Link>
    </div>
  );
};
