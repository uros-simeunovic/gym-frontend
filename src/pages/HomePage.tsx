import landingPageImage from "../assets/landingPage.jpg";
import logo from "../assets/logoGGWhite1.png";
import { HeroSection } from "./Components/HeroSection";
import { SignUpSection } from "./Components/SignUpSection";
import { PlanSection } from "./Components/PlanSection";
import { AnimatedLine } from "./Components/AnimatedLine";
import { SignUpSectionBlack } from "./Components/SignUpSectionBlack";
import { Footer } from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="p-2 md:max-w-[1600px] mx-auto">
        <HeroSection image={landingPageImage} />
        <SignUpSection />
        <PlanSection />
      </div>
      <div className="relative p-2 bg-[#171717] w-full mt-32 py-40">
        <AnimatedLine logo={logo} />
        <SignUpSectionBlack />
      </div>
      <div className="p-2 bg-[#171717] w-full pt-32 ">
        <Footer logo={logo} />
      </div>
    </div>
  );
};

export default HomePage;
