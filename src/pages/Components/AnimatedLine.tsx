import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import logo from "@/assets/GGWhiteMainLogo.png";

export const AnimatedLine = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scrollSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    bounce: 0,
    mass: 0.2,
    duration: 0.25,
  });

  const line = useTransform(scrollSpring, [0, 1], ["0%", "-10%"]);

  return (
    <AnimatePresence>
      <motion.div
        key="line"
        ref={ref}
        className="absolute -left-[600px] flex flex-row items-center gap-20 text-4xl w-[3000px] md:w-[3500px] h-[50px] bg-[#f96294]"
        style={{
          translateX: line,
        }}
      >
        <img src={logo} alt="" className="w-16" />
        <img src={logo} alt="" className="w-16" />
        <img src={logo} alt="" className="w-16" />
        <img src={logo} alt="" className="w-16" />
        <img src={logo} alt="" className="w-16" />
        <img src={logo} alt="" className="w-16" />
        <img src={logo} alt="" className="w-16" />
        <img src={logo} alt="" className="w-16" />
        <img src={logo} alt="" className="w-16" />
        <img src={logo} alt="" className="w-16" />
        <img src={logo} alt="" className="w-16" />
        <img src={logo} alt="" className="w-16" />
        <img src={logo} alt="" className="w-16" />
        <img src={logo} alt="" className="w-16" />
        <img src={logo} alt="" className="w-16" />
        <img src={logo} alt="" className="w-16" />
        <img src={logo} alt="" className="w-16" />
        <img src={logo} alt="" className="w-16" />
        <img src={logo} alt="" className="w-16" />
        <img src={logo} alt="" className="w-16" />
        <img src={logo} alt="" className="w-16" />
      </motion.div>
    </AnimatePresence>
  );
};
