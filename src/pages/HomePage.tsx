import pinkOMeni from "../assets/PinkOMeni.png";
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
        <HeroSection image={pinkOMeni} />
      </div>
      <div className="relative w-full h-[80px]">
        <AnimatedLine logo={logo} />
      </div>
      <div className="relative px-2 bg-[#171717] md:max-w-[1600px]">
        <PlanSection />
      </div>
      <div className="px-2 md:max-w-[1600px]">
        <Plans />
      </div>
      <div className="p-2 bg-[#171717] w-full pt-32 ">
        <Footer logo={logo} />
      </div>
    </div>
  );
};

export default HomePage;
