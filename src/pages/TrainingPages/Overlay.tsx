import { cn, useScreenSize } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Overlay = () => {
  const [show, setShow] = useState(true);
  const { width } = useScreenSize();
  const location = useLocation();
  const navigate = useNavigate();

  const onClick = async (choice: number) => {
    switch (choice) {
      case 1:
        navigate("/trainings/1");
        break;
      case 2:
        navigate("/trainings/2");
        break;

      default:
        navigate("/");
        break;
    }
    setShow(false);
  };

  return (
    <AnimatePresence>
      {location.pathname === "/trainings" && show && (
        <div
          className={
            show &&
            "before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-white before:-z-50"
          }
        >
          <motion.div
            key="left-side"
            className={cn(
              "w-[50%] h-full bg-[#171717] flex flex-col items-center justify-center cursor-pointer absolute top-0 left-0 bottom-0 z-50 space-y-8",
              width > 800 ? "w-[50%] h-full" : "w-full h-[50%]"
            )}
            onClick={() => onClick(1)}
            initial={{
              opacity: 0.8,
              translateX: "-700px",
            }}
            animate={{
              opacity: 1,
              translateX: "0px",
            }}
            exit={{
              translateX: "-700px",
            }}
            transition={{
              duration: 1,
              ease: [0.45, 0, 0.55, 1],
              // ease: "easeInOut",
            }}
          >
            <h1 className="text-6xl text-white">PLAN 3 DANA</h1>
            <div className="text-xl font-thin text-pink-400 rounded-xl border-2 border-pink-400 px-6 py-2">
              Otvori...
            </div>
          </motion.div>
          <motion.div
            key="right-side"
            className={cn(
              "flex flex-col items-center justify-center bg-pink-400 cursor-pointer absolute bottom-0 right-0 z-50 space-y-8",
              width > 800 ? "w-[50%] h-full" : "w-full h-[50%]"
            )}
            onClick={() => onClick(2)}
            initial={{
              opacity: 0.8,
              translateX: "700px",
            }}
            animate={{
              opacity: 1,
              translateX: "0px",
            }}
            exit={{
              translateX: "700px",
            }}
            transition={{
              duration: 1,
              ease: [0.45, 0, 0.55, 1],
              // ease: "easeInOut",
            }}
          >
            <h1 className="text-6xl text-[#171717]">PLAN 4 DANA</h1>
            <div className="text-xl font-thin text-[#171717] rounded-xl border-2 border-[#171717] px-6 py-2">
              Otvori...
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
