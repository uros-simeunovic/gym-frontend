import logo from "../assets/GGWhiteMainLogo.png";
import { HeroSection } from "./Components/HeroSection";
// import { SignUpSection } from "./Components/SignUpSection";
// import { PlanSection } from "./Components/PlanSection";
import { AnimatedLine } from "./Components/AnimatedLine";
import { PlanSection } from "./Components/PlanSection";
import { Footer } from "@/components/Footer";
import Plans from "./Components/Plans";

const HomePage = () => {
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
    </div>
  );
};

export default HomePage;
