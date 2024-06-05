import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Footer = ({ logo }: { logo: string }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="md:max-w-[1600px] mt-4 mx-auto flex flex-row items-center justify-between">
      <div onClick={scrollToTop} className="cursor-pointer">
        <img src={logo} alt="logo" className="w-[120px] md:w-[160px]" />
      </div>
      <Link to="/trainings/trening1">
        <Button>Trainings</Button>
      </Link>
      <Link to="/admin/dashboard">
        <Button>dashboard</Button>
      </Link>
    </footer>
  );
};
