import { motion } from "framer-motion";
import pinkPlan1 from "../../assets/PinkGrl2.png";
import whitePlan2 from "../../assets/WhiteGirl1.png";
import { ArrowRightCircle, Check } from "lucide-react";

const Plans = () => {
  return (
    <>
      <div className="h-[460px] sm:h-[800px] relative">
        <div className="absolute bottom-0 right-0 z-50">
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
          className="bg-[#FF74A1] p-2 w-[250px] h-[150px] sm:w-[360px] sm:h-[200px] rounded-[20px] absolute right-[100px] top-[90px] -z-0 shadow-lg"
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
          className="bg-[#FF74A1] w-[170px] h-[50px] rounded-[20px] absolute sm:w-[280px] sm:top-[280px] right-[120px] top-[260px] flex items-center gap-1 px-[12px] -z-0 shadow-lg"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.45, 0, 0.55, 1],
          }}
        >
          <ArrowRightCircle color="white" />
          <p className="text-white text-[24px] pb-1">Kupi</p>
        </motion.div>
      </div>
      {/* ========================== */}
      <div className="h-[560px] sm:h-[900px] relative">
        <div className="absolute bottom-0 z-50">
          <motion.img
            key="image"
            src={whitePlan2}
            alt="Landing page image"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.45, 0, 0.55, 1],
            }}
            className="w-[220px] sm:w-[360px]"
          />
        </div>

        <motion.div
          className="bg-white px-6 py-2 w-[260px] h-[150px] sm:w-[320px] sm:h-[240px] md:w-[500px] md:h-[300px] rounded-[20px] absolute left-[80px] top-[140px] sm:left-[260px] sm:top-[260px] -z-0 drop-shadow-xl flex justify-end"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.45, 0, 0.55, 1],
          }}
        >
          <div className="max-w-[300px]">
            <h2 className="font-medium text-[20px] sm:text-[28px] text-center">
              Plan 2
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
          className="bg-white w-[170px] h-[50px] rounded-[20px] absolute sm:w-[260px] left-[100px] top-[310px] sm:left-[300px] sm:top-[540px] flex items-center justify-end gap-1 px-[12px] -z-0 shadow-lg hover:w-[200px] sm:hover:w-[270px] transition-all cursor-pointer"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.45, 0, 0.55, 1],
          }}
        >
          <p className="text-[24px] leading-6 pb-1">Kupi</p>
          <ArrowRightCircle size={30} />
        </motion.div>
      </div>
    </>
  );
};

export default Plans;
