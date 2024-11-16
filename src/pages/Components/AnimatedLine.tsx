import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export const AnimatedLine = ({ logo }: { logo: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });

  const line = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <AnimatePresence>
      <motion.div
        key="line"
        ref={ref}
        className="absolute flex flex-row items-center gap-20 text-4xl w-[1000px] md:w-[2500px] h-[50px] bg-pink-600"
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
