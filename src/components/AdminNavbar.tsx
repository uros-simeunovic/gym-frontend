import { ArrowLeft, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle } from "./ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { useAuth } from "@/Providers/AuthProvider";
import { Button } from "./ui/button";
import { LinkItem } from "./LinkItem";
import { ThemeToggle } from "./ThemeToggle";

export const AdminNavbar = () => {
  const { userDetails, logout, currentUser } = useAuth();

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="p-4 h-full flex justify-between items-center">
      <div
        onClick={() => navigate(-1)}
        className="flex flex-row items-center cursor-pointer hover:scale-105"
      >
        <ArrowLeft className="w-8 h-8" />
      </div>
      <div className="ml-10 h-full w-full hidden md:flex justify-between items-center m-2">
        <div className="flex flex-row items-center space-x-6">
          <LinkItem to="/" text="Pocetna" />
          <LinkItem to="/admin/dashboard/users" text="Korisnici" />
          <LinkItem to="/admin/dashboard/plans" text="Planovi" />
        </div>
        {currentUser ? (
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-row gap-4 items-center ">
              <h1>{userDetails?.name}</h1>
              <img
                src={userDetails?.picture}
                alt="User Avatar"
                className="rounded-full w-14"
              />
            </div>
            <Button onClick={logout}>Logout</Button>
            <ThemeToggle />
          </div>
        ) : (
          <Link to="/auth/login">
            <Button>Login</Button>
          </Link>
        )}
      </div>

      <div onClick={() => setOpen(true)} className="md:hidden">
        <Menu className="cursor-pointer" />
      </div>
      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <SheetTitle hidden>Menu</SheetTitle>
        <SheetContent side={"right"} className="w-full">
          <AdminSidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};
