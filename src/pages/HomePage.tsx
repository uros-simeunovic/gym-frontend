import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import landingPageImage from "../assets/landingPage.jpg";
import silhouette from "../assets/silueta.png";
import logo from "../assets/logoGG1.png";
import { ChevronRight, Play } from "lucide-react";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const HomePage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  const line = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div className="w-full overflow-hidden">
      <div className="p-2 md:max-w-[1600px] mx-auto">
        <div className="flex flex-col items-center text-center my-8 mt-24 w-full">
          <h5 className="font-normal text-xl">ACHIEVE YOUR FITNESS GOALS</h5>
          <h1 className="font-bold text-[60px] sm:text-[86px] md:max-w-[600px] md:text-[126px] leading-none">
            FIND YOUR STRENGTH
          </h1>
        </div>
        <div className="mx-auto mt-[100px]">
          <img
            src={landingPageImage}
            alt="Landing page image"
            className="mx-auto object-cover w-full h-[800px] rounded-[75px]"
          />
        </div>
        <div className="flex flex-col items-center text-center space-y-12 my-52">
          <img
            src={silhouette}
            alt="Girl workout silhouette"
            className="w-12 md:w-16"
          />
          <h3 className="text-[40px] leading-[44px] md:text-7xl font-semibold max-w-[800px]">
            FITNESS SHOULD BE ACCESIBLE TO EVERYONE
          </h3>
          <p className="text-xl font-normal max-w-[620px]">
            Whether you’re a seasoned athlete or just starting out, we have a
            variety of equipment and classes to suit your needs. Our cardio
            machines, weight lifting equipment, and functional training areas
            provide a comprehensive workout experience.
          </p>
          <Link to={"/auth/login"}>
            <Button
              variant="outline"
              className="text-lg border-2 w-[200px] rounded-3xl hover:bg-pink-500 hover:text-white border-pink-500"
            >
              Prijavi se
            </Button>
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between mb-6 mx-6">
            <h3 className="text-4xl md:text-6xl font-semibold">Trening</h3>
            <Link
              to={"/trainings/trening1"}
              className="relative flex flex-row items-center gap-2 cursor-pointer before:absolute before:rounded-xl before:bottom-2 before:transition-all before:duration-300 before:w-0 before:h-1 hover:before:w-full before:bg-pink-500"
            >
              <h3 className="text-2xl font-light leading-6">Pogledaj sve</h3>
              <div className="flex items-center justify-center w-7 h-7 mt-1 bg-pink-500 rounded-full">
                <ChevronRight />
              </div>
            </Link>
          </div>
          <div className="relative">
            <img
              src={landingPageImage}
              alt=""
              className="mx-auto object-cover w-full h-[300px] md:h-[800px] hover:zoom-in-50 rounded-[50px] md:rounded-[75px]"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 rounded-[50px] md:rounded-[75px] bg-black/20" />
            <Play className="absolute z-10 top-1/2 left-1/2 text-pink-500" />
          </div>
        </div>
      </div>

      <div className="relative p-2 bg-[#171717] w-full mt-32 py-40">
        <motion.div
          ref={ref}
          className="absolute top-8 flex flex-row items-end gap-20 text-4xl w-[1000px] md:w-[2500px] h-[80px] bg-pink-600"
          style={{
            translateX: line,
          }}
        >
          <img src={logo} alt="" className="w-28" />
          <img src={logo} alt="" className="w-28" />
          <img src={logo} alt="" className="w-28" />
          <img src={logo} alt="" className="w-28" />
          <img src={logo} alt="" className="w-28" />
          <img src={logo} alt="" className="w-28" />
          <img src={logo} alt="" className="w-28" />
          <img src={logo} alt="" className="w-28" />
          <img src={logo} alt="" className="w-28" />
          <img src={logo} alt="" className="w-28" />
        </motion.div>
        {/* Dark section */}
        <div className="flex flex-col items-center text-center space-y-12 md:max-w-[1600px] mx-auto">
          <img
            src={silhouette}
            alt="Girl workout silhouette"
            className="w-12 md:w-16"
          />
          <h3 className="text-[40px] leading-[44px] md:text-9xl font-semibold text-white max-w-[800px]">
            YOUR BODY IS YOUR TEMPLE
          </h3>
          <p className="text-xl text-white font-normal max-w-[620px]">
            Whether you’re a seasoned athlete or just starting out, we have a
            variety of equipment and classes to suit your needs. Our cardio
            machines, weight lifting equipment, and functional training areas
            provide a comprehensive workout experience.
          </p>
          <Link to={"/auth/login"}>
            <Button
              variant="outline"
              className="text-lg text-white border-2 w-[200px] rounded-3xl bg-transparent hover:bg-pink-500 hover:text-white border-pink-500"
            >
              Prijavi se
            </Button>
          </Link>
        </div>
        {/* Faq section */}
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
        <footer className="md:max-w-[1600px] mt-4 mx-auto ">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-[120px] md:w-[160px]" />
          </Link>
          <Link to="/trainings/trening1">
            <Button>Trainings</Button>
          </Link>
          <Link to="/admin/dashboard">
            <Button>dashboard</Button>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
