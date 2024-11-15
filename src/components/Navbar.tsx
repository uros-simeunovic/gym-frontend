import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logoGG1.png";
import logoDark from "../assets/LogoGGWhite.svg";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "./ui/sheet";
import { NavmenuSidebar } from "./NavmenuSidebar";
import { useState } from "react";
import { useAuth } from "@/Providers/AuthProvider";
import { useTheme } from "@/Providers/ThemeProvider";
import { LinkItem } from "./LinkItem";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { userDetails, currentUser, logout } = useAuth();
  const { theme } = useTheme();

  const navigate = useNavigate();

  const login = () => {
    navigate("/auth/login");
  };

  return (
    <div className="h-full p-2 pt-6 bg-background">
      <div className="h-full md:max-w-[1600px] mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <img
            src={theme === "dark" ? logoDark : logo}
            alt="logo"
            className="w-[100px] md:w-[140px]"
          />
        </Link>
        <div className="flex flex-row gap-6 ">
          {userDetails?.isAdmin && (
            <LinkItem to="/admin/dashboard/users" text="Admin" />
          )}
          {currentUser ? (
            <button
              onClick={logout}
              className="bg-[#f99b62] text-white text-[18px] font-semibold w-[120px] h-[45px] rounded-[40px]"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={login}
              className="bg-[#f99b62] text-white text-[18px] font-semibold w-[120px] h-[45px] rounded-[40px]"
            >
              Logout
            </button>
            // <Button onClick={login}>Login</Button>
          )}
        </div>
        {/* <div onClick={() => setOpen(true)} className="md:hidden">
          <Menu className="w-10" />
        </div> */}
        <Sheet open={open} onOpenChange={() => setOpen(false)}>
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
