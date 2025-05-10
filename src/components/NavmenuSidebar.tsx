import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logoGG1.png";
import { useMainSidebarMobile } from "@/hooks/useMainSidebarMobile";
import { useAuth } from "@/Providers/AuthProvider";
import { Button } from "./ui/button";

export const NavmenuSidebar = () => {
  const { currentUser, logout, userDetails } = useAuth();

  const { onClose } = useMainSidebarMobile();

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
    onClose();
  };

  const scrollToSection = (sectionId: string) => {
    onClose();
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const login = () => {
    navigate("/auth/login");
  };

  return (
    <div className="h-full flex flex-col overflow-y-auto p-4">
      <Link to={"/"} className="w-[100px] md:w-[140px]">
        <img src={logo} alt="grlgainz-logo" />
      </Link>
      <div className="space-y-20">
        <div className="mt-24 text-5xl font-light flex flex-col items-center space-y-12">
          <div onClick={onClick} className="cursor-pointer">
            Početna
          </div>
          <div
            onClick={() => scrollToSection("plans")}
            className="cursor-pointer"
          >
            Planovi
          </div>
          <div
            onClick={() => scrollToSection("about-me")}
            className="cursor-pointer"
          >
            O meni
          </div>
        </div>
        <div className="text-center">
          {currentUser ? (
            <div className="flex flex-col items-center gap-4">
              <Button
                onClick={logout}
                className="bg-[#f99b62] hover:bg-[#c56930] text-white text-[30px] font-semibold w-[200px] h-[70px] rounded-[40px]"
              >
                Log out
              </Button>
              {userDetails?.isAdmin && (
                <Button
                  onClick={() => {
                    navigate("/admin/dashboard/users");
                    onClose();
                  }}
                  className="text-white text-[30px] font-semibold w-[200px] h-[70px] rounded-[40px]"
                >
                  Dashboard
                </Button>
              )}
            </div>
          ) : (
            <Button
              onClick={login}
              className="bg-[#f99b62] text-white text-[30px] font-semibold w-[200px] h-[70px] rounded-[40px]"
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
