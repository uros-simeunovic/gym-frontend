import { motion } from "framer-motion";
import heroSectionImage from "../../assets/HeroSection.webp";

export const HeroSection = ({
  scrollToSection,
}: {
  scrollToSection: () => void;
}) => {
  return (
    <>
      <div
        className="flex flex-col items-center text-center my-8 mt-20 w-full"
        style={{ fontFamily: '"Oswald", sans-serif' }}
      >
        <div className="overflow-hidden">
          <motion.h1
            key="heading1"
            className="font-light text-[60px] sm:text-[86px] sm2:text-[100px] md:max-w-[600px] md:text-[126px] leading-none text-[#f96294]"
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
            className="font-bold text-[60px] sm:text-[86px] sm2:text-[100px] md:max-w-[600px] md:text-[126px] leading-none text-[#f96294]"
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
        <div className="overflow-hidden">
          <motion.h5
            key="small-heading"
            className="font-normal text-xl sm2:text-2xl text-[#f96294]"
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
      </div>
      <div className="h-[400px] mt-[100px] sm:mt-[150px] sm:mb-[100px] relative">
        <div className="h-full relative left-[calc(50%-200px)]">
          <motion.div
            className="bg-[#f96294] w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] rounded-full absolute left-[160px] top-[30px] sm:left-[15 0px] sm:top-[10px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.45, 0, 0.55, 1],
            }}
          />
          <motion.div
            className="bg-[#f96294] w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] rounded-full absolute left-[70px] top-[40px] sm:left-[30px] sm:top-[20px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.45, 0, 0.55, 1],
              delay: 0.5,
            }}
          />
          <motion.div
            className="bg-[#f96294] w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full absolute top-[70px] left-[100px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.45, 0, 0.55, 1],
              delay: 0.7,
            }}
          />
          <div className="absolute left-[100px] bottom-[50px] sm:-bottom-[20px] w-[280px] sm:w-[350px] overflow-hidden rounded-b-full">
            <motion.img
              src={heroSectionImage}
              className="w-[240px] sm:w-[360px] ml-auto mr-8 sm:mr-0"
              alt="Landing page image"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                ease: [0.45, 0, 0.55, 1],
                delay: 1,
              }}
            />
          </div>
          <motion.div
            className="cursor-pointer absolute left-[40px] bottom-[100px] sm:left-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.45, 0, 0.55, 1],
              delay: 1,
            }}
          >
            <button
              onClick={scrollToSection}
              className="bg-[#f99b62] text-white text-[18px] font-semibold w-[140px] h-[55px] sm:w-[180px] sm:h-[65px] rounded-[40px]"
            >
              Saznaj vise
            </button>
          </motion.div>
        </div>
        {/* <div className="absolute bottom-0 right-[20px]">
          <motion.img
            key="image"
            src={pinkOMeni}
            alt="Landing page image"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.45, 0, 0.55, 1],
            }}
            className="w-[150px] sm:w-[180px] sm2:w-[190px]"
          />
        </div> */}

        {/* <motion.div
          className="bg-[#FF74A1] p-[12px] w-[260px] h-[160px] sm:w-[360px] sm:h-[200px] rounded-[20px] absolute top-[60px] right-[100px] -z-10 shadow-lg"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.45, 0, 0.55, 1],
          }}
        >
          <div className="text-white">
            <h2 className="font-semibold text-[24px] sm:text-[28px] text-center">
              O Meni
            </h2>
            <p className="font-medium text-[16px] sm:text-[15px] text-left">
              Lorem ipsum dolor sit amet consectetur, elit. Ut optio voluptatum
              reprehenderit ad ipsum corporis.
            </p>
          </div>
        </motion.div> */}
        {/* <motion.div
          className="bg-[#FF74A1] w-[200px] h-[60px] font-normal text-[16px] rounded-[20px] absolute top-[240px] sm:w-[280px] sm:top-[280px] right-[110px] -z-10 flex items-center gap-3 px-[12px] shadow-lg"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.45, 0, 0.55, 1],
          }}
        >
          <img src={instagramLogo} alt="instagram-logo" className="w-8" />
          <p className="text-white">@Krisstina</p>
        </motion.div> */}
      </div>
    </>
  );
};
