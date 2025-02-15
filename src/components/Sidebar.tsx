import { useAuth } from "@/Providers/AuthProvider";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import logo from "@/assets/LogoGGWhite.svg";

export const Sidebar = () => {
  const { userDetails, logout, currentUser } = useAuth();

  return (
    <div className="h-full flex flex-col px-4 relative">
      <Link to={"/"} className="w-[100px] md:w-[140px]">
        <img src={logo} alt="logo" />
      </Link>
      <div className="mt-24 text-5xl font-light flex flex-col items-center space-y-12">
        <Link to={"/"}>Pocetna</Link>
        <Link to={"/plans"}>Planovi</Link>
      </div>
      {currentUser ? (
        <>
          <div className="flex flex-row gap-4 items-center absolute left-0 bottom-0">
            <img
              src={userDetails?.picture}
              alt="User Avatar"
              className="rounded-full w-14"
            />
            <h1>{userDetails?.name}</h1>
          </div>
          <Button onClick={logout} className="absolute bottom-2 right-0">
            Logout
          </Button>
        </>
      ) : (
        <Link to="/auth/login">
          <Button className="absolute bottom-2 right-0">Login</Button>
        </Link>
      )}
    </div>
  );
};
