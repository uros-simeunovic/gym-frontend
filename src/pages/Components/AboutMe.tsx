// import img from "../../assets/PinkGrl2.png";
import { useScroll, useTransform } from "framer-motion";
import pinkOMeni from "../../assets/PinkOMeniCompressed.png";
import { useRef } from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const textSectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: textSectionRef,
    offset: ["start start", "end start"],
  });
  console.log(scrollYProgress);
  const img = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const text = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div className="h-[800px] mt-[50px] bg-radial">
      <div
        ref={textSectionRef}
        className="h-[400px] relative flex justify-center pt-10"
      >
        <div className="absolute">
          <motion.h1
            className="text-[100px] font-bold text-white"
            style={{ y: text, opacity: opacity }}
          >
            O Meni
          </motion.h1>
        </div>
        <motion.img
          src={pinkOMeni}
          alt="about-me-image"
          className="h-full object-cover sticky top-0"
          style={{
            translateY: img,
          }}
        />
      </div>
      <div className="rounded-t-[60px] absolute w-full h-[500px] bg-white px-8 pt-10 z-0">
        <h2 className="text-2xl font-bold text-pink-500">Kristina Mitrović</h2>
        <hr className="my-2 border-pink-300" />
        <p className="text-pink-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
        <hr className="my-2 border-pink-300" />
      </div>
    </div>
  );
};

export default AboutMe;
