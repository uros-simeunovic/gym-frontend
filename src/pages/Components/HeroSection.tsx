import { motion } from "framer-motion";

export const HeroSection = ({ image }: { image: string }) => {
  return (
    <>
      <div className="flex flex-col items-center text-center my-8 mt-24 w-full">
        <div className="overflow-hidden">
          <motion.h5
            key="small-heading"
            className="font-normal text-xl"
            initial={{
              translateY: "-100px",
            }}
            animate={{
              translateY: "0px",
            }}
            transition={{
              duration: 0.7,
              ease: [0.45, 0, 0.55, 1],
              delay: 0.3,
            }}
          >
            ACHIEVE YOUR FITNESS GOALS
          </motion.h5>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            key="heading1"
            className="font-bold text-[60px] sm:text-[86px] md:max-w-[600px] md:text-[126px] leading-none"
            initial={{
              translateY: "200px",
            }}
            animate={{
              translateY: "0px",
            }}
            transition={{
              duration: 0.7,
              ease: [0.45, 0, 0.55, 1],
              delay: 0.1,
            }}
          >
            FIND YOUR
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            key="heading2"
            className="font-bold text-[60px] sm:text-[86px] md:max-w-[600px] md:text-[126px] leading-none"
            initial={{
              translateY: "200px",
            }}
            animate={{
              translateY: "0px",
            }}
            transition={{
              duration: 0.7,
              ease: [0.45, 0, 0.55, 1],
            }}
          >
            STRENGTH
          </motion.h1>
        </div>
      </div>
      <div className="mx-auto mt-[100px]">
        <motion.img
          key="image"
          src={image}
          alt="Landing page image"
          className="mx-auto object-cover w-full h-[800px] rounded-[75px]"
        />
      </div>
    </>
  );
};
