import logo from "../assets/GGWhiteMainLogo.png";
import { HeroSection } from "./Components/HeroSection";
import { AnimatedLine } from "./Components/AnimatedLine";
import { PlanSection } from "./Components/PlanSection";
import { Footer } from "@/components/Footer";
import Plans from "./Components/Plans";
import { Modal } from "@/components/modals/Modal";
import { MailCheck } from "lucide-react";
import { useAuth } from "@/Providers/AuthProvider";
import { useRef } from "react";
import AboutMe from "./Components/AboutMe";

const HomePage = () => {
  const { userDetails } = useAuth();

  const aboutMeSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToAboutMeSection = () => {
    if (aboutMeSectionRef.current) {
      aboutMeSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full overflow-hidden relative">
      <div className="px-2 md:max-w-[1600px] mx-auto">
        dasdasdasdasdas
        <HeroSection scrollToSection={scrollToAboutMeSection} />
        <AnimatedLine logo={logo} />
      </div>
      <AboutMe />
      <div className="w-full px-2">
        <PlanSection />
        <Plans />
      </div>
      <div className="h-[50px]">
        <AnimatedLine logo={logo} />
      </div>

      <div className="p-2 bg-[#171717] w-full">
        <Footer logo={logo} />
      </div>
      <Modal title="Uputstvo za placanje je poslato na email:">
        <div className="flex flex-col items-center">
          <div>{userDetails?.email}</div>
          <div className="w-full flex flex-col items-center mt-10">
            <MailCheck size={100} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HomePage;
