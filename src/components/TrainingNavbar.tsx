import { ArrowLeftCircle, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent } from "./ui/sheet";
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { useAuth } from "@/Providers/AuthProvider";
import { Skeleton } from "./ui/skeleton";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";

export const TrainingNavbar = () => {
  const [open, setOpen] = useState(false);

  const { currentUser, logout, loading } = useAuth();

  const navigate = useNavigate();

  return (
    <div className="p-4 h-full flex justify-between items-center bg-white m-2">
      <div onClick={() => navigate("/")} className="flex flex-row items-center">
        <ArrowLeftCircle />
      </div>
      {loading ? (
        <div className="flex items-center gap-4">
          <Skeleton className="w-[150px] h-[20px] rounded-lg" />
          <Skeleton className="w-10 h-10 rounded-full" />
        </div>
      ) : (
        <>
          {currentUser ? (
            <div className="flex items-center ">
              <div>{currentUser.displayName}</div>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>
                    <img
                      className="rounded-full w-10 h-10"
                      src={currentUser.photoURL!}
                      alt="Avatar"
                    />
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem className="cursor-pointer" onClick={logout}>
                      Logout
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          ) : (
            <Link to="/auth/login">Login</Link>
          )}
        </>
      )}

      <div onClick={() => setOpen(true)} className="md:hidden">
        <Menu />
      </div>
      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <SheetContent side={"right"} className="w-full">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};
