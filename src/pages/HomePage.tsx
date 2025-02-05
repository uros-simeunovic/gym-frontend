import logo from "../assets/GGWhiteMainLogo.png";
import { HeroSection } from "./Components/HeroSection";
import { AnimatedLine } from "./Components/AnimatedLine";
import { Footer } from "@/components/Footer";
import Plans from "./Components/Plans";
import { useRef } from "react";
import AboutMe from "./Components/AboutMe";
import AskQuestion from "./Components/AskQuestion";
import { Faq } from "@/components/Faq";

const HomePage = () => {
  const aboutMeSectionRef = useRef<HTMLDivElement | null>(null);
  const contactFormSectionRef = useRef<HTMLDivElement | null>(null);
  const plansSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToAboutMeSection = () => {
    if (aboutMeSectionRef.current) {
      aboutMeSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContactFormSection = () => {
    if (contactFormSectionRef.current) {
      contactFormSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPlansSection = () => {
    if (plansSectionRef.current) {
      plansSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full overflow-hidden relative">
      <div className="px-2 md:max-w-[1600px] mx-auto">
        <HeroSection scrollToSection={scrollToAboutMeSection} />
        <AnimatedLine logo={logo} />
      </div>
      <div ref={aboutMeSectionRef}>
        <AboutMe scrollToSection={scrollToContactFormSection} />
      </div>
      <div className="max-w-[1000px] mx-auto space-y-[300px]">
        <div ref={plansSectionRef}>
          <Plans />
        </div>
        <Faq />
        <div ref={contactFormSectionRef}>
          <AskQuestion />
        </div>
      </div>
      <div className="h-[50px]">
        <AnimatedLine logo={logo} />
      </div>
      <div className="p-2 bg-[#171717] w-full">
        <Footer
          logo={logo}
          scrollToAboutMe={scrollToAboutMeSection}
          scrollToPlans={scrollToPlansSection}
        />
      </div>
    </div>
  );
};

export default HomePage;
