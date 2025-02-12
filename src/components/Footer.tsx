import instagramLogo from "../assets/instagram.png";
import { Button } from "./ui/button";
import logo from "../assets/GGWhiteMainLogo.png";

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
    <footer className="md:max-w-[1600px] mt-4 mx-auto py-10 flex flex-col gap-10 md:flex-row items-center justify-between">
      <div className="flex flex-row justify-between max-w-[600px] w-full">
        <div className="flex flex-col gap-6">
          <img
            onClick={scrollToTop}
            src={logo}
            alt="logo"
            className="w-[100px] md:w-[140px] cursor-pointer"
          />
          <div className="flex flex-row gap-2 text-white items-center cursor-pointer hover:scale-[1.02] transition-all">
            <img src={instagramLogo} className="w-8 h-8" alt="social-link" />
            <p>@_kris_tinna</p>
          </div>
        </div>
        <div className="flex flex-col font-light text-white gap-4">
          <h1 className="text-4xl">Linkovi</h1>
          <div className="flex flex-col ">
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
          </div>
        </div>
      </div>
    </footer>
  );
};
