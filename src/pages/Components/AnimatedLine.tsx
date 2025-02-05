import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export const AnimatedLine = ({ logo }: { logo: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });
  const scrollSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    bounce: 0,
    mass: 0.2,
    duration: 0.25,
  });

  const line = useTransform(scrollSpring, [0, 1], ["0%", "-20%"]);

  return (
    <AnimatePresence>
      <motion.div
        key="line"
        ref={ref}
        className="absolute -left-[200px] flex flex-row items-center gap-20 text-4xl w-[1000px] md:w-[2500px] h-[50px] bg-pink-600"
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
      </motion.div>
    </AnimatePresence>
  );
};
