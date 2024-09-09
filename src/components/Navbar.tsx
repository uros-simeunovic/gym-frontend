import { Link } from "react-router-dom";
import logo from "../assets/logoGG1.png";
import logoDark from "../assets/LogoGGWhite.svg";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "./ui/sheet";
import { NavmenuSidebar } from "./NavmenuSidebar";
import { useState } from "react";
import { useAuth } from "@/Providers/AuthProvider";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/Providers/ThemeProvider";
import { LinkItem } from "./LinkItem";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { userDetails, currentUser, logout } = useAuth();
  const { theme } = useTheme();

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
        <div className="hidden md:flex flex-row gap-6 ">
          {/* <LinkItem to="/plans" text="Planovi" /> */}
          {userDetails?.isAdmin && (
            <LinkItem to="/admin/dashboard/users" text="Admin" />
          )}
          {currentUser && <Button onClick={logout}>Logout</Button>}
          <ThemeToggle />
        </div>
        <div onClick={() => setOpen(true)} className="md:hidden">
          <Menu className="w-10" />
        </div>
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
