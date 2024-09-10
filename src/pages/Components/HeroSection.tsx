import { motion } from "framer-motion";
import instagramLogo from "../../assets/instagramLogo.png";

export const HeroSection = ({ image }: { image: string }) => {
  return (
    <>
      <div className="flex flex-col items-center text-center my-8 mt-20 w-full">
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
      <div className="h-[400px] sm:h-[500px] mt-[100px] relative">
        <div className="absolute bottom-0 right-[20px]">
          <motion.img
            key="image"
            src={image}
            alt="Landing page image"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.45, 0, 0.55, 1],
            }}
            className="w-[150px] sm:w-[180px]"
          />
        </div>

        <motion.div
          className="bg-[#FF74A1] p-[12px] w-[260px] h-[160px] sm:w-[360px] sm:h-[200px] rounded-[20px] absolute top-[60px] right-[100px] -z-10 shadow-lg"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.45, 0, 0.55, 1],
          }}
        >
          <div className="max-w-[300px] text-white">
            <h2 className="font-medium text-[20px] sm:text-[28px] text-center">
              O meni
            </h2>
            <p className="font-light text-[12px] sm:text-[14px]">
              Lorem ipsum dolor sit amet consectetur, elit. Ut optio voluptatum
              reprehenderit ad ipsum corporis maxime mollitia aperiam!
              Similique, totam. Ut optio voluptatum reprehenderit ad ipsum
              corporis maxime mollitia aperiam! Similique, totam.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="bg-[#FF74A1] w-[200px] h-[60px] rounded-[20px] absolute top-[240px] sm:w-[280px] sm:top-[280px] right-[110px] -z-10 flex items-center gap-1 px-[12px] shadow-lg"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.45, 0, 0.55, 1],
          }}
        >
          <img src={instagramLogo} alt="" className="w-8" />
          <p className="text-white">@Krisstina</p>
        </motion.div>
      </div>
    </>
  );
};
