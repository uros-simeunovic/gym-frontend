import instagramLogo from "@/assets/instagram.png";
import logo from "@/assets/GGWhiteMainLogo.png";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Footer = ({
  scrollToAboutMe,
  scrollToPlans,
}: {
  scrollToAboutMe: () => void;
  scrollToPlans: () => void;
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f96294] text-white py-12 md:py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <img
              onClick={scrollToTop}
              src={logo}
              alt="logo"
              className="w-[100px] md:w-[140px] cursor-pointer"
            />
          </div>
          <nav className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6 md:mb-0 text-center md:text-left">
            <div onClick={scrollToTop} className="cursor-pointer text-xl">
              <Button
                variant="link"
                className="font-light text-lg p-0 text-white"
              >
                Pocetna
              </Button>
            </div>
            <div onClick={scrollToPlans}>
              <Button
                variant="link"
                className="font-light text-lg p-0 text-white"
              >
                Planovi
              </Button>
            </div>
            <div onClick={scrollToAboutMe}>
              <Button
                variant="link"
                className="font-light text-lg p-0 text-white"
              >
                O meni
              </Button>
            </div>
          </nav>
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end gap-3">
              <Link to={"https://www.instagram.com/_kris_tinna/"} className="flex flex-row items-center gap-2 cursor-pointer">
                <img src={instagramLogo} alt="instagram-logo" className="w-8" />
                <p className="text-lg">@_kriss_tina</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-sm text-center md:text-left border-t border-white/20 pt-4">
          2025 © GrlGainz
        </div>
      </div>
    </footer>
  );
};
