import { motion } from "framer-motion";
import pinkPlan1 from "../../assets/PinkGrl2.png";
import { ArrowRightCircle, Check } from "lucide-react";

const Plans = () => {
  return (
    <>
      <div className="h-[460px] sm:h-[560px] relative">
        <div className="absolute bottom-0 right-[20px] z-50">
          <motion.img
            key="image"
            src={pinkPlan1}
            alt="Landing page image"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.45, 0, 0.55, 1],
            }}
            className="w-[200px] sm:w-[300px]"
          />
        </div>

        <motion.div
          className="bg-[#FF74A1] p-[12px] w-[230px] h-[150px] sm:w-[360px] sm:h-[200px] rounded-[20px] absolute right-[130px] top-[90px] -z-0 shadow-lg"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.45, 0, 0.55, 1],
          }}
        >
          <div className="max-w-[300px] text-white">
            <h2 className="font-medium text-[20px] sm:text-[28px] text-center">
              Plan 1
            </h2>
            <ul>
              <li className="w-full flex items-center">
                <Check />
                <p>Lorem ipsum dolor sit.</p>
              </li>
              <li className="w-full flex items-center">
                <Check />
                <p>Lorem ipsum dolor sit.</p>
              </li>
              <li className="w-full flex items-center">
                <Check />
                <p>Lorem ipsum dolor sit.</p>
              </li>
              <li className="w-full flex items-center">
                <Check />
                <p>Lorem ipsum dolor sit.</p>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className="bg-[#FF74A1] w-[170px] h-[60px] rounded-[20px] absolute sm:w-[280px] sm:top-[280px] left-[120px] top-[260px] flex items-center gap-1 px-[12px] -z-0 shadow-lg"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.45, 0, 0.55, 1],
          }}
        >
          <ArrowRightCircle color="white" />
          <p className="text-white text-[24px]">KUPI</p>
        </motion.div>
      </div>
    </>
  );
};

export default Plans;
