import landingPageImage from "../assets/PinkOMeni.png";
import logo from "../assets/GGWhiteMainLogo.png";
import { HeroSection } from "./Components/HeroSection";
import { SignUpSection } from "./Components/SignUpSection";
import { PlanSection } from "./Components/PlanSection";
import { AnimatedLine } from "./Components/AnimatedLine";
import { SignUpSectionBlack } from "./Components/SignUpSectionBlack";
import { Footer } from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="px-2 md:max-w-[1600px] mx-auto">
        <HeroSection image={landingPageImage} />
      </div>
      <div className="relative w-full">
        <AnimatedLine logo={logo} />
      </div>
      <div className="p-2 md:max-w-[1600px] mx-auto">
        <SignUpSection />
        <PlanSection />
      </div>
      <div className="relative p-2 bg-[#171717] w-full mt-32 py-40">
        <SignUpSectionBlack />
      </div>
      <div className="p-2 bg-[#171717] w-full pt-32 ">
        <Footer logo={logo} />
      </div>
    </div>
  );
};

export default HomePage;
