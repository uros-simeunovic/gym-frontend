import logo from "../assets/GGWhiteMainLogo.png";
import { HeroSection } from "./Components/HeroSection";
import { AnimatedLine } from "./Components/AnimatedLine";
import { PlanSection } from "./Components/PlanSection";
import { Footer } from "@/components/Footer";
import Plans from "./Components/Plans";
import { Modal } from "@/components/modals/Modal";
import { MailCheck } from "lucide-react";
import { useAuth } from "@/Providers/AuthProvider";

const HomePage = () => {
  const { userDetails } = useAuth();

  return (
    <div className="w-full overflow-hidden relative">
      <div className="px-2 md:max-w-[1600px] mx-auto">
        <HeroSection />
        <AnimatedLine logo={logo} />
      </div>
      <div className="bg-[#171717] w-full mt-[80px]">
        <div className="relative px-2">
          <PlanSection />
        </div>
      </div>
      <div className="px-2">
        <Plans />
      </div>
      <div className="h-[60px]">
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
