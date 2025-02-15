import { HeroSection } from "./Components/HeroSection";
import { AnimatedLine } from "./Components/AnimatedLine";
import { Faq } from "@/components/Faq";
import { Plans } from "@/components/Plans";
import { Footer } from "@/components/Footer";
import { useRef } from "react";
import AboutMe from "./Components/AboutMe";
import AskQuestion from "./Components/AskQuestion";

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
        <AnimatedLine />
      </div>
      <div ref={aboutMeSectionRef}>
        <AboutMe scrollToSection={scrollToContactFormSection} />
      </div>
      <div className="max-w-[1000px] mx-auto">
        <div ref={plansSectionRef}>
          <Plans />
        </div>
        <div className="h-[50px] my-20">
          <AnimatedLine />
        </div>
        <Faq />
        <div ref={contactFormSectionRef} className="my-24">
          <AskQuestion />
        </div>
      </div>
      <div className="h-[50px]">
        <AnimatedLine />
      </div>
      <div className="p-2 bg-[#171717] w-full">
        <Footer
          scrollToAboutMe={scrollToAboutMeSection}
          scrollToPlans={scrollToPlansSection}
        />
      </div>
    </div>
  );
};

export default HomePage;
