import { motion } from "framer-motion";
import whitePlanovi from "../../assets/WhitePlanovi.png";

export const PlanSection = () => {
  return (
    <>
      <div className="h-[460px] sm:h-[560px] relative">
        <div className="absolute bottom-0 -left-2 z-50">
          <motion.img
            key="image"
            src={whitePlanovi}
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
          className="bg-white p-[12px] w-[230px] h-[150px] sm:w-[360px] sm:h-[200px] rounded-[20px] absolute left-[130px] top-[140px] -z-0 shadow-lg"
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
          className="bg-white w-[170px] h-[60px] rounded-[20px] absolute sm:w-[280px] sm:top-[280px] left-[130px] top-[310px] flex items-center gap-1 px-[12px] -z-0 shadow-lg"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.45, 0, 0.55, 1],
          }}
        >
          <p className="text-white">Planovi</p>
        </motion.div>
      </div>
    </>
  );
};
