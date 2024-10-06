import { motion } from "framer-motion";
import whitePlanovi from "../../assets/WhitePlanovi.png";

export const PlanSection = () => {
  return (
    <>
      <div className="h-[460px] sm:h-[900px] relative">
        <div className="absolute bottom-0 -left-8 z-50">
          <motion.img
            key="image"
            src={whitePlanovi}
            alt="Landing page image"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              ease: [0.45, 0, 0.55, 1],
            }}
            className="w-[200px] sm:w-[360px]"
          />
        </div>

        <motion.div
          className="bg-white px-6 py-2 w-[260px] h-[150px] sm:w-[320px] sm:h-[240px] md:w-[500px] md:h-[300px] rounded-[20px] absolute left-[110px] top-[120px] sm:left-[260px] sm:top-[260px] -z-0 shadow-lg flex justify-end"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            ease: [0.45, 0, 0.55, 1],
          }}
        >
          <div className="flex flex-col items-center">
            <h2 className="font-medium text-[20px] sm:text-[28px]">Planovi</h2>
            <p className="font-normal text-[13px] sm:text-[15px] text-center">
              Lorem ipsum dolor sit amet consectetur, elit. Ut optio voluptatum
              reprehenderit ad ipsum corporis maxime mollitia aperiam!
              Similique, totam.
            </p>
          </div>
        </motion.div>
        {/* <motion.div
          className="bg-white w-[170px] h-[50px] rounded-[20px] absolute sm:w-[260px] left-[100px] top-[290px] sm:left-[300px] sm:top-[540px] flex items-center justify-end gap-1 px-[12px] -z-0 shadow-lg cursor-pointer"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            ease: [0.45, 0, 0.55, 1],
          }}
        >
          <p className="text-[24px] leading-6 pb-1">Planovi</p>
          <ArrowRightCircle size={30} />
        </motion.div> */}
      </div>
    </>
  );
};
