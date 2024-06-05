import landingPageImage from "../assets/landingPage.jpg";
import logo from "../assets/logoGG1.png";
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
        <PlanSection image={landingPageImage} />
      </div>
      <div className="relative p-2 bg-[#171717] w-full mt-32 py-40">
        <AnimatedLine logo={logo} />
        <SignUpSectionBlack />
        {/* <div className="mt-44 md:max-w-[1600px] mx-auto">
          <h3 className="text-4xl text-white md:text-6xl font-semibold">
            Česta pitanja
          </h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b text-white">
              <AccordionTrigger className="h-[100px] text-[36px]">
                Pitanje 1
              </AccordionTrigger>
              <AccordionContent className="text-xl font-light">
                Odgovor na pitanje broj 1.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b text-white">
              <AccordionTrigger className="h-[100px] text-[36px]">
                Pitanje 2
              </AccordionTrigger>
              <AccordionContent className="text-xl font-light">
                Odgovor na pitanje broj 1.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b text-white">
              <AccordionTrigger className="h-[100px] text-[36px]">
                Pitanje 3
              </AccordionTrigger>
              <AccordionContent className="text-xl font-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
                unde exercitationem mollitia autem iusto consectetur fuga
                cupiditate quisquam error ea!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div> */}
      </div>

      {/* Footer */}
      <div className="p-2 bg-[#171717] w-full pt-32 ">
        <Footer logo={logo} />
      </div>
    </div>
  );
};

export default HomePage;
